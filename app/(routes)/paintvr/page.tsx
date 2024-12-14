"use client";
import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import ProblemaObjetivo from "@/components/project-sections/ProblemaObjetivo";
import HeroSection from "@/components/paintvr/hero-section";
import InfoSection from "@/components/project-sections/Info";
import Navbar from "@/components/navbar";
import Background from "@/components/background";
import { useRef } from "react";
import DragCards from "@/components/relaxing-space/drag-cards";
import { Goal, Info, Component } from "lucide-react"


export default function RelaxingSpace() {
  const circleColor = "rgba(37,99,235,.15)"; // bg-emerald-700
  const bgColor = "bg-slate-950";

  const infoContent = [
    {
      title: "PaintVR",
      description:
        "PaintVR es una aplicación de realidad virtual que permite a los usuarios pintar en un espacio 3D utilizando un controlador de realidad virtual. La aplicación es ideal para artistas y personas que buscan una forma creativa de relajarse.",
      logo: "/images/paintvr-logo.png",
      bgColor: "from-blue-600/50 via-blue-400/30 to-blue-800/30",
    }
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
      <Navbar
        bgColor="bg-slate-600"
        gradientColor="from-slate-400/20 to-slate-300/30"
        onNavigate={scrollToSection}
        sections={[
          { name: "Acerca de", id: "about", icon: <Info size={24} /> },
          { name: "Objetivo", id: "goal", icon: <Goal size={24} /> },
          { name: "Anexos", id: "anexos", icon: <Component size={24} /> },
        ]}
      />
      <main className="h-screen w-full relative overflow-auto snap-y snap-mandatory">
        <div className="snap-center">
          <CoverParticles colorParticles="#fff" />
        </div>
        <div className="snap-center" >
          <HeroSection />
        </div>
        <div className="snap-center" ref={infoRef}>
          <InfoSection
            title={infoContent[0].title}
            description={infoContent[0].description}
            logo={infoContent[0].logo}
            bgColor={infoContent[0].bgColor}
          />
        </div>
        <div className="snap-center" ref={goalRef}>
          <ProblemaObjetivo />
        </div>
        <div className='snap-center' ref={anexoRef}>

          <DragCards />
        </div>
      </main>
      <Background circleColor={circleColor} backgroundColor={bgColor} />
      {/*<div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#6DEE9A_100%)]"></div></div>
         <div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#a7f3d0_100%)]"></div></div>*/}
    </>
  );
}
