/**
 * Fixed site header with artist name (left) and navigation links (right).
 * Switches to a frosted-glass treatment when the page scrolls.
 * Listens on the element with id="main-scroll" or falls back to window.
 *
 * @startingPoint section="Navigation" subtitle="Fixed top nav for artist portfolio" viewport="1440x64"
 */
export interface HeaderProps {
  /** Currently highlighted page — underlines the matching link */
  activePage?: 'gallery' | 'painting' | 'sculpture' | 'about' | 'contact';
  /** Fired when any nav link is clicked; receives the target page id */
  onNavigate?: (page: string) => void;
}
