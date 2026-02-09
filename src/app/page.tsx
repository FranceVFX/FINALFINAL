'use client'

import React, { useState, useRef, useEffect } from 'react'
/** ✅ Overlay fijo arriba-derecha (Discord + Instagram) */
function SocialTopRight() {
  const wrapStyle: React.CSSProperties = {
    position: 'fixed',
    top: 26,
    right: 26,
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: '16px 18px',
    borderRadius: 22,
    background: 'rgba(0,0,0,0.55)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.10)',
  }

  const dividerStyle: React.CSSProperties = {
    width: 1,
    height: 28,
    background: 'rgba(255,255,255,0.45)',
    borderRadius: 999,
  }

  const IconBtn = ({
    href,
    label,
    children,
  }: {
    href: string
    label: string
    children: React.ReactNode
  }) => {
    const [hover, setHover] = useState(false)

    const btnStyle: React.CSSProperties = {
      width: 48,
      height: 48,
      borderRadius: 999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: hover ? '1px solid rgba(255,255,255,0.70)' : '1px solid rgba(255,255,255,0.35)',
      background: hover ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.02)',
      boxShadow: hover ? '0 0 22px rgba(255,255,255,0.35)' : 'none',
      transform: hover ? 'translateY(-1px)' : 'translateY(0px)',
      transition:
        'transform 160ms ease, box-shadow 160ms ease, border 160ms ease, background 160ms ease',
      cursor: 'pointer',
      textDecoration: 'none',
    }

    return (
      <a
        href={href}
        aria-label={label}
        title={label}
        target="_blank"
        rel="noreferrer"
        style={btnStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </a>
    )
  }

  return (
    <div style={wrapStyle}>
      <IconBtn href="https://discord.com/users/459559834711490561" label="Discord">
        {/* Discord icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.95 }}
        >
          <path d="M9 10.5c.6-.5 1.3-.8 2.1-.9.6-.1 1.2-.1 1.8 0 .8.1 1.5.4 2.1.9" />
          <path d="M7.5 18c1.3 1 2.9 1.5 4.5 1.5s3.2-.5 4.5-1.5" />
          <path d="M7.8 6.8c1.3-.6 2.7-.9 4.2-.9s2.9.3 4.2.9" />
          <path d="M6.5 8.5c-1.1 2.6-1.2 5.5-.2 8.2.2.5.7.8 1.2.7l1.4-.3" />
          <path d="M17.5 8.5c1.1 2.6 1.2 5.5.2 8.2-.2.5-.7.8-1.2.7l-1.4-.3" />
          <circle cx="9.2" cy="13" r="1" fill="white" stroke="none" />
          <circle cx="14.8" cy="13" r="1" fill="white" stroke="none" />
        </svg>
      </IconBtn>

      <div style={dividerStyle} />

      <IconBtn href="https://www.instagram.com/tomi.francee/" label="Instagram">
        {/* Instagram icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.95 }}
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </IconBtn>
    </div>
  )
}

/** ✅ Botón fijo abajo-derecha a #contact (con hover, sin CSS externo) */
function ContactButton() {
  const [hover, setHover] = useState(false)

  const font = 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'

  return (
    <a
      href="#contact"
      aria-label="Contact me"
      title="Contact me"
      style={{
        position: 'fixed',
        right: 26,
        bottom: 26,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 22px',
        borderRadius: 999,
        textDecoration: 'none',
        color: 'rgba(255,255,255,0.92)',
        fontWeight: 800,
        fontFamily: font,
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(10px)',
        border: hover ? '1px solid rgba(255,255,255,0.70)' : '1px solid rgba(255,255,255,0.35)',
        boxShadow: hover ? '0 0 22px rgba(255,255,255,0.35)' : 'none',
        transform: hover ? 'translateY(-1px)' : 'translateY(0px)',
        transition: 'transform 160ms ease, box-shadow 160ms ease, border 160ms ease',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M21.8 2.2 10.5 13.5"
          stroke="rgba(255,255,255,0.92)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21.8 2.2 14.4 21.8 10.5 13.5 2.2 9.6 21.8 2.2Z"
          stroke="rgba(255,255,255,0.92)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <span>Contact me</span>
    </a>
  )
}

/** ✅ Sección de contacto (igual a la que venías usando) */
function ContactSection() {
  const font = 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'

  const pillStyle: React.CSSProperties = {
    border: '1px solid rgba(255,255,255,0.35)',
    borderRadius: '999px',
    padding: '18px 26px',
    background: 'rgba(255,255,255,0.02)',
    minWidth: '320px',
    flex: '1 1 320px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const iconBoxStyle: React.CSSProperties = {
    width: '42px',
    height: '42px',
    borderRadius: '14px',
    background: 'rgba(57,255,20,0.14)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 auto',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.55)',
    fontWeight: 600,
    fontFamily: font,
    lineHeight: 1,
    textAlign: 'center',
    width: '100%',
  }

  const handleStyle: React.CSSProperties = {
    fontSize: '34px',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    fontFamily: font,
    lineHeight: 1,
    textAlign: 'center',
  }

  const contentColStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '10px',
  }

  const handleRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
  }

  return (
    <section
      id="contact"
      style={{
        width: '100%',
        padding: '120px 24px 140px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: font,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '80px',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span style={{ color: '#39ff14', fontSize: '18px', fontWeight: 700 }}>
            Commissions open!
          </span>

          <h2
            style={{
              marginTop: '14px',
              fontSize: '64px',
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: '-0.02em',
              fontFamily: font,
            }}
          >
            My social media
          </h2>

          <p
            style={{
              marginTop: '18px',
              fontSize: '22px',
              color: 'rgba(255,255,255,0.70)',
              fontWeight: 500,
              fontFamily: font,
            }}
          >
            You can contact me through my social media!
          </p>

          <div
            style={{
              marginTop: '44px',
              width: '100%',
              maxWidth: '900px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '22px',
            }}
          >
            <div style={pillStyle}>
              <div style={contentColStyle}>
                <div style={labelStyle}>Instagram</div>
                <div style={handleRowStyle}>
                  <div style={iconBoxStyle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#39ff14"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>

                  <a
                    href="https://www.instagram.com/tomi.francee/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...handleStyle,
                      textDecoration: 'none',
                      color: 'inherit',
                      cursor: 'pointer',
                    }}
                  >
                    @tomi.francee
                  </a>
                </div>
              </div>
            </div>

            <div style={pillStyle}>
              <div style={contentColStyle}>
                <div style={labelStyle}>Discord</div>
                <div style={handleRowStyle}>
                  <div style={iconBoxStyle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#39ff14"
                    >
                      <path d="M19.54 0c1.37 0 2.46 1.09 2.46 2.46v19.08c0 1.37-1.09 2.46-2.46 2.46H4.46C3.09 24 2 22.91 2 21.54V2.46C2 1.09 3.09 0 4.46 0h15.08zM7.2 16.7c1.62 1.2 3.3 1.8 4.8 1.8s3.18-.6 4.8-1.8c.2-.14.26-.42.14-.64-.92-1.7-1.3-3.6-1.14-5.64.02-.28-.16-.54-.44-.62-.92-.26-1.9-.4-2.94-.4s-2.02.14-2.94.4c-.28.08-.46.34-.44.62.16 2.04-.22 3.94-1.14 5.64-.12.22-.06.5.14.64zM10 13.7c-.55 0-1-.5-1-1.1s.45-1.1 1-1.1 1 .5 1 1.1-.45 1.1-1 1.1zm4 0c-.55 0-1-.5-1-1.1s.45-1.1 1-1.1 1 .5 1 1.1-.45 1.1-1 1.1z" />
                    </svg>
                  </div>
                  <a
                    href="https://discord.com/users/459559834711490561"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...handleStyle,
                      textDecoration: 'none',
                      color: 'inherit',
                      cursor: 'pointer',
                    }}
                  >
                    @tomi_editor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: '100%' }}>
          <h2
            style={{
              fontSize: '64px',
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: '-0.02em',
              marginBottom: '26px',
              fontFamily: font,
            }}
          >
            Send me an E-mail
          </h2>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              fontSize: '22px',
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 600,
              fontFamily: font,
            }}
          >
            <div style={iconBoxStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#39ff14"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
            </div>

            <span style={{ fontWeight: 700, fontFamily: font }}>tomasfrance02@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutVideo() {
  const videoRef = React.useRef<HTMLVideoElement | null>(null)

  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.6 },
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      src="/about-me.mp4"
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
    />
  )
}

