/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/smartphone.glb
Author: Manuel W. (https://sketchfab.com/nebulariser)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/smartphone-380280333c9f4fb8a21a53d18f6789e6
Title: Smartphone
*/

import React, { useRef } from "react";
import { useEnvironment, useGLTF, useTexture } from "@react-three/drei";

export default function Smartphone({ pos, rot, ...props }) {
  const { nodes, materials } = useGLTF("./models/smartphone.glb");
  const smartScreen = useTexture("./images/p1.jpg");

  return (
    <group
      {...props}
      dispose={null}
      scale={1.3}
      position={pos ? pos : [0, 0, 0]}
      rotation={rot ? rot : [0, 0, 0]}
    >
      <group rotation={[-1.91, 0.19, -0.49]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.Vidrio_Negro}
            ></mesh>
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials.Vidrio_Negro}
            />
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials.Vidrio_Negro}
            />
            <mesh
              geometry={nodes.Object_9.geometry}
              material={materials.Metal_Cromado}
            />
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.Metal_Cromado}
            />
            {/* <mesh
              geometry={nodes.Object_11.geometry}
              material={materials.Pantalla}
            >
              <meshStandardMaterial map={smartScreen} />
            </mesh> */}
            <mesh
              recieveShadow={true}
              castShadow
              position={[0, 0.01, 0]}
              rotation={[0, 0, 0]}
              className=" hover:cursor-pointer"
            >
              <boxGeometry args={[0.9, 0.05, 1.9]} />
              <meshStandardMaterial
                map={smartScreen}
                roughness={1}
                metalness={1}
              />
            </mesh>
            {/* <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.Pantalla}
            /> */}
            <mesh
              geometry={nodes.Object_13.geometry}
              material={materials.Metal_Negro}
            />
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials.Bandas_magneticas}
            />
          </group>
          <group position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_18.geometry}
              material={materials.Vidrio_Negro}
            />
            <mesh
              geometry={nodes.Object_19.geometry}
              material={materials.Metal_Cromado}
            />
          </group>
          <group
            position={[0.38, 0.88, -0.06]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.06}
          >
            <mesh
              geometry={nodes.Object_21.geometry}
              material={materials.Vidrio_Negro}
            />
            <mesh
              geometry={nodes.Object_22.geometry}
              material={materials.Metal_Cromado}
            />
          </group>
          <group
            position={[0, -0.99, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={0.01}
          >
            <mesh
              geometry={nodes.Object_32.geometry}
              material={materials.Metal_Ceramico}
            />
            <mesh
              geometry={nodes.Object_33.geometry}
              material={materials.Cobre}
            />
          </group>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Metal_Cromado}
            position={[0.5, 0.54, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1, 0.67, 1]}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.Metal_Cromado}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.Object_24.geometry}
            material={materials.Camara}
            position={[0.38, 0.88, -0.05]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.04}
          />
          <mesh
            geometry={nodes.Object_26.geometry}
            material={materials.Luz_Led}
            position={[0.19, 0.91, -0.05]}
            rotation={[-Math.PI / 2, -1.39, Math.PI]}
            scale={0.03}
          />
          <mesh
            geometry={nodes.Object_28.geometry}
            material={materials.Camara}
            position={[0.27, 0.88, -0.05]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.04}
          />
          <mesh
            geometry={nodes.Object_30.geometry}
            material={materials.Camara}
            position={[0, 0.85, 0.03]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1.08, 1.03, 1.18]}
          />
          <mesh
            geometry={nodes.Object_35.geometry}
            material={materials.Metal_Negro}
            position={[0, -0.95, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1.03, 1.1, 1.03]}
          />
          <mesh
            geometry={nodes.Object_37.geometry}
            material={materials.Metal_Negro}
            position={[0.22, -0.99, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.Object_39.geometry}
            material={materials.Metal_Negro}
            position={[-0.22, -0.99, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1.02, 1.1, 1.02]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/smartphone.glb");