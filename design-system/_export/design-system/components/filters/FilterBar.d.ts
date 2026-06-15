/**
 * Dual-level filter bar for the gallery.
 * Primary tabs (All / Painting / Sculpture) on the left;
 * secondary thematic pill-tags (scrollable) on the right.
 */
export interface FilterBarProps {
  /** Active primary filter */
  primaryFilter?: 'all' | 'painting' | 'sculpture';
  /** Called with new primary filter id */
  onPrimaryChange?: (id: string) => void;
  /** List of secondary thematic tags */
  secondaryFilters?: Array<{ id: string; label: string }>;
  /** Currently toggled secondary tag ids */
  activeTags?: string[];
  /** Called with the toggled tag id */
  onTagToggle?: (id: string) => void;
}
