import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Card3D() {
  const meshRef = useRef();
  const [color, setColor] = useState("orange");

  // Rotate animation
  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={meshRef}
      onClick={() =>
        setColor(color === "red" ? "hotpink" : "red")
      }
    >
      <boxGeometry args={[1, 2, 0.1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
