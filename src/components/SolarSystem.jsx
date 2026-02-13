import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

// 🌍 Planet Component
function Planet({ distance, speed, size, texture }) {
  const groupRef = useRef();
  const meshRef = useRef();

  // Load texture
  const map = useLoader(THREE.TextureLoader, texture);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Orbit
    groupRef.current.position.x = Math.sin(t * speed) * distance;
    groupRef.current.position.z = Math.cos(t * speed) * distance;

    // Rotation (day cycle)
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial map={map} />
      </mesh>
    </group>
  );
}

export default function SolarSystem() {
  const sunRef = useRef();

  const sunTexture = useLoader(THREE.TextureLoader, "/textures/sun.jpg");

  useFrame(() => {
    sunRef.current.rotation.y += 0.003;
  });

  return (
    <>
      <mesh ref={sunRef}>
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshStandardMaterial
          map={sunTexture}
          emissive={"orange"}
          emissiveIntensity={0.15}
        />
      </mesh>

      <pointLight intensity={3} distance={10} />

      <Planet
        distance={1.5}
        speed={0.8}
        size={0.2}
        texture="/textures/earth.jpg"
      />

      <Planet
        distance={2.2}
        speed={0.6}
        size={0.15}
        texture="/textures/mars.jpg"
      />

      <Planet
        distance={3}
        speed={0.4}
        size={0.35}
        texture="/textures/jupiter.jpg"
      />
    </>
  );
}
