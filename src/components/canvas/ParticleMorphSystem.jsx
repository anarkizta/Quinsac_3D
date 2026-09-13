import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COUNT = 2200;

export function ParticleMorphSystem({ scrollProgress = 0, wireframeMode = false }) {
  const pointsRef = useRef();

  // Generate target shapes mathematically
  const { positions0, positions1, positions2, positions3, positions4, colors } = useMemo(() => {
    const p0 = new Float32Array(COUNT * 3); // Logo shape
    const p1 = new Float32Array(COUNT * 3); // Topographic terrain
    const p2 = new Float32Array(COUNT * 3); // Ecological sphere
    const p3 = new Float32Array(COUNT * 3); // Drone / Blueprint
    const p4 = new Float32Array(COUNT * 3); // Piping Grid
    const col = new Float32Array(COUNT * 3);

    const colorGreen = new THREE.Color('#1A7E46');
    const colorLime = new THREE.Color('#82DF26');
    const colorOrange = new THREE.Color('#F57C00');
    const colorWhite = new THREE.Color('#E0E0E0');

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;

      // 0. LOGO (3 diagonal bars + shield perimeter)
      const barIndex = i % 4;
      if (barIndex === 0) {
        // Left bar
        p0[i3] = -0.65 + (Math.random() - 0.5) * 0.35 + (Math.random() - 0.5) * 0.8 * 0.4;
        p0[i3 + 1] = (Math.random() - 0.5) * 2.2;
        p0[i3 + 2] = (Math.random() - 0.5) * 0.3;
      } else if (barIndex === 1) {
        // Middle bar
        p0[i3] = 0 + (Math.random() - 0.5) * 0.35 + (Math.random() - 0.5) * 0.8 * 0.4;
        p0[i3 + 1] = (Math.random() - 0.5) * 2.2;
        p0[i3 + 2] = (Math.random() - 0.5) * 0.3;
      } else if (barIndex === 2) {
        // Right bar
        p0[i3] = 0.65 + (Math.random() - 0.5) * 0.35 + (Math.random() - 0.5) * 0.8 * 0.4;
        p0[i3 + 1] = (Math.random() - 0.5) * 2.2;
        p0[i3 + 2] = (Math.random() - 0.5) * 0.3;
      } else {
        // Shield outline
        const angle = (i / COUNT) * Math.PI * 2;
        p0[i3] = Math.cos(angle) * 1.8;
        p0[i3 + 1] = Math.sin(angle) * 1.6;
        p0[i3 + 2] = (Math.random() - 0.5) * 0.4;
      }

      // 1. TOPOGRAPHY (Chile mountain ridge)
      const u = (Math.random() - 0.5) * 8;
      const v = (Math.random() - 0.5) * 8;
      p1[i3] = u;
      p1[i3 + 1] = v;
      p1[i3 + 2] = Math.sin(u * 1.2) * Math.cos(v * 1.2) * 1.2 + (Math.random() - 0.5) * 0.2;

      // 2. ECO BIOSPHERE (Spherical layers)
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const rad = 1.4 + (i % 3) * 0.4 + (Math.random() - 0.5) * 0.2;
      p2[i3] = rad * Math.sin(phi) * Math.cos(theta);
      p2[i3 + 1] = rad * Math.sin(phi) * Math.sin(theta);
      p2[i3 + 2] = rad * Math.cos(phi);

      // 3. DRONE & LIDAR (Cross structure + cone)
      if (i % 2 === 0) {
        // Drone arms
        const armAngle = Math.floor((i % 4)) * (Math.PI / 2) + Math.PI / 4;
        const dist = (Math.random()) * 2.2;
        p3[i3] = Math.cos(armAngle) * dist;
        p3[i3 + 1] = (Math.random() - 0.5) * 0.2;
        p3[i3 + 2] = Math.sin(armAngle) * dist;
      } else {
        // Downward LiDAR scan cone
        const coneH = Math.random() * 2.5;
        const coneR = (coneH / 2.5) * 1.8;
        const coneAng = Math.random() * Math.PI * 2;
        p3[i3] = Math.cos(coneAng) * coneR;
        p3[i3 + 1] = -coneH;
        p3[i3 + 2] = Math.sin(coneAng) * coneR;
      }

      // 4. PIPING & RE-ASSEMBLE
      if (i % 3 === 0) {
        // Main horizontal pipeline
        p4[i3] = (Math.random() - 0.5) * 4.5;
        p4[i3 + 1] = (Math.random() - 0.5) * 0.4;
        p4[i3 + 2] = (Math.random() - 0.5) * 0.4;
      } else if (i % 3 === 1) {
        // Vertical pipeline
        p4[i3] = (i % 2 === 0 ? 1.2 : -1.2) + (Math.random() - 0.5) * 0.3;
        p4[i3 + 1] = (Math.random() - 0.5) * 3.5;
        p4[i3 + 2] = (Math.random() - 0.5) * 0.3;
      } else {
        // Recombining particles
        p4[i3] = p0[i3] * 1.2;
        p4[i3 + 1] = p0[i3 + 1] * 1.2;
        p4[i3 + 2] = p0[i3 + 2] * 1.2;
      }

      // Colors
      const c = (i % 5 === 0) ? colorOrange : (i % 2 === 0 ? colorLime : (i % 3 === 0 ? colorGreen : colorWhite));
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }

    return {
      positions0: p0,
      positions1: p1,
      positions2: p2,
      positions3: p3,
      positions4: p4,
      colors: col
    };
  }, []);

  // Current interpolated vertex buffer
  const currentPositions = useMemo(() => new Float32Array(positions0), [positions0]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const attr = geo.attributes.position;
    const t = state.clock.getElapsedTime();

    // Map scroll progress (0..1) to stages (0..4)
    const stage = scrollProgress * 4; // 0 to 4
    const sIndex = Math.min(Math.floor(stage), 3);
    const alpha = stage - sIndex; // 0..1 transition

    const sets = [positions0, positions1, positions2, positions3, positions4];
    const fromSet = sets[sIndex];
    const toSet = sets[sIndex + 1] || sets[sIndex];

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;

      // Natural turbulence / noise
      const noise = Math.sin(t * 2 + i * 0.1) * 0.04;

      const x = THREE.MathUtils.lerp(fromSet[i3], toSet[i3], alpha) + noise;
      const y = THREE.MathUtils.lerp(fromSet[i3 + 1], toSet[i3 + 1], alpha) + noise;
      const z = THREE.MathUtils.lerp(fromSet[i3 + 2], toSet[i3 + 2], alpha) + noise;

      attr.setXYZ(i, x, y, z);
    }
    attr.needsUpdate = true;

    // Subtle gentle world rotation
    pointsRef.current.rotation.y = t * 0.06;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={COUNT}
          array={currentPositions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={COUNT}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={wireframeMode ? 0.05 : 0.038}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
