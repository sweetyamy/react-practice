import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  return (
    <div
      className='container'
      onPointerMove={(e) => {
        console.log('clientX:', e.clientX, 'clientY:', e.clientY);
        // setPosition({ x: e.clientX, y: e.clientY });
        // only horizontal movement is allowed, update only Y
        // setPosition((prev) => ({ x: e.clientX, y: prev.y }));
        setPosition((prev) => ({ ...prev, x: e.clientX }));
      }}
    >
      <div
        className='pointer'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}
