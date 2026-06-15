import React from 'react';

export function FilterBar({
  primaryFilter    = 'all',
  onPrimaryChange,
  secondaryFilters = [],
  activeTags       = [],
  onTagToggle,
}) {
  const primary = [
    { id: 'all',       label: 'All'       },
    { id: 'painting',  label: 'Painting'  },
    { id: 'sculpture', label: 'Sculpture' },
  ];

  return (
    <div style={{
      display:      'flex',
      alignItems:   'center',
      height:       'var(--filter-height, 48px)',
      padding:      '0 var(--page-gutter, 40px)',
      gap:          '24px',
      background:   'var(--color-bg, #0C0B09)',
      borderBottom: '1px solid var(--color-border-subtle, #181612)',
    }}>

      {/* ── Primary tabs ── */}
      <div style={{ display: 'flex', gap: '20px', flexShrink: 0 }}>
        {primary.map(({ id, label }) => {
          const active = primaryFilter === id;
          return (
            <button key={id} onClick={() => onPrimaryChange?.(id)} style={{
              background:    'none',
              border:        'none',
              padding:       '0 0 3px',
              fontFamily:    'var(--font-ui, DM Sans, sans-serif)',
              fontSize:      '10px',
              fontWeight:     400,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              cursor:        'pointer',
              color:          active
                ? 'var(--color-text-1, #EDE8E0)'
                : 'var(--color-text-3, #5A5550)',
              borderBottom:   active
                ? '1px solid var(--color-text-1, #EDE8E0)'
                : '1px solid transparent',
              transition:    'color 150ms ease, border-color 150ms ease',
            }}>
              {label}
            </button>
          );
        })}
      </div>

      {/* ── Divider ── */}
      {secondaryFilters.length > 0 && (
        <div style={{ width: 1, height: 14, background: 'var(--color-border, #332E2A)', flexShrink: 0 }} />
      )}

      {/* ── Secondary tag pills — scrollable ── */}
      {secondaryFilters.length > 0 && (
        <div style={{
          display:       'flex',
          gap:           '7px',
          overflowX:     'auto',
          scrollbarWidth:'none',
        }}>
          {secondaryFilters.map(({ id, label }) => {
            const active = activeTags.includes(id);
            return (
              <button key={id} onClick={() => onTagToggle?.(id)} style={{
                display:       'inline-flex',
                alignItems:    'center',
                padding:       '3px 10px',
                borderRadius:  '999px',
                border:        `1px solid ${active ? 'var(--color-text-1)' : 'var(--color-border, #332E2A)'}`,
                background:     active ? 'var(--color-text-1, #EDE8E0)' : 'transparent',
                color:          active ? 'var(--color-bg, #0C0B09)' : 'var(--color-text-3, #5A5550)',
                fontFamily:    'var(--font-ui, DM Sans, sans-serif)',
                fontSize:      '9px',
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                whiteSpace:    'nowrap',
                flexShrink:     0,
                cursor:        'pointer',
                transition:    'all 150ms ease',
              }}>
                {label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
