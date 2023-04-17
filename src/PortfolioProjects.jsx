"use client";

import Laptop from "./Laptop.jsx";
import Smartphone from "./Smartphone.jsx";
import Background from "./Background.jsx";
import { motion, useTransform } from "framer-motion";

import { useFrame } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  Environment,
  Float,
  useScroll,
} from "@react-three/drei";
import { useRef, useState } from "react";

export default function PortfolioProjects({ isAtTop, ...props }) {
  // let tl = useRef(null);
  // let { scrollYProgress } = useScroll({
  //   target: tl,
  //   offset: ["end end", "end start"],
  // });
  // let width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // useFrame(() => {
  //   console.log(isAtTop ? width : 0);
  // });
  return (
    <group>
      <ScrollControls pages={isAtTop ? 6 : 0} damping={0.1}>
        <Environment blur={0} preset="warehouse" />
        {/* <Float
          speed={0.7}
          rotationIntensity={1}
          floatIntensity={0.2}
          floatingRange={[3, -3]}
        > */}
        <Laptop pos={[4, -1, 0]} rot={[0.2, 1.9, 0]} />
        {/* </Float>
        <Float
          speed={1}
          rotationIntensity={1} // 1
          floatIntensity={0.2} // 0.2
          floatingRange={[5, -5]} // 5, 5
        > */}
        <Smartphone pos={[1, 0, 0]} rot={[0, 0.2, 0]} />
        {/* </Float> */}

        <Scroll>
          <Background />
        </Scroll>
        <Scroll html>
          {/* <div className="px-8 w-full max-w-wrapper mx-auto "> */}
          <section className="px-8 h-screen w-screen flex flex-col justify-center ">
            <div className="w-1/2 flex items-center justify-center ">
              <div className="">
                <h1 className="text-white ">Portofolio</h1>
                <h2>Mijn projecten</h2>
              </div>
            </div>
          </section>
          {/* </div> */}
        </Scroll>
      </ScrollControls>
    </group>
  );
}
