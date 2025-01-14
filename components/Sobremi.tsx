import React from 'react'
import Image from 'next/image';

export const Sobremi = () => {
  return (
    <div className='my-4'>
        <div className='flex flex-col items-center sm:flex-row space-x-12 md:space-x-36 lg:space-x-80'>
            <h1 className='text-7xl sm:text-8xl font-bold'>
                SOBRE MÍ
            </h1>

            <p className='uppercase tracking-widest text-base leading-4 m-2'>
                PRODUCTOR <br /> AUDIOVISUAL
            </p>

        </div>

        <div className='md:flex w-full md:my-4'>  
            <div className='w-full  '>
                <Image src="/p1.jpg" alt="" width={1000} height={1000} className='border border-indigo-800 rounded-3xl' />
            </div>
            <p className='relative w-full my-4 md:-left-16 lg:top-11 md:w-96 font-base tracking-widest'>
            
            He trabajado como productor audiovisual y diseñador 3D durante 
            más de tres años, adquiriendo experiencia en edición y diseño 
            en diversas empresas. He desarrollado múltiples proyectos que me 
            han motivado a explorar otros roles, como operador de cámara, 
            manejando equipos desde Canon T7 hasta Blackmagic 6K. 
            

            </p>
            
        </div>

        <div className='md:flex w-full md:m-4'>  
            
            <p className='relative w-full my-4 md:left-16 lg:top-11 md:w-96 font-base tracking-widest '>
            
            Mi experiencia en iluminación me ha enseñado la importancia de 
            una buena imagen, lo que me ha llevado a perfeccionar mis 
            técnicas y aspirar a la excelencia. Estoy comprometido con 
            mi crecimiento profesional, aportando creatividad y calidad 
            a cada producción.

            </p>

            <div className='w-full'>
                <Image src="/p2.jpg" alt="" width={1000} height={1000} className='rounded-3xl border border-indigo-800' />
            </div>
            
        </div>

    </div>
  )
}
