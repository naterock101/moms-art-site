import React from 'react';

/**
 * CSS Grid container for ArtworkCard tiles.
 * Responsive columns via the `columns` prop; tight 3 px gap.
 */
export function GalleryGrid({ children, columns = 3, gap = 3 }) {
  return (
    <div style={{
      display:             'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap:                 `${gap}px`,
      padding:             `${gap}px`,
    }}>
      {children}
    </div>
  );
}
