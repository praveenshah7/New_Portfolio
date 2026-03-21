import React, { useState, useRef } from 'react';

const projects = [
  { num: '01', year: '2024', title: 'Moweb', desc: 'A dynamic movie web app with comprehensive info — plot summaries, cast, ratings, trailers, and reviews. Fully responsive across all devices.', tags: ['React JS', 'Tailwind CSS', 'Node JS'], link: 'https://github.com/praveenshah7', color: '#00ff88' },
  { num: '02', year: '2025', title: 'Recognition System', desc: 'AI-powered image classifier using ResNet50. Wikipedia API for species summaries. Logs predictions with timestamps and accuracy to CSV.', tags: ['Python', 'Streamlit', 'TensorFlow', 'NumPy', 'Pandas'], link: 'https://github.com/praveenshah7', color: '#7c3aed' },
];

function TiltCard({ proj }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    const el = cardRef.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * 12;
    const tiltY = (x - 0.5) * -12;
    setTransform(`perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02,1.02,1.02)`);
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  const handleLeave = () => { setTransform('perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)'); setHovered(false); };

  return (
    <a ref={cardRef} href={proj.link} target="_blank" rel="noreferrer"
      style={{ display: 'block', background: '#0d0d12', border: `1px solid ${hovered ? proj.color + '44' : 'rgba(255,255,255,0.07)'}`, padding: '2.5rem', position: 'relative', overflow: 'hidden', transition: 'border-color 0.3s', transform, transitionProperty: 'border-color', textDecoration: 'none', cursor: 'none' }}
      onMouseMove={handleMove} onMouseLeave={handleLeave} onMouseEnter={() => setHovered(true)}
    >
      {/* Glow */}
      {hovered && <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: `radial-gradient(circle, ${proj.color}15 0%, transparent 70%)`, left: glowPos.x + '%', top: glowPos.y + '%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', transition: 'left 0.1s, top 0.1s' }} />}

      {/* Top bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${proj.color}, transparent)`, transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s cubic-bezier(.16,1,.3,1)' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.2)' }}>Project {proj.num} — {proj.year}</span>
        <span style={{ fontSize: '1.1rem', color: hovered ? proj.color : '#6b6b80', transition: 'color 0.2s, transform 0.2s', transform: hovered ? 'translate(3px,-3px)' : 'none', display: 'inline-block' }}>↗</span>
      </div>

      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.6rem', marginBottom: '.8rem', lineHeight: 1.1, color: '#e8e8f0' }}>{proj.title}</div>
      <p style={{ color: '#6b6b80', fontSize: '.87rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>{proj.desc}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
        {proj.tags.map(tag => (
          <span key={tag} style={{ fontFamily: "'Space Mono', monospace", fontSize: '.62rem', padding: '.25rem .7rem', border: `1px solid ${hovered ? proj.color + '44' : 'rgba(255,255,255,0.14)'}`, color: hovered ? proj.color : '#6b6b80', letterSpacing: '1px', transition: 'all 0.2s' }}>{tag}</span>
        ))}
      </div>
    </a>
  );
}

const certs = [
  { num: '01', name: 'Introduction to Web Development', org: 'Coursera' },
  { num: '02', name: 'Introduction to Software Engineering', org: 'Coursera' },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '7rem 5rem', background: '#050507' }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', letterSpacing: '3px', color: '#00ff88', textTransform: 'uppercase', marginBottom: '.5rem' }}>// 04</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.5rem)', textTransform: 'uppercase', letterSpacing: '-1px' }}>Projects</h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {projects.map(proj => <TiltCard key={proj.num} proj={proj} />)}
      </div>

      <div style={{ marginTop: '3.5rem' }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', letterSpacing: '3px', color: '#00ff88', textTransform: 'uppercase', marginBottom: '1rem' }}>// Certifications</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
          {certs.map(cert => (
            <div key={cert.num} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1rem 1.5rem', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,255,136,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
            >
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', color: '#00ff88', width: '20px' }}>{cert.num}</span>
              <span style={{ fontSize: '.88rem', color: '#e8e8f0', flex: 1 }}>{cert.name}</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '.62rem', color: '#6b6b80', letterSpacing: '1px' }}>{cert.org}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
  @media(max-width:768px){
    #projects { padding: 4rem 1.5rem !important; }
    #projects > div:nth-child(3) { grid-template-columns: 1fr !important; }
    #projects > div:last-child > div:last-child { grid-template-columns: 1fr !important; }
  }
`}</style>
    </section>
  );
}
