# SEO / AI Visibility Audit — Success With Suman
Date: 2026-08-09
Scope: Phase 1a (audit only — nothing in this document has been applied to the site yet)
Site: 5-page React SPA (`/`, `/about`, `/services`, `/masterclass`, `/contact`), Vite build, client-side routing via `react-router`, no server-side rendering.

---

## 0. Executive summary — read this first

Three findings sit above everything else because they gate the value of every other fix. Nothing in Phase 1b–1e will move the needle until these are resolved, and two of them need a client decision, not just an engineering fix.

| # | Finding | Why it blocks everything else |
|---|---|---|
| 1 | **The entire site is `noindex, nofollow`** (`index.html:10`) | Every page — all 5 of them — currently tells every crawler (Google, Bing, GPTBot, ClaudeBot, PerplexityBot) not to index it. No amount of schema, meta, or content work matters while this tag is live. **This needs an explicit "yes, make the site publicly indexable" decision from the client before Phase 1b**, since it may be intentional (site not yet launched). |
| 2 | **It's a pure client-side SPA with one static `index.html`** shared by all 5 routes — no per-page `<title>`, no meta description, no SSR/prerendering | AI crawlers (GPTBot, ClaudeBot, PerplexityBot, and most non-Google bots) largely do **not** execute JavaScript. They fetch raw HTML. Today, that raw HTML is `<div id="root"></div>` — no headline, no body copy, no credentials, nothing extractable. Google *can* render JS but does so on a delayed second wave, which still disadvantages the site. This is an architecture-level constraint, not a meta-tag fix — flagging per your instruction to surface anything that touches layout/build before shipping. |
| 3 | **YMYL/compliance gaps**: no privacy policy, no terms of service, no disclaimer page anywhere in the codebase; "Financial Planning" is marketed as a named service pillar while the only credentials shown are IRDA (insurance) and AMFI (mutual fund distribution) — neither is a SEBI Registered Investment Adviser (RIA) license, which is what India requires to legally use "financial planning" / "investment advice" language for a paid offering | Direct match to the YMYL flags you asked me to raise. Needs legal/compliance sign-off, not a copy edit — I have not touched any of this language. |

Everything else below is real and worth fixing, but is downstream of these three.

---

## 1. URL structure & internal linking

**Routes (client-side only, via `createBrowserRouter`):**

| Path | Page | Notes |
|---|---|---|
| `/` | Home | |
| `/about` | About | |
| `/services` | Services | |
| `/masterclass` | Masterclass | |
| `/contact` | Contact | |

- Clean, flat, lowercase, hyphen-free URLs — no issues with the structure itself.
- No trailing-slash inconsistency; no query-string or hash-based routing.
- Internal navigation uses `react-router`'s `<Link>` for same-site paths ([Button.tsx:34](src/app/components/Button.tsx#L34)) and real `<a target="_blank">` for external links — correct pattern, no full-page-reload links found.
- Internal anchor text is descriptive throughout ("Explore all services", "Read the full story", "Explore the MMH Framework") — **no "click here" instances found.** This item is effectively already done; no action needed in Phase 1b for anchor text.
- Cross-linking exists between all 5 pages via Header nav, Footer nav, and in-content CTAs — reasonable internal link graph for a 5-page site.
- No breadcrumbs anywhere (expected — flagged below in schema section, addressed in Phase 1b step 7).
- **Gap:** no dedicated URL/page exists yet for Privacy Policy, Terms, or Disclaimer (see §YMYL below) — these will need routes added, which is a URL change and should go through your standard approval, not be silently added.

---

## 2. Meta titles & descriptions

