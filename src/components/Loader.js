/* eslint-disable */
import React, { useState, useEffect } from 'react';

const codeLines = [
  'import React from "react";',
  'const Praveen = () => {',
  '  const role = "Frontend Dev";',
  '  const stack = ["React", "Node"];',
  '  return <Portfolio />;',
  '};',
  'export default Praveen;',
];

export default function Loader({ onDone }) {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    codeLines.forEach((line, i) => {
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        setProgress(Math.round(((i + 1) / codeLines.length) * 100));
        if (i === codeLines.length - 1) {
          setTimeout(() => setFadeOut(true), 600);
          setTimeout(() => onDone(), 1100);
        }
      }, i * 200);
    });
  }, [onDone]);

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#050507', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', opacity: fadeOut ? 0 : 1, transition: 'opacity 0.5s ease', pointerEvents: fadeOut ? 'none' : 'all', boxSizing: 'border-box' }}>

      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.4rem', letterSpacing: '4px', color: '#e8e8f0', marginBottom: '2rem', textTransform: 'uppercase' }}>
        PS<span style={{ color: '#00ff88' }}>.</span>
      </div>

      <div style={{ width: '100%', maxWidth: '340px', background: '#0d0d12', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ background: '#13131a', padding: '.6rem 1rem', display: 'flex', alignItems: 'center', gap: '.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          {['#ff5f57','#febc2e','#28c840'].map(c => (
            <span key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, display: 'inline-block', flexShrink: 0 }} />
          ))}
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '.6rem', color: '#6b6b80', marginLeft: '.5rem' }}>portfolio.js</span>
        </div>

        <div style={{ padding: '1rem', fontFamily: "'Space Mono', monospace", fontSize: '.68rem', lineHeight: 1.9, minHeight: '160px', overflowX: 'hidden' }}>
          {lines.map((line, i) => (
            <div key={i} style={{ display: 'flex', gap: '.6rem', overflow: 'hidden' }}>
              <span style={{ color: '#3a3a4a', flexShrink: 0, userSelect: 'none', minWidth: '18px' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ color: line.startsWith('import') ? '#7c3aed' : line.includes('const') ? '#06b6d4' : line.includes('return') ? '#f59e0b' : line.startsWith('export') ? '#00ff88' : '#a0a0b8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{line}</span>
            </div>
          ))}
          {lines.length < codeLines.length && (
            <span style={{ display: 'inline-block', width: '7px', height: '1em', background: '#00ff88', animation: 'blink 1s infinite', verticalAlign: 'middle' }} />
          )}
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: '340px', marginTop: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.5rem' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '.6rem', color: '#6b6b80', letterSpacing: '2px' }}>LOADING</span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '.6rem', color: '#00ff88' }}>{progress}%</span>
        </div>
        <div style={{ height: '2px', background: 'rgba(255,255,255,0.07)', borderRadius: '2px' }}>
          <div style={{ height: '100%', width: progress + '%', background: 'linear-gradient(90deg, #00ff88, #7c3aed)', borderRadius: '2px', transition: 'width 0.2s ease' }} />
        </div>
      </div>

      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  );
}