/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';

const roles = ['Frontend Developer', 'React Specialist', 'Full Stack Dev', 'UI Engineer'];

export default function Hero() {
  const canvasRef = useRef(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let dots = [], animId;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      dots = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3, vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4, o: Math.random() * 0.5 + 0.1,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,136,${d.o})`; ctx.fill();
      });
      dots.forEach((a, i) => dots.slice(i + 1).forEach(b => {
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 130) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0,255,136,${0.07 * (1 - dist / 130)})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }));
      animId = requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5rem', position: 'relative', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 65% 50%, rgba(0,255,136,0.06) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(124,58,237,0.05) 0%, transparent 50%)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)', zIndex: 1, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: "'Space Mono', monospace", fontSize: '.72rem', letterSpacing: '4px', color: '#6b6b80', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          <span style={{ width: '32px', height: '1px', background: '#00ff88', display: 'inline-block' }} />
          Haldwani, Uttarakhand · India
        </div>

        <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(2.8rem, 11vw, 9.5rem)', lineHeight: 0.88, letterSpacing: '-3px', textTransform: 'uppercase', position: 'relative' }}>
          <span style={{ display: 'block', position: 'relative' }}>
            {glitch && (
              <>
                <span style={{ position: 'absolute', left: '2px', top: 0, color: '#ff0044', clipPath: 'polygon(0 20%, 100% 20%, 100% 40%, 0 40%)', opacity: 0.7 }}>PRAVEEN</span>
                <span style={{ position: 'absolute', left: '-2px', top: 0, color: '#00ffff', clipPath: 'polygon(0 60%, 100% 60%, 100% 80%, 0 80%)', opacity: 0.7 }}>PRAVEEN</span>
              </>
            )}
            PRAVEEN
          </span>
          <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '1.5px #e8e8f0', position: 'relative' }}>
            {glitch && (
              <>
                <span style={{ position: 'absolute', left: '3px', top: 0, color: '#ff0044', WebkitTextStroke: '0px', clipPath: 'polygon(0 30%, 100% 30%, 100% 50%, 0 50%)', opacity: 0.6 }}>SHAH</span>
                <span style={{ position: 'absolute', left: '-3px', top: 0, color: '#00ffff', WebkitTextStroke: '0px', clipPath: 'polygon(0 55%, 100% 55%, 100% 75%, 0 75%)', opacity: 0.6 }}>SHAH</span>
              </>
            )}
            SHAH
          </span>
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem', marginTop: '1.8rem' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '.75rem', color: '#00ff88' }}>$</span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(.85rem, 2vw, 1.3rem)', color: '#e8e8f0', fontWeight: 400 }}>{displayed}</span>
          <span style={{ display: 'inline-block', width: '2px', height: '1.3em', background: '#00ff88', animation: 'blink 1s infinite', verticalAlign: 'middle' }} />
        </div>

        <p style={{ maxWidth: '460px', color: '#6b6b80', fontSize: '.95rem', lineHeight: 1.85, marginTop: '1.8rem' }}>
          I craft fast, responsive, and visually precise web experiences. MCA grad · 2+ years shipping production React apps · currently at Supplyvalid.
        </p>

        <div className="hero-stats" style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)', flexWrap: 'wrap' }}>
          {[['2+', 'Years Exp'], ['3+', 'Projects'], ['8.0', 'CGPA'], ['2', 'Certs']].map(([num, label]) => (
            <div key={label} style={{ minWidth: '55px' }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: '#00ff88', lineHeight: 1 }}>{num}</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.6rem', color: '#6b6b80', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '.3rem' }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1.2rem', marginTop: '2.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <MagneticBtn href="#projects" primary>View My Work ↗</MagneticBtn>
          <a href="#contact" style={{ fontFamily: "'Space Mono', monospace", fontSize: '.7rem', color: '#6b6b80', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.14)', paddingBottom: '2px', transition: 'color 0.2s', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = '#00ff88'}
            onMouseLeave={e => e.currentTarget.style.color = '#6b6b80'}
          >Get In Touch</a>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '3rem', right: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.8rem', fontFamily: "'Space Mono', monospace", fontSize: '.62rem', letterSpacing: '3px', color: '#6b6b80', textTransform: 'uppercase', writingMode: 'vertical-rl', zIndex: 2 }}>
        <span>Scroll</span>
        <span style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, #00ff88, transparent)', animation: 'scrollAnim 2s ease infinite', display: 'block' }} />
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scrollAnim { 0%{transform:scaleY(0);transform-origin:top} 50%{transform:scaleY(1);transform-origin:top} 51%{transform:scaleY(1);transform-origin:bottom} 100%{transform:scaleY(0);transform-origin:bottom} }
        @media(max-width:900px){
          #hero { padding: 5rem 1.5rem 3rem !important; }
        }
        @media(max-width:768px){
          #hero h1 { font-size: 3rem !important; letter-spacing: -1px !important; }
          .hero-stats { gap: 1.5rem !important; }
        }
        @media(max-width:400px){
          #hero h1 { font-size: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}

function MagneticBtn({ href, children, primary }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };
  const handleLeave = () => { if (ref.current) ref.current.style.transform = 'translate(0,0)'; };
  return (
    <a ref={ref} href={href}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '.7rem', padding: '.85rem 2.2rem', background: primary ? '#00ff88' : 'transparent', color: primary ? '#050507' : '#e8e8f0', fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '.85rem', letterSpacing: '1px', textTransform: 'uppercase', border: primary ? 'none' : '1px solid rgba(255,255,255,0.14)', clipPath: primary ? 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))' : 'none', transition: 'opacity 0.2s, transform 0.3s cubic-bezier(.16,1,.3,1)', textDecoration: 'none' }}
      onMouseMove={handleMove} onMouseLeave={handleLeave}
      onMouseEnter={e => { if (primary) e.currentTarget.style.opacity = '0.85'; }}
    >{children}</a>
  );
}