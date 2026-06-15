import React from 'react';

export function Header({ activePage = 'gallery', onNavigate }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const el = document.getElementById('main-scroll') || window;
    const handler = () => {
      const top = el === window ? window.scrollY : el.scrollTop;
      setScrolled(top > 10);
    };
    el.addEventListener('scroll', handler, { passive: true });
    return () => el.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { id: 'painting',  label: 'Painting'  },
    { id: 'sculpture', label: 'Sculpture' },
    { id: 'about',     label: 'About'     },
    { id: 'contact',   label: 'Contact'   },
  ];

  const go = (e, id) => { e.preventDefault(); onNavigate?.(id); };

  return (
    <header style={{
      position:       'fixed',
      top: 0, left: 0, right: 0,
      height:         'var(--nav-height, 64px)',
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'space-between',
      padding:        '0 var(--page-gutter, 40px)',
      background:     scrolled
        ? 'oklch(7.5% 0.007 60 / 0.92)'
        : 'var(--color-bg, #0C0B09)',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom:   '1px solid var(--color-border-subtle, #181612)',
      zIndex:          100,
      transition:     'background 300ms ease',
    }}>
      {/* Artist name */}
      <a href="#" onClick={(e) => go(e, 'gallery')} style={{
        fontFamily:     'var(--font-display, Cormorant, Georgia, serif)',
        fontSize:       'clamp(15px, 1.6vw, 22px)',
        fontWeight:      400,
        letterSpacing:  '0.06em',
        color:          'var(--color-text-1, #EDE8E0)',
        textDecoration: 'none',
      }}>
        Rosario Levine
      </a>

      {/* Nav links */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(18px, 2.5vw, 40px)' }}>
        {links.map((l) => {
          const active = activePage === l.id;
          return (
            <a key={l.id} href="#" onClick={(e) => go(e, l.id)} style={{
              fontFamily:     'var(--font-ui, DM Sans, sans-serif)',
              fontSize:       '10px',
              fontWeight:      400,
              letterSpacing:  '0.18em',
              textTransform:  'uppercase',
              color:           active
                ? 'var(--color-text-1, #EDE8E0)'
                : 'var(--color-text-3, #5A5550)',
              textDecoration: 'none',
              paddingBottom:  '2px',
              borderBottom:    active
                ? '1px solid var(--color-text-1, #EDE8E0)'
                : '1px solid transparent',
              transition:     'color 180ms ease, border-color 180ms ease',
            }}>
              {l.label}
            </a>
          );
        })}
        <a
          href="https://www.instagram.com/rosariolevine/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily:    'var(--font-ui, DM Sans, sans-serif)',
            fontSize:      '10px',
            fontWeight:     400,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color:         'var(--color-text-3, #5A5550)',
            textDecoration:'none',
            transition:    'color 180ms ease',
          }}
        >
          IG ↗
        </a>
      </nav>
    </header>
  );
}
