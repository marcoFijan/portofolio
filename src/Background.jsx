import React, { useRef } from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
// import { Sphere } from "@react-three/fiber";

export default function Background({ ...props }) {
  return (
    <group
      {...props}
      // position={pos ? pos : [0, 0, 0]}
      // rotation={rot ? rot : [0, 0, 0]}
    >
      <Sphere args={[1, 100, 200]} scale={12} position={[9, 0, -20]}>
        <MeshDistortMaterial
          color="#FD5825"
          attach="material"
          distort={0.5}
          speed={1}
        />
      </Sphere>
    </group>
  );
}
