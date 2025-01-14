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
        { src: '/galeriavisual/vs1.gif', thumb: '/galeriavisual/vs1.gif', alt: 'Image 1' },
        { src: '/galeriavisual/vs2.gif', thumb: '/galeriavisual/vs2.gif', alt: 'Image 2' },
        { src: '/galeriavisual/vs3.gif', thumb: '/galeriavisual/vs3.gif', alt: 'Image 3' },
        { src: '/galeriavisual/vs4.gif', thumb: '/galeriavisual/vs4.gif', alt: 'Image 4' },
        
        

        // Agrega más imágenes según sea necesario
    ];

    return (
            <div className="">
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
                                    
                                />
                            </a>
                        ))}
                    
                </LightGallery>
            </div>
    );
};

export default Gallery3d;
