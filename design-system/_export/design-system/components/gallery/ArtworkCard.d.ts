/**
 * Gallery tile for a single artwork.
 * Uniform aspect ratio (default square); hover reveals title and metadata
 * with a smooth scale + gradient overlay.
 *
 * @startingPoint section="Gallery" subtitle="Image tile with hover reveal" viewport="400x400"
 */
export interface ArtworkCardProps {
  /** Image URL */
  src: string;
  /** Alt text (falls back to title) */
  alt?: string;
  /** Artwork title — italic serif in overlay */
  title?: string;
  /** Medium string e.g. "Oil on canvas" */
  medium?: string;
  /** Year string e.g. "2023" */
  year?: string;
  /** CSS aspect-ratio value — default "1 / 1" */
  aspectRatio?: string;
  /** Click handler — use to open a lightbox */
  onClick?: () => void;
}
