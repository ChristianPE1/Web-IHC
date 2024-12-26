"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { ArrowDown } from 'lucide-react';


const HeroSection = () => {

  const navigateToProjects = (sectionId: string) => {
    const projectsSection = document.getElementById(sectionId);
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center pt-20 text-black overflow-hidden">
      <motion.h1
        className="flex flex-col justify-center items-center z-20 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <div>
          <Image src="/logos/relaxing-space-logo.png" alt="Relaxing Space" width={250} height={250} className='drop-shadow-4xl' />
        </div>
        <div className='flex flex-col justify-center items-center text-7xl 2xl:text-8xl font-bold [text-shadow:_0_8px_8px_rgb(0_0_0_/_0.8)]'>
          <header className='mb-12'>
          <span className="text-white">Relaxing</span>{" "}
          <span className="text-green-500">Space</span>
          </header>
          <footer className="flex flex-row justify-center items-center gap-x-20 absolute bottom-0 mb-10 text-center text-2xl text-gray-400">
            <div onClick={() => navigateToProjects('about')}
              className={`z-20 cursor-pointer flex justify-center items-center gap-x-3 px-12 py-8 w-fit from-green-600/60 via-slate-950/70 to-green-500/60 bg-gradient-to-br text-white rounded-full border-white border-2 relative group overflow-hidden`}

            >
              Acerca de
              <ArrowDown size={24} />
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: "url('/hero-imgs/bg-info-rs.png')" }}
              ></div>
            </div>
            <div onClick={() => navigateToProjects('goal')}
              className={`z-20 cursor-pointer flex justify-center items-center gap-x-3 px-12 py-8 w-fit from-green-600/60 via-slate-950/70 to-green-500/60 bg-gradient-to-br text-white rounded-full border-white border-2 relative group overflow-hidden`}

            >
              Objetivo
              <ArrowDown size={24} />
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: "url('/hero-imgs/bg-objetivo-rs.png')" }}
              ></div>
            </div>
            <div onClick={() => navigateToProjects('anexos')}
              className={`z-20 cursor-pointer flex justify-center items-center gap-x-3 px-12 py-8 w-fit from-green-600/60 via-slate-950/70 to-green-500/60 bg-gradient-to-br text-white rounded-full border-white border-2 relative group overflow-hidden`}

            >
              Anexos
              <ArrowDown size={24} />
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: "url('/hero-imgs/bg-anexo-rs.png')" }}
              ></div>
            </div>

          </footer>
        </div>
      </motion.h1>

      <motion.div
        className="absolute bottom-0 w-full h-full"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 5 }}
        style={{
          backgroundImage: "url(images/fondo.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      />
    </section>
  );
};

export default HeroSection;
