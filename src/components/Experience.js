/* eslint-disable */
import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    period: 'Aug 2025 — Present',
    type: 'Full-time',
    company: 'Supplyvalid Pvt. Ltd.',
    role: 'Frontend Developer',
    points: [
      'Building responsive web apps using React JS, Tailwind CSS, and JavaScript.',
      'Collaborating with cross-functional teams to design user-friendly interfaces.',
      'Creating reusable UI components to improve dev efficiency and consistency.',
    ],
  },
  {
    period: 'Jan 2025 — Jun 2025',
    type: 'Full-time',
    company: 'Trihari Smart Solutions',
    role: 'Web Developer',
    points: [
      'Led frontend dev for JoshGuru, an online education platform using React JS.',
      'Improved user engagement and cross-device experience with responsive design.',
    ],
  },
  {
    period: 'Apr 2024 — Jun 2024',
    type: 'Internship',
    company: 'TBI — Graphic Era University',
    role: 'Full Stack Developer Intern',
    points: [
      'Built 3 responsive cross-platform applications using React JS.',
      'Contributed to full stack projects across design, development, and deployment.',
    ],
  },
];

export default function Experience() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="experience" style={{ padding: '7rem 5rem', background: '#0d0d12' }}>
      <ScrollReveal>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', letterSpacing: '3px', color: '#00ff88', textTransform: 'uppercase', marginBottom: '.5rem' }}>Section 03</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.5rem)', textTransform: 'uppercase', letterSpacing: '-1px' }}>Work History</h2>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
        </div>
      </ScrollReveal>

      <div>
        {experiences.map((exp, i) => (
          <ScrollReveal key={i} delay={i * 120} direction="left">
            <div
              className="exp-row"
              style={{
                display: 'grid', gridTemplateColumns: '180px 1fr', gap: '3rem',
                padding: '2.5rem 1rem',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                borderTop: i === 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                background: hovered === i ? 'rgba(255,255,255,0.015)' : 'transparent',
                transition: 'background 0.2s', cursor: 'default',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', letterSpacing: '1.5px', color: '#00ff88', marginBottom: '.5rem' }}>{exp.period}</div>
                <div style={{ display: 'inline-block', padding: '.2rem .6rem', border: '1px solid rgba(255,255,255,0.07)', fontFamily: "'Space Mono', monospace", fontSize: '.58rem', letterSpacing: '1px', color: '#6b6b80', textTransform: 'uppercase' }}>{exp.type}</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.7rem', color: '#6b6b80', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '.3rem' }}>{exp.company}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.3rem', marginBottom: '.8rem' }}>{exp.role}</div>
                <ul style={{ listStyle: 'none' }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{ color: '#6b6b80', fontSize: '.88rem', lineHeight: 1.6, paddingLeft: '1rem', position: 'relative', marginBottom: '.5rem' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#00ff88', fontSize: '.7rem' }}>→</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <style>{`
        @media(max-width:768px){
          #experience { padding: 4rem 1.5rem !important; }
          .exp-row { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
      `}</style>
    </section>
  );
}