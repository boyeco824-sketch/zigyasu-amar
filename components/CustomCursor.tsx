
import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && followerRef.current) {
        const { clientX: x, clientY: y } = e;
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        followerRef.current.style.transform = `translate3d(${x - 15}px, ${y - 15}px, 0)`;
      }
    };

    const handleMouseDown = () => {
        if (followerRef.current) followerRef.current.style.transform += ' scale(0.8)';
    };
    
    const handleMouseUp = () => {
        if (followerRef.current) followerRef.current.style.transform = followerRef.current.style.transform.replace(' scale(0.8)', '');
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} className="hidden md:block" />
      <div id="cursor-follower" ref={followerRef} className="hidden md:block" />
    </>
  );
};

export default CustomCursor;
