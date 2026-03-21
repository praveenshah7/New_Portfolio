import React, { useRef, useEffect, useState } from 'react';

const skillGroups = [
  { label: 'Languages', items: ['JavaScript', 'Python', 'C / C++', 'SQL'], color: '#00ff88' },
  { label: 'Frontend', items: ['React JS', 'Tailwind CSS', 'HTML5', 'CSS3'], color: '#7c3aed' },
  { label: 'Backend & DB', items: ['Node JS', 'MongoDB', 'Linux'], color: '#f59e0b' },
  { label: 'Tools & ML', items: ['Git / GitHub', 'TensorFlow', 'Pandas', 'VS Code', 'Streamlit'], color: '#06b6d4' },
];

function SkillBar({ name, color }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const pct = { 'React JS': 88, 'JavaScript': 85, 'Python': 75, 'Node JS': 78, 'MongoDB': 72, 'Tailwind CSS': 90, 'HTML5': 92, 'CSS3': 88, 'Git / GitHub': 85, 'TensorFlow': 60, 'Pandas': 65, 'VS Code': 95, 'Streamlit': 60, 'C / C++': 65, 'SQL': 70, 'Linux': 68 }[name] || 70;

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => setWidth(pct), 200); obs.disconnect(); } }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div ref={ref} style={{ marginBottom: '.9rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.3rem' }}>
        <span style={{ fontSize: '.83rem', color: '#a0a0b8' }}>{name}</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', color: color }}>{pct}%</span>
      </div>
      <div style={{ height: '2px', background: 'rgba(255,255,255,0.07)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: width + '%', background: color, borderRadius: '2px', transition: 'width 1.2s cubic-bezier(.16,1,.3,1)' }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '7rem 5rem', background: '#050507' }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', letterSpacing: '3px', color: '#00ff88', textTransform: 'uppercase', marginBottom: '.5rem' }}>{`// 02`}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.5rem)', textTransform: 'uppercase', letterSpacing: '-1px' }}>Tech Stack</h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2rem' }}>
        {skillGroups.map((group) => (
          <div key={group.label} style={{ background: '#0d0d12', border: '1px solid rgba(255,255,255,0.07)', padding: '2rem', transition: 'border-color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = group.color + '44'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: group.color, display: 'inline-block' }} />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', letterSpacing: '2px', color: group.color, textTransform: 'uppercase' }}>{group.label}</span>
            </div>
            {group.items.map(skill => <SkillBar key={skill} name={skill} color={group.color} />)}
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){#skills>div:last-child{grid-template-columns:1fr!important} #skills{padding:4rem 1.5rem!important}}`}</style>
    </section>
  );
}
