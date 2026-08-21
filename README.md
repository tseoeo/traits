# traits by lozeva

A single self-contained static site: plain HTML, CSS, and a small amount of vanilla
JavaScript. No framework, no build step, no npm. It is deployed to GitHub Pages straight
from the repository root — what is in the repo is what is served.

## What's here

- **`index.html`** — the whole site. Markup, styles, and behaviour live in this one file
  (inline `<style>` and `<script>`), so there is nothing to compile. It covers the portrait
  gallery, a personal / corporate category toggle, a single-photo lightbox, the booking
  section, and a Bulgarian ↔ English language toggle.
- **`photos/personal/`** — 122 portraits, `p001.jpg`–`p122.jpg`.
- **`photos/corporate/`** — 121 portraits, `p001.jpg`–`p121.jpg`.
  Both folders hold low-resolution, face-cropped, black-and-white thumbnails at 360×480.
- **`assets/traits-mark.png`** — the logo.
- **`.github/workflows/deploy-pages.yml`** and **`.nojekyll`** — the Pages deploy. The
  workflow publishes the repository root on every push to `main`; `.nojekyll` tells Pages to
  serve the files as-is rather than running them through Jekyll.

## Swapping in the real photos

**The personal / corporate split is an arbitrary placeholder.** The 243 portraits were
divided into two folders purely to give each category something to show — the grouping
carries no meaning, and nothing distinguishes a "personal" portrait from a "corporate" one.
The photographer will replace them with the real sets.

To swap a category, replace the files in its folder and keep the naming convention:
sequential, zero-padded to three digits, starting at `p001.jpg`, with no gaps.

Then update the count. **The per-category counts are declared once, in the `GALLERIES`
object in `index.html`** — that is the single place to edit when the number of photos
changes, and the only edit the swap requires:

```js
const GALLERIES = { personal: 122, corporate: 121 };
```

## Enabling GitHub Pages

A deploy workflow is included at `.github/workflows/deploy-pages.yml`.

1. Merge this branch into `main`.
2. In the repo, go to **Settings → Pages → Build and deployment** and set
   **Source** to **GitHub Actions**.
3. The workflow publishes the repo root on every push to `main`. The site URL
   appears in the workflow run and under Settings → Pages.

Prefer "Deploy from a branch"? That works too — point it at `main` / root
(`.nojekyll` is included so the files are served as-is).

## Running locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Notes and placeholders

Several things in the site are deliberately provisional and need real values before launch:

- **The About paragraph and the exhibition list are now neutral placeholders.** The earlier
  invented copy (a fabricated birth year, career length, archive size, and six exhibitions at
  named real institutions) has been removed in both languages. What ships now says only that
  a biography and an exhibition list are to follow. **Do not re-introduce invented facts** —
  replace these with verified text supplied by the photographer.
- **The personal / corporate photo split is arbitrary** — see above.
- **The booking link is real:** `https://calendly.com/traits/traits-studio`. It lives in the
  `CALENDLY_URL` constant in `index.html`, which rewrites both the widget `data-url` and the
  no-JS fallback link at runtime — edit that one constant, not the markup.
- **There is no working email address yet.** `traitsbylozeva.com` has no MX record, so every
  contact route points at Instagram instead. Set the `CONTACT_EMAIL` constant in `index.html`
  to a real address and all `[data-contact]` links revert to `mailto:` automatically; the
  surrounding copy (`formFallback`, `successBody`, `successMail`) is worth revisiting then too.
- **The corporate enquiry form does not submit anywhere.** It validates input and shows a
  success state, but sends nothing. A single commented `submitEnquiry()` function is left as
  the seam for wiring a real endpoint — that is the only change needed to make it live. The
  success copy no longer claims the enquiry was received; it points at Instagram instead.
- **`#vouchers` had no target**, so the footer button now points at Instagram until a real
  vouchers page exists.
- **Session price and duration are deliberately not published on the site.** They are live on
  Calendly; putting them on the page is the photographer's commercial decision.

Instagram — **`https://www.instagram.com/traits.lozeva/`** — is confirmed and correct. It is
not a placeholder; leave it as it is.
