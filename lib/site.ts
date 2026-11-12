// Special Minds — the parent business behind the academy. Contact details and
// the licensed entity, copied from the Special Minds UAE site (lib/site.ts there),
// which stays their source of truth: change them there first, then here.
export const SITE = {
  name: "Special Minds",
  // The parent site. The academy's own address is ACADEMY_URL (lib/urls.ts).
  url: "https://specialminds.ae",
  // The hook, and the only one. These two lines are the brand speaking about
  // itself, so they render wherever that happens rather than being retyped:
  // the share card, the installed-app manifest, the homepage search snippet and
  // the footer blurb. Pages keep their own descriptions — a page describes
  // itself, the hook describes the company.
  //
  // The claim is deliberately the supervision rather than the roster. Every
  // agency in this market lists the same job titles; the one thing families say
  // they cannot find is somebody still accountable in month six.
  tagline: "Special needs support, properly supervised.",
  // Under 160 characters, because past that Google cuts the snippet
  // mid-sentence. Geography is carried by the page title ("…in Dubai"), which
  // leaves this line free to make the argument instead of listing the trade.
  description:
    "One clinically supervised network for families, schools and specialists — real follow-through, never a vague promise.",
  contact: {
    phone: "+971 56 914 2165",
    phoneHref: "tel:+971569142165",
    // WhatsApp is its own number, not the call line. Show whatsappDisplay
    // wherever the number is printed beside a WhatsApp label or button.
    whatsapp: "https://wa.me/971551103294",
    whatsappDisplay: "+971 55 110 3294",
    email: "hello@specialminds.ae",
    address: "Cloud Spaces, Dubai Mall - Level M, Fountain Views, Downtown Dubai, United Arab Emirates",
    instagram: "https://www.instagram.com/specialminds.ae",
    facebook: "https://www.facebook.com/profile.php?id=61577410635703",
    linkedin: "https://www.linkedin.com/company/specialmindscentre",
    // Not yet supplied — add the real listing URL, then it will appear
    // automatically in SiteFooter's SOCIAL_LINKS list.
    googleBusiness: "",
  },
  areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"],
} as const;

/**
 * The licensed entity behind this site.
 *
 * Read off the two RAKEZ e-licences issued 22 September 2026. Both name the
 * same company and differ only in activity, which is why the numbers are a list
 * rather than one field.
 *
 * Licences expire. When these are renewed the dates will change and the numbers
 * may — change them here and nowhere else: the footer, the About page and the
 * organisation schema all render from this.
 */
export const LEGAL = {
  entity: "Special Minds Recruitment FZ-LLC",
  legalForm: "Free Zone Limited Liability Company (FZ-LLC)",
  /** The holding company. Named, not linked — hamdholdings.com is still parked. */
  group: "Hamd Holdings",
  authority: "Ras Al Khaimah Economic Zone Authority",
  authorityShort: "RAKEZ",
  /** The licensed head office: the address on both RAKEZ licences. */
  headquarters:
    "Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates",
  /** The registered office as it is written where the building and street are
   *  not the point — the contact page, say. The full address stays on /about
   *  with the licences, which is where it is checked against something. */
  registeredOfficeShort: "Al Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates",
  /** Where families actually meet us. SITE.contact.address is the same place,
   *  written the way a visitor needs it rather than the way a licence does. */
  dubaiBranch: "Cloud Spaces, Dubai Mall - Level M, Fountain Views, Downtown Dubai, United Arab Emirates",
  /** The same place where a sentence or the footer only has room for a name. */
  dubaiBranchShort: "Cloud Spaces, Dubai Mall",
  licences: [
    { number: "47037588", activity: "Recruitment Services" },
    { number: "47037540", activity: "Executive Search Services" },
  ],
  /** Both run to the same date. Typeset here because it is only ever printed. */
  validTo: "21 September 2027",
} as const;
