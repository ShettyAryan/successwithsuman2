# Optimization Log — Success With Suman

Tracks what shipped in each phase, what was verified, and what's still open.
See `docs/seo-audit.md` for the original Phase 1a findings this work addresses.

---

## Decisions confirmed before execution (2026-08-09)

- **Indexability**: make the site publicly indexable now (removed sitewide `noindex`).
- **AI crawlers**: allow all major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot) in `robots.txt`, same as Googlebot/Bingbot.
- **Architecture**: add static prerendering rather than a runtime-only head manager or leaving the SPA as-is.
- **"Financial Planning" language**: left exactly as-is on the Masterclass page — deferred to compliance, not touched.
- Domain assumed to be `https://successwithsuman.com` (evidenced by the contact email, booking subdomain, and Trustpilot listing) — used in canonical URLs, sitemap, and schema `@id`s. **Flag if this isn't the real production domain**, since it's used in several places now.

## Phases 1b–1d: on-page SEO, schema, technical SEO, performance

Implemented together as one pass rather than strictly sequential phases, per instruction to move to the next phase. Commits (in order):

1. `Add per-page SEO metadata, JSON-LD schema, breadcrumbs and alt text`
2. `Add robots.txt, sitemap.xml, and security headers`
3. `Compress hero images to WebP and fix font-loading waterfall`
4. `Add static prerendering so every route ships full HTML`

