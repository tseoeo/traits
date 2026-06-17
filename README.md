# traits by lozeva — design explorer

A small GitHub Pages site that previews the **traits by lozeva** site explorations
interactively — the same way they look in Claude Design. Each preview is the real
prototype page, rendered live in a frame, with a desktop/mobile device toggle.

## What's here

- **`index.html`** — the explorer. Pick an option from the rail and it loads live
  in the stage; toggle Desktop / Mobile, or open any page full-screen.
- **`designs/`** — the prototypes exported from Claude Design (unchanged):
  - `00-Three-Options.dc.html` — side-by-side overview of all three options
  - `02-The-Wall.dc.html` — gallery-at-night contact-sheet wall, banded by year
  - `04-The-Stream.dc.html` — warm-paper continuous current of faces
  - `05-The-Reel.dc.html` — lightbox-black film strip you scrub through time
  - `06-On-Mobile.dc.html` — all three at true phone width
  - `support.js` — the Claude Design runtime (renders the `.dc.html` files;
    auto-loads React from a CDN)
  - `sitters.js` — the placeholder dataset of 1,412 invented sitter records
  - `assets/` — the logo marks

> The `.dc.html` files render via JavaScript and pull React from a CDN, so they
> must be served over **HTTP** (GitHub Pages, or any local web server) — opening
> them from `file://` won't work.

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

## Notes

All names, venues, exhibitions, dates, and the 1,412-record dataset are invented
placeholders. The `#book` / `#vouchers` links are entry-point stubs, and
`hello@traitsbylozeva.com` is a placeholder address — wire them to the real
booking, voucher checkout, and inbox when ready.
