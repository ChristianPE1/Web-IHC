"use client";
import { useState, useEffect } from "react";
import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import ProblemaObjetivo from "@/components/project-sections/ProblemaObjetivo";
import HeroSection from "@/components/paintvr/hero-section";
import InfoSection from "@/components/project-sections/Info";
import Navbar from "@/components/navbar";
import Background from "@/components/background";
import { useRef } from "react";
import DragCards from "@/components/paintvr/drag-cards";
import { Home, Goal, Info, Component } from "lucide-react";

const AchievementMessage = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4 border-4 border-red-400">
      <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center">
        <img src="/images/insigniaClick.png" alt="Logro" className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-black">¡Logro desbloqueado!</h3>
        <p className="text-gray-600">
          Has alcanzado 10 clicks en la pantalla.<br />
          Vuelve en 15 min para volver a intentarlo.
        </p>
      </div>
    </div>
  );
};


export default function RelaxingSpace() {
  const [clickCount, setClickCount] = useState(0);
  const [showAchievement, setShowAchievement] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showAchievement) {
      timer = setTimeout(() => {
        setShowAchievement(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showAchievement]);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount + 1 === 10) {
      setShowAchievement(true);
    }
  };

  const circleColor = "rgba(37,99,235,.15)"; // bg-emerald-700
  const bgColor = "bg-slate-950";

  const infoContent = [
    {
      title: "PaintVR",
      description:
        "PaintVR es una aplicación de realidad virtual que permite a los usuarios pintar en un espacio 3D utilizando un controlador de realidad virtual. La aplicación es ideal para artistas y personas que buscan una forma creativa de relajarse.",
      logo: "/images/IconVR.png",
      bgColor: "from-blue-600/50 via-blue-400/30 to-blue-800/30",
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
      <main
        className="h-screen w-full relative overflow-auto snap-y snap-mandatory"
        onClick={handleClick}
      >
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
            descripcionProblema="Las herramientas tradicionales restringen la creatividad a superficies planas y, sin espacio ni equipo adecuado, limitan la exploración del potencial artístico."
            descripcionObjetivo="PaintVR busca ofrecer una plataforma inmersiva de realidad virtual para crear arte en 3D, fomentando la creatividad y la expresión artística, a la vez que proporciona una experiencia relajante y terapéutica."
            colorProblema="bg-gradient-to-br from-blue-600/50 via-blue-400/30 to-blue-800/30"
            colorObjetivo="bg-gradient-to-br from-blue-600/50 via-blue-400/30 to-blue-800/30"
          />
        </div>
        <div className="snap-center" ref={anexoRef} id="anexos2">
          <DragCards />
        </div>
      </main>
      <Background circleColor={circleColor} backgroundColor={bgColor} />
      {showAchievement && <AchievementMessage />}
    </>
  );
}

export const sectionsPaintVR = [
  { name: "Inicio", id: "home2", icon: <Home size={24} /> },
  { name: "Acerca de", id: "about2", icon: <Info size={24} /> },
  { name: "Objetivo", id: "goal2", icon: <Goal size={24} /> },
  { name: "Anexos", id: "anexos2", icon: <Component size={24} /> },
];