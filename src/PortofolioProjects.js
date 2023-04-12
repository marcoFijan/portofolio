"use client";

import Box from "./Box.js";
import { useFrame } from "@react-three/fiber";
import { useScroll, ScrollControls, Scroll } from "@react-three/drei";
import { useRef } from "react";

export default function HeroPortofolio({}) {
  const phone = useRef();
  const tl = useRef();
  const scroll = useScroll();

  return (
    <group ref={phone}>
      <ScrollControls pages={0} damping={0.25}>
        <Box pos={[0, 0, 0]} rot={[0, 3, 0]} />
        <Scroll></Scroll>
        <Scroll html>
          <h1 className="text-white">Portofolio</h1>
          <h2>Mijn projecten</h2>
        </Scroll>
      </ScrollControls>
    </group>
  );
}
