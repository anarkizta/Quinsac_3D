import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function BlueprintDrone3D({ scale = 1 }) {
  const groupRef = useRef();
  const prop1Ref = useRef();
  const prop2Ref = useRef();
  const prop3Ref = useRef();
  const prop4Ref = useRef();
  const lidarRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 2) * 0.12;
      groupRef.current.rotation.y = Math.sin(t * 0.7) * 0.3;
      groupRef.current.rotation.z = Math.cos(t * 1.2) * 0.05;
    }

    // Fast rotating propellers
    const propSpeed = 25;
    if (prop1Ref.current) prop1Ref.current.rotation.y += propSpeed * delta;
    if (prop2Ref.current) prop2Ref.current.rotation.y -= propSpeed * delta;
    if (prop3Ref.current) prop3Ref.current.rotation.y += propSpeed * delta;
    if (prop4Ref.current) prop4Ref.current.rotation.y -= propSpeed * delta;

    // LiDAR cone pulse
    if (lidarRef.current) {
      lidarRef.current.material.opacity = 0.25 + Math.sin(t * 4) * 0.15;
    }
  });

  const motorPositions = [
    [1.4, 0.2, 1.4],
    [-1.4, 0.2, 1.4],
    [1.4, 0.2, -1.4],
    [-1.4, 0.2, -1.4]
  ];

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      {/* Central Aerodynamic Carbon Core Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.65, 0.5, 0.35, 8]} />
        <meshPhysicalMaterial
          color="#0e141a"
          metalness={0.85}
          roughness={0.2}
          clearcoat={1}
        />
      </mesh>

      {/* Top Glass Dome with Green Sensor Hub */}
      <mesh position={[0, 0.22, 0]}>
        <sphereGeometry args={[0.35, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial
          color="#155D33"
          emissive="#82DF26"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.4}
          transmission={0.7}
          transparent
        />
      </mesh>

      {/* 4 Carbon Arms extending diagonally */}
      {motorPositions.map((pos, idx) => {
        const angle = Math.atan2(pos[2], pos[0]);
        return (
          <group key={idx} rotation={[0, -angle, 0]}>
            <mesh position={[0.9, 0.05, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.06, 0.06, 1.6, 12]} />
              <meshStandardMaterial color="#1a232c" metalness={0.9} roughness={0.3} />
            </mesh>
          </group>
        );
      })}

      {/* 4 Motors and Propellers */}
      <group position={motorPositions[0]} ref={prop1Ref}>
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 0.2, 16]} />
          <meshStandardMaterial color="#1A7E46" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[1.2, 0.015, 0.1]} />
          <meshBasicMaterial color="#82DF26" />
        </mesh>
      </group>

      <group position={motorPositions[1]} ref={prop2Ref}>
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 0.2, 16]} />
          <meshStandardMaterial color="#1A7E46" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[1.2, 0.015, 0.1]} />
          <meshBasicMaterial color="#82DF26" />
        </mesh>
      </group>

      <group position={motorPositions[2]} ref={prop3Ref}>
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 0.2, 16]} />
          <meshStandardMaterial color="#1A7E46" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[1.2, 0.015, 0.1]} />
          <meshBasicMaterial color="#82DF26" />
        </mesh>
      </group>

      <group position={motorPositions[3]} ref={prop4Ref}>
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 0.2, 16]} />
          <meshStandardMaterial color="#1A7E46" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[1.2, 0.015, 0.1]} />
          <meshBasicMaterial color="#82DF26" />
        </mesh>
      </group>

      {/* Downward LiDAR Scan Cone */}
      <mesh ref={lidarRef} position={[0, -1.6, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[2.0, 3.2, 32, 1, true]} />
        <meshBasicMaterial
          color="#82DF26"
          side={THREE.DoubleSide}
          transparent
          opacity={0.3}
          wireframe={true}
        />
      </mesh>

      {/* Ground Telemetry Laser Rings */}
      <mesh position={[0, -3.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.8, 1.85, 48]} />
        <meshBasicMaterial color="#82DF26" side={THREE.DoubleSide} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}
