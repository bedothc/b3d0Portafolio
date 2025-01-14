'use client'

import React from 'react'

import { Canvas } from '@react-three/fiber'


interface SceneProps {
  children?: React.ReactNode;
}

const Scene: React.FC<SceneProps> = ({ children }) => {
  return (
    <Canvas>
      {children}
    </Canvas>
  );
};

export default Scene;