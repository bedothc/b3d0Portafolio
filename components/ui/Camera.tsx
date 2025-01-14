import React from 'react';
import { PerspectiveCamera } from '@react-three/drei';

interface CameraProps {
  position?: [number, number, number];
  fov?: number; // Campo de visión
}

const Camera: React.FC<CameraProps> = ({ position = [0, 0, 5], fov = 75 }) => {
  return <PerspectiveCamera makeDefault position={position} fov={fov} />;
};

export default Camera;
