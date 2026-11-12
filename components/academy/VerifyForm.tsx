import { ShieldCheck } from "lucide-react";

/**
 * A plain GET form: /verify?serial=… redirects to /verify/<serial>. Works
 * without JavaScript, and an employer can bookmark or share the result URL.
 */
export function VerifyForm({ onDark = false }: { onDark?: boolean }) {
  return (
    <form action="/verify" method="get" className="grid gap-3" id="verify">
      <label htmlFor="verify-serial" className={`text-sm font-semibold ${onDark ? "text-white" : "text-ink"}`}>
        Check a certificate
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="verify-serial"
          name="serial"
          required
          placeholder="e.g. SM-IBT-2026-COHORT1-XXXXXX"
          autoCapitalize="characters"
          spellCheck={false}
          className="w-full min-w-0 flex-1 rounded-xl border border-field bg-surface px-4 py-3 font-mono text-sm text-ink outline-none transition placeholder:text-soft/70 focus:border-amethyst focus:ring-2 focus:ring-amethyst/20"
        />
        <button className="btn btn-dark justify-center">
          <ShieldCheck size={16} aria-hidden="true" /> Verify
        </button>
      </div>
      <p className={`text-xs ${onDark ? "text-white/60" : "text-soft"}`}>Type the serial exactly as printed on the certificate.</p>
    </form>
  );
}
