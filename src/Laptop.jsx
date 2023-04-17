/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/laptop.glb
Author: Rasmus (https://sketchfab.com/Rasmus82)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/laptop-7fbe17a5a5dd41538c81c4ad8a5083cf
Title: Laptop
*/

import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, useScroll } from "@react-three/drei";
import { gsap } from "gsap";

// import { motion } from "framer-motion-3d";

export default function Laptop({ pos, rot, ...props }) {
  const { nodes, materials } = useGLTF("./models/laptop.glb");
  let [laptopScreenPath, setLaptopScreenPath] = useState("./images/p1.jpg");
  const laptopScreenTexture = useTexture(laptopScreenPath);

  const laptop = useRef();
  const scroll = useScroll();
  const timeline = useRef();

  // Update timeline
  useFrame((state, delta) => {
    timeline.current.seek(scroll.offset * timeline.current.duration());
  });

  useEffect(() => {
    // Setup timeline
    timeline.current = gsap.timeline({
      defaults: { duration: 1 },
    });

    // Animation
    timeline.current
      .to(laptop.current.rotation, { y: -3 }, 2)
      .to(laptop.current.position, { x: -8 }, 2)
      .call(
        () => setLaptopScreenPath("./images/marcoPointing.png"),

        [],
        null,
        "<2"
      )
      .to(laptop.current.rotation, { y: -5 }, 4)

      .to(laptop.current.rotation, { y: 1 }, 8)
      .to(laptop.current.position, { x: -1 }, 8)
      .call(
        function () {
          setLaptopScreenPath("./images/p1.jpg");
        },
        [],
        null,
        "<1"
      )

      .to(laptop.current.rotation, { y: 0 }, 11)
      .to(laptop.current.rotation, { x: 1 }, 11)
      .to(laptop.current.position, { x: 0 }, 11)

      .to(laptop.current.rotation, { y: 0 }, 13)
      .to(laptop.current.rotation, { x: -1 }, 13)
      .to(laptop.current.position, { x: 0 }, 13)

      .to(laptop.current.rotation, { y: 0 }, 16)
      .to(laptop.current.rotation, { x: 0 }, 16)
      .to(laptop.current.position, { x: 0 }, 16)

      .to(laptop.current.rotation, { y: 0 }, 20)
      .to(laptop.current.rotation, { x: 0 }, 20)
      .to(laptop.current.position, { x: 0 }, 20);

    // timeline.current.set(smartScreenPath, "./images/marcoPointing.png", 4);
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      scale={1}
      position={pos ? pos : [0, 0, 0]}
      rotation={rot ? rot : [0, 0, 0]}
      ref={laptop}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Buttons}
        ></mesh>
        {/* <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.screen}
        >
          <meshStandardMaterial
            roughness={1}
            metalness={1}
          />
        </mesh> */}
        <mesh
          rotation={[Math.PI / 2, 0, -0.41]}
          position={[2.2, 0, 1.2]}
          scale={0.23}
        >
          <boxGeometry args={[0.01, 11, 16]} />
          <meshStandardMaterial
            map={laptopScreenTexture}
            roughness={1}
            metalness={1}
          />
        </mesh>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Material}
        />
        <mesh geometry={nodes.Object_5.geometry}>
          <meshStandardMaterial
            color="black
          "
            roughness={0.3}
            metalness={1}
          />
        </mesh>
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Keyboard}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.Keyboard}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.Keyboard}
        />
        <mesh
          geometry={nodes.Object_9.geometry}

          // material={materials.LabTop_Base}
        >
          <meshStandardMaterial color="#9c9c9c" roughness={0.5} metalness={1} />
        </mesh>
        <mesh
          geometry={nodes.Object_10.geometry}
          rotation={[0, Math.PI / -1.6, 0]}

          // material={materials.LabTop_Base}
        >
          <meshStandardMaterial color="#9c9c9c" roughness={0.5} metalness={1} />
        </mesh>
        <mesh
          geometry={nodes.Object_11.geometry}
          // material={materials.Mouse_PAD}
        >
          <meshBasicMaterial color="#585858" />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("./models/laptop.glb");
