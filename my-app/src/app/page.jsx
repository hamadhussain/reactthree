"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import Image from "next/image";
import { useRef } from "react";
import { TextureLoader } from "three";
// import { MeshStandardMaterial } from "three";
// import { BoxGeometry } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
export default function Home() {
  return (
    <>
      <div className=" h-screen">
        <div className=" text-center px-44 relative top-10 font-serif text-white-100 space-x-6 space-y-5">
          {" "}
          <h1 className=" text-2xl uppercase">Earth Simulator</h1>{" "}
          <p className=" text-center px-44 relative  font-serif text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            at inventore impedit quisquam sit tempora architecto? Quia minima
            rerum in, quas asperiores omnis quo eligendi. Soluta laudantium
            voluptatem iste adipisci.
          </p>
          <h1 className=" uppercase">Hold & Move Your Mouse</h1>
        </div>
        <Canvas>
          <ambientLight intensity={2.2} />
          <directionalLight position={[11.2, 11.3, 12.4]} />
          <OrbitControls />

          <Cube />
        </Canvas>
      </div>
    </>
  );
}

function Cube() {
  const mesh = useRef(null);
  useFrame((state, delta) => {
    // mesh.current.rotation.x += delta*0.1;
    mesh.current.rotation.y += delta * 2.1;
    // mesh.current.rotation.z += delta*0.1;
  });

  const t = useLoader(TextureLoader, "/Assets/Earth2.gif");
  const t2 = useLoader(TextureLoader, "/Assets/Earth.png");
  const t3 = useLoader(TextureLoader, "/Assets/Earth3.jpeg");

  return (
    <>
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={mesh}>
        <sphereGeometry args={[2, 100, 100]} />

        <meshStandardMaterial map={t3} />
        {/* <meshStandardMaterial map={t2} attach="material-1"/> */}
        {/* <meshStandardMaterial map={t3} attach="material-2"/> */}
        {/* <meshStandardMaterial map={t} attach="material-3"/> */}
        {/* <meshStandardMaterial map={t2} attach="material-5"/> */}
        {/* <meshStandardMaterial map={t3} attach="material-4"/> */}
      </mesh>
    </>
  );
}
