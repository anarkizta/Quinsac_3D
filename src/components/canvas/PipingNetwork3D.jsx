import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function PipingNetwork3D({ scale = 1 }) {
  const groupRef = useRef();
  const valveRef = useRef();
  const weldGlowRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
    }
    if (valveRef.current) {
      valveRef.current.rotation.z = Math.sin(t * 0.8) * 0.8;
    }
    if (weldGlowRef.current) {
      // Weld sparking intensity
      weldGlowRef.current.intensity = 2.5 + Math.sin(t * 12) * 1.5;
    }
  });

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      {/* Central Manifold Tube (Horizontal) */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 4.2, 32]} />
        <meshStandardMaterial
          color="#3a4856"
          metalness={0.9}
          roughness={0.25}
        />
      </mesh>

      {/* Vertical Branch Pipes */}
      <mesh position={[-1.2, 1.0, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 2.0, 24]} />
        <meshStandardMaterial color="#2d3a46" metalness={0.85} roughness={0.3} />
      </mesh>
      <mesh position={[1.2, -1.0, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 2.0, 24]} />
        <meshStandardMaterial color="#2d3a46" metalness={0.85} roughness={0.3} />
      </mesh>

      {/* Front-Facing Cross Pipe */}
      <mesh position={[0, 0, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 1.6, 24]} />
        <meshStandardMaterial color="#3a4856" metalness={0.9} roughness={0.25} />
      </mesh>

      {/* Pipe Flanges & Rings */}
      <mesh position={[-2.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.48, 0.48, 0.08, 24]} />
        <meshStandardMaterial color="#1A7E46" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[2.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.48, 0.48, 0.08, 24]} />
        <meshStandardMaterial color="#1A7E46" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[-1.2, 2.0, 0]}>
        <cylinderGeometry args={[0.36, 0.36, 0.08, 24]} />
        <meshStandardMaterial color="#82DF26" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Industrial Pressure Valve Wheel */}
      <group position={[0, 0, 1.6]} ref={valveRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.45, 0.05, 16, 32]} />
          <meshStandardMaterial color="#F57C00" metalness={0.7} roughness={0.2} />
        </mesh>
        <mesh rotation={[0, 0, 0]}>
          <boxGeometry args={[0.8, 0.06, 0.06]} />
          <meshStandardMaterial color="#F57C00" metalness={0.8} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.8, 0.06, 0.06]} />
          <meshStandardMaterial color="#F57C00" metalness={0.8} />
        </mesh>
      </group>

      {/* Glowing High-Temp Welded Joints (ASME / AWS) */}
      <mesh position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.32, 0.04, 16, 32]} />
        <meshBasicMaterial color="#F57C00" />
      </mesh>
      <mesh position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.32, 0.04, 16, 32]} />
        <meshBasicMaterial color="#82DF26" />
      </mesh>

      <pointLight ref={weldGlowRef} position={[0, 0, 0.5]} color="#F57C00" intensity={2} distance={4} />
    </group>
  );
}
