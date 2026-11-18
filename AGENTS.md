# AGENTS.md — GARISDev3

Static rebuild of GARISDev company profile page, mirroring the visual language of POFO "Classic Innovation Agency" (home-classic-innovation-agency.html) while using verified content from GARISDev v1 and v2.

## Source of Truth & Session Start Order

1. `..\GARISDev2\src\lib\data.ts` — All Indonesian copy, clients, strategic projects, core services, flagship products, SPORTIF values, tech capabilities.
2. `..\GARISDev\AGENTS.md` — Verified corporate facts (NIB, NPWP, SIUP, address, phone, legal entity).
3. `C:\Users\Solit\Project\jfx_demo2\home-classic-innovation-agency.html` — Exact layout, section order, typography scale, spacing, hover treatments, card design.
4. `C:\Users\Solit\Project\jfx_demo2\css\style.css` — Reference tokens, fonts, button styles, card shadows, aksen color rules.

## Tech Stack (Static HTML/CSS)

- One single `index.html`
- `css/style.css`
- `js/main.js` (minimal smooth scroll + active menu)
- All assets from `..\GARISDev\public\assets\` and `..\GARISDev2\public\assets\`

**Do NOT** use Next.js, React, Tailwind, Framer Motion, Lenis, or any framework. The page must be a direct port of the reference HTML.

## Design & Visual Rules (Non-Negotiable)

- **Hero**: Full-screen parallax background (use `rapat-instansi-korporat-2.png` or similar). Right-side panel with white/transparent overlay. H1 in Montserrat, brand purple accent (#5B21B6).
- **Section spacing**: 80px–120px vertical gaps (match POFO).
- **Headings**: All h1–h5 maximum 2 lines on mobile 390px, tablet 768px, desktop 1440px.
- **Cards**: White with soft box-shadow (no border), radius 6px.
- **Aksen color**: Strictly `#5B21B6` (GARISDev purple). Never use pink from reference.
- **Fonts**: Montserrat for headings, Roboto for body (14px / 24px line-height).
- **CTA**: Every primary button downloads `company-profile-garisdev-2026.pdf` from `../public/documents/`.
- **Motion**: Transitions ≤ 350ms, active press `scale(0.97)`, honor `prefers-reduced-motion`.
- **Contrast**: Body text ≥ 4.5:1 ratio.

## Section Mapping (9 sections — all content from v1/v2 data)

1. Hero (parallax + panel)
2. About / Intro + 3 feature boxes (layanan)
3. Parallax band + 4 feature cards (services)
4. Numbered achievements (keunggulan)
5. Portfolio / Client grid (clients + strategic projects)
6. Vision / Split text + image
7. **Interlude Kutipan** (use `SectionInterlude.tsx` from v1)
8. SPORTIF Values band
9. Footer + Contact + PDF download

**Do not include** any section that does not exist in v1/v2 data: no team, no testimonials, no blog.

## Asset Rules

- All photos, logos, and the PDF must come from `..\GARISDev\public\assets\` and `..\GARISDev2\public\assets\`.
- `assets/ref/` and paid POFO theme images are for visual reference only — do not claim them as your own.

## Verification

- Open `index.html` directly in browser.
- Check layout, spacing, and contrast at viewport 390px, 768px, and 1440px.
- No build step required.

## Commands

```bash
# Serve static site
python -m http.server 8000
# or
npx serve .
```

Now create the actual `AGENTS.md` in the workspace.