"use client";

import Box from "./Box.js";
import { useFrame } from "@react-three/fiber";
import { useScroll, ScrollControls, Scroll, Html } from "@react-three/drei";
import { useRef, useState } from "react";

export default function HeroPortofolio({ isAtTop, ...props }) {
  return (
    <group>
      <ScrollControls pages={isAtTop ? 6 : 0} damping={0.1}>
        <Box pos={[5, 0, 0]} rot={[0, 9, 0]} />
        <Scroll></Scroll>
        <Scroll html>
          <div className="px-8 w-full max-w-wrapper mx-auto ">
            <section className="h-screen w-full flex flex-col justify-center">
              <h1 className="text-white top-1/2">Portofolio</h1>
              <h2>Mijn projecten</h2>
            </section>
          </div>
        </Scroll>
      </ScrollControls>
    </group>
  );
}
