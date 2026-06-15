---
name: rosario-levine-design
description: Use this skill to generate well-branded interfaces and assets for Rosario Levine's artist portfolio website. Contains design guidelines, color tokens, typography, and UI kit components for a dark-aesthetic, gallery-focused portfolio featuring painting and sculpture.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

## Key design principles

- **Background**: `--color-bg` (deep warm near-black) — artwork is always the hero
- **Display type**: Cormorant serif — artist name, titles, headers; often italic + light weight
- **UI type**: DM Sans — navigation, filters, metadata, body; always upright; ALL CAPS + wide tracking for labels
- **No corner radius** (except filter chip pills), **no shadows**, **no decorative elements**
- **Gallery grid**: 3px gaps, square tiles (1:1 aspect ratio), full-bleed images
- **Hover**: image scales 1.04×, gradient overlay fades in, title slides up
- **Filters**: Painting / Sculpture (primary tabs) + thematic tags (secondary pills)
- **Lightbox**: full-screen fixed overlay, prev/next arrows, title + medium in bottom bar
- **Copy**: minimal, restrained, third-person bio; "Get in touch" not "Contact me"
- **Emoji / icons**: never — text + Unicode arrows only (↗ ← →)

## Pages
1. **Gallery** — filter bar + image grid
2. **About** — split layout: portrait image left, bio text right
3. **Contact** — centered form, minimal fields

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
