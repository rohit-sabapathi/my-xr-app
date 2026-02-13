import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";


export default function PlanetAR() {
  const meshRef = useRef();
  const [color, setColor] = useState("skyblue");

  // Rotation + floating animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    meshRef.current.rotation.y += 0.01;
    meshRef.current.position.y = Math.sin(t) * 0.2;
  });

  return (
    <mesh
      ref={meshRef}
      onClick={() =>
        setColor(color === "skyblue" ? "hotpink" : "skyblue")
      }
    >
      <sphereGeometry args={[0.3, 64, 64]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
      />
      <torusGeometry args={[0.5, 0.02, 16, 100]} />
        <meshStandardMaterial emissive="white" />
    </mesh>
  );
}
