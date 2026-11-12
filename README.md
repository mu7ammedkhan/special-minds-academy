# Special Minds Academy

specialminds.academy — the training arm of Special Minds (UAE): IBT, ABAT, IBA and LSA courses, and guides to ABA credentials in the UAE.

A standalone Next.js 14 site (App Router, Tailwind). It was split out of the Special Minds UAE codebase in November 2026.

## What lives where

- **Here:** the whole public site — courses, `/training`, the 12 guides, the glossary, certificates and verification, `llms.txt`, robots, sitemap and share images. Also the IBT checkout (Ziina) and the register-interest forms.
- **On specialminds.ae:** student login, the course portal and its videos, and the staff tools. "Student login" links there. `/login`, `/register`, `/portal` and the other account paths redirect there (`next.config.mjs`).
- **Database:** the Special Minds UAE Supabase, used only through what anonymous visitors can already do: inserts into `ibt_registrations` and `leads`, and the RPCs `attach_ibt_registration_intent`, `get_ibt_payment_intent_id` and `ibt_verify_certificate` (see `lib/supabase/database.types.ts`). This project never changes that database.
- **Payments:** Ziina returns students to `/ibt-training/cohort-1/success` and `/ibt-training/pathway/success`, which fire the `ibtPurchase` and `ibtDeposit` Google Ads conversions once the payment is confirmed. specialminds.ae's existing Ziina webhook marks the payment as paid.

## Running it

```bash
npm install
cp .env.example .env.local   # fill in the values
npm run dev                  # http://localhost:3000
```

`npm run build && npm start` for a production build. The variables are explained in `.env.example`. On a preview with a placeholder database, set `CONTACT_FORM_PREVIEW_MODE=1`, and the forms will stop before saving anything. Never set it on the live site.

Every Vercel build is sent with `X-Robots-Tag: noindex`, because the live site runs on Hostinger, not on Vercel.

## Content rules

Every credential figure comes from `lib/academy-facts.ts`, with sources. IBT facts come from `lib/ibt.ts` and `lib/ibt-pathway.ts`. Instructors are "a practising behaviour analyst (BCBA, IBA or QBA)". Don't claim any approval, guaranteed placement or fixed start date. ABAT, IBA, LSA and `/training` are register-interest only until they're confirmed.
