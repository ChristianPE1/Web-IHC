"use client";
import { useState, useEffect } from "react";
import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import ProblemaObjetivo from "@/components/project-sections/ProblemaObjetivo";
import HeroSection from "@/components/relaxing-space/hero-section";
import InfoSection from "@/components/project-sections/Info";
import Background from "@/components/background";
import DragCards from "@/components/relaxing-space/drag-cards";

const AchievementMessage = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4 border-4 border-green-400">
      <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center">
        <img
          src="/images/zonaCristales.png"
          alt="Logro"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-black">¡Logro desbloqueado!</h3>
        <p className="text-gray-600">
          Has alcanzado 10 clicks en la pantalla.
          <br />
          Obstuviste un nuevo cristal para Relaxing Space,
          <br />
          explora el mundo y consigue muchas mas!.
        </p>
      </div>
    </div>
  );
};

export default function RelaxingSpace() {
  const [clickCount, setClickCount] = useState(0);
  const [showAchievement, setShowAchievement] = useState(false);
  const [showMedal, setShowMedal] = useState(false);

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
      setShowMedal(true);
    }
  };

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

  return (
    <>
      <TransitionPage bgColor="bg-slate-950" />
      <main 
        className="h-screen w-full relative overflow-auto snap-y snap-mandatory"
        onClick={handleClick}
      >
        {showMedal && (
          <span className="fixed top-20 right-5 w-[60px] h-[60px] bg-gradient-to-br from-green-600/50 via-green-400/30 to-green-800/30 z-50">
            <img src="images/paleta.png" alt="" />
          </span>
        )}
        <div className="snap-center">
          <CoverParticles colorParticles="#fff" />
        </div>
        <div className="snap-center" id="home">
          <HeroSection />
        </div>
        <div className="snap-center" id="about">
          <InfoSection
            title={infoContent[0].title}
            description={infoContent[0].description}
            logo={infoContent[0].logo}
            bgColor={infoContent[0].bgColor}
          />
        </div>
        <div className="snap-center" id="goal">
          <ProblemaObjetivo
            descripcionProblema="El estrés académico en estudiantes de primeros años afecta su bienestar emocional, concentración y motivación debido a presiones por el desempeño y la falta de recursos para gestionarlo."
            descripcionObjetivo="El objetivo es reducir el estrés académico en estudiantes de primeros años de universidad mediante Relaxing Space, un videojuego que utiliza música, ambientes naturales y mensajes motivacionales para ofrecer un espacio virtual de relajación."
            colorProblema="bg-gradient-to-br from-green-600/50 via-green-400/30 to-green-800/30"
            colorObjetivo="bg-gradient-to-br from-green-600/50 via-green-400/30 to-green-800/30"
          />
        </div>
        <div className="snap-center" id="anexos">
          <DragCards />
        </div>
      </main>
      <Background circleColor={circleColor} backgroundColor={bgColor} />
      {showAchievement && <AchievementMessage />}
    </>
  );
}