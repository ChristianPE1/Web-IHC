"use client"
import CoverParticles from '@/components/cover-particles';
import HeroSection from '@/components/paintvr/hero-section';
import TransitionPage from '@/components/transition-page';
import Background from '@/components/background';
import Navbar from '@/components/navbar';
import Info from '@/components/project-sections/Info';
import ProblemaObjetivo from '@/components/project-sections/ProblemaObjetivo';
import { useRef } from 'react';

export default function PaintVR() {
   //const circleColor = "rgba(234,88,12,.15)"; // bg-orange-600
   const circleColor = "rgba(29,78,216,.55)"; // bg-white
   const bgColor = "bg-slate-950";

   // Referencias para las secciones
   const homeRef = useRef<HTMLDivElement>(null);
   const teamRef = useRef<HTMLDivElement>(null);
   const projectsRef = useRef<HTMLDivElement>(null);

   // Función para desplazarse a una sección
   const scrollToSection = (section: string) => {
      if (section === 'inicio') homeRef.current?.scrollIntoView({ behavior: 'smooth' });
      if (section === 'about') teamRef.current?.scrollIntoView({ behavior: 'smooth' });
      if (section === 'anexos') projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
   };

   const infoContent = [
      {
         title: "PaintVR",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis autem vero omnis incidunt. Aliquid, inventore non culpa voluptate magnam dolore deserunt, rem dolor commodi, assumenda quasi hic est magni excepturi.",
         logo: "/logos/relaxing-space-logo.png",
         bgColor: "from-blue-800/70 via-sky-400/50 to-blue-500/80"
      }
   ]

   return (
      <>
         <TransitionPage bgColor='bg-slate-950' />
         <Navbar
            bgColor="bg-slate-600"
            gradientColor="from-slate-400/20 to-slate-300/30"
            onNavigate={scrollToSection}
            sections={[
               { name: "Inicio", id: "inicio" },
               { name: "Acerca de", id: "about" },
               { name: "Anexos", id: "anexos" }
            ]}
         />
         <main className="h-screen w-full relative overflow-auto snap-y snap-mandatory">
            <div className="snap-center">
               <CoverParticles colorParticles='#fff' />
            </div>
            <div className="snap-center">
               <HeroSection />
            </div>
            <div className="snap-center">
               <Info title={infoContent[0].title} description={infoContent[0].description} logo={infoContent[0].logo} bgColor={infoContent[0].bgColor} />
            </div>
            <div className="snap-center">
               <ProblemaObjetivo />
            </div>
         </main>

         <Background circleColor={circleColor} backgroundColor={bgColor} />
         {/*<div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#d97706_100%)]"></div></div>*/}
      </>
   );
}