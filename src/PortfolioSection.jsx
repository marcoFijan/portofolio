"use client";

import Projects from "./PortfolioProjects.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";

export default function HeroPortfolio() {
  const portofolio = useRef();
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elementTop = portofolio.current.getBoundingClientRect().top;
      setIsAtTop(elementTop <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={portofolio} className={`header ${isAtTop ? "sticky" : ""}`}>
      <article className="bg-bgColorDark ">
        <div className="w-full h-screen">
          <Canvas
            shadows
            className="h-full w-full overflow-hidden"
            camera={{ position: [0, 0, 7] }}
          >
            <ambientLight color={"white"} intensity={0.3} />
            {/* <gridHelper args={[20, 20, 0xff0000, "teal"]} /> */}
            <OrbitControls enableZoom={false} />
            <Projects isAtTop={isAtTop} />
          </Canvas>
        </div>
      </article>
    </div>
  );
}
