"use client";

import React from "react";
import { useRef } from "react";

function Box({ pos, rot, ...props }) {
  const boxMesh = useRef();
  return (
    <mesh
      ref={boxMesh}
      recieveShadow={true}
      castShadow
      position={pos ? pos : [0, 0, 0]}
      rotation={rot ? rot : [0, 0, 0]}
      className=" hover:cursor-pointer"
    >
      <boxGeometry />

      <meshPhysicalMaterial color={"orange"} />
    </mesh>
  );
}
export default Box;
