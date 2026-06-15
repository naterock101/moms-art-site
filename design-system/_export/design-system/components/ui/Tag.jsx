import React from 'react';

/** Category label badge for artwork classification. */
export function Tag({ label, category = 'default' }) {
  const c = {
    painting: {
      bg: 'oklch(28% 0.025 250 / 0.35)',
      color: 'oklch(73% 0.04 248)',
      border: 'oklch(45% 0.04 248 / 0.5)',
    },
    sculpture: {
      bg: 'oklch(28% 0.025 40 / 0.35)',
      color: 'oklch(73% 0.05 42)',
      border: 'oklch(45% 0.04 40 / 0.5)',
    },
    default: {
      bg: 'var(--color-surface-2, #252018)',
      color: 'var(--color-text-2, #8A847C)',
      border: 'var(--color-border, #332E2A)',
    },
  }[category] || { bg:'var(--color-surface-2)', color:'var(--color-text-2)', border:'var(--color-border)' };

  return (
    <span style={{
      display:       'inline-flex',
      alignItems:    'center',
      padding:       '3px 8px',
      borderRadius:  '999px',
      border:        `1px solid ${c.border}`,
      background:     c.bg,
      color:          c.color,
      fontFamily:    'var(--font-ui, DM Sans, sans-serif)',
      fontSize:      '9px',
      fontWeight:     400,
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      flexShrink:     0,
    }}>
      {label}
    </span>
  );
}
