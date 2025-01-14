/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

useGLTF.preload('/assets/logo.glb');

interface ModelProps {
  position?: [number, number, number]; // Puedes ajustar esto según tu necesidad
  scale?: [number, number, number]; // Escala en 3D
}

export const ModelLogo: React.FC<ModelProps> = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const { scene } = useGLTF('/assets/logo.glb');

  return (
    <primitive 
      object={scene} 
      position={position} 
      scale={scale}
    />
  );
};
