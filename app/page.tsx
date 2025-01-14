'use client'

import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { Sobremi } from "@/components/Sobremi";
import FloatingNav from "@/components/ui/FloatingNav";
import Gallery3d from "@/components/ui/Gallery3d";
import GalleryVisual from "@/components/ui/GalleryVisual";
import VideoPlayer from "@/components/ui/VideoPlayer";

export default function Home() {
  return (

    
    <main className="relative bg-black-100 flex justify-center
     items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">

      <div className="w-full top-0 absolute z-30">
        <FloatingNav />
      </div>

      <div className="max-w-7xl w-full">

        <div id="Home" className="py-12">
          <Hero />
        </div>
          
        <div id="About" className="py-12 mt-11">
          <Grid />
          <div className="py-12 mt-11">
            <Sobremi />
          </div>
        </div>

        <div className="container mx-auto relative top-10 py-12 mt-11">
            <h1 className="text-4xl font-bold text-center my-8">DISEÑO 3D</h1>
            <div className=" ml-11 sm:ml-28 md:ml-20">
              <Gallery3d />
            </div>
        </div>

        <div className="container mx-auto relative top-10 py-12 mt-11">
            <h1 className="text-4xl font-bold text-center my-8">AUDIOVISUAL </h1>
            <div className="ml-11 sm:ml-28 md:ml-20">
              <GalleryVisual />
            </div>
        </div>

        
        <div id="Reel" className="mb-20 py-12">
            <VideoPlayer />
        </div>

        <div id="Contact" className="py-12 w-full">
          <ContactForm />
        </div>

        <div className="pt-12">
          <Footer />
        </div>

      </div>
    </main>
  );
}
