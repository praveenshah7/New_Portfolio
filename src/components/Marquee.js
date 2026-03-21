import React from 'react';

const items = ['React JS', 'Node JS', 'Python', 'Tailwind', 'MongoDB', 'JavaScript', 'Git', 'Linux', 'Pandas', 'Full Stack', 'Frontend Dev', 'TensorFlow'];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      padding: '.9rem 0',
      background: '#0d0d12',
    }}>
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: 'marquee 25s linear infinite',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1rem',
            letterSpacing: '3px', textTransform: 'uppercase', color: '#6b6b80',
            padding: '0 2.5rem', whiteSpace: 'nowrap',
          }}>
            <span style={{ color: '#00ff88', marginRight: '2.5rem' }}>✦</span>
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
