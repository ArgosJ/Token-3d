/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Model = (props) => {
  const { nodes, materials } = useGLTF("/FabConvert.com_token.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Círculo003.geometry}
        material={materials["Material.001"]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto.geometry}
        material={materials["Material.001"]}
        position={[0.05, 0.08, 0]}
        scale={0.63}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Círculo006.geometry}
        material={materials["Material.001"]}
        rotation={[Math.PI, -Math.PI / 4, Math.PI]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Círculo007.geometry}
        material={materials["Material.001"]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Círculo008.geometry}
        material={materials["Material.001"]}
        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Círculo009.geometry}
        material={materials["Material.001"]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
    </group>
  );
};

useGLTF.preload("/FabConvert.com_token.glb");