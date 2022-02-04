import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Skull from "./Skull";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

const Three = () => {
  return (
    <Wrapper>
      <Canvas>
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Skull />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
};

export default Three;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1500px;
  background-color: black;
`;
