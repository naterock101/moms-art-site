// templates/artist-portfolio/ds-base.js
// Loads the Rosario Levine Design System into any page.
//
// If using in a consuming project, update `base` to point to
// the _ds/<folder> directory relative to this file, e.g:
//   const base = '../../_ds/rosario-levine-design-system';
(() => {
  const base = '../..'; // points to DS root when previewing here

  // Global CSS (tokens + fonts)
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }

  // Component bundle (React must already be in scope)
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error(
    'ds-base.js: failed to load ' + s.src +
    ' — update the `base` path to your _ds/<folder> if in a consuming project'
  );
  document.head.appendChild(s);
})();
