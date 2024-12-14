"use client";
import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import ProblemaObjetivo from "@/components/project-sections/ProblemaObjetivo";
import HeroSection from "@/components/relaxing-space/hero-section";
import Info from "@/components/project-sections/Info";
import Navbar from "@/components/navbar";
import Background from "@/components/background";
import { useRef } from "react";
import DragCards from "@/components/relaxing-space/drag-cards";

export default function RelaxingSpace() {
  const circleColor = "rgba(4,120,87,.15)"; // bg-emerald-700
  const bgColor = "bg-slate-950";

  const infoContent = [
    {
      title: "Relaxing Space",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis autem vero omnis incidunt. Aliquid, inventore non culpa voluptate magnam dolore deserunt, rem dolor commodi, assumenda quasi hic est magni excepturi.",
      logo: "/logos/relaxing-space-logo.png",
      bgColor: "from-green-600/50 via-green-400/30 to-green-800/30",
    },
  ];

  // Referencias para las secciones
  const homeRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const anexoRef = useRef<HTMLDivElement>(null);

  // Función para desplazarse a una sección
  const scrollToSection = (section: string) => {
    if (section === "inicio")
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "about")
      infoRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "anexos")
      anexoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroSection />
      <TransitionPage bgColor="bg-slate-950" />
      <Navbar
        bgColor="bg-slate-600"
        gradientColor="from-slate-400/20 to-slate-300/30"
        onNavigate={scrollToSection}
        sections={[
          { name: "Inicio", id: "inicio" },
          { name: "Acerca de", id: "about" },
          { name: "Anexos", id: "anexos" },
        ]}
      />
      <main className="h-screen w-full relative overflow-auto snap-y snap-mandatory">
        <div className="snap-center">
          <CoverParticles colorParticles="#fff" />
        </div>
        <div className="snap-center" ref={homeRef}>
          <HeroSection />
        </div>
        <div className="snap-center" ref={infoRef}>
          <Info
            title={infoContent[0].title}
            description={infoContent[0].description}
            logo={infoContent[0].logo}
            bgColor={infoContent[0].bgColor}
          />
        </div>
        <div className="snap-center" ref={anexoRef}>
          <ProblemaObjetivo />
        </div>
      </main>
      <Background circleColor={circleColor} backgroundColor={bgColor} />
      {/*<div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#6DEE9A_100%)]"></div></div>
         <div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#a7f3d0_100%)]"></div></div>*/}
      <DragCards />
    </>
  );
}
