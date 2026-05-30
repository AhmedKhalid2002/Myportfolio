'use client';

import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Points as ThreePoints } from 'three';

function StarsParticles() {
  const ref = useRef<ThreePoints | null>(null);

  const [sphere] = useState(() => {
    const pointsCount = 1000;
    const arr = new Float32Array(pointsCount * 3);

    for (let i = 0; i < pointsCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 3.0;

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }

    return arr;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.018}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function ParticlesBackground() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (typeof window === 'undefined') return null;

  if (dimensions.width === 0) return null;

  return (
    <div
      className="absolute inset-0 block pointer-events-none overflow-hidden"
      style={{
        width: '100%',
        height: '100%',
        zIndex: 0,
        position: 'absolute',
      }}
    >
      <Canvas
        key={`${dimensions.width}-${dimensions.height}`}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 1.5], fov: 60 }}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <StarsParticles />
      </Canvas>
    </div>
  );
}