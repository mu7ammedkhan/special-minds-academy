import "server-only";
import { headers } from "next/headers";
import { ACADEMY_URL } from "@/lib/urls";

// Guards shared by the public forms (IBT checkout and enquiries). Every one of
// them writes to the UAE database with the anon key, and every IBT checkout also
// creates a Ziina payment intent, so they check their input here before doing
// either.

/** The form field a person never sees. Anything in it means a bot filled the form. */
export const HONEYPOT_FIELD = "company_website";

export function isBot(formData: FormData): boolean {
  return String(formData.get(HONEYPOT_FIELD) || "").trim() !== "";
}

/** A trimmed text field, cut to `max` characters, with control characters removed. */
export function field(formData: FormData, name: string, max: number): string {
  return String(formData.get(name) || "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, max);
}

export const LIMITS = { name: 120, email: 160, phone: 32, emirate: 60, background: 200, message: 2000 } as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[\d\s()-]{6,32}$/;

export type Contact = { name: string; email: string; phone: string; emirate: string };

/** Name plus a valid email or phone, or the message to show instead. */
export function readContact(formData: FormData): { contact: Contact } | { error: string } {
  const contact = {
    name: field(formData, "name", LIMITS.name),
    email: field(formData, "email", LIMITS.email).toLowerCase(),
    phone: field(formData, "phone", LIMITS.phone),
    emirate: field(formData, "emirate", LIMITS.emirate),
  };
  if (!contact.name || (!contact.email && !contact.phone)) {
    return { error: "Please add your name and a way to reach you." };
  }
  if (contact.email && !EMAIL.test(contact.email)) return { error: "Please check your email address." };
  if (contact.phone && !PHONE.test(contact.phone)) return { error: "Please check your phone number." };
  return { contact };
}

// A small per-visitor limit, kept in memory. The site runs as one Node process
// on Hostinger, so this is enough to stop a script hammering a form; it resets
// on a redeploy, which is fine.
const hits = new Map<string, number[]>();

async function visitorKey(): Promise<string> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || h.get("x-real-ip") || "unknown";
}

/** True when this visitor has used `bucket` more than `max` times in `windowMs`. */
export async function overLimit(bucket: string, max: number, windowMs: number): Promise<boolean> {
  const key = `${bucket}:${await visitorKey()}`;
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [k, times] of hits) if (times.every((t) => now - t >= windowMs)) hits.delete(k);
  }
  return recent.length > max;
}

export const TOO_MANY = "Too many attempts — please wait a few minutes, or WhatsApp us.";

/**
 * The origin to send Ziina's return links to. The request's own origin when it's
 * one we serve (the live domain, a local build or a Vercel preview); otherwise
 * the live domain, so a forged Origin header can't point a payment's return
 * link at another site.
 */
const isLocal = (hostname: string) => hostname === "localhost" || hostname.endsWith(".localhost") || hostname === "127.0.0.1";

export async function returnOrigin(): Promise<string> {
  const h = await headers();
  const origin = h.get("origin") ?? "";
  // The host the request actually reached. A local origin is only trusted on a
  // local server, never on the live host.
  const servedFrom = (h.get("x-forwarded-host") || h.get("host") || "").split(":")[0];
  try {
    const { protocol, hostname } = new URL(origin);
    const ours = hostname === "specialminds.academy" || hostname === "www.specialminds.academy";
    const preview = hostname.endsWith(".vercel.app") && hostname.startsWith("special-minds-academy");
    if (protocol === "https:" && (ours || preview)) return new URL(origin).origin;
    if (isLocal(hostname) && isLocal(servedFrom)) return new URL(origin).origin;
  } catch {}
  return ACADEMY_URL;
}

/** Only follow a checkout link that really is Ziina's. */
export function isZiinaCheckout(url: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === "https:" && (u.hostname === "ziina.com" || u.hostname.endsWith(".ziina.com"));
  } catch {
    return false;
  }
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const isUuid = (v: string | undefined): v is string => !!v && UUID.test(v);
