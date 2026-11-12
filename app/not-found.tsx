import Link from "next/link";
import { COURSES } from "@/lib/academy";

export default function AcademyNotFound() {
  return (
    <section className="shell py-24 text-center md:py-32">
      <p className="eyebrow">Page not found</p>
      <h1 className="mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">
        That page isn&apos;t here — <span className="accent">but the courses are.</span>
      </h1>
      <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-3">
        {COURSES.map((c) => (
          <Link key={c.slug} href={c.href} className="btn btn-ghost text-ink">{c.name}</Link>
        ))}
      </div>
      <Link href="/" className="btn btn-dark mt-8">Academy home</Link>
    </section>
  );
}
