/**
 * Uniform CSS Grid wrapper for ArtworkCard tiles.
 * Responsive column count should be handled externally
 * (CSS media queries or JS) by passing the right `columns` value.
 */
export interface GalleryGridProps {
  /** ArtworkCard elements */
  children: React.ReactNode;
  /** Number of columns — default 3 */
  columns?: number;
  /** Gap in px between cells — default 3 */
  gap?: number;
}
