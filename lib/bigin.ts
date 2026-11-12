import type { Database } from "@/lib/supabase/database.types";

/**
 * Bigin by Zoho — the Special Minds CRM.
 *
 * The IBT part of specialminds.ae's lib/bigin.ts, copied so an academy IBT
 * checkout reaches the CRM the same way one on specialminds.ae does. Inert
 * until BIGIN_CLIENT_ID, BIGIN_CLIENT_SECRET and BIGIN_REFRESH_TOKEN are set:
 * every sync then returns "skipped", and the checkout carries on regardless.
 *
 * Three things about Bigin drove the design and are worth knowing before
 * editing this:
 *
 * 1. The auth header is `Zoho-oauthtoken`, NOT `Bearer`. Zoho's own refresh
 *    page describes it as a bearer token, which is wrong for every /bigin/v2
 *    call — the request just 401s.
 *
 * 2. Access tokens live one hour and are minted from a long-lived refresh
 *    token, so there is a token cache below. On a cold lambda the first call
 *    pays for a refresh; on a warm one it does not.
 *
 * 3. Zoho is multi-datacentre and the domain is NOT interchangeable — a token
 *    issued in the EU does not work against .com. BIGIN_REGION selects both the
 *    accounts host and the API host together so they cannot be mismatched.
 *
 * Field names: only stock Bigin fields are written (Last_Name, First_Name,
 * Email, Phone, Description). Custom fields have to exist in the org before
 * they can be written to, and inventing API names for fields that may not be
 * there fails the whole record rather than that one value. Everything we know
 * that has nowhere stock to live is written as readable text into Description.
 * See CUSTOM FIELDS at the foot of this file for how to upgrade that.
 */

export type SyncResult = {
  ok: boolean;
  /** Set when the sync did not run at all — missing credentials, not a failure. */
  skipped?: string;
  contactId?: string | null;
  errors: string[];
};

/* ------------------------------------------------------------------ */
/* Configuration                                                       */
/* ------------------------------------------------------------------ */

// The datacentre the Bigin org lives in. Getting this wrong is the single most
// likely cause of a working client that 401s on every call, so it is explicit
// rather than inferred.
const REGION = (process.env.BIGIN_REGION || "com").trim();

const ACCOUNTS_HOST: Record<string, string> = {
  com: "https://accounts.zoho.com",
  eu: "https://accounts.zoho.eu",
  in: "https://accounts.zoho.in",
  "com.au": "https://accounts.zoho.com.au",
  jp: "https://accounts.zoho.jp",
  "com.cn": "https://accounts.zoho.com.cn",
  ca: "https://accounts.zohocloud.ca",
  sa: "https://accounts.zoho.sa",
};

const API_HOST: Record<string, string> = {
  com: "https://www.zohoapis.com",
  eu: "https://www.zohoapis.eu",
  in: "https://www.zohoapis.in",
  "com.au": "https://www.zohoapis.com.au",
  jp: "https://www.zohoapis.jp",
  "com.cn": "https://www.zohoapis.com.cn",
  ca: "https://www.zohoapis.ca",
  sa: "https://www.zohoapis.sa",
};

function credentials() {
  const clientId = process.env.BIGIN_CLIENT_ID;
  const clientSecret = process.env.BIGIN_CLIENT_SECRET;
  const refreshToken = process.env.BIGIN_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) return null;
  return { clientId, clientSecret, refreshToken };
}

/* ------------------------------------------------------------------ */
/* Access tokens                                                       */
/* ------------------------------------------------------------------ */

// Module scope, so a warm lambda reuses the token across requests. Deliberately
// expired a minute early: a token that lapses mid-flight costs a retry, and a
// minute of unused life costs nothing.
let cached: { token: string; expiresAt: number } | null = null;

