import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { QuinsacLogo3D } from './QuinsacLogo3D';
import { TopographicGrid } from './TopographicGrid';
import { EcoCore3D } from './EcoCore3D';
import { BlueprintDrone3D } from './BlueprintDrone3D';
import { PipingNetwork3D } from './PipingNetwork3D';
import { ParticleMorphSystem } from './ParticleMorphSystem';

function SceneContent({ scrollProgress = 0, mousePos = { x: 0, y: 0 }, wireframeMode = false }) {
  const cameraGroupRef = useRef();

  useFrame((state, delta) => {
    // Parallax mouse camera sway
    if (cameraGroupRef.current) {
      cameraGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        cameraGroupRef.current.rotation.y,
        mousePos.x * 0.15,
        0.05
      );
      cameraGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        cameraGroupRef.current.rotation.x,
        -mousePos.y * 0.1,
        0.05
      );
    }
  });

  // Calculate visibility / opacity factors based on scroll ranges
  // 0.00 - 0.18: Hero Logo
  const heroOpacity = THREE.MathUtils.clamp(1 - scrollProgress * 5, 0, 1);
  
  // 0.18 - 0.38: Topography
  const topoOpacity = scrollProgress >= 0.15 && scrollProgress < 0.42
    ? Math.sin(((scrollProgress - 0.15) / 0.27) * Math.PI)
    : 0;

  // 0.38 - 0.52: Eco Core
  const ecoOpacity = scrollProgress >= 0.38 && scrollProgress < 0.52
    ? Math.sin(((scrollProgress - 0.38) / 0.14) * Math.PI)
    : 0;

  // 0.52 - 0.68: Drone
  const droneOpacity = scrollProgress >= 0.52 && scrollProgress < 0.68
    ? Math.sin(((scrollProgress - 0.52) / 0.16) * Math.PI)
    : 0;

  // 0.68 - 0.85: Piping
  const pipeOpacity = scrollProgress >= 0.68 && scrollProgress < 0.85
    ? Math.sin(((scrollProgress - 0.68) / 0.17) * Math.PI)
    : 0;

  // 0.85 - 1.0: Contact / Return Logo
  const returnLogoOpacity = THREE.MathUtils.clamp((scrollProgress - 0.85) / 0.15, 0, 1);

  return (
    <group ref={cameraGroupRef}>
      {/* Lighting Setup */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 10, 8]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-6, -4, -4]} intensity={0.8} color="#82DF26" />
      <pointLight position={[0, 0, 4]} intensity={1.2} color="#82DF26" />

      {/* Particle Morph System bridging everything */}
      <ParticleMorphSystem scrollProgress={scrollProgress} wireframeMode={wireframeMode} />

      {/* 1. Hero 3D Logo */}
      {heroOpacity > 0.01 && (
        <group position={[0, 0, 0]}>
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
            <QuinsacLogo3D scale={1.25 * heroOpacity} hovered={false} />
          </Float>
        </group>
      )}

      {/* 2. Topographic Wireframe Terrain */}
      {topoOpacity > 0.01 && (
        <group position={[1.5, 0, 0]} scale={[topoOpacity, topoOpacity, topoOpacity]}>
          <TopographicGrid progress={scrollProgress} />
        </group>
      )}

      {/* 3. Eco Biosphere (Fase A) */}
      {ecoOpacity > 0.01 && (
        <group position={[1.6, 0, 0]} scale={[ecoOpacity, ecoOpacity, ecoOpacity]}>
          <EcoCore3D scale={1.1} />
        </group>
      )}

      {/* 4. Quadcopter Drone (Fase B/C) */}
      {droneOpacity > 0.01 && (
        <group position={[1.5, 0.4, 0]} scale={[droneOpacity, droneOpacity, droneOpacity]}>
          <BlueprintDrone3D scale={1.05} />
        </group>
      )}

      {/* 5. Piping Network (Fase D) */}
      {pipeOpacity > 0.01 && (
        <group position={[1.4, 0, 0]} scale={[pipeOpacity, pipeOpacity, pipeOpacity]}>
          <PipingNetwork3D scale={0.95} />
        </group>
      )}

      {/* 6. Return Logo (Contact & Cierre) */}
      {returnLogoOpacity > 0.01 && (
        <group position={[0, 0, 0]}>
          <Float speed={3} rotationIntensity={0.3} floatIntensity={0.4}>
            <QuinsacLogo3D scale={1.35 * returnLogoOpacity} hovered={true} />
          </Float>
        </group>
      )}
    </group>
  );
}

export function Scene3D({ scrollProgress = 0, mousePos = { x: 0, y: 0 }, wireframeMode = false }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: true
        }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5.5]} fov={45} />
        <SceneContent
          scrollProgress={scrollProgress}
          mousePos={mousePos}
          wireframeMode={wireframeMode}
        />
      </Canvas>
    </div>
  );
}
