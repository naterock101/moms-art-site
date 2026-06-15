/**
 * Minimal text button. Three variants: primary (filled), secondary (outlined), ghost (text).
 * All-caps tracking; no border-radius — matches the gallery's sharp aesthetic.
 *
 * @startingPoint section="UI" subtitle="Primary, secondary and ghost buttons" viewport="700x100"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual treatment */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Size scale */
  size?: 'sm' | 'md' | 'lg';
  /** Click handler */
  onClick?: () => void;
  /** Render as anchor */
  href?: string;
  /** Disabled state */
  disabled?: boolean;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
}
