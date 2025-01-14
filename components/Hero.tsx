'use client';

import { FaLocationArrow } from 'react-icons/fa';
import { MagicButton } from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffects';
import Scene from './Scene';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import { ModelLogo } from './ui/ModelLogo';
import Camera from './ui/Camera';
import LightingScene from './ui/LightingScene';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';


export const Hero = () => {
  return (
    <div className='md:pb-20 md:pt-36 pb-10 pt-16'>
      <div>
        {/* Luces de fondo */}
        <Spotlight className='w-full -top-80 md:-top-96' fill='yellow' />
        <Spotlight className='w-full -top-56 md:-top-20' fill='blue' />
        <Spotlight className='w-full -top-28 md:top-40' fill='red' />
        <Spotlight className="h-[50vh] w-[80vw] top-5 left-full md:top-24" fill="green" />
        <Spotlight className="h-[50vh] w-[80vw] top-15 left-full md:top-36" fill="white" />
      </div>

      {/* Grid de fondo */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  
      dark:bg-grid-white/[0.02] bg-grid-black/[0.2] flex items-center
      justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center 
        justify-center dark:bg-black-100 bg-white 
        [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"/>
      </div>

      

      {/* Escena 3D */}
      <div className="absolute left-0 h-[40vh] sm:h-[490px] 
      md:h-[650px] lg:h-[700px] lgxl xl:h-[680px] w-full top-0 z-20">
        <Scene>
          <Camera position={[0, 0, 5]} fov={75} />
          <LightingScene />      
          <OrbitControls 
            autoRotate 
            enablePan={false} 
            enableZoom={false} 
            minPolarAngle={Math.PI / 4} 
            maxPolarAngle={Math.PI / 2} 
          />
          <Suspense fallback={null}>
            <ModelLogo position={[0, 1.4, 0]} scale={[0.5, 0.5, 0.5]} />
          </Suspense>     
          <Stars count={2000} factor={1} />
        </Scene>
      </div>

      {/* Títulos */}
      <div className='my-16 mt-32'>
        <div className='flex justify-center relative z-[2]'>
          <div className='max-w-[50vw] md:max-w-xl lg:max-w-[50vw] flex flex-col
            items-center justify-center'>
            <h2 className='uppercase tracking-widest text-sm text-center 
              text-blue-100 max-w-80'>
              DEBUGSTART
            </h2>
            <TextGenerateEffect 
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words='Transformando Experiencias como Artista.'
              flickerRange={[3, 3]} // Ajusta el rango para el efecto de titilar
            />
            <p className='text-center md:tracking-wider text-xs md:text-sm lg:text-base'>
            A VECES EL TAMAÑO NO IMPORTA. TRABAJAMOS PARA GRANDES Y PEQUEÑOS VISIONARIOS IMPARABLES. HAY AMOR PARA TODOS ELLOS.
            </p>
          </div>
        </div>
      </div>

      <div className='flex justify-center pt-7 md:pt-16 z-10'>
        <div className='max-w-[50vw] md:max-w-xl lg:max-w-[50vw] flex flex-col
            items-center justify-center'>
          <a href="#about">
            <MagicButton title='Show my work' icon={<FaLocationArrow />} position='right' />
          </a>
        </div>
      </div>

      <div className=''>
      <BackgroundBeamsWithCollision children className='w-full left-0 top-10 absolute' />
      </div>
    </div>
  );
}

export default Hero;
