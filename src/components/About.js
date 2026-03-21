import React, { useState, useEffect, useRef } from 'react';

const terminalLines = [
  { cmd: 'whoami', out: 'praveen_shah' },
  { cmd: 'cat location.txt', out: 'Haldwani, Uttarakhand, India' },
  { cmd: 'cat education.txt', out: 'MCA @ Graphic Era Hill University (8.0 CGPA)\nBCA @ MAGU University, Pauri Garhwal' },
  { cmd: 'cat status.txt', out: '✓ Open to Work — Frontend / Full Stack' },
  { cmd: 'cat focus.txt', out: 'React · Node.js · Python · UI Engineering' },
];

export default function About() {
  const [visibleLines, setVisibleLines] = useState(0);
  const sectionRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted.current) {
        hasStarted.current = true;
        terminalLines.forEach((_, i) => {
          setTimeout(() => setVisibleLines(i + 1), i * 600);
        });
      }
    }, { threshold: 0.3 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const education = [
    { year: '2023 — 2025', degree: 'MCA — 8.0 CGPA', uni: 'Graphic Era Hill University, Dehradun' },
    { year: '2020 — 2023', degree: 'BCA', uni: 'MAGU University, Pauri Garhwal' },
  ];

  return (
    <section id="about" ref={sectionRef} style={{ padding: '7rem 5rem', background: '#0d0d12' }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', letterSpacing: '3px', color: '#00ff88', textTransform: 'uppercase', marginBottom: '.5rem' }}>// 01</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.5rem)', textTransform: 'uppercase', letterSpacing: '-1px' }}>About Me</h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        <div style={{ background: '#0a0a10', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ background: '#13131a', padding: '.7rem 1rem', display: 'flex', alignItems: 'center', gap: '.6rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', color: '#6b6b80', marginLeft: '.5rem' }}>praveen@portfolio ~</span>
          </div>
          <div style={{ padding: '1.5rem', fontFamily: "'Space Mono', monospace", fontSize: '.82rem', lineHeight: 1.8, minHeight: '280px' }}>
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <div key={i} style={{ marginBottom: '.8rem' }}>
                <div><span style={{ color: '#00ff88' }}>➜ </span><span style={{ color: '#7c3aed' }}>~/portfolio </span><span style={{ color: '#e8e8f0' }}>{line.cmd}</span></div>
                <div style={{ color: '#a0a0b8', paddingLeft: '1rem', whiteSpace: 'pre-line' }}>{line.out}</div>
              </div>
            ))}
            {visibleLines < terminalLines.length && (
              <div><span style={{ color: '#00ff88' }}>➜ </span><span style={{ color: '#7c3aed' }}>~/portfolio </span><span style={{ display: 'inline-block', width: '8px', height: '1em', background: '#00ff88', animation: 'blink 1s infinite', verticalAlign: 'middle' }} /></div>
            )}
          </div>
        </div>

        <div>
          <p style={{ color: '#6b6b80', lineHeight: 1.85, fontSize: '.95rem', marginBottom: '1.2rem' }}>I'm <strong style={{ color: '#e8e8f0', fontWeight: 500 }}>Praveen Shah</strong> — a developer who believes great software lives at the intersection of clean code and thoughtful design.</p>
          <p style={{ color: '#6b6b80', lineHeight: 1.85, fontSize: '.95rem', marginBottom: '1.2rem' }}>Currently at <strong style={{ color: '#e8e8f0', fontWeight: 500 }}>Supplyvalid Pvt. Ltd.</strong> building production React apps. Previously shipped <strong style={{ color: '#e8e8f0', fontWeight: 500 }}>JoshGuru</strong> education platform at Trihari Smart Solutions.</p>
          <p style={{ color: '#6b6b80', lineHeight: 1.85, fontSize: '.95rem', marginBottom: '2rem' }}>I care deeply about <strong style={{ color: '#e8e8f0', fontWeight: 500 }}>performance, pixel precision, and great UX</strong>. Always learning — currently deep in React ecosystem and ML.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem', marginBottom: '1.8rem' }}>
            {education.map((ed, i) => (
              <div key={i} style={{ border: '1px solid rgba(255,255,255,0.07)', padding: '1.1rem 1.4rem', position: 'relative', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,255,136,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
              >
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: '#00ff88' }} />
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.62rem', color: '#00ff88', letterSpacing: '2px', marginBottom: '.3rem' }}>{ed.year}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '.95rem', fontWeight: 700 }}>{ed.degree}</div>
                <div style={{ fontSize: '.78rem', color: '#6b6b80', marginTop: '.1rem' }}>{ed.uni}</div>
              </div>
            ))}
          </div>

          <a href="/resume.pdf" download style={{ display: 'inline-flex', alignItems: 'center', gap: '.7rem', padding: '.8rem 1.8rem', border: '1px solid rgba(255,255,255,0.14)', fontFamily: "'Space Mono', monospace", fontSize: '.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#e8e8f0', transition: 'border-color 0.2s, color 0.2s', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#00ff88'; e.currentTarget.style.color = '#00ff88'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = '#e8e8f0'; }}
          >↓ Download Resume</a>
        </div>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}} @media(max-width:900px){#about>div:last-child{grid-template-columns:1fr!important}} @media(max-width:768px){#about{padding:4rem 1.5rem!important}}`}</style>
    </section>
  );
}
