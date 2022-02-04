import React from "react";

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
};

export default Box;
