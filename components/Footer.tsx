import React from 'react';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { SiArtstation } from 'react-icons/si';

import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-6 mt-32">

    <div className=''>
        <Image 
        src="/letras.svg" 
        alt="" 
        width={1500}
        height={1500}
        />
    </div>

      <div className="container mx-auto px-6 text-center md:text-start ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">DebugStart</h2>
            <p className="text-lg mt-2">Innovando el futuro, hoy.</p>
          </div>
          <div className="mb-6 md:mb-0 text-center md:text-start">
            <h3 className="text-xl font-semibold">Paginación</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#Home" className="hover:underline">Inicio</a></li>
              <li><a href="#about" className="hover:underline">Servicios</a></li>
              <li><a href="#Reel" className="hover:underline">Reel</a></li>
              <li><a href="#Contact" className="hover:underline">Contacto</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 text-center md:text-start">
            <h3 className="text-xl font-semibold">Enlaces</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:underline">Inicio</a></li>
              <li><a href="#" className="hover:underline">Servicios</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contacto</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 text-center md:text-start">
            <h3 className="text-xl font-semibold">Síguenos</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://github.com/bedothc" className="hover:text-gray-300"><FaGithub /></a>
              <a href="https://www.artstation.com/b3d0" className="hover:text-gray-300"><SiArtstation /></a>
              <a href="https://www.linkedin.com/in/stivens-bedoya-960a68213" className="hover:text-gray-300"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/debugstart" className="hover:text-gray-300"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© 2024 DebugStart. Todos los derechos reservados.</p>
        </div>
        
      </div>
      
    </footer>
  );
};

export default Footer;
