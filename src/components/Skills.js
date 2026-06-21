/* eslint-disable */
import React, { useState, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const skillGroups = [
  {
    label: 'Languages', color: '#00ff88',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    items: [
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'C / C++', level: 'Intermediate' },
      { name: 'SQL', level: 'Intermediate' },
    ],
  },
  {
    label: 'Frontend', color: '#7c3aed',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    items: [
      { name: 'React JS', level: 'Advanced' },
      { name: 'Angular', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'HTML5 / CSS3', level: 'Advanced' },
    ],
  },
  {
    label: 'Backend & DB', color: '#f59e0b',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    items: [
      { name: 'Node JS', level: 'Advanced' },
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'Express JS', level: 'Intermediate' },
      { name: 'Linux', level: 'Intermediate' },
    ],
  },
  {
    label: 'Tools & ML', color: '#06b6d4',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
    items: [
      { name: 'Git / GitHub', level: 'Advanced' },
      { name: 'TensorFlow', level: 'Intermediate' },
      { name: 'Pandas / NumPy', level: 'Intermediate' },
      { name: 'VS Code', level: 'Advanced' },
    ],
  },
];

function TiltCard({ group }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(800px)');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    const el = cardRef.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTransform(`perspective(800px) rotateX(${(y - 0.5) * 8}deg) rotateY(${(x - 0.5) * -8}deg) scale3d(1.015,1.015,1.015)`);
    setGlowPos({ x: x * 100, y: y * 100 });
  };
  const handleLeave = () => {
    setTransform('perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)');
    setHovered(false);
  };

  return (
    <div ref={cardRef}
      style={{ background: '#0d0d12', border: `1px solid ${hovered ? group.color + '44' : 'rgba(255,255,255,0.07)'}`, padding: '2rem', position: 'relative', overflow: 'hidden', transition: 'border-color 0.3s', transform, height: '100%' }}
      onMouseMove={handleMove} onMouseLeave={handleLeave} onMouseEnter={() => setHovered(true)}
    >
      {hovered && <div style={{ position: 'absolute', width: '260px', height: '260px', borderRadius: '50%', background: `radial-gradient(circle, ${group.color}10 0%, transparent 70%)`, left: glowPos.x + '%', top: glowPos.y + '%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${group.color}, transparent)`, transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s cubic-bezier(.16,1,.3,1)' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '.9rem', marginBottom: '1.6rem' }}>
        <div style={{ width: '42px', height: '42px', background: group.color + '14', border: `1px solid ${group.color}30`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: group.color, flexShrink: 0 }}>
          {group.icon}
        </div>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1rem', color: '#e8e8f0', letterSpacing: '.5px' }}>{group.label}</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
        {group.items.map(item => (
          <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.6rem .9rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', transition: 'background 0.2s, border-color 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = group.color + '0a'; e.currentTarget.style.borderColor = group.color + '30'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
          >
            <span style={{ fontSize: '.85rem', color: '#c8c8d8', fontWeight: 500 }}>{item.name}</span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '.62rem', padding: '.2rem .6rem', borderRadius: '100px', color: group.color, border: `1px solid ${group.color}30`, background: group.color + '0d', whiteSpace: 'nowrap' }}>
              {item.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '7rem 5rem', background: '#050507' }}>
      <ScrollReveal>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', letterSpacing: '3px', color: '#00ff88', textTransform: 'uppercase', marginBottom: '.5rem' }}>Section 02</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.5rem)', textTransform: 'uppercase', letterSpacing: '-1px' }}>Tech Stack</h2>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
        </div>
      </ScrollReveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem', alignItems: 'stretch' }} className="skills-grid">
        {skillGroups.map((group, i) => (
          <ScrollReveal key={group.label} delay={i * 100}>
            <TiltCard group={group} />
          </ScrollReveal>
        ))}
      </div>

      <style>{`
        @media(max-width:768px){
          #skills { padding: 4rem 1.5rem !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}