import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function EcoCore3D({ scale = 1 }) {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.4;
      coreRef.current.rotation.y = t * 0.6;
    }
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.5;
    if (ring2Ref.current) ring2Ref.current.rotation.x = -t * 0.3;
    if (ring3Ref.current) ring3Ref.current.rotation.y = t * 0.4;
  });

  return (
    <group scale={[scale, scale, scale]}>
      {/* Central Geometric Bio-Crystal Core (Icosahedron with sub-surfaces) */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshPhysicalMaterial
          color="#1A7E46"
          emissive="#82DF26"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.3}
          transmission={0.8}
          thickness={0.5}
          transparent
          opacity={0.9}
        />
        {/* Wireframe overlay for technical data lines */}
        <lineSegments>
          <edgesGeometry args={[new THREE.IcosahedronGeometry(1.2, 1)]} />
          <lineBasicMaterial color="#82DF26" transparent opacity={0.6} linewidth={1} />
        </lineSegments>
      </mesh>

      {/* Layer 1: Biosphere Orbit Rings */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.9, 0.02, 16, 64]} />
        <meshBasicMaterial color="#82DF26" transparent opacity={0.7} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.3, 0.025, 16, 64]} />
        <meshBasicMaterial color="#1A7E46" transparent opacity={0.6} />
      </mesh>

      <mesh ref={ring3Ref} rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <torusGeometry args={[2.7, 0.015, 16, 64]} />
        <meshBasicMaterial color="#8CC63F" transparent opacity={0.5} />
      </mesh>

      {/* Pulsing Light Core */}
      <pointLight color="#82DF26" intensity={3} distance={5} />
    </group>
  );
}
