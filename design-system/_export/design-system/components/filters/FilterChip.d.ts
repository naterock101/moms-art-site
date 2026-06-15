/**
 * A single toggleable pill-shaped filter tag.
 * Compose inside FilterBar or use standalone.
 */
export interface FilterChipProps {
  /** Display label */
  label: string;
  /** Whether the chip is currently selected */
  active?: boolean;
  /** Toggle handler */
  onClick?: () => void;
}
