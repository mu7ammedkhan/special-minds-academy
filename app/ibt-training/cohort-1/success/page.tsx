import { ConversionEvent } from "@/components/ConversionEvent";
import { PaymentResult } from "@/components/academy/PaymentResult";
import { IBT_COHORT_1 } from "@/lib/ibt";
import { getIbtPaymentStatus } from "@/lib/ibt-payment.server";

export const metadata = { title: "Registration received", robots: { index: false } };

// Where Ziina returns a student who paid in full on the academy (the action
// builds the link from the request's origin), and where specialminds.ae sends
// a payment that was in flight when IBT moved. Its conversion is exactly the
// specialminds.ae page's: same event, flow, Ads action, value and dedupe id.
export default async function AcademyFullPaymentSuccess({ searchParams }: { searchParams: { rid?: string } }) {
  const confirmed = (await getIbtPaymentStatus(searchParams.rid)) === "completed";
  return (
    <>
      {confirmed && (
        <ConversionEvent
          event="purchase"
          params={{ flow: "ibt_cohort1", value: IBT_COHORT_1.coursePriceAed, currency: "AED" }}
          ads="ibtPurchase"
          transactionId={searchParams.rid}
        />
      )}
      <PaymentResult
        confirmed={confirmed}
        title="You're enrolled."
        lead="Thanks — your payment is confirmed and your seat in IBT Training is secured."
        stepTitle="One more step"
        stepBody={
          <>
            Create your student account to get into the coursework. Use the{" "}
            <strong className="text-ink">same email address you just paid with</strong> — that&apos;s how we match your payment
            to your account and unlock the course automatically.
          </>
        }
      />
    </>
  );
}
