/* @ds-bundle: {"format":3,"namespace":"RosarioLevineDesignSystem_be1c33","components":[{"name":"FilterBar","sourcePath":"components/filters/FilterBar.jsx"},{"name":"FilterChip","sourcePath":"components/filters/FilterChip.jsx"},{"name":"ArtworkCard","sourcePath":"components/gallery/ArtworkCard.jsx"},{"name":"GalleryGrid","sourcePath":"components/gallery/GalleryGrid.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"Button","sourcePath":"components/ui/Button.jsx"},{"name":"Tag","sourcePath":"components/ui/Tag.jsx"}],"sourceHashes":{"components/filters/FilterBar.jsx":"21af0739d5ae","components/filters/FilterChip.jsx":"675886e9459b","components/gallery/ArtworkCard.jsx":"6c18ad7c8b96","components/gallery/GalleryGrid.jsx":"6f009bd6d3ba","components/navigation/Header.jsx":"0fca81943739","components/ui/Button.jsx":"f7029486c755","components/ui/Tag.jsx":"bbd2753b860f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RosarioLevineDesignSystem_be1c33 = window.RosarioLevineDesignSystem_be1c33 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/filters/FilterBar.jsx
try { (() => {
function FilterBar({
  primaryFilter = 'all',
  onPrimaryChange,
  secondaryFilters = [],
  activeTags = [],
  onTagToggle
}) {
  const primary = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'painting',
    label: 'Painting'
  }, {
    id: 'sculpture',
    label: 'Sculpture'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 'var(--filter-height, 48px)',
      padding: '0 var(--page-gutter, 40px)',
      gap: '24px',
      background: 'var(--color-bg, #0C0B09)',
      borderBottom: '1px solid var(--color-border-subtle, #181612)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      flexShrink: 0
    }
  }, primary.map(({
    id,
    label
  }) => {
    const active = primaryFilter === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onPrimaryChange?.(id),
      style: {
        background: 'none',
        border: 'none',
        padding: '0 0 3px',
        fontFamily: 'var(--font-ui, DM Sans, sans-serif)',
        fontSize: '10px',
        fontWeight: 400,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        color: active ? 'var(--color-text-1, #EDE8E0)' : 'var(--color-text-3, #5A5550)',
        borderBottom: active ? '1px solid var(--color-text-1, #EDE8E0)' : '1px solid transparent',
        transition: 'color 150ms ease, border-color 150ms ease'
      }
    }, label);
  })), secondaryFilters.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 14,
      background: 'var(--color-border, #332E2A)',
      flexShrink: 0
    }
  }), secondaryFilters.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '7px',
      overflowX: 'auto',
      scrollbarWidth: 'none'
    }
  }, secondaryFilters.map(({
    id,
    label
  }) => {
    const active = activeTags.includes(id);
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onTagToggle?.(id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 10px',
        borderRadius: '999px',
        border: `1px solid ${active ? 'var(--color-text-1)' : 'var(--color-border, #332E2A)'}`,
        background: active ? 'var(--color-text-1, #EDE8E0)' : 'transparent',
        color: active ? 'var(--color-bg, #0C0B09)' : 'var(--color-text-3, #5A5550)',
        fontFamily: 'var(--font-ui, DM Sans, sans-serif)',
        fontSize: '9px',
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        cursor: 'pointer',
        transition: 'all 150ms ease'
      }
    }, label);
  })));
}
Object.assign(__ds_scope, { FilterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/filters/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/filters/FilterChip.jsx
try { (() => {
function FilterChip({
  label,
  active = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill, 9999px)',
      border: `1px solid ${active ? 'var(--color-text-1, #EDE8E0)' : 'var(--color-border, #332E2A)'}`,
      background: active ? 'var(--color-text-1, #EDE8E0)' : 'transparent',
      color: active ? 'var(--color-bg, #0C0B09)' : 'var(--color-text-3, #5A5550)',
      fontFamily: 'var(--font-ui, DM Sans, sans-serif)',
      fontSize: '9px',
      fontWeight: 400,
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'all 150ms ease'
    }
  }, label);
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/filters/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/gallery/ArtworkCard.jsx
try { (() => {
function ArtworkCard({
  src,
  alt,
  title,
  medium,
  year,
  onClick,
  aspectRatio = '1 / 1'
}) {
  const [hovered, setHovered] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      position: 'relative',
      aspectRatio,
      overflow: 'hidden',
      cursor: 'pointer',
      background: 'var(--color-surface, #161412)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || title || 'Artwork',
    onLoad: () => setLoaded(true),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      opacity: loaded ? 1 : 0,
      transition: `opacity 400ms ease,
                       transform var(--dur-gallery, 600ms) var(--ease-gallery, cubic-bezier(0.25,0.46,0.45,0.94))`,
      transform: hovered ? 'scale(1.04)' : 'scale(1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(12,11,9,0.78) 0%, transparent 55%)',
      opacity: hovered ? 1 : 0,
      transition: `opacity var(--dur-slow, 380ms) var(--ease-out, cubic-bezier(0,0,0.2,1))`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: hovered ? 'translateY(0)' : 'translateY(6px)',
      transition: `transform var(--dur-slow, 380ms) var(--ease-out, cubic-bezier(0,0,0.2,1))`
    }
  }, title && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display, Cormorant, Georgia, serif)',
      fontSize: '17px',
      fontWeight: 300,
      fontStyle: 'italic',
      color: 'var(--color-text-1, #EDE8E0)',
      margin: '0 0 2px',
      lineHeight: 1.2
    }
  }, title), (medium || year) && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui, DM Sans, sans-serif)',
      fontSize: '10px',
      letterSpacing: '0.07em',
      color: 'rgba(237,232,224,0.65)',
      margin: 0
    }
  }, [medium, year].filter(Boolean).join(' · ')))));
}
Object.assign(__ds_scope, { ArtworkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gallery/ArtworkCard.jsx", error: String((e && e.message) || e) }); }

// components/gallery/GalleryGrid.jsx
try { (() => {
/**
 * CSS Grid container for ArtworkCard tiles.
 * Responsive columns via the `columns` prop; tight 3 px gap.
 */
