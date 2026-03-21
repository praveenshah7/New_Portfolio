/* eslint-disable */
import React, { useState, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    num: '01', year: '2024', title: 'Moweb',
    desc: 'A dynamic movie web app with comprehensive info — plot summaries, cast, ratings, trailers, and reviews. Fully responsive across all devices.',
    tags: ['React JS', 'Tailwind CSS', 'Node JS'],
    github: 'https://github.com/praveenshah7',
    live: null,
    learned: 'API integration, state management, responsive design',
    color: '#00ff88',
  },
  {
    num: '02', year: '2025', title: 'Recognition System',
    desc: 'AI-powered image classifier using ResNet50. Wikipedia API for species summaries. Logs predictions with timestamps and accuracy to CSV.',
    tags: ['Python', 'Streamlit', 'TensorFlow', 'NumPy', 'Pandas'],
    github: 'https://github.com/praveenshah7',
    live: null,
    learned: 'Deep learning, model deployment, data logging',
    color: '#7c3aed',
  },
];

const certs = [
  { num: '01', name: 'Introduction to Web Development', org: 'Coursera', year: '2024' },
  { num: '02', name: 'Introduction to Software Engineering', org: 'Coursera', year: '2024' },
];

function TiltCard({ proj }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(800px)');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    const el = cardRef.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTransform(`perspective(800px) rotateX(${(y - 0.5) * 10}deg) rotateY(${(x - 0.5) * -10}deg) scale3d(1.02,1.02,1.02)`);
    setGlowPos({ x: x * 100, y: y * 100 });
  };
  const handleLeave = () => { setTransform('perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)'); setHovered(false); };

  return (
    <div ref={cardRef}
      style={{ background: '#0d0d12', border: `1px solid ${hovered ? proj.color + '44' : 'rgba(255,255,255,0.07)'}`, padding: '2.5rem', position: 'relative', overflow: 'hidden', transition: 'border-color 0.3s', transform }}
      onMouseMove={handleMove} onMouseLeave={handleLeave} onMouseEnter={() => setHovered(true)}
    >
      {hovered && <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: `radial-gradient(circle, ${proj.color}12 0%, transparent 70%)`, left: glowPos.x + '%', top: glowPos.y + '%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${proj.color}, transparent)`, transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s cubic-bezier(.16,1,.3,1)' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '.62rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.2)' }}>Project {proj.num} — {proj.year}</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '.6rem', padding: '.2rem .6rem', border: `1px solid ${proj.color}44`, color: proj.color, letterSpacing: '1px' }}>Featured</span>
      </div>

      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.5rem', marginBottom: '.7rem', lineHeight: 1.1, color: '#e8e8f0' }}>{proj.title}</div>
      <p style={{ color: '#6b6b80', fontSize: '.87rem', lineHeight: 1.75, marginBottom: '1rem' }}>{proj.desc}</p>

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '.7rem 1rem', marginBottom: '1.2rem', borderLeft: `3px solid ${proj.color}` }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.58rem', color: proj.color, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '.3rem' }}>What I learned</div>
        <div style={{ fontSize: '.82rem', color: '#a0a0b8' }}>{proj.learned}</div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginBottom: '1.5rem' }}>
        {proj.tags.map(tag => (
          <span key={tag} style={{ fontFamily: "'Space Mono', monospace", fontSize: '.62rem', padding: '.25rem .7rem', border: `1px solid ${hovered ? proj.color + '44' : 'rgba(255,255,255,0.1)'}`, color: hovered ? proj.color : '#6b6b80', letterSpacing: '1px', transition: 'all 0.2s' }}>{tag}</span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '.8rem' }}>
        <a href={proj.github} target="_blank" rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.55rem 1.1rem', border: '1px solid rgba(255,255,255,0.14)', fontFamily: "'Space Mono', monospace", fontSize: '.65rem', color: '#a0a0b8', letterSpacing: '1px', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#00ff88'; e.currentTarget.style.color = '#00ff88'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = '#a0a0b8'; }}
        >⌥ GitHub</a>
        {proj.live && (
          <a href={proj.live} target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.55rem 1.1rem', background: proj.color, fontFamily: "'Space Mono', monospace", fontSize: '.65rem', color: '#050507', fontWeight: 700, letterSpacing: '1px', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >↗ Live Demo</a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '7rem 5rem', background: '#050507' }}>
      <ScrollReveal>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', letterSpacing: '3px', color: '#00ff88', textTransform: 'uppercase', marginBottom: '.5rem' }}>Section 04</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.5rem)', textTransform: 'uppercase', letterSpacing: '-1px' }}>Projects</h2>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
        </div>
      </ScrollReveal>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {projects.map((proj, i) => (
          <ScrollReveal key={proj.num} delay={i * 150}>
            <TiltCard proj={proj} />
          </ScrollReveal>
        ))}
      </div>

      <div style={{ marginTop: '4rem' }}>
        <ScrollReveal>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', letterSpacing: '3px', color: '#00ff88', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Certifications</div>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {certs.map((cert, i) => (
            <ScrollReveal key={cert.num} delay={i * 100}>
              <div style={{ border: '1px solid rgba(255,255,255,0.07)', padding: '1.5rem', position: 'relative', overflow: 'hidden', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,255,136,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #00ff88, transparent)' }} />
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.6rem', color: '#00ff88', letterSpacing: '2px', marginBottom: '.5rem' }}>{cert.org} · {cert.year}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#e8e8f0', marginBottom: '.3rem' }}>{cert.name}</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', marginTop: '.5rem', padding: '.2rem .7rem', background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '100px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00ff88', display: 'inline-block' }} />
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '.6rem', color: '#00ff88' }}>Verified</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){#projects>div:nth-child(3){grid-template-columns:1fr!important} #projects{padding:4rem 1.5rem!important}}`}</style>
    </section>
  );
}