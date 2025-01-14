import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

useGLTF.preload('/assets/aerosol.glb');

interface ModelProps {
  position?: [number, number, number]; // Puedes ajustar esto según tu necesidad
  scale?: [number, number, number]; // Escala en 3D
}

export const Model: React.FC<ModelProps> = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const { scene } = useGLTF('/assets/aerosol.glb');

  return (
    <primitive 
      object={scene} 
      position={position} 
      scale={scale}
    />
  );
};