### What shipped
- Per-page `<title>` (52-57 chars) and meta description (139-157 chars) for all 5 routes, via a ~70-line dependency-free `Seo` component (no react-helmet, no bundle size impact worth measuring).
- Canonical tags, Open Graph + Twitter Card tags (shared `og-image.jpg`, generated from the existing hero portrait, 47KB) on every route.
- JSON-LD via a single `@graph` per page: `FinancialService` (chosen over generic `LocalBusiness` — no physical address exists, so `areaServed: India` is used instead per Google's service-area-business guidance), `Person` (Suman, with `hasCredential` for IRDA/AMFI specifically — not a generic "financial advisor" claim), `Service` (3 nodes grouping Services.tsx's actual offerings), `FAQPage` (Masterclass's existing FAQ copy, verbatim), `Course` (Masterclass), `Review` (the 3 named Masterclass testimonials with rating/quote), `BreadcrumbList`.
- Visible breadcrumb nav (Home > Page) added below the hero on About/Services/Masterclass/Contact.
- ~40 alt attributes rewritten from generic ("Gallery moment 3") to descriptive.
- About's timeline entries and values cards, and Contact's info column, got real heading tags where they were plain styled `<div>`s before.
- `robots.txt` and `sitemap.xml` (neither existed; requests were silently returning the SPA shell as a 200 — confirmed via Lighthouse's 21 robots.txt parse errors before the fix).
- Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS) added to all three hosting configs (Vercel, Netlify, Apache) since the live deployment target wasn't confirmed. CSP shipped in **Report-Only** mode only — recommend monitoring reports for at least a week before enforcing, since a wrong allow-list can silently break the site.
- Hero images: local PNGs (1.6MB, 1.9MB) re-encoded to WebP (55KB, 106KB); the 3 Cloudinary-hosted heroes get `f_auto,q_auto,w_1920` URL params (no re-upload needed); gallery/testimonial Cloudinary images capped at `w_800`/`w_1000`.
- Google Fonts moved from a render-blocking CSS `@import` to a preconnected `<link>` in `index.html`.
- Static prerendering: a `postbuild` script (`scripts/prerender.mjs`, Puppeteer as a devDependency only) renders all 5 routes in a real headless browser after `vite build` and writes the captured HTML to `dist/<route>/index.html`, so non-JS crawlers get complete pages instead of an empty shell.

### Explicitly not done (and why)
- **`WebSite` `SearchAction`**: skipped. The site has no functioning site search, and Google's guidance is not to mark up a `SearchAction` that doesn't point to a real search results page.
- **`AggregateRating` schema**: skipped. The page displays "4.4★ Trustpilot rating" as text, but I don't have a `reviewCount`/`ratingCount` to back it — fabricating one would violate structured-data guidelines and risks a manual action. Individual `Review` nodes (which don't require a count) were added instead. If you can pull the actual review count from the Trustpilot business profile, I can add this.
- **`LocalBusiness` with a street address**: skipped, no physical address exists on the site. Used `FinancialService` (a `LocalBusiness` subtype) with `areaServed` instead. Revisit once the Google Business Profile has a real address or defined service area.
- **`llms.txt`**: not created — waiting on the format you said you'd provide.
- **"Financial Planning" copy**: untouched per your instruction, and deliberately excluded from all schema markup (Service schema was built only from Services.tsx's content, which never uses that phrase).
- **Video testimonial captions/transcripts** (flagged in the audit's accessibility section): not added — would require actually transcribing the 3 client videos, which needs either the real transcript or your sign-off on wording, not something to fabricate.
- **CSP enforcement**: shipped Report-Only, not enforced (see above).

### Verified
- **Build**: `npm run build` compiles cleanly (Vite + TypeScript, no errors) after all changes.
- **Prerendered output**: confirmed via plain `curl` (no JS) against a directory-index-aware static server that each route now returns its own correct `<title>`, meta, and body content — e.g. `curl /about` returns "About Suman Manjrekar..." not the Home title. Confirmed each page's JSON-LD is valid, well-formed JSON with the expected `@graph` node types.
- **Lighthouse, desktop** (`localhost` via `vite preview`, so gzip/caching match how a real static host would serve it):
  | Metric | Before | After |
  |---|---|---|
  | SEO | 58 | **100** |
  | Performance | 90 | **98** |
  | Accessibility | 100 | 100 (unchanged — already clean) |
  | Best Practices | 100 | 100 (unchanged) |
  | LCP | 2.0s | **1.1s** |
- **Lighthouse, mobile/throttled** (same setup):
  | Metric | Before | After |
  |---|---|---|
  | Performance | 70 | **77** |
  | LCP | **12.7s** | **5.9s** |

  Mobile LCP is a large improvement (54% reduction) but is not yet under Google's 2.5s "good" threshold — the remaining gap is normal network-throttling behavior for a ~55KB image + fonts + a 157KB gzipped JS bundle on simulated slow-4G, not a code defect (CLS is 0, TBT is 40ms on both profiles). Further gains would mean image `srcset`/responsive sizing per breakpoint or JS code-splitting (Lighthouse still flags the bundle as one 510KB/157KB-gzip chunk) — flagging as good follow-up work, not done in this pass since it wasn't part of the specific audit findings.
- **Visual/layout check**: screenshotted About and Contact at realistic viewport sizes (1440×900/1600) after adding breadcrumbs and new headings — no visual regression, breadcrumb sits cleanly below the existing full-bleed hero, new Contact "Contact Information" heading matches the site's existing eyebrow-label style.
- **Schema validation**: checked JSON-LD is well-formed and matches schema.org vocabulary for each type used. **Not yet run through Google's actual Rich Results Test** — that requires a public URL, which doesn't exist until this deploys. Do this as the first post-deploy check.

## Still open / needs your input

1. Confirm `successwithsuman.com` is the real production domain (used throughout canonical URLs, sitemap, schema).
2. Confirm which hosting platform is actually live (Vercel/Netlify/Apache configs were all present before this work; all three now carry equivalent security headers so it shouldn't matter, but worth cleaning up the unused ones eventually).
3. Once deployed: run the actual Google Rich Results Test and Search Console URL Inspection against the live site.
4. `llms.txt` — send the format and I'll add it.
5. Trustpilot review count, if you want `AggregateRating` schema added.
6. Video testimonial transcripts, if you want them captioned/transcribed for accessibility and AI-extractability.
