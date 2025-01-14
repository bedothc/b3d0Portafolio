import React from 'react';
import LightGallery from 'lightgallery/react';

import Image from 'next/image';

// Import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery3d = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    const images = [
        { src: '/galeria3d/img1.jpg', thumb: '/galeria3d/img1.jpg', alt: 'Image 1' },
        { src: '/galeria3d/img2.jpg', thumb: '/galeria3d/img2.jpg', alt: 'Image 2' },
        { src: '/b1.webp', thumb: '/b1.webp', alt: 'Image 3' },
        { src: '/galeria3d/img3.png', thumb: '/galeria3d/img3.png', alt: 'Image 4' },
        { src: '/galeria3d/img4.png', thumb: '/galeria3d/img4.png', alt: 'Image 5' },
        { src: '/galeria3d/img5.png', thumb: '/galeria3d/img5.png', alt: 'Image 6' },
        { src: '/galeria3d/img6.png', thumb: '/galeria3d/img6.png', alt: 'Image 7' },
        { src: '/galeria3d/img7.png', thumb: '/galeria3d/img7.png', alt: 'Image 8' },
        { src: '/galeria3d/img8.jpg', thumb: '/galeria3d/img8.jpg', alt: 'Image 9' },
        

        // Agrega más imágenes según sea necesario
    ];

    return (
            <div className="w-full">
                <LightGallery
                    onInit={onInit}
                    mode="lg-fade"
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    
                        {images.map((image, index) => (
                            <a key={index} href={image.src} data-src={image.src}>
                                <Image
                                    width={1000} 
                                    height={1000}
                                    alt={image.alt}
                                    src={image.thumb}
                                    className='w-full h-auto cursor-pointer'
                                />
                            </a>
                        ))}
                    
                </LightGallery>
            </div>
    );
};

export default Gallery3d;
