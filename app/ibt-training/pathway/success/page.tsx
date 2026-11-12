import { ConversionEvent } from "@/components/ConversionEvent";
import { PaymentResult } from "@/components/academy/PaymentResult";
import { BALANCE_AED, BALANCE_DUE_LABEL, DEPOSIT_AED } from "@/lib/ibt-pathway";
import { getIbtPaymentStatus } from "@/lib/ibt-payment.server";

export const metadata = { title: "Seat reserved", robots: { index: false } };

// The deposit's return page. Its conversion is the specialminds.ae page's —
// "ibtDeposit" is the IBT campaigns' bidding target, so it must not change.
// A deposit doesn't open the course (the auto-enrol trigger only fires on a
// paid-in-full registration), so this page mustn't say it does.
export default async function AcademyDepositSuccess({ searchParams }: { searchParams: { rid?: string } }) {
  const confirmed = (await getIbtPaymentStatus(searchParams.rid)) === "completed";
  return (
    <>
      {confirmed && (
        <ConversionEvent
          event="purchase"
          params={{ flow: "ibt_pathway", value: DEPOSIT_AED, currency: "AED" }}
          ads="ibtDeposit"
          transactionId={searchParams.rid}
        />
      )}
      <PaymentResult
        confirmed={confirmed}
        title="Your seat is reserved."
        lead={`Thanks — your deposit is confirmed and your seat is reserved. The remaining AED ${BALANCE_AED.toLocaleString("en-US")} is due ${BALANCE_DUE_LABEL}; we'll be in touch on WhatsApp or email with how to pay it and how to get started.`}
        stepTitle="Set up your account now"
        stepBody={
          <>
            Create it with the <strong className="text-ink">same email address you just paid with</strong>, and the coursework
            opens on it as soon as your balance is settled.
          </>
        }
      />
    </>
  );
}
