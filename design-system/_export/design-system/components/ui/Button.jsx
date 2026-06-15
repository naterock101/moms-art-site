import React from 'react';

export function Button({
  children,
  variant  = 'primary',
  size     = 'md',
  onClick,
  href,
  disabled = false,
  type     = 'button',
}) {
  const sizes = {
    sm: { fontSize: '9px',  padding: '8px 18px',  letterSpacing: '0.14em' },
    md: { fontSize: '10px', padding: '12px 28px', letterSpacing: '0.16em' },
    lg: { fontSize: '11px', padding: '16px 36px', letterSpacing: '0.18em' },
  };
  const variants = {
    primary: {
      background:  'var(--color-text-1, #EDE8E0)',
      color:       'var(--color-bg, #0C0B09)',
      borderColor: 'var(--color-text-1, #EDE8E0)',
    },
    secondary: {
      background:  'transparent',
      color:       'var(--color-text-1, #EDE8E0)',
      borderColor: 'var(--color-border, #332E2A)',
    },
    ghost: {
      background:  'transparent',
      color:       'var(--color-text-2, #8A847C)',
      borderColor: 'transparent',
    },
  };

  const style = {
    display:        'inline-flex',
    alignItems:     'center',
    justifyContent: 'center',
    gap:            '8px',
    border:         '1px solid',
    fontFamily:     'var(--font-ui, DM Sans, sans-serif)',
    fontWeight:      400,
    textTransform:  'uppercase',
    textDecoration: 'none',
    cursor:          disabled ? 'not-allowed' : 'pointer',
    opacity:         disabled ? 0.4 : 1,
    transition:     'opacity 150ms ease',
    ...sizes[size],
    ...variants[variant],
  };

  if (href) return <a href={href} style={style}>{children}</a>;
  return (
    <button type={type} onClick={onClick} disabled={disabled} style={style}>
      {children}
    </button>
  );
}