async function accessToken(errors: string[]): Promise<string | null> {
  const creds = credentials();
  if (!creds) return null;
  if (cached && cached.expiresAt > Date.now()) return cached.token;

  const host = ACCOUNTS_HOST[REGION] ?? ACCOUNTS_HOST.com;
  const body = new URLSearchParams({
    refresh_token: creds.refreshToken,
    client_id: creds.clientId,
    client_secret: creds.clientSecret,
    grant_type: "refresh_token",
  });

  try {
    const res = await fetch(`${host}/oauth/v2/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    const data = await res.json().catch(() => null);
    // Zoho answers 200 with {"error":"invalid_code"} rather than a 4xx, so the
    // status alone is not enough to tell whether this worked.
    if (!res.ok || !data?.access_token) {
      errors.push(`bigin token refresh ${res.status}: ${JSON.stringify(data)?.slice(0, 160)}`);
      return null;
    }
    const ttl = Number(data.expires_in ?? 3600);
    cached = { token: data.access_token, expiresAt: Date.now() + (ttl - 60) * 1000 };
    return cached.token;
  } catch (err) {
    errors.push(`bigin token refresh threw: ${err instanceof Error ? err.message : String(err)}`);
    return null;
  }
}

type BiginResponse = { ok: boolean; status: number; data: unknown; text: string };

async function bigin(
  method: string,
  path: string,
  errors: string[],
  body?: unknown,
): Promise<BiginResponse> {
  const token = await accessToken(errors);
  if (!token) return { ok: false, status: 0, data: null, text: "no access token" };

  const host = API_HOST[REGION] ?? API_HOST.com;
  const res = await fetch(`${host}/bigin/v2${path}`, {
    method,
    headers: {
      // NOT "Bearer". See the note at the top of this file.
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/json",
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const text = await res.text();
  let data: unknown = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    /* leave as text — a Zoho error page is occasionally HTML */
  }
  return { ok: res.ok, status: res.status, data, text };
}

/* ------------------------------------------------------------------ */
/* Contacts                                                            */
/* ------------------------------------------------------------------ */

/**
 * Bigin requires Last_Name on a contact and nothing else. We usually hold one
 * free-text name, so it is split on the last space: everything before becomes
 * First_Name, the remainder Last_Name. A single-word name becomes the surname,
 * which is what Bigin's own UI does with one.
 */
function splitName(full: string | null | undefined): { first?: string; last: string } {
  const name = (full ?? "").trim().replace(/\s+/g, " ");
  if (!name) return { last: "Unknown" };
  const cut = name.lastIndexOf(" ");
  if (cut === -1) return { last: name };
  return { first: name.slice(0, cut), last: name.slice(cut + 1) };
}

type ContactValues = Record<string, unknown>;

/**
 * Upsert one contact, matching on Email so a family who comes back through a
 * second product does not become a second person.
 *
 * When there is no email the upsert has nothing to match on, and Bigin would
 * create a duplicate on every sync — so a phone-only contact is looked up first
 * via the search API and patched if found.
 */
async function upsertContact(
  values: ContactValues,
  email: string | null | undefined,
  phone: string | null | undefined,
  errors: string[],
): Promise<string | null> {
  if (email) {
    const r = await bigin("POST", "/Contacts/upsert", errors, {
      data: [values],
      duplicate_check_fields: ["Email"],
    });
    const id = recordId(r);
    if (id) return id;
    errors.push(`bigin contact upsert ${r.status}: ${r.text.slice(0, 200)}`);
  }

  if (phone) {
    const found = await bigin(
      "GET",
      `/Contacts/search?phone=${encodeURIComponent(phone)}`,
      errors,
    );
    // 204 is Zoho's "no results", not a failure.
    const existing =
      found.status === 200
        ? ((found.data as { data?: { id?: string }[] } | null)?.data?.[0]?.id ?? null)
        : null;
    if (existing) {
      const r = await bigin("PUT", `/Contacts/${existing}`, errors, { data: [values] });
      if (r.ok) return existing;
      errors.push(`bigin contact update ${r.status}: ${r.text.slice(0, 200)}`);
      return null;
    }
    const r = await bigin("POST", "/Contacts", errors, { data: [values] });
    const id = recordId(r);
    if (id) return id;
    errors.push(`bigin contact create ${r.status}: ${r.text.slice(0, 200)}`);
  }

  return null;
}

/**
 * Zoho reports per-record outcomes inside a 200, so the HTTP status alone does
 * not tell you whether the write landed. The id is only present on a record
 * whose own `code` is a success.
 */
function recordId(r: BiginResponse): string | null {
  if (!r.ok) return null;
  const row = (r.data as { data?: { code?: string; details?: { id?: string } }[] } | null)?.data?.[0];
  if (!row) return null;
  if (row.code && !/^SUCCESS$/i.test(row.code)) return null;
  return row.details?.id ?? null;
}

/** Written into Description, because these have no stock field to live in. */
function describe(lines: (string | null | undefined)[]): string {
  return lines.filter(Boolean).join("\n");
}

/* ------------------------------------------------------------------ */
/* IBT students                                                        */
/* ------------------------------------------------------------------ */

type IbtRegistration = Database["public"]["Tables"]["ibt_registrations"]["Row"];

/**
 * The row is written before payment and moved afterwards by the Ziina webhook,
 * so the stage keeps changing after signup — which is why the reconciler
 * re-syncs these rather than firing once.
 */
function ibtStage(reg: IbtRegistration): string {
  switch (reg.status) {
    case "Deposit Paid":
      return "Deposit paid";
    case "Paid":
      // Both a paid deposit and a paid full-price row report "Paid"; is_deposit
      // is what actually separates them.
      return reg.is_deposit ? "Deposit paid" : "Paid in full";
    case "Failed":
    case "Cancelled":
      return "Lost";
    default:
      return "Enquiry";
  }
}

export async function syncIbtRegistrationToBigin(reg: IbtRegistration): Promise<SyncResult> {
  const errors: string[] = [];
  if (!credentials()) return { ok: false, skipped: "Bigin credentials not set", errors };

  try {
    const { first, last } = splitName(reg.name);
    const values: ContactValues = { Last_Name: last };
    if (first) values.First_Name = first;
    if (reg.email) values.Email = reg.email;
    if (reg.phone) values.Phone = reg.phone;
    values.Description = describe([
      "Source: IBT training",
      `Stage: ${ibtStage(reg)}`,
      reg.cohort ? `Cohort: ${reg.cohort}` : null,
      reg.emirate ? `Emirate: ${reg.emirate}` : null,
      // The balance has no second checkout anywhere in the app, so recording it
      // here is the only place it is tracked at all.
      reg.is_deposit
        ? `Route: deposit AED ${reg.amount_paid}, balance AED ${reg.balance_due_aed ?? "—"} outstanding`
        : `Route: paid in full, AED ${reg.amount_paid}`,
      `Registered: ${reg.created_at}`,
      `Supabase id: ${reg.id}`,
    ]);

    const contactId = await upsertContact(values, reg.email, reg.phone, errors);
    return { ok: errors.length === 0 && !!contactId, contactId, errors };
  } catch (err) {
    errors.push(err instanceof Error ? err.message : String(err));
    return { ok: false, errors };
  }
}

export function syncIbtRegistrationInBackground(reg: IbtRegistration): void {
  void syncIbtRegistrationToBigin(reg).then((r) => {
    if (!r.ok) console.error("[bigin] ibt sync incomplete", reg.id, r.skipped ?? r.errors);
  });
}

/* ------------------------------------------------------------------ */
/* CUSTOM FIELDS                                                       */
/* ------------------------------------------------------------------ */
/**
 * Everything above writes only stock Bigin fields, so it works against a fresh
 * org with nothing configured. The cost is that stage, source, pack and amount
 * are prose inside Description rather than columns you can filter and report
 * on — which is most of what a CRM is for.
 *
 * To upgrade: create these as custom fields on Contacts in Bigin (Settings →
 * Modules and Fields → Contacts), then read their generated API names with
 *
 *   GET {api-domain}/bigin/v2/settings/fields?module=Contacts
 *
 * and map them here. Zoho appends a suffix to custom field API names, so they
 * cannot be guessed — that lookup is the only reliable way to get them, and
 * writing a name that does not exist rejects the whole record rather than that
 * one value.
 *
 * Worth having: Contact type (Family / School / Specialist / IBT student /
 * Direct buyer), Source, Stage, Emirate, Amount paid, and — for Direct — the
 * date the managed upsell window opens.
 *
 * A Pipelines (deal) record per purchase is the other obvious upgrade, and is
 * deliberately not attempted here: a Pipeline needs a Stage that exists in that
 * org's own pipeline, and a stage name we invented would fail every write.
 */
