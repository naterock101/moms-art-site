import React from 'react';

export function ArtworkCard({
  src,
  alt,
  title,
  medium,
  year,
  onClick,
  aspectRatio = '1 / 1',
}) {
  const [hovered, setHovered] = React.useState(false);
  const [loaded,  setLoaded]  = React.useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:   'relative',
        aspectRatio,
        overflow:   'hidden',
        cursor:     'pointer',
        background: 'var(--color-surface, #161412)',
      }}
    >
      {/* Artwork image */}
      <img
        src={src}
        alt={alt || title || 'Artwork'}
        onLoad={() => setLoaded(true)}
        style={{
          width:      '100%',
          height:     '100%',
          objectFit:  'cover',
          display:    'block',
          opacity:     loaded ? 1 : 0,
          transition: `opacity 400ms ease,
                       transform var(--dur-gallery, 600ms) var(--ease-gallery, cubic-bezier(0.25,0.46,0.45,0.94))`,
          transform:   hovered ? 'scale(1.04)' : 'scale(1)',
        }}
      />

      {/* Hover overlay — gradient + info */}
      <div style={{
        position:   'absolute',
        inset:       0,
        background: 'linear-gradient(to top, rgba(12,11,9,0.78) 0%, transparent 55%)',
        opacity:     hovered ? 1 : 0,
        transition: `opacity var(--dur-slow, 380ms) var(--ease-out, cubic-bezier(0,0,0.2,1))`,
        display:    'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        padding:    '18px',
      }}>
        <div style={{
          transform:  hovered ? 'translateY(0)' : 'translateY(6px)',
          transition: `transform var(--dur-slow, 380ms) var(--ease-out, cubic-bezier(0,0,0.2,1))`,
        }}>
          {title && (
            <p style={{
              fontFamily: 'var(--font-display, Cormorant, Georgia, serif)',
              fontSize:   '17px',
              fontWeight:  300,
              fontStyle:  'italic',
              color:      'var(--color-text-1, #EDE8E0)',
              margin:     '0 0 2px',
              lineHeight:  1.2,
            }}>
              {title}
            </p>
          )}
          {(medium || year) && (
            <p style={{
              fontFamily: 'var(--font-ui, DM Sans, sans-serif)',
              fontSize:   '10px',
              letterSpacing:'0.07em',
              color:      'rgba(237,232,224,0.65)',
              margin:      0,
            }}>
              {[medium, year].filter(Boolean).join(' · ')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