export default function Home() {
  const sections = [
    {
      title: 'Vlogs',
      embeds: [
        'https://www.youtube.com/embed/wrFC430gSdE',
        'https://www.youtube.com/embed/Pj1Qgyj4QeM',
        'https://www.youtube.com/embed/IUPfTzOgkxU?si=ATUNuGBpwOT0mm5y',
        'https://www.youtube.com/embed/HDEnSJDw3a0',
        'https://www.youtube.com/embed/JSPxh0FhPGU',
      ],
    },

    {
      title: 'Color',
      subtitle: 'Participe en el color y edición',
      embeds: [
        'https://www.youtube.com/embed/bT8LHzII2qc?si=8DHlc42GLXN0NduX',
        'https://www.youtube.com/embed/KjBjLvjFQzY?si=DHxhg3TTatF3R3kB',
        'https://www.youtube.com/embed/cw2eSNLIM2c?si=1DCr75Fz3yEBONoT',
        'https://www.youtube.com/embed/l8x1kMMruxo?si=JXl8jUV7dPKdDWvz',
      ],
    },

    {
      title: 'Gaming',
      embeds: [
        'https://www.youtube.com/embed/rs9RSKviq38',
        'https://www.youtube.com/embed/159ZXV45yZ8',

        'https://www.youtube.com/embed/UxFM3J31cXs?si=glSSH_aDa2wONeGo',
        'https://www.youtube.com/embed/6RdLl1IOb3A',
        'https://www.youtube.com/embed/LM96MTRSdBM?si=1lYd51cpcKniMHDp',
      ],
    },
    {
      title: 'Educacion',
      embeds: [
        'https://www.youtube.com/embed/Z-11MBl5zkA',
        'https://www.youtube.com/embed/ELSm-G201Ls',
        'https://www.youtube.com/embed/JjQ1m0SrTFo',
      ],
    },
    {
      title: 'Shorts',
      embeds: [
        'https://www.youtube.com/embed/feHkDN6JflQ',

        'https://www.youtube.com/embed/DstIYTQur3Q',
        'https://www.youtube.com/embed/-gAT0uvi9Fs',
        'https://www.youtube.com/embed/xnmW-vAM1Sk?controls=0&modestbranding=1&rel=0',
        'https://www.youtube.com/embed/U-k6SvvLvDk?controls=0&modestbranding=1&rel=0',
        'https://www.youtube.com/embed/XtTnhHYe9Ec?controls=0&modestbranding=1&rel=0',
        'https://www.youtube.com/embed/PZ2MP0HbLbw?controls=0&modestbranding=1&rel=0',
      ],
    },
  ]

  const VideoCard = ({ children }: { children: React.ReactNode }) => (
    <div
      className="
        relative overflow-hidden rounded-[36px]
        shadow-[0_10px_50px_rgba(0,0,0,0.6)]
        bg-black/40
        w-[520px] h-[292px]
        sm:w-[720px] sm:h-[405px]
        lg:w-[1000px] lg:h-[562px]
      "
    >
      {children}
    </div>
  )

  const VideoFrame = ({ src, title }: { src: string; title: string }) => (
    <iframe
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="absolute inset-0 w-full h-full border-0 outline-none"
      style={{ border: 0, outline: 0 }}
    />
  )

  const ShortCard = ({ children }: { children: React.ReactNode }) => (
    <div
      className="
        relative overflow-hidden
        rounded-[36px]
        shadow-[0_10px_50px_rgba(0,0,0,0.6)]
        bg-black/40
        w-[340px] h-[604px]
        sm:w-[370px] sm:h-[658px]
        lg:w-[420px] lg:h-[747px]
      "
    >
      {children}
    </div>
  )

  const renderTwoRowGrid = (items: string[], sectionTitle: string) => {
    const topRow = items.slice(0, 3)
    const bottomRow = items.slice(3, 6)

    return (
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-wrap justify-center items-center gap-[50px] px-6">
          {topRow.map((embed, idx) => (
            <VideoCard key={`${sectionTitle}-top-${idx}`}>
              <VideoFrame src={embed} title={`${sectionTitle} video ${idx + 1}`} />
            </VideoCard>
          ))}
        </div>

        {bottomRow.length > 0 && (
          <div className="flex flex-wrap justify-center items-center gap-[50px] px-6 mt-[50px]">
            {bottomRow.map((embed, idx) => (
              <VideoCard key={`${sectionTitle}-bottom-${idx}`}>
                <VideoFrame
                  src={embed}
                  title={`${sectionTitle} video ${topRow.length + idx + 1}`}
                />
              </VideoCard>
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderWideSection = (embeds: string[], title: string) => {
    if (embeds.length <= 3) {
      return (
        <div className="flex flex-wrap justify-center items-center gap-[50px] px-6">
          {embeds.map((embed, idx) => (
            <VideoCard key={`${title}-${idx}`}>
              <VideoFrame src={embed} title={`${title} video ${idx + 1}`} />
            </VideoCard>
          ))}
        </div>
      )
    }
    return renderTwoRowGrid(embeds, title)
  }

  const renderShorts = (embeds: string[]) => {
    return (
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center items-start gap-[50px] px-6">
          {embeds.map((embed, idx) => (
            <ShortCard key={`short-${idx}`}>
              <VideoFrame src={embed} title={`Short ${idx + 1}`} />
            </ShortCard>
          ))}
        </div>
      </div>
    )
  }

  return (
    <main className="bg-[#242424] text-white overflow-x-hidden w-full">
      {/* Overlays */}
      <SocialTopRight />
      <ContactButton />

      {/* HERO (sin espacio gris arriba) */}
      <section className="relative h-screen w-full overflow-hidden -mt-[1px]">
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#1a1a1a] z-10" />
      </section>

      {/* ABOUT VIDEO */}
      <section className="relative h-screen w-full bg-[#1a1a1a] overflow-hidden">
        <div className="relative z-10 h-full w-full">
          <AboutVideo />
        </div>
      </section>

      {/* SECTIONS */}
      <section className="px-6 pb-44">
        <div className="mx-auto max-w-7xl">
          {sections.map((section) => {
            const sectionPadding =
              section.title === 'Educacion'
                ? 'pt-[100px] pb-[180px]'
                : section.title === 'Vlogs' || section.title === 'Gaming'
                  ? 'py-[100px]'
                  : 'py-24'

            return (
              <div key={section.title} className={`${sectionPadding} space-y-12`}>
                <h3 className="text-center text-[40px] md:text-[48px] font-montserrat font-black tracking-wide uppercase">
                  {section.title}
                </h3>

                {section.subtitle && (
                  <p className="text-center text-[20px] md:text-[22px] text-white/70 font-montserrat font-medium -mt-6">
                    {section.subtitle}
                  </p>
                )}

                <div className="w-full flex flex-col items-center">
                  {section.title === 'Shorts'
                    ? renderShorts(section.embeds || [])
                    : renderWideSection(section.embeds || [], section.title)}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
