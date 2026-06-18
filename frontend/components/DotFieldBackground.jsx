'use client';

import dynamic from 'next/dynamic';

const DotField = dynamic(() => import('./DotField/DotField'), { ssr: false });

export default function DotFieldBackground() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <DotField 
        dotRadius={1.5}
        dotSpacing={14}
        cursorRadius={500}
        cursorForce={0.1}
        bulgeOnly={true}
        bulgeStrength={67}
        glowRadius={160}
        sparkle={true}
        waveAmplitude={2}
        gradientFrom="rgba(168, 85, 247, 0.35)"
        gradientTo="rgba(180, 151, 207, 0.25)"
        glowColor="#2A1B40"
      />
    </div>
  );
}
