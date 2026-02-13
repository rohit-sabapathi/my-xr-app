import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import { Stars } from "@react-three/drei";
import { useState } from "react";
import SolarSystem from "./components/SolarSystem";

const store = createXRStore();

export default function App() {
  const [scale, setScale] = useState(1);

  return (
    <>
      <button onClick={() => store.enterAR()} style={btn(20)}>
        Enter AR
      </button>

      <button onClick={() => setScale(s => s + 0.2)} style={btn(80)}>
        +
      </button>

      <button onClick={() => setScale(s => Math.max(0.2, s - 0.2))} style={btn(130)}>
        -
      </button>

      <Canvas style={{ height: "100vh" }}>
        <XR store={store}>
          {/* Lighting */}

          <ambientLight intensity={0.8} />

<pointLight 
  position={[0, 0, 0]} 
  intensity={5} 
  distance={20}
/>

          {/* Stars */}
          <Stars radius={20} depth={40} count={10000} factor={6} />

          {/* System */}
          <group position={[0, 0, -3]} scale={[scale, scale, scale]}>
            <SolarSystem />
          </group>
        </XR>
      </Canvas>
    </>
  );
}

const btn = (top) => ({
  position: "absolute",
  top,
  left: 20,
  zIndex: 1,
  padding: "10px",
  background: "#111",
  color: "white",
  borderRadius: "8px",
  border: "none"
});
