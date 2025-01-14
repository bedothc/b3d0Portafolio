import React from 'react';

const LightingScene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.3} />

      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        color={"#988ef9"}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight
        position={[-5, 5, 0]}
        intensity={0.8}
        distance={10}
        decay={2}
        color={"#4f46e5"}
      />
      <rectAreaLight
        position={[0, 5, 0]}
        width={4}
        height={4}
        intensity={1.5}
        color={"#6f4dff"}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </>
  );
};

export default LightingScene;
