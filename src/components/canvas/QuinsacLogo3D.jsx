import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function QuinsacLogo3D({ active = true, scale = 1, rotationSpeed = 0.5, hovered = false }) {
  const groupRef = useRef();
  const innerGlowRef = useRef();

  // Create procedural geometry for the 3 diagonal angled bars
  const { barGeo, shieldGeo } = useMemo(() => {
    // Bar geometry: rounded box / extruded trapezoid
    const bar = new THREE.BoxGeometry(0.38, 2.2, 0.4);
    
    // Shield back geometry
    const shape = new THREE.Shape();
    shape.moveTo(-1.6, 1.4);
    shape.lineTo(1.6, 1.4);
    shape.quadraticCurveTo(1.7, 0, 0, -1.8);
    shape.quadraticCurveTo(-1.7, 0, -1.6, 1.4);

    const extrudeSettings = {
      depth: 0.15,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.08,
      bevelThickness: 0.08
    };

    const shield = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    shield.center();

    return { barGeo: bar, shieldGeo: shield };
  }, []);

  // Subtle floating animation and mouse tilt response
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Floating movement
    groupRef.current.position.y = Math.sin(t * 1.5) * 0.1;
    
    // Controlled slow rotation
    if (!hovered) {
      groupRef.current.rotation.y = Math.sin(t * 0.6) * 0.25;
      groupRef.current.rotation.x = Math.cos(t * 0.4) * 0.08;
    }

    if (innerGlowRef.current) {
      innerGlowRef.current.intensity = 1.8 + Math.sin(t * 3.5) * 0.6;
    }
  });

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      {/* Central Shield Crest Backing (Translucent Dark Industrial Crystal) */}
      <mesh geometry={shieldGeo} position={[0, 0, -0.2]}>
        <meshPhysicalMaterial
          color="#0d1b12"
          emissive="#091b10"
          emissiveIntensity={0.3}
          roughness={0.15}
          metalness={0.2}
          transmission={0.85}
          thickness={0.6}
          ior={1.45}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Wireframe Contour Overlay for Shield */}
      <lineSegments position={[0, 0, -0.1]}>
        <edgesGeometry args={[shieldGeo]} />
        <lineBasicMaterial color="#82DF26" transparent opacity={0.35} linewidth={1} />
      </lineSegments>

      {/* Internal Emerald Glowing Light Core */}
      <pointLight
        ref={innerGlowRef}
        color="#82DF26"
        intensity={2.2}
        distance={4}
        decay={2}
        position={[0, 0, 0.3]}
      />

      {/* 3 Diagonal Bars of Quinsac Brand (Angled at ~25 degrees) */}
      <group position={[0, 0, 0.15]}>
        {/* Bar 1 (Left - Deep Industrial Green) */}
        <mesh
          geometry={barGeo}
          position={[-0.65, 0.05, 0]}
          rotation={[0, 0, -0.42]}
        >
          <meshPhysicalMaterial
            color="#155D33"
            emissive="#0e3d22"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Bar 2 (Middle - High Voltage Lime Neon) */}
        <mesh
          geometry={barGeo}
          position={[0, 0.0, 0.12]}
          rotation={[0, 0, -0.42]}
        >
          <meshPhysicalMaterial
            color="#82DF26"
            emissive="#82DF26"
            emissiveIntensity={0.85}
            roughness={0.1}
            metalness={0.3}
            transmission={0.3}
            clearcoat={1}
          />
        </mesh>

        {/* Bar 3 (Right - Platinum Titanium White) */}
        <mesh
          geometry={barGeo}
          position={[0.65, -0.05, 0]}
          rotation={[0, 0, -0.42]}
        >
          <meshPhysicalMaterial
            color="#F0F4F2"
            emissive="#A0B5A8"
            emissiveIntensity={0.4}
            roughness={0.15}
            metalness={0.85}
            clearcoat={1}
          />
        </mesh>
      </group>

      {/* Holographic Technical Orbit Rings */}
      <mesh rotation={[Math.PI / 2.3, 0.2, 0]}>
        <ringGeometry args={[2.0, 2.02, 64]} />
        <meshBasicMaterial color="#82DF26" side={THREE.DoubleSide} transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[Math.PI / 1.8, -0.3, 0.4]}>
        <ringGeometry args={[2.3, 2.315, 64]} />
        <meshBasicMaterial color="#1A7E46" side={THREE.DoubleSide} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}
