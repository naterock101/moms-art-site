/**
 * Small semantic category label — 'painting' (cool blue tint),
 * 'sculpture' (warm amber tint), or neutral default.
 */
export interface TagProps {
  /** Display text */
  label: string;
  /** Color variant */
  category?: 'painting' | 'sculpture' | string;
}
