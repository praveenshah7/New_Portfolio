import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['hero','about','skills','experience','projects','contact'];
      for (let s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 200) { setActive(s); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About','Skills','Experience','Projects','Contact'];

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.3rem 5rem', background: scrolled ? 'rgba(5,5,7,0.92)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent', transition: 'all 0.4s ease' }}>
      <a href="#hero" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.1rem', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', color: '#e8e8f0' }}>
        PRAVEEN<span style={{ color: '#00ff88' }}>.</span>
      </a>
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} style={{ color: active === link.toLowerCase() ? '#00ff88' : '#6b6b80', fontFamily: "'Space Mono', monospace", fontSize: '.7rem', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#00ff88'}
              onMouseLeave={e => e.target.style.color = active === link.toLowerCase() ? '#00ff88' : '#6b6b80'}
            >{link}</a>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontFamily: "'Space Mono', monospace", fontSize: '.65rem', color: '#00ff88' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ff88', display: 'inline-block', animation: 'blink 1.5s infinite' }} />
        Available
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0.2}} @media(max-width:768px){nav{padding:1rem 1.5rem!important} nav ul{display:none!important}}`}</style>
    </nav>
  );
}