import React from 'react'

interface SphereProps {
color: string;        // Color is a string representing the color
position: [number, number, number]; // Position is a tuple of numbers (x, y, z)
}

// Define the Sphere component with typed props
export const Sphere: React.FC<SphereProps> = ({ color, position }) => {
  return (
    <mesh position={position}>
        <sphereGeometry />
        <meshStandardMaterial color={color} wireframe />
    </mesh>
  )
}
