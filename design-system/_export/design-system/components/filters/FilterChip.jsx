import React from 'react';

export function FilterChip({ label, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display:       'inline-flex',
        alignItems:    'center',
        padding:       '4px 12px',
        borderRadius:  'var(--radius-pill, 9999px)',
        border:        `1px solid ${active ? 'var(--color-text-1, #EDE8E0)' : 'var(--color-border, #332E2A)'}`,
        background:     active ? 'var(--color-text-1, #EDE8E0)' : 'transparent',
        color:          active ? 'var(--color-bg, #0C0B09)' : 'var(--color-text-3, #5A5550)',
        fontFamily:    'var(--font-ui, DM Sans, sans-serif)',
        fontSize:      '9px',
        fontWeight:     400,
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
        cursor:        'pointer',
        whiteSpace:    'nowrap',
        transition:    'all 150ms ease',
      }}
    >
      {label}
    </button>
  );
}
