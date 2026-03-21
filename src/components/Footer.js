import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: '#050507',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '1.8rem 5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', color: '#6b6b80', letterSpacing: '2px' }}>
        © 2025 — Designed & Built by Praveen Shah
      </div>
      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.2rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
        PS<span style={{ color: '#00ff88' }}>.</span>
      </div>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '.65rem', color: '#6b6b80', letterSpacing: '1px' }}>
        Haldwani, Uttarakhand
      </div>
      <style>{`@media(max-width:768px){ footer { flex-direction: column; gap: 1rem; text-align: center; padding: 1.5rem !important; } }`}</style>
    </footer>
  );
}
