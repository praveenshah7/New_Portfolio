import React, { useEffect, useRef } from 'react';

const styles = {
  cursor: {
    position: 'fixed',
    width: '12px',
    height: '12px',
    background: '#00ff88',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.2s, height 0.2s',
    mixBlendMode: 'difference',
  },
  ring: {
    position: 'fixed',
    width: '36px',
    height: '36px',
    border: '1.5px solid #00ff88',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9998,
    transform: 'translate(-50%, -50%)',
    opacity: 0.5,
  },
};

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    const animRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      rafRef.current = requestAnimationFrame(animRing);
    };

    const onEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = '20px';
        cursorRef.current.style.height = '20px';
      }
      if (ringRef.current) {
        ringRef.current.style.width = '50px';
        ringRef.current.style.height = '50px';
      }
    };

    const onLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = '12px';
        cursorRef.current.style.height = '12px';
      }
      if (ringRef.current) {
        ringRef.current.style.width = '36px';
        ringRef.current.style.height = '36px';
      }
    };

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animRing);

    const addListeners = () => {
      document.querySelectorAll('a, button, .hoverable').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    const timer = setTimeout(addListeners, 500);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} style={styles.cursor} />
      <div ref={ringRef} style={styles.ring} />
    </>
  );
}