function GalleryGrid({
  children,
  columns = 3,
  gap = 3
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: `${gap}px`,
      padding: `${gap}px`
    }
  }, children);
}
Object.assign(__ds_scope, { GalleryGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gallery/GalleryGrid.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
function Header({
  activePage = 'gallery',
  onNavigate
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('main-scroll') || window;
    const handler = () => {
      const top = el === window ? window.scrollY : el.scrollTop;
      setScrolled(top > 10);
    };
    el.addEventListener('scroll', handler, {
      passive: true
    });
    return () => el.removeEventListener('scroll', handler);
  }, []);
  const links = [{
    id: 'painting',
    label: 'Painting'
  }, {
    id: 'sculpture',
    label: 'Sculpture'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  const go = (e, id) => {
    e.preventDefault();
    onNavigate?.(id);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--nav-height, 64px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--page-gutter, 40px)',
      background: scrolled ? 'oklch(7.5% 0.007 60 / 0.92)' : 'var(--color-bg, #0C0B09)',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: '1px solid var(--color-border-subtle, #181612)',
      zIndex: 100,
      transition: 'background 300ms ease'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => go(e, 'gallery'),
    style: {
      fontFamily: 'var(--font-display, Cormorant, Georgia, serif)',
      fontSize: 'clamp(15px, 1.6vw, 22px)',
      fontWeight: 400,
      letterSpacing: '0.06em',
      color: 'var(--color-text-1, #EDE8E0)',
      textDecoration: 'none'
    }
  }, "Rosario Levine"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(18px, 2.5vw, 40px)'
    }
  }, links.map(l => {
    const active = activePage === l.id;
    return /*#__PURE__*/React.createElement("a", {
      key: l.id,
      href: "#",
      onClick: e => go(e, l.id),
      style: {
        fontFamily: 'var(--font-ui, DM Sans, sans-serif)',
        fontSize: '10px',
        fontWeight: 400,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: active ? 'var(--color-text-1, #EDE8E0)' : 'var(--color-text-3, #5A5550)',
        textDecoration: 'none',
        paddingBottom: '2px',
        borderBottom: active ? '1px solid var(--color-text-1, #EDE8E0)' : '1px solid transparent',
        transition: 'color 180ms ease, border-color 180ms ease'
      }
    }, l.label);
  }), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/rosariolevine/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: 'var(--font-ui, DM Sans, sans-serif)',
      fontSize: '10px',
      fontWeight: 400,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--color-text-3, #5A5550)',
      textDecoration: 'none',
      transition: 'color 180ms ease'
    }
  }, "IG \u2197")));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/ui/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  disabled = false,
  type = 'button'
}) {
  const sizes = {
    sm: {
      fontSize: '9px',
      padding: '8px 18px',
      letterSpacing: '0.14em'
    },
    md: {
      fontSize: '10px',
      padding: '12px 28px',
      letterSpacing: '0.16em'
    },
    lg: {
      fontSize: '11px',
      padding: '16px 36px',
      letterSpacing: '0.18em'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-text-1, #EDE8E0)',
      color: 'var(--color-bg, #0C0B09)',
      borderColor: 'var(--color-text-1, #EDE8E0)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-text-1, #EDE8E0)',
      borderColor: 'var(--color-border, #332E2A)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-text-2, #8A847C)',
      borderColor: 'transparent'
    }
  };
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    border: '1px solid',
    fontFamily: 'var(--font-ui, DM Sans, sans-serif)',
    fontWeight: 400,
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'opacity 150ms ease',
    ...sizes[size],
    ...variants[variant]
  };
  if (href) return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: style
  }, children);
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    disabled: disabled,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Button.jsx", error: String((e && e.message) || e) }); }

// components/ui/Tag.jsx
try { (() => {
/** Category label badge for artwork classification. */
function Tag({
  label,
  category = 'default'
}) {
  const c = {
    painting: {
      bg: 'oklch(28% 0.025 250 / 0.35)',
      color: 'oklch(73% 0.04 248)',
      border: 'oklch(45% 0.04 248 / 0.5)'
    },
    sculpture: {
      bg: 'oklch(28% 0.025 40 / 0.35)',
      color: 'oklch(73% 0.05 42)',
      border: 'oklch(45% 0.04 40 / 0.5)'
    },
    default: {
      bg: 'var(--color-surface-2, #252018)',
      color: 'var(--color-text-2, #8A847C)',
      border: 'var(--color-border, #332E2A)'
    }
  }[category] || {
    bg: 'var(--color-surface-2)',
    color: 'var(--color-text-2)',
    border: 'var(--color-border)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 8px',
      borderRadius: '999px',
      border: `1px solid ${c.border}`,
      background: c.bg,
      color: c.color,
      fontFamily: 'var(--font-ui, DM Sans, sans-serif)',
      fontSize: '9px',
      fontWeight: 400,
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      flexShrink: 0
    }
  }, label);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.ArtworkCard = __ds_scope.ArtworkCard;

__ds_ns.GalleryGrid = __ds_scope.GalleryGrid;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

})();
