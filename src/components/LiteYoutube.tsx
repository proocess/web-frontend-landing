import { useState } from 'react'

interface Props {
  videoId: string
}

export default function LiteYoutube({ videoId }: Props) {
  const [active, setActive] = useState(false)

  const thumbnail = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`

  return (
    <div
      style={{
        aspectRatio: '16 / 9',
        position: 'relative',
        cursor: active ? 'default' : 'pointer',
        background: '#000',
        overflow: 'hidden',
      }}
      onClick={() => setActive(true)}
    >
      {active ? (
        <iframe
          src={src}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
        />
      ) : (
        <>
          <img
            src={thumbnail}
            alt="Video Proocess"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Play button */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.25)',
            transition: 'background 0.2s',
          }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
            }}>
              <svg viewBox="0 0 24 24" width={28} height={28} fill="#fff">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
