/* eslint-disable */
import React from 'react';

const socials = [
  { label: 'GH', href: 'https://github.com/praveenshah7' },
  { label: 'in', href: 'https://www.linkedin.com/in/praveen-shah-12589a307' },
  { label: '✉', href: 'mailto:praveenshah7002@gmail.com' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#050507', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '2.5rem 5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.2rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
          PS<span style={{ color: '#00ff88' }}>.</span>
        </div>
        <div style={{ display: 'flex', gap: '.8rem' }}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', fontFamily: "'Space Mono', monospace", fontSize: '.7rem', color: '#6b6b80', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#00ff88'; e.currentTarget.style.color = '#00ff88'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#6b6b80'; }}
            >{s.label}</a>
          ))}
        </div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', color: '#6b6b80', letterSpacing: '1px' }}>
          © 2025 Praveen Shah · Haldwani, Uttarakhand
        </div>
      </div>
      <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'center' }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '.6rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '3px', textTransform: 'uppercase' }}>
          Built with React · Deployed on Vercel
        </span>
      </div>
      <style>{`@media(max-width:768px){footer{padding:2rem 1.5rem!important}}`}</style>
    </footer>
  );
}