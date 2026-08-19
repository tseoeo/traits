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

- **The About paragraph and the exhibition list are invented placeholder copy**, generated as
  filler while the layout was designed. They read plausibly, which is precisely what makes
  them a hazard — they are not verified biography and must not be treated as fact. They are
  marked in `index.html` with `<!-- PLACEHOLDER COPY — awaiting real text -->` comments so
  they are easy to find. Awaiting real text.
- **The personal / corporate photo split is arbitrary** — see above.
- **The booking link `https://calendly.com/traitsbylozeva/sitting` is a placeholder URL.**
  Swap it for the real scheduling link.
- **`hello@traitsbylozeva.com` is a placeholder address.** Point it at the real inbox.
- **The corporate enquiry form does not submit anywhere.** It validates input and shows a
  success state, but sends nothing. A single commented `submitEnquiry()` function is left as
  the seam for wiring a real endpoint — that is the only change needed to make it live.
- **`#vouchers` is a stub** and links nowhere yet.

Instagram — **`https://www.instagram.com/traits.lozeva/`** — is confirmed and correct. It is
not a placeholder; leave it as it is.
