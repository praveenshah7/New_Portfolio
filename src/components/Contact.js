import React from 'react';

const links = [
  { label: 'Email', val: 'praveenshah7002@gmail.com', href: 'mailto:praveenshah7002@gmail.com', icon: '✉' },
  { label: 'GitHub', val: 'github.com/praveenshah7', href: 'https://github.com/praveenshah7', icon: 'GH' },
  { label: 'LinkedIn', val: 'praveen-shah-12589a307', href: 'https://www.linkedin.com/in/praveen-shah-12589a307', icon: 'in' },
  { label: 'Phone', val: '+91 82669 72770', href: 'tel:+918266972770', icon: '☏' },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '7rem 5rem', background: '#0d0d12', overflow: 'hidden' }}>
      <div style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 800,
        fontSize: 'clamp(3rem,8vw,7rem)', textTransform: 'uppercase',
        letterSpacing: '-2px', lineHeight: 0.9,
        color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.07)',
        marginBottom: '3rem', userSelect: 'none',
      }}>
        Let's Work Together
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', padding: '.5rem 1.2rem', border: '1px solid rgba(0,255,136,0.3)', fontFamily: "'Space Mono', monospace", fontSize: '.68rem', letterSpacing: '2px', color: '#00ff88', textTransform: 'uppercase', marginBottom: '2rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ff88', display: 'inline-block', animation: 'blink 1.5s infinite' }} />
            Available for new roles
          </div>

          <p style={{ color: '#6b6b80', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            Got a project, a role, or just want to chat about tech? I'm always open to connecting with interesting people and teams.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
            {links.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1.1rem 1.4rem', border: '1px solid rgba(255,255,255,0.07)',
                  textDecoration: 'none', color: '#e8e8f0', transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,255,136,0.4)'; e.currentTarget.style.background = 'rgba(0,255,136,0.03)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.14)', fontFamily: "'Space Mono', monospace", fontSize: '.7rem', color: '#00ff88' }}>{link.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.6rem', letterSpacing: '2px', color: '#6b6b80', textTransform: 'uppercase', marginBottom: '.2rem' }}>{link.label}</div>
                    <div style={{ fontSize: '.85rem', fontWeight: 500 }}>{link.val}</div>
                  </div>
                </div>
                <span style={{ color: '#6b6b80', fontSize: '.8rem' }}>↗</span>
              </a>
            ))}
          </div>
        </div>

        <div style={{ border: '1px solid rgba(255,255,255,0.07)', padding: '2.5rem' }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.6rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Hire Me</div>
          <p style={{ color: '#6b6b80', fontSize: '.88rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            I'm open to full-time frontend / full stack roles and freelance projects. Quick to onboard, quality-obsessed, and ready to ship.
          </p>
          <a href="mailto:praveenshah7002@gmail.com" style={{
            display: 'block', textAlign: 'center', padding: '1rem',
            background: '#00ff88', color: '#050507',
            fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '.85rem',
            letterSpacing: '2px', textTransform: 'uppercase', transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Send Me a Message
          </a>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @media(max-width:900px){ #contact > div:last-child { grid-template-columns: 1fr !important; } }
        @media(max-width:768px){ #contact { padding: 4rem 1.5rem !important; } }
      `}</style>
    </section>
  );
}
