// Carries the buyer's own email/phone across the Ziina redirect so the
// success page can attach them to the Google Ads conversion (enhanced
// conversions), which recovers a meaningful share of the conversions
// Safari/ITP would otherwise drop.
//
// sessionStorage, deliberately:
//   - The URL is not an option. Never put personal data in a query string,
//     and the Ziina success URL is logged by a third party.
//   - Our server already has this data on the registration row, but reading
//     it back on the success page would need a new SECURITY DEFINER RPC
//     (anon holds INSERT-only on ibt_registrations). Not worth a migration.
//   - Ziina returns to the same tab, so same-origin sessionStorage survives
//     the round trip; it's cleared on read and dies with the tab either way.
//
// Values stay in the user's own browser. gtag hashes them client-side before
// anything leaves the page; nothing here is sent to Special Minds' servers.
const KEY = "sm_ec";

export type StashedContact = { email?: string; phone?: string };

export function stashContact(contact: StashedContact) {
  if (typeof window === "undefined") return;
  const email = contact.email?.trim().toLowerCase();
  const phone = contact.phone?.trim();
  if (!email && !phone) return;
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify({ email, phone }));
  } catch {
    // Private mode / storage disabled — enhanced conversions degrade to the
    // plain conversion, which is a reporting loss, never a broken checkout.
  }
}

/** Reads and clears the stash — a conversion should be enhanced once, not
 *  re-attached to every later page view in the tab. */
export function takeContact(): StashedContact | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    if (!raw) return null;
    window.sessionStorage.removeItem(KEY);
    return JSON.parse(raw) as StashedContact;
  } catch {
    return null;
  }
}
