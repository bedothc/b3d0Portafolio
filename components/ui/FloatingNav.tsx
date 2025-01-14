'use client';

import { useState, useEffect } from 'react';

interface NavItem {
  name: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: 'HOME', id: 'Home' },
  { name: 'ABOUT US', id: 'About' },
  { name: 'CONTACT US', id: 'Contact' },
];

export default function FloatingNav() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>(navItems[0].name);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>('Menu');
  const [buttonSvg, setButtonSvg] = useState<string>('menu.svg'); // Cambia esto a tu SVG predeterminado

  const handleDrawerToggle = () => {
    setMobileOpen(prev => {
      if (!prev) {
        setButtonText('Close');
        setButtonSvg('equiz.svg'); // Cambia a tu SVG
      } else {
        setButtonText('Menu');
        setButtonSvg('menu.svg'); // Cambia a tu SVG predeterminado
      }
      return !prev;
    });
  };

  const handleBackdropClick = () => {
    setMobileOpen(false);
    setButtonText('Menu');
    setButtonSvg('menu.svg'); // Cambia a tu SVG predeterminado
  };

  const handleItemClick = (item: NavItem) => {
    setActiveItem(item.name);
    handleBackdropClick();
    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id));
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setMenuVisible(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <nav className={`fixed top-0 left-0 w-full z-50 transition-opacity ${menuVisible ? 'bg-black-100 bg-opacity-70 backdrop-blur-sm border-b-2 border-white' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center p-4">
          <div className="text-base font-normal tracking-tight leading-5 text-white">LA LUZ QUE SURGE <br /> DE LAS MONTAÑAS</div>
          <div className="block">
            <button onClick={handleDrawerToggle} className="text-white flex items-center">
              {buttonText}
              <img src={`/${buttonSvg}`} alt="menu icon" className="w-7 h-7 ml-2" />
            </button>
          </div>
          <div className="hidden space-x-4">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                className={`text-white ${activeItem === item.id ? 'text-purple-500' : 'text-white'}`}
                onClick={() => handleItemClick(item)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className={`backdrop-blur-md fixed inset-0 bg-black bg-opacity-55 z-40 transition-opacity ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={handleBackdropClick}>
        <div className={`fixed left-0 top-0 w-full bg-opacity-55 h-full flex items-center justify-center transform transition-transform ${mobileOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex flex-col w-full h-full text-4xl sm:text-7xl md:text-9xl font-bold">
            <ul className="flex flex-col justify-center w-full text-center flex-grow">
              {navItems.map((item, index) => (
                <li 
                  key={item.id} 
                  className={`transform transition-transform duration-700 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} 
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button 
                    className={`block w-full justify-center hover:bg-black hover:bg-opacity-55 ${activeItem === item.id ? 'text-indigo-600' : 'text-white'}`} 
                    onClick={() => handleItemClick(item)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className={`w-full transition-transform duration-500 ${mobileOpen ? 'translate-y-0' : 'translate-y-full'} overflow-hidden`}>
              <div className="md:flex place-content-between text-center md:text-start p-4 px-2 border-t-2 border-white">
                <div className='text-lg font-semibold'>
                  <p className="text-white text-xl px-2">Social Media</p>
                  <div className='flex text-base font-light text-center justify-center'>
                    <div className='md:flex'>
                      <a href="https://www.instagram.com/debugstart" className='px-1'>INSTAGRAM -</a>
                      <a href="https://www.artstation.com/b3d0" className='px-1'> ARTSTATION -</a>
                    </div>
                    <div className='md:flex'>
                      <a href="https://github.com/bedothc" className='px-1'> GITHUB -</a>
                      <a href="https://www.youtube.com/@debugstart" className='px-1'> YOUTUBE </a>
                    </div>
                  </div>
                </div>
                <div className='my-2 text-center md:text-start'>
                  <p className="text-indigo-600 text-xl font-semibold">GET IN TOUCH</p>
                  <p className="text-white text-base font-light">HOLA@DEBUGSTART.COM</p>
                </div>
                <div className='my-2 text-center md:text-start'>
                  <p className="text-white text-base font-light">© DebugStart.studio LLC 2024</p>
                  <p className="text-white text-base font-light">all rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