Because this is an unrendered SPA, there is **one** title/description pair in the entire codebase ([index.html:8-9](index.html#L8-L9)), and it is served identically for all 5 routes. There are not "5 titles with duplicates" — there is functionally **1 title and 1 description for 5 different pages.**

| Field | Current value | Length | Issue |
|---|---|---|---|
| Title | `Suman Manjrekar \| The Best Wealth Coach` | 40 chars | Same on all 5 pages. "The Best" is an unsubstantiated superlative claim — worth reconsidering given YMYL scrutiny. |
| Description | `Showcases a trusted wealth strategist's personal brand and converts visitors into course buyers through a premium, conversion-focused website.` | ~142 chars | Same on all 5 pages. Reads like an *agency brief describing the website*, not visitor-facing copy — third-person meta description of "the website" rather than a description of what a visitor gets. Also references "course buyers," which doesn't match the actual offer (1-2-1 advisory, Infinite Wealth Hub community, masterclass, books) — likely to hurt click-through rate. |

**Also missing entirely:** `<meta name="robots">` per-page control, `<meta name="author">`, `<meta name="keywords">` (low priority, largely ignored by Google but sometimes referenced by other engines).

No page has its own title or description today — About, Services, Masterclass, and Contact all inherit the Home-oriented copy above, which is inaccurate for all four of them. This is the single highest-leverage traditional-SEO fix available (Phase 1b step 1), but it requires solving finding #2 above first — a static `<title>` tag cannot vary per client-side route without either (a) a per-route `document.title`/meta-tag manager (e.g. a small head-management utility) or (b) prerendering. I'll propose the specific approach when we scope Phase 1b.

---

## 3. Heading hierarchy (H1/H2/H3)

Good news: structurally, every page is already clean. No page has more than one `<h1>`, and no heading level is skipped (no H1→H3 jumps) anywhere I checked.

| Page | H1 | H2 count | H3 usage | Issues |
|---|---|---|---|---|
| Home | 1 — "You built the career. Now build the wealth that outlives it." | 6 | Correctly nested under H2s (service pillars, book cards) | None |
| About | 1 — "Personal CFO. Wealth Coach. Author." | 6 | Correctly nested | Timeline entries (6 "chapters": 2006, 2011, 2017, 2022, 2025, Today) and Values cards render as styled `<div>`s, not `<h3>`/`<h4>` — not a hierarchy *error*, but a missed opportunity: these are exactly the kind of scannable, chronological content that benefits from real heading markup for both accessibility and AI-extractability (Phase 1e). |
| Services | 1 — "Services that protect, multiply and outlive you." | 4 | Correctly nested (Business Insurance, Mediclaim, Income Protection cards) | None |
| Masterclass | 1 — "Built around your life stage, not a sales script." | 8 | Correctly nested (MMH cards, service cards, community cards) | FAQ questions render as `<span>` inside an accordion `<button>`, not headings. Not wrong for accessibility (accordion buttons are a valid pattern), but relevant to flag ahead of Phase 1c FAQPage schema — schema doesn't require `<h>` tags, but Google's rich-result eligibility does require the Q&A text to be visible on page load, not injected only on click. Confirmed the answer text *is* in the DOM (just visually hidden via height:0 animation), so this should be fine, but worth double-checking against Rich Results Test in Phase 1c. |
| Contact | 1 — "Let's architect your wealth, on purpose." | 1 (conditional — "A few details to get us started." pre-submit, "Message received." post-submit; only one is ever in the DOM at a time) | N/A | Thinnest structure of the 5 pages — the contact-info cards and "Stay Connected" block have no heading above them at all. Minor; a light H2 addition would help both scannability and AI extractability. |

No action needed to *fix* broken hierarchy — there isn't any. The Phase 1b work here is additive (a few missing H2/H3s), not corrective.

---

## 4. Existing schema markup (JSON-LD)

**None.** Confirmed via full-text search across the repo for `application/ld+json` — zero matches. No `Person`, `Service`, `FAQPage`, `Review`, `AggregateRating`, `LocalBusiness`/`FinancialService`, `WebSite`, `BreadcrumbList`, or `Course` schema exists anywhere.

Everything in Phase 1c will be net-new. Two things worth flagging now, before that phase starts:

- **AggregateRating / Review schema requires genuine, independently verifiable reviews.** The site currently hard-codes "4.8★ Trustpilot rating" as static text in two places ([About.tsx:52](src/app/pages/About.tsx#L52), [Masterclass.tsx:561](src/app/pages/Masterclass.tsx#L561)) and displays testimonial quotes with a static 5-star rating on Home and a `rating: 5` field on all three Masterclass "Trustpilot" reviews ([Masterclass.tsx:76-101](src/app/pages/Masterclass.tsx#L76-L101)) with no link back to a live, verifiable source for the individual review ratings (only a general link to the Trustpilot profile page). Google's structured-data guidelines are strict here — review/rating schema tied to unverifiable or self-reported numbers can trigger a manual action, not just a lost rich-result. **Before I mark any of this up as `Review`/`AggregateRating` schema in Phase 1c, I need confirmation that "4.4" is the current, live Trustpilot figure (not a snapshot that's since changed) and that these three quoted reviews are genuinely posted on Trustpilot** so the schema can point to a real, checkable source.
- **`Person` schema for Suman** (Phase 1c) will want `hasCredential` entries for IRDA and AMFI. I'll mark those up as what they actually are (an IRDA-certified insurance agent credential and an AMFI mutual fund distributor registration) rather than implying a broader "financial advisor" licensing status — flagging now since it's the same underlying issue as the YMYL note in §0.

---

## 5. Image alt text coverage

Coverage is **structurally complete** — I did not find an `<img>` without an `alt` attribute anywhere in the 5 pages. Quality varies:

| Location | Alt pattern used | Assessment |
|---|---|---|
| All 5 hero portraits (Home, About, Services, Masterclass, Contact) | `"Suman Manjrekar"` | Present but generic and identical across every hero — a missed opportunity to describe context (e.g. what she's doing/wearing/setting) for image search, though not a compliance issue. |
| Home About-carousel (13 images) | `"Suman Manjrekar {n}"` | Same pattern, index-suffixed. Generic. |
| About page gallery marquee (15 images) | `"Gallery moment {n}"` | Generic, non-descriptive — tells a screen reader/crawler nothing about what's actually in the photo (speaking on stage vs. one-on-one client meeting vs. book launch, etc.). |
| Masterclass WhatsApp testimonial screenshots (9 images) | `"WhatsApp testimonial {n}"` | Acceptable given these are UGC screenshots, but generic. |
| Home book covers (3 images) | Actual book title (e.g. `"I Will Never Die"`) | Good — genuinely descriptive, no change needed. |
| Decorative gradient/blur `<div>`s | `aria-hidden` | Correct pattern, already done properly. |

**No missing alt text**, but a meaningful share of it is placeholder-quality rather than descriptive. This is a Phase 1b step 3 item (rewriting ~40 alt attributes) — flagging that this touches copy-adjacent text, so I'll share the proposed alt text for review before applying, consistent with your "no rewriting without approval" rule, even though alt text isn't visible body copy.

One structural note: the 3 external-hero-image pages (About, Services, Contact) load their hero portrait from a raw Cloudinary URL, not a local import — see §9 for why that matters for compression, but it also means alt text edits for those three are one-line JSX changes, not asset changes.

---

## 6. Open Graph + Twitter Card

**None present.** Zero `og:*` or `twitter:*` meta tags anywhere in `index.html` or elsewhere. Sharing any page link on WhatsApp, LinkedIn, X, or iMessage today will produce a bare link with no image, title, or description card. Given the business runs on WhatsApp-shared testimonials and Instagram, this is a real, visible gap for referral traffic, not just a technical checkbox. Full Phase 1b step 4 item — needs an `og:image` asset decided (recommend the existing hero portrait or a dedicated 1200×630 branded image; will propose options before implementing).

---

## 7. robots.txt and sitemap.xml

**Neither file exists**, and the way they're missing is itself a bug, not just an absence:

- `public/robots.txt` — does not exist.
- `public/sitemap.xml` — does not exist.
- Both Vercel (`vercel.json`) and Apache (`.htaccess`) and Netlify (`_redirects`) are configured with a catch-all SPA rewrite (`/* → /index.html`, 200 status) — **all three hosting configs are present simultaneously**, which itself suggests the deployment target hasn't been finalized and is worth a quick confirmation from the client (which platform is actually live?).
- Because of that catch-all, a request to `/robots.txt` or `/sitemap.xml` **does not 404 — it returns HTTP 200 with the full HTML app shell**, which crawlers/validators try to parse as robots directives or XML. I confirmed this against a local production build:
  - `GET /robots.txt` → `200`, body is the SPA's `<!DOCTYPE html>...`
  - `GET /sitemap.xml` → `200`, same
  - Lighthouse's `robots-txt` audit scored **0**, flagging **21 parsing errors** against this HTML-as-robots.txt response.
- Net effect: crawlers that check `robots.txt` before crawling (this includes GPTBot and most well-behaved AI crawlers) receive garbage instead of either "allow everything" or explicit directives, which is unpredictable — some will fail closed (treat it as blocking) rather than fail open.

This is unambiguous and safe to fix in Phase 1d — genuinely missing files, not a judgment call — **except for one open question that does need your input**: whether to explicitly allow or block AI crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, etc.) in the new `robots.txt`. Per your brief I'll default to allowing all of them unless told otherwise, but want it confirmed given item #1 in the executive summary (the site may not be meant to be publicly visible yet).

---

## 8. Canonical tags

**None present** — no `<link rel="canonical">` anywhere, on any page. Low risk today since there's no URL-parameter pollution or duplicate-path issue on this site, but worth adding as cheap insurance per Phase 1b step 5, and it becomes more important once per-page meta is implemented (finding #2).

---

## 9. Core Web Vitals (Lighthouse, measured against a local production build)

I ran `vite build` (real production bundle, not the dev server) and audited it with Lighthouse 12.8.2 / Chrome headless, both desktop and default (throttled mobile) profiles, against the Home page.

| Metric | Desktop | Mobile (throttled) | Google "Good" threshold |
|---|---|---|---|
| Performance score | 90 | **70** | — |
| Accessibility score | **100** | 100 | — |
| Best Practices score | **100** | 100 | — |
| SEO score | **58** | 58 | — |
| LCP (Largest Contentful Paint) | 2.0 s | **12.7 s** | ≤ 2.5 s |
| FCP (First Contentful Paint) | 0.5 s | 3.0 s | ≤ 1.8 s |
| TBT (Total Blocking Time) | 0 ms | 0 ms | ≤ 200 ms |
| CLS (Cumulative Layout Shift) | 0 | 0 | ≤ 0.1 |
| Time to Interactive | 2.0 s | 12.8 s | — |

**Accessibility (100) and Best Practices (100) are already excellent — genuinely nothing to fix there.** CLS is a perfect 0 and TBT is 0ms on both profiles — the JS is not the bottleneck, layout is stable, animations aren't janky. Good foundation.

**The SEO score of 58 and the mobile LCP of 12.7 seconds are the two real problems, and they have completely different causes:**

- **SEO score (58/100)** is being dragged down almost entirely by the two findings already covered above: `is-crawlable` scored 0 (the `noindex` tag) and `robots-txt` scored 0 (the 21 parsing errors from §7). This will largely self-resolve once §0/#1 and §7 are fixed.
- **Mobile LCP (12.7s — roughly 5× over the "poor" threshold)** is a pure image-weight problem, not a code problem:
  - Home's hero image (`hero_gpt.png`) is a **1.6 MB uncompressed PNG** used as the LCP element.
  - Masterclass's hero (`masterclass_hero.png`) is **1.87 MB**.
  - About, Services, and Contact load their hero portraits directly from Cloudinary with **no transformation parameters** — I checked the raw response sizes and they're **1.9–2.1 MB each**, i.e. worse than the local ones, and this is the easiest of all the fixes: Cloudinary already supports on-the-fly `f_auto,q_auto` (auto format + auto quality) via URL segment with zero re-upload needed.
  - Lighthouse quantifies the recoverable savings directly: **~1.74 MB from switching to a next-gen format (WebP/AVIF)** and **~987 KB from properly sizing images for their display size** (the source files are far larger than the viewport ever renders them).
- JS bundle: 473 KB minified / 144 KB gzipped for the whole site. Not alarming for a marketing site with Framer Motion + Radix + several shadcn/ui primitives, but Lighthouse flags **~71 KB of unused JavaScript** — worth a quick check of whether all the imported shadcn/ui components (`calendar`, `carousel`, `chart`, `command`, `sidebar`, `input-otp`, etc. — I count roughly 30 UI primitives in `src/app/components/ui/`) are actually used anywhere; several look like scaffolding that shipped but was never wired up.
- Other Lighthouse call-outs, all image/loading related and consistent with the above: preconnect to the Cloudinary origin is missing, and the LCP image isn't preloaded or given `fetchpriority="high"` on any of the four pages that need it (Home's `AboutCarousel` already does this correctly for its own carousel — see [Home.tsx:748](src/app/pages/Home.tsx#L748) — but the *hero* image, which is the actual LCP element, does not).

This is squarely a Phase 1d item ("Compress images... WebP where supported, proper sizing... preload critical fonts"), and it's the single highest-impact, lowest-controversy fix in this entire audit — no copy changes, no legal review, just image pipeline work. I'd suggest prioritizing it early once Phase 1b/1c are approved.

I did not run Lighthouse against the other 4 routes individually — given they share the same architecture and the same class of hero-image problem (confirmed by direct file-size checks above), a full run on each would be redundant for the audit stage. I'll spot-check the worst offender (Masterclass, 1.87MB hero) after the image fix ships, per your "verify after each phase" instruction.

---

## 10. Mobile responsiveness

Nothing broken found. Every page uses a consistent, deliberate responsive system (`sm:`/`md:`/`lg:` Tailwind breakpoints, `100svh` hero sections that account for mobile browser chrome, a hamburger nav below `lg:`). Lighthouse's mobile-specific checks (tap target sizing, viewport meta, font legibility) all passed at 100 on Best Practices/Accessibility. The only mobile-relevant issue is the LCP/image-weight problem above, which hits mobile users hardest because of network throttling — not a layout issue.

---

## 11. Broken links / redirect chains

Checked every internal route (all resolve; no 404s possible outside the 5 defined paths) and every external URL referenced in the source against live HTTP status:

| URL | Status | Notes |
|---|---|---|
| `study.successwithsuman.com/l/f61fd9d4a1` (main booking CTA, used site-wide) | 200 | OK |
| `study.successwithsuman.com/l/761127c3c3` (Doctor's ebook) | 200 | OK |
| `study.successwithsuman.com/l/4680b1ea47` (Wealth Blueprint ebook) | 200 | OK |
| `study.successwithsuman.com/l/daec3d3416` (Infinite Wealth Hub) | 200 | OK |
| `amzn.in/d/0j7pyzSC` ("I Will Never Die" book) | 200 | OK |
| `instagram.com/successwithsuman` | 200 | OK |
| `trustpilot.com/review/successwithsuman.com` | **403** | Trustpilot blocks automated/non-browser requests generically (common bot-protection behavior) — this is very likely *not* actually broken, but I could not confirm it resolves for real visitors from an automated check. Recommend a quick manual click-check rather than treating this as confirmed-broken. |

No redirect chains detected (every URL above resolved directly, no multi-hop redirects observed). No internally broken links found.

---

## 12. HTTPS & security headers

- Could not verify live HTTPS status directly — I don't have a confirmed live production URL (see the multi-host-config note in §7), so this needs a live-site check once we know which of Vercel/Apache/Netlify is actually serving traffic. Vercel and Netlify both provision HTTPS by default automatically if that's the live target; a traditional Apache host (the `.htaccess` file implies one exists or existed) would need to be confirmed manually.
- **No security headers configured anywhere** — neither `vercel.json` nor `.htaccess` sets HSTS, `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, or `Referrer-Policy`. This is a from-scratch addition, flagged per Phase 1d scope. CSP in particular needs care here given the site loads Google Fonts, Cloudinary images/videos, and external iframes/embeds are not currently used — I'll propose a specific policy rather than a generic one once we're in that phase, since a wrong CSP can silently break the Framer Motion/Radix-driven UI.

---

## 13. Tracking / analytics currently installed

**None.** No Google Analytics, GTM, Meta Pixel, Clarity, Hotjar, or any other tracking snippet exists anywhere in `index.html` or the component tree. Per your instructions, I will not add any without asking first — flagging only because "what's currently installed" was explicitly requested, and the honest answer is nothing, which also means there's currently no way to measure whether any of this optimization work moves real traffic/conversions.

---

## 14. Accessibility (WCAG AA)

Lighthouse's automated accessibility check scored **100/100** on both profiles, and manual review didn't surface anything beyond that:

- All interactive controls (carousel arrows, FAQ accordion, mobile menu toggle, video play buttons) have proper `aria-label`s.
- Focus states are visible (`focus:ring-2` pattern used consistently via the shared `Button` component).
- No color-contrast failures flagged (the violet-on-white / white-on-violet palette clears AA).
- `prefers-reduced-motion` is explicitly respected in the Home carousel ([Home.tsx:652-655](src/app/pages/Home.tsx#L652-L655)) — a nice touch most sites skip.
- One gap Lighthouse's automated check won't catch: the three video testimonials on Masterclass ([Masterclass.tsx:103-107](src/app/pages/Masterclass.tsx#L103-L107)) have no captions or transcripts. Not a WCAG AA failure trigger by itself (captions are typically a AA requirement for *prerecorded synchronized media that also conveys essential info*, which testimonial video plausibly does), and it's also a missed AI-extractability opportunity — transcript text is exactly the kind of content LLM answer engines can quote. Worth a look in Phase 1e.

---

## 15. YMYL / regulated-content flags (per your compliance brief)

This is the section I want the most explicit sign-off on before any content changes happen — I have not edited any of this copy, only located and quoted it.

### Regulated terminology
- **"Financial Planning" is marketed as one of four named service pillars** on the Masterclass page: *"Financial Planning — Your full financial picture in one map: income, expenses, taxes, goals, risks. The CFO view of your life."* ([Masterclass.tsx:32-38](src/app/pages/Masterclass.tsx#L32-L38)), with sub-bullets "Cash flow architecture," "Goal-based roadmap," "Annual strategy reviews."
- The only two credentials shown anywhere on the site are **IRDA** (Insurance Regulatory and Development Authority — licenses insurance *sales*) and **AMFI** (Association of Mutual Funds in India — registers mutual fund *distributors*). Neither is a **SEBI Registered Investment Adviser (RIA)** registration, which is what India's Investment Advisers Regulations, 2013 require to legally use "financial planning" or "investment advice" language in connection with a paid advisory offering. IRDA/AMFI let someone sell and earn commission on insurance and mutual fund products; they don't license fee-based financial planning or advice.
- Related, lower-priority softer language that leans the same direction and should get the same review: "Personal CFO," "I architect systems," "wealth architecture," "goal-based roadmap." Individually these read as brand positioning rather than a regulated-service claim, but collectively they reinforce an advisory posture the credentials don't cover.
- One instance of "financial planning and Wealth management" appears **inside a client testimonial quote** (Home and Masterclass, same quote) — that's the client's own words being reported, not brand copy, so I'm not treating it the same way, but it does compound the overall impression given it's presented directly under/near the "Financial Planning" service claim.
- **I have not changed or suggested changing any of this wording.** Flagging per your brief; this needs a decision from whoever handles compliance (drop the "Financial Planning" framing in favor of language that matches the actual license scope, or pursue RIA registration, or get a compliance opinion that current phrasing is fine as-is). I'm not qualified to make that call and won't touch the copy without explicit instruction either way.

### Missing legal pages
- **No Privacy Policy** page or route exists.
- **No Terms of Service** page or route exists.
- **No financial/investment disclaimer** exists anywhere on the site (no "past performance is not indicative of future results," no "this is not investment advice," no risk disclosure of any kind) — notably absent given the site discusses mutual funds, PMS, NPS, equity/ETFs, and insurance products by name.
- The contact form collects name, email, phone, and a free-text message with no privacy notice, no consent checkbox, and — separately, not a compliance issue but worth flagging while I'm in this file — **the form has no backend**: `handleSubmit` just calls `e.preventDefault()` and flips a local `submitted` state ([Contact.tsx:29-32](src/app/pages/Contact.tsx#L29-L32)). No data is actually sent anywhere. That's outside SEO scope but is exactly the kind of thing that erodes trust if a real visitor notices — flagging once, won't chase further unless you want it in scope.
- The footer's own microcopy claims "Your details stay private. No newsletters, no third-party sharing" ([Contact.tsx:200-202](src/app/pages/Contact.tsx#L200-L202)) — a privacy *promise* with no privacy *policy* backing it up, and currently not even a functioning form to make the promise moot.

### Unsubstantiated claims / guarantees / income promises
- No explicit guarantees or income promises found (good — no "guaranteed returns," no "X% CAGR," no "become a crorepati" style claims anywhere in the copy I read).
- "The Best Wealth Coach" in the site `<title>` (§2) is a bare superlative with no substantiation offered anywhere on the page it's attached to — low severity, but it's the literal text search engines and AI answer engines will quote back, so it's worth a second look given everything else in this section.
- The "4.8★ Trustpilot rating" and testimonial star ratings are addressed in §4 above — the concern there is schema-markup eligibility and currency of the number, not the claim's existence on the page itself (displaying a real, current rating as plain text is fine; marking it up as schema without verification is the risk).
- Stats like "2,095+ professionals advised," "19+ years," "7,000+ hours of training," "Top 100 Speakers of India" are presented as factual credentials throughout. I have no way to verify these and won't be marking any of them up in `Person`/`Organization` schema (Phase 1c) without your confirmation that they're current and accurate, since structured-data markup is a stronger, more machine-trusted claim than the same text sitting in a hero section.

---

## What I'd suggest doing next

This document is the full Phase 1a deliverable — no code has been changed as part of this audit beyond what was already in flight from the favicon work earlier in this session. Before I touch anything in Phase 1b, I need decisions on:

1. **Should the site actually be indexed right now?** (removes the site-wide `noindex`)
2. **AI crawler policy** for the new `robots.txt` — allow all (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, etc.) per your stated default, or exclude any?
3. **Which hosting target is actually live** — Vercel, Netlify, or Apache — so security headers and redirect config land in the right place instead of three places.
4. **"Financial Planning" / advisory-language framing** — compliance call, not mine to make.
5. **Confirm the Trustpilot 4.4 rating and the three quoted reviews are current and genuine** before I mark them up as schema.
6. A decision on the client-side-routing/no-SSR architecture question in finding #2 — I'll come back with 2-3 concrete options (a lightweight per-route head manager vs. static prerendering vs. leaving as-is and accepting the AI-crawler visibility ceiling) sized for effort/impact once you've had a chance to read this.

Once those are resolved I'll write up the specific Phase 1b proposal (exact title/description copy per page, alt text rewrites, OG assets) for approval before making any changes, per your working rhythm.
