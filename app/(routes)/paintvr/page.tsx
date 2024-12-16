"use client";
import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import ProblemaObjetivo from "@/components/project-sections/ProblemaObjetivo";
import HeroSection from "@/components/paintvr/hero-section";
import InfoSection from "@/components/project-sections/Info";
import Navbar from "@/components/navbar";
import Background from "@/components/background";
import { useRef } from "react";
import DragCards from "@/components/paintvr/drag-cards";
import { Home,Goal, Info, Component } from "lucide-react"


export default function RelaxingSpace() {
  const circleColor = "rgba(37,99,235,.15)"; // bg-emerald-700
  const bgColor = "bg-slate-950";

  const infoContent = [
    {
      title: "PaintVR",
      description:
        "PaintVR es una aplicación de realidad virtual que permite a los usuarios pintar en un espacio 3D utilizando un controlador de realidad virtual. La aplicación es ideal para artistas y personas que buscan una forma creativa de relajarse.",
      logo: "/images/IconVR.png",
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
      {/*<Navbar
        bgColor="bg-slate-600"
        gradientColor="from-slate-400/20 to-slate-300/30"
        sections={sectionsProject}
      />*/}
      <main className="h-screen w-full relative overflow-auto snap-y snap-mandatory">
        <div className="snap-center">
          <CoverParticles colorParticles="#fff" />
        </div>
        <div className="snap-center" id="home2">
          <HeroSection />
        </div>
        <div className="snap-center" ref={infoRef} id="about2">
          <InfoSection
            title={infoContent[0].title}
            description={infoContent[0].description}
            logo={infoContent[0].logo}
            bgColor={infoContent[0].bgColor}
            showButton={false}
          />
        </div>
        <div className="snap-center" ref={goalRef} id="goal2">
        <ProblemaObjetivo
          descripcionProblema="Las herramientas tradicionales de dibujo y pintura pueden limitar la creatividad y expresión artística al restringir a los usuarios a superficies bidimensionales. Además, muchas personas carecen de un espacio dedicado o el equipo necesario para crear obras de arte de gran escala. Estas limitaciones pueden obstaculizar la capacidad de los artistas para experimentar y explorar plenamente su potencial creativo."
          descripcionObjetivo="El objetivo de PaintVR es proporcionar una plataforma inmersiva y accesible que permita a los usuarios crear y explorar el arte en un entorno tridimensional utilizando tecnología de realidad virtual. Al liberarse de las limitaciones de las herramientas tradicionales y del espacio físico, PaintVR busca fomentar la creatividad, la experimentación y la expresión artística. Además, la aplicación tiene como objetivo ofrecer una forma relajante y terapéutica de crear arte, brindando a los usuarios una vía de escape de las presiones y el estrés de la vida cotidiana."
          colorProblema="bg-gradient-to-br from-blue-600/50 via-blue-400/30 to-blue-800/30"
          colorObjetivo="bg-gradient-to-br from-blue-600/50 via-blue-400/30 to-blue-800/30"
        />

        </div>
        <div className='snap-center' ref={anexoRef} id='anexos2'>

          <DragCards />
        </div>
      </main>
      <Background circleColor={circleColor} backgroundColor={bgColor} />
      {/*<div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#6DEE9A_100%)]"></div></div>
         <div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#a7f3d0_100%)]"></div></div>*/}
    </>
  );
}

export const sectionsPaintVR = [
  { name: "Inicio", id: "home2", icon: <Home size={24} /> },
  { name: "Acerca de", id: "about2", icon: <Info size={24} /> },
  { name: "Objetivo", id: "goal2", icon: <Goal size={24} /> },
  { name: "Anexos", id: "anexos2", icon: <Component size={24} /> },
];