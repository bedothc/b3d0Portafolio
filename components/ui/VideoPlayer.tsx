// src/components/VideoPlayer.tsx
import React from 'react';


const VideoPlayer = () => {
  return (

    
    <div className="w-full h-full text-center text-3xl my-32">

      <h1>REEL 2024</h1>
      <div className='flex justify-center py-6'>
        <iframe width="760" height="515" 
        src="https://www.youtube.com/embed/R1-C_jW70Ao?si=7FHYjlPe4abPMjuw&amp;controls=0" 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

    </div>
  );
};

export default VideoPlayer;
