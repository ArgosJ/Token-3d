import { Model } from "@/models";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

export const App = () => {
  return (
    <>
      <main className="app">
        <section className="hero">
          <h1>Web 3D Workshop</h1>
          <a>Por Jhair Yaipen - instagram: @amanecer-Argos</a>
        </section>
      </main>
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
