import { redirect } from "next/navigation";

// /verify?serial=… (the form on /certificates) → /verify/<serial>, the URL an
// employer can bookmark or share. Without a serial, back to the form.
export default async function AcademyVerifyPage({ searchParams }: { searchParams: Promise<{ serial?: string }> }) {
  const serial = String((await searchParams).serial ?? "").trim();
  if (!serial) redirect("/certificates#verify");
  redirect(`/verify/${encodeURIComponent(serial)}`);
}
