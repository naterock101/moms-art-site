ROSARIO LEVINE — WEBSITE
========================

This folder is a complete, self-contained website. Everything it needs is inside
it (no build step, no framework to install).

  site/
  ├─ index.html              ← the whole site (Home, Painting, Sculpture, About, Contact)
  ├─ styles.css              ← colors, type, spacing
  └─ assets/artworks/        ← the artwork images


-------------------------------------------------------------------------------
HOW TO RUN IT LOCALLY
-------------------------------------------------------------------------------

Easiest — just open it:
  • Double-click "index.html". It opens in your browser. Done.

Recommended — run a tiny local server (behaves exactly like a real website):
  1. Open Terminal (Mac) or Command Prompt (Windows).
  2. Move into this folder, e.g.:   cd path/to/site
  3. Start a server:
        Python 3:   python3 -m http.server 8000
        (or)  Node: npx serve
  4. Open your browser to:   http://localhost:8000

Note: the site loads its fonts (Cormorant + DM Sans) from Google Fonts, so it
looks best with an internet connection. Offline, it still works — it just falls
back to your system's serif/sans fonts.


-------------------------------------------------------------------------------
HOW TO CUSTOMIZE
-------------------------------------------------------------------------------

All edits are in index.html. Open it in any text editor.

• ARTWORK — find the "WORKS" list near the bottom (inside <script>). Each line is
  one piece: title, medium, category ('painting' or 'sculpture'), and image file.
  Replace the titles/mediums with the real ones, and drop new photos into
  assets/artworks/ then point to them.

• ABOUT IMAGE — currently a painting (Lily Pond) stands in for a portrait. To use
  a real photo of Rosario, add it to assets/artworks/ and change the PORTRAIT line.

• CONTACT FORM — by default "Send" opens the visitor's email app addressed to
  rosario@rosariolevine.com. To have messages emailed automatically instead, sign
  up for a free form service (Formspree or Web3Forms), then paste its endpoint
  into the FORM_ENDPOINT line near the bottom of index.html. That's the only change.


-------------------------------------------------------------------------------
HOW TO PUT IT ONLINE
-------------------------------------------------------------------------------

This is a standard static site, so any host works. The simplest:
  • Netlify  — go to app.netlify.com/drop and drag this whole folder onto the page.
  • Vercel, Cloudflare Pages, GitHub Pages — all work the same way.

Your domain (rosariolevine.com) can then be pointed at the new host when ready.
