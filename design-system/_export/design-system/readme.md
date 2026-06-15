# Rosario Levine — Design System

A design system for the redesigned **rosariolevine.com** — an artist portfolio website featuring the paintings and sculptures of Rosario Levine.

---

## Sources

- **Current website**: https://www.rosariolevine.com (Wix, 2016)
- **Gallery pages scraped**: `/galleries`, `/paintings`, `/sculpture`, `/mixed-combos`, `/copy-of-sculptures-under-8-inches`, `/copy-of-sculptures-color-and-form`
- **Design reference**: https://www.jamesjean.com (full-screen gallery, minimal nav)
- **Instagram**: https://www.instagram.com/rosariolevine/

> Note: The Wix site renders images via JavaScript. Actual artwork photography must be provided by the client. The UI kit uses placeholder images from picsum.photos for layout demonstration.

---

## About the Artist

Rosario Levine is a visual artist working in both **painting** and **sculpture**. Her portfolio spans:

- **Paintings** — Oil, acrylic, and mixed media on canvas, linen, and panel
- **Sculptures** — From intimate glazed ceramic studies (sub-8") to large-scale welded steel and bronze works

The previous site organized work by themed galleries ("Focus on form", "Surface texture and color", "Playing with color", "Pretty big"). The redesign simplifies this to a two-level filter system:
- **Primary**: Painting | Sculpture
- **Secondary thematic tags**: Abstract · Figurative · Color Study · Form · Surface & Texture · Large Scale · Small Works

---

## CONTENT FUNDAMENTALS

**Tone**: Contemplative, restrained, direct. The work speaks; copy stays out of the way.

**Voice**: Third-person in bio/about. Formal but not cold. Never enthusiastic or promotional.

**Casing rules**:
- Artist name: "Rosario Levine" (sentence case — never ALL CAPS)
- Nav links: rendered ALL CAPS with wide letter-spacing (a CSS decision, not a copy decision)
- Artwork titles: Title Case, always in italic Cormorant
- Medium: lowercase ("oil on canvas", "welded steel", "glazed ceramic")
- Year: plain four-digit ("2023")

**Artwork label format**: *Title* · medium · year

**Emoji**: Never.

**Examples**:
- Navigation: `PAINTING  SCULPTURE  ABOUT  CONTACT  IG ↗`
- Artwork hover: *Morning Light* `·` oil on canvas `·` 2023
- CTA copy: "Get in touch" — never "Contact Me!" or similar
- Instagram link: "Instagram ↗" (no icon — text + arrow only)

---

## VISUAL FOUNDATIONS

### Colors

Dark, warm background palette. The darkness ensures artwork images pop without UI competition.

| Token | Role |
|---|---|
| `--color-bg` | Page background — deep warm near-black |
| `--color-surface` | Image placeholders, raised surfaces |
| `--color-surface-2` | Further-raised elements |
| `--color-border-subtle` | Hairline dividers (nav, filter bar) |
| `--color-border` | Standard borders (form fields, chips) |
| `--color-text-1` | Primary text — warm white |
| `--color-text-2` | Secondary text, body copy |
| `--color-text-3` | Muted / disabled / nav inactive |
| `--color-accent` | Warm amber — editorial highlights only |

### Typography

Two typefaces only. No mixing beyond these.

- **`--font-display` → Cormorant** (Google Fonts, open-source)
  Used for: artist name, artwork titles, page headers (About, Contact).
  Treatment: light (300) or regular (400) weight, almost always italic for titles.
  Evokes classical art-world refinement without feeling dated.

- **`--font-ui` → DM Sans** (Google Fonts, open-source)
  Used for: navigation, filter labels, metadata, body text, form fields.
  Treatment: 300–400 weight, always upright. ALL CAPS + wide tracking for nav/labels.

### Spacing

8px base unit. The gallery grid uses 3px gaps (tight, like a film contact sheet). Page gutter scales: 16px mobile → 56px wide desktop.

Key layout constants:
- `--nav-height: 64px` (fixed header)
- `--filter-height: 48px` (sticky filter bar)
- `--chrome-height: 112px` (combined offset for content)

### Backgrounds

Pure dark (`--color-bg`) only. No patterns, textures, or gradients as backgrounds. Artwork images are the only visual texture on the page.

### Animation

| Use case | Duration | Easing |
|---|---|---|
| Nav link color | 160ms | ease-out |
| Overlay reveal | 300ms | ease-out |
| Image scale on hover | 600ms | ease-gallery (0.25, 0.46, 0.45, 0.94) |
| Page fade-in | 300ms | ease |

No infinite decorative loops. No bounces. Motion should feel slow and intentional — like turning a page in a catalog.

### Hover States

- **Nav links**: `text-3` → `text-1`, underline appears
- **Artwork cards**: image scales 1.04×, dark gradient overlay fades in, title+medium slide up
- **Buttons**: opacity shift or background inversion
- **Filter chips**: full border+background swap

### Borders

Hairline (1px) only. Never decorative. `--color-border-subtle` for layout dividers; `--color-border` for interactive elements.

### Shadows

None. The dark background provides natural depth.

### Corner Radius

Zero (`--radius-none: 0`) throughout. The only exception: filter chip pills (`--radius-pill: 9999px`).

### Cards

No card style. Artwork tiles are images with a hover overlay — no background, no border, no shadow.

### Layout

- Fixed header + sticky filter bar = 112px of chrome
- Gallery fills the full viewport width with a 3px grid gap
- Max-width: none — the grid goes edge-to-edge
- Lightbox: `position:fixed; inset:0` overlay

### Transparency & Blur

Used sparingly:
- **Header on scroll**: `backdrop-filter: blur(16px)` + `oklch(7.5% … / 0.93)` semi-transparent background
- **Artwork overlay**: `linear-gradient(to top, rgba … 0%, transparent 55%)` on hover

### Imagery

Full-bleed, no borders, no drop shadows, no matting. The dark background is neutral enough to work with warm earthy paintings and cool industrial sculpture photography alike.

---

## ICONOGRAPHY

No icon system. Plain text and Unicode only:

| Symbol | Use |
|---|---|
| `↗` | External links (Instagram, any offsite link) |
| `←` / `→` | Lightbox previous / next navigation |

No SVG icons, no icon fonts, no emoji. Restraint is the aesthetic.

---

## FILES INDEX

### Tokens (`tokens/`)
- `colors.css` — Full color system (backgrounds, text, accent)
- `typography.css` — Google Fonts import + type tokens
- `spacing.css` — Spacing scale + layout dimensions
- `effects.css` — Transitions, easing curves, overlays, shadows

### Foundation Cards (`guidelines/`)
Design System tab → Colors / Type / Spacing / Brand

- `colors-dark.card.html` — Background & surface swatches
- `colors-text.card.html` — Text levels and accent
- `type-display.card.html` — Cormorant specimens
- `type-ui.card.html` — DM Sans specimens
- `type-scale.card.html` — Full size scale
- `spacing.card.html` — Spacing scale visualization
- `effects.card.html` — Motion tokens and easing
- `brand-name.card.html` — Artist name treatment

### Components
- `components/navigation/Header.jsx` — Fixed top nav with scroll-blur
- `components/filters/FilterBar.jsx` — Primary + secondary filter bar
- `components/filters/FilterChip.jsx` — Single toggleable filter pill
- `components/gallery/ArtworkCard.jsx` — Image tile with hover reveal
- `components/gallery/GalleryGrid.jsx` — CSS Grid wrapper
- `components/ui/Button.jsx` — Primary / secondary / ghost buttons
- `components/ui/Tag.jsx` — Category label badge

### UI Kit (`ui_kits/artist_website/`)
- `index.html` — Interactive prototype with gallery, lightbox, about, and contact pages

### Templates (`templates/artist-portfolio/`)
- `index.html` — Starting point for consuming projects
- `ds-base.js` — Design system loader script

---

*Design system built June 2026.*
