"use client";
import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import ProblemaObjetivo from "@/components/project-sections/ProblemaObjetivo";
import HeroSection from "@/components/relaxing-space/hero-section";
import InfoSection from "@/components/project-sections/Info";
import Background from "@/components/background";
import { useRef } from "react";
import DragCards from "@/components/relaxing-space/drag-cards";
import {Home, Goal, Info, Component } from "lucide-react"

export default function RelaxingSpace() {
  const circleColor = "rgba(4,120,87,.15)"; // bg-emerald-700
  const bgColor = "bg-slate-950";

  const infoContent = [
    {
      title: "Relaxing Space",
      description:
        "Relaxing Space es un videojuego diseñado para reducir el estrés académico en estudiantes de primeros años de universidad, ofreciendo un entorno virtual relajante con música, paisajes naturales y mensajes motivacionales.",
      logo: "/logos/relaxing-space-logo.png",
      bgColor: "from-green-600/50 via-green-400/30 to-green-800/30",
    },
  ];

  // Referencias para las secciones
  const infoRef = useRef<HTMLDivElement>(null);
  const goalRef = useRef<HTMLDivElement>(null);
  const anexoRef = useRef<HTMLDivElement>(null);

  // Función para desplazarse a una sección
  const scrollToSection = (section: string) => {
    if (section === "about")
      infoRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "goal")
      goalRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "anexos")
      anexoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <TransitionPage bgColor="bg-slate-950" />
      {/*<Navbar
        bgColor="bg-slate-600"
        gradientColor="from-slate-400/20 to-slate-300/30"
        sections={sectionsProject}
      />*/}
      <main className="h-screen w-full relative overflow-auto snap-y snap-mandatory">
        <div className="snap-center">
          <CoverParticles colorParticles="#fff" />
        </div>
        <div className="snap-center" id="home">
          <HeroSection />
        </div>
        <div className="snap-center" id="about" ref={infoRef}>
          <InfoSection
            title={infoContent[0].title}
            description={infoContent[0].description}
            logo={infoContent[0].logo}
            bgColor={infoContent[0].bgColor}
          />
        </div>
        <div className="snap-center" ref={goalRef} id="goal">
        <ProblemaObjetivo
          descripcionProblema="El estrés académico en estudiantes de primeros años afecta su bienestar emocional, concentración y motivación debido a presiones por el desempeño y la falta de recursos para gestionarlo."
          descripcionObjetivo="El objetivo es reducir el estrés académico en estudiantes de primeros años de universidad mediante Relaxing Space, un videojuego que utiliza música, ambientes naturales y mensajes motivacionales para ofrecer un espacio virtual de relajación."
          colorProblema="bg-gradient-to-br from-green-600/50 via-green-400/30 to-green-800/30"
          colorObjetivo="bg-gradient-to-br from-green-600/50 via-green-400/30 to-green-800/30"
        />
        </div>
        <div className='snap-center' ref={anexoRef} id='anexos'>

          <DragCards />
        </div>
      </main>
      <Background circleColor={circleColor} backgroundColor={bgColor} />
      {/*<div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#6DEE9A_100%)]"></div></div>
         <div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#a7f3d0_100%)]"></div></div>*/}
    </>
  );
}

export const sectionsRelaxingSpace = [
  { name: "Inicio", id: "home", icon: <Home size={24} /> },
  { name: "Acerca de", id: "about", icon: <Info size={24} /> },
  { name: "Objetivo", id: "goal", icon: <Goal size={24} /> },
  { name: "Anexos", id: "anexos", icon: <Component size={24} /> },
];