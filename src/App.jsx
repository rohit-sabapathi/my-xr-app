import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import { OrbitControls } from "@react-three/drei";
import Card3D from "./components/Card3D";

const store = createXRStore();

export default function App() {
  return (
    <>
      {/* AR Button */}
      <button
        onClick={() => store.enterAR()}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 1,
          padding: "10px 15px",
          background: "black",
          color: "white",
          borderRadius: "8px",
          border: "none",
        }}
      >
        Enter AR
      </button>

      <Canvas style={{ height: "100vh" }}>
        <XR store={store}>
          {/* Lights */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} />

          {/* Place object slightly in front */}
          <group position={[0, 0, -2]}>
            <Card3D />
          </group>

          {/* Optional (disable if issues) */}
          <OrbitControls />
        </XR>
      </Canvas>
    </>
  );
}
