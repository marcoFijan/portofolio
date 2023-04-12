"use client";

import Projects from "./PortofolioProjects.js";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function HeroPortofolio() {
  return (
    <article className="bg-bgColorDark">
      <div className="py-10 px-8 w-full max-w-wrapper mx-auto">
        <div className="w-full h-screen">
          <Canvas
            shadows
            className="h-full w-full"
            camera={{ position: [0, 0, 7] }}
          >
            <ambientLight color={"white"} intensity={0.3} />
            <gridHelper args={[20, 20, 0xff0000, "teal"]} />
            <OrbitControls enableZoom={false} />
            <Projects />
          </Canvas>
        </div>
      </div>
    </article>
  );
}
