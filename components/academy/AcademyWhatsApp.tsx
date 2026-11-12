"use client";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";
import { MessageCircle } from "lucide-react";
import { adsSendTo } from "@/lib/google-ads";
import { ACADEMY_WHATSAPP } from "@/lib/academy";
import { PATHWAY_WHATSAPP_LINK } from "@/lib/ibt-pathway";

/**
 * WhatsApp, reported the way the IBT pages always have.
 *
 * On the IBT course page a click is an IBT lead — the "ibtLead" Ads action and
 * the GA flow the old landing page used — because that page is what the IBT
 * campaigns pay for. Anywhere else on the academy it's a GA event only: no
 * campaign buys traffic for IBA or the LSA course, and counting those clicks
 * as IBT leads would teach the IBT bidding the wrong thing. Never the main
 * site's "lsaLead": an academy visitor isn't a Managed LSA family.
 */
function useIbtPage() {
  return usePathname().includes("/courses/ibt-training");
}

function report(ibt: boolean, where: string) {
  sendGAEvent("event", "generate_lead", { flow: ibt ? "ibt_pathway" : "academy", method: "whatsapp", where });
  if (!ibt) return;
  const sendTo = adsSendTo("ibtLead");
  if (sendTo && typeof window.gtag === "function") window.gtag("event", "conversion", { send_to: sendTo });
}

export function AcademyWhatsAppLink({ className, children, where = "inline" }: { className?: string; children: ReactNode; where?: string }) {
  const ibt = useIbtPage();
  return (
    <a href={ibt ? PATHWAY_WHATSAPP_LINK : ACADEMY_WHATSAPP} target="_blank" rel="noopener" className={className} onClick={() => report(ibt, where)}>
      {children}
    </a>
  );
}

export function AcademyWhatsAppFloat() {
  const ibt = useIbtPage();
  return (
    <a
      href={ibt ? PATHWAY_WHATSAPP_LINK : ACADEMY_WHATSAPP}
      target="_blank"
      rel="noopener"
      onClick={() => report(ibt, "floating")}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-champagne text-amethyst-deep shadow-[0_10px_30px_rgba(34,26,51,0.28)] transition-transform hover:scale-105 md:bottom-8 md:right-8"
    >
      <MessageCircle size={26} aria-hidden="true" />
      <span className="sr-only">Message us on WhatsApp (opens in a new tab)</span>
    </a>
  );
}
