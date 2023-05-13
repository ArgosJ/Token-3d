import { Model } from "@/models";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Scene = () => {
  return (
    <>
      <Canvas className="canvas">
        <OrbitControls />
        <Environment preset="city" />
        <ambientLight intensity={1} />
        <mesh>
          <Model rotation={[4, Math.PI, 9]} />
          {/* <boxGeometry /> */}
          <meshStandardMaterial color="hotpink" />
        </mesh>
        {/* <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={20}
          saturation={0}
          fade
          speed={1}
        /> */}
      </Canvas>
    </>
  );
};