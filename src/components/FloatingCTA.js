/* eslint-disable */
import React, { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 4000);
    return () => { window.removeEventListener('scroll', onScroll); clearInterval(interval); };
  }, []);

  return (
    <a href="mailto:praveenshah7002@gmail.com"
      style={{
        position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 500,
        display: 'flex', alignItems: 'center', gap: '.6rem',
        padding: '.75rem 1.4rem',
        background: '#00ff88', color: '#050507',
        fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '.78rem',
        letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none',
        clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        boxShadow: pulse ? '0 0 24px rgba(0,255,136,0.5)' : '0 0 0px rgba(0,255,136,0)',
        pointerEvents: visible ? 'all' : 'none',
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
    >
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#050507', display: 'inline-block', animation: 'blink 1.5s infinite' }} />
      Hire Me
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
    </a>
  );
}