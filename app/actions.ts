"use server";
import { randomUUID } from "crypto";
import { createClient } from "@/lib/supabase/server";
import { registerForCohort1 } from "@/app/ibt-training/cohort-1/actions";
import { reserveSeat } from "@/app/ibt-training/pathway/actions";
import { ENQUIRY_COURSES } from "@/lib/academy";

// Set only on Vercel previews, which run on a placeholder database. There the
// forms stop short of saving or opening a checkout and say so; the live host
// never sets it. Same flag as the contact forms on specialminds.ae.
const PREVIEW = process.env.CONTACT_FORM_PREVIEW_MODE === "1";

export type EnrolState = { error?: string; preview?: boolean };

function missingContact(formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  return !name || (!email && !phone);
}

// The academy's two IBT checkouts are the specialminds.ae ones, copied as they
// are (app/ibt-training/*/actions.ts): the same ibt_registrations row, the same
// Bigin sync (when its keys are set), the same Ziina payment and the same
// success paths, because the actions send Ziina back to the request's own
// origin. The payment is then marked paid by specialminds.ae's Ziina webhook,
// which updates the same database. Nothing about taking an IBT payment changes
// with the move.

export async function enrolInFull(prev: EnrolState, formData: FormData): Promise<EnrolState> {
  if (PREVIEW) {
    if (missingContact(formData)) return { error: "Please add your name and a way to reach you." };
    return { preview: true };
  }
  return registerForCohort1(prev, formData);
}

export async function reserveWithDeposit(prev: EnrolState, formData: FormData): Promise<EnrolState> {
  if (PREVIEW) {
    if (missingContact(formData)) return { error: "Please add your name and a way to reach you." };
    if (formData.get("terms_accepted") !== "on") return { error: "Please confirm you've read and accept the deposit terms." };
    return { preview: true };
  }
  return reserveSeat(prev, formData);
}

export type EnquiryState = { ok?: boolean; error?: string; preview?: boolean };

/**
 * Interest in a course that isn't taking payment yet (IBA, the LSA course), or
 * a general question. Saved to the same leads table as the main site's
 * enquiries, so it shows on /staff/leads — as a practitioner lead, because
 * these are people training for work, not families buying care. Not sent to
 * the CRM, for the same reason the contact form doesn't send practitioners.
 */
export async function sendAcademyEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const courseValue = String(formData.get("course") || "not-sure");
  const course = ENQUIRY_COURSES.find((c) => c.value === courseValue)?.label ?? "Not sure yet";
  const background = String(formData.get("background") || "").trim();
  const page = String(formData.get("page") || "/").slice(0, 120);
  const note = String(formData.get("message") || "").trim().slice(0, 2000);

  const lead = {
    kind: "practitioner",
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    emirate: String(formData.get("emirate") || "").trim(),
    service_interest: `Special Minds Academy: ${course}`,
    page: `specialminds.academy${page.startsWith("/") ? page : "/"}`,
    message: [`Special Minds Academy enquiry: ${course}.`, background && `Background: ${background}.`, note].filter(Boolean).join("\n"),
  };
  if (!lead.name || (!lead.email && !lead.phone)) {
    return { error: "Please add your name and a way to reach you." };
  }
  if (PREVIEW) return { ok: true, preview: true };

  // Minted here rather than read back: anon may INSERT into leads but not
  // SELECT it (the leads table in the UAE database).
  const { error } = await createClient().from("leads").insert({ id: randomUUID(), ...lead });
  if (error) return { error: "Something went wrong — please WhatsApp us instead." };
  return { ok: true };
}
