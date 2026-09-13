import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function TopographicGrid({ active = true, progress = 0 }) {
  const meshRef = useRef();
  const scanLineRef = useRef();

  // Procedural 3D Topographic Mesh with Peaks for Biobio/Los Angeles & Calama
  const { geometry, wireframeGeo } = useMemo(() => {
    const width = 10;
    const height = 10;
    const segments = 48;
    const plane = new THREE.PlaneGeometry(width, height, segments, segments);

    const pos = plane.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      
      // Distance to South Peak (Los Ángeles: x=-2.2, y=-1.8)
      const distSouth = Math.hypot(x - (-2.2), y - (-1.8));
      const peakSouth = Math.exp(-distSouth * 0.9) * 1.6;

      // Distance to North Peak (Calama: x=2.5, y=2.0)
      const distNorth = Math.hypot(x - 2.5, y - 2.0);
      const peakNorth = Math.exp(-distNorth * 0.8) * 2.2;

      // Cordillera elevation ridge
      const ridge = Math.sin(x * 0.8 + y * 0.5) * 0.4 * Math.cos(x * 0.3);

      const z = peakSouth + peakNorth + ridge;
      pos.setZ(i, z);
    }
    plane.computeVertexNormals();

    const wire = new THREE.WireframeGeometry(plane);
    return { geometry: plane, wireframeGeo: wire };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.z = t * 0.05;
      meshRef.current.rotation.x = -Math.PI / 3 + Math.sin(t * 0.3) * 0.05;
    }
    if (scanLineRef.current) {
      // Laser scan beam moving across the terrain
      scanLineRef.current.position.y = Math.sin(t * 1.2) * 3.5;
    }
  });

  return (
    <group position={[0, -0.4, 0]}>
      {/* Base Solid Mesh with transparent depth */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshPhysicalMaterial
          color="#0b1710"
          roughness={0.4}
          metalness={0.6}
          transmission={0.4}
          transparent
          opacity={0.7}
          wireframe={false}
        />

        {/* Wireframe overlay with green pulse */}
        <lineSegments geometry={wireframeGeo}>
          <lineBasicMaterial color="#82DF26" transparent opacity={0.35} linewidth={1} />
        </lineSegments>

        {/* Focal Marker 1: Los Ángeles (Sur) */}
        <group position={[-2.2, -1.8, 1.6]}>
          <mesh>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshBasicMaterial color="#82DF26" />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.2, 0.25, 32]} />
            <meshBasicMaterial color="#82DF26" side={THREE.DoubleSide} transparent opacity={0.8} />
          </mesh>
        </group>

        {/* Focal Marker 2: Calama (Norte) */}
        <group position={[2.5, 2.0, 2.2]}>
          <mesh>
            <sphereGeometry args={[0.14, 16, 16]} />
            <meshBasicMaterial color="#F57C00" />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.22, 0.28, 32]} />
            <meshBasicMaterial color="#F57C00" side={THREE.DoubleSide} transparent opacity={0.8} />
          </mesh>
        </group>

        {/* Animated Laser Scanning Line */}
        <group ref={scanLineRef} position={[0, 0, 0.2]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <planeGeometry args={[0.04, 9.5]} />
            <meshBasicMaterial color="#82DF26" side={THREE.DoubleSide} transparent opacity={0.85} />
          </mesh>
        </group>
      </mesh>
    </group>
  );
}
