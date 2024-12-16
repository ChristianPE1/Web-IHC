"use client";
import { useState, useEffect } from "react"; // Agregar esto
import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import ProblemaObjetivo from "@/components/project-sections/ProblemaObjetivo";
import HeroSection from "@/components/paintvr/hero-section";
import InfoSection from "@/components/project-sections/Info";
import Background from "@/components/background";
import DragCards from "@/components/paintvr/drag-cards";

// Agregar AchievementMessage
const AchievementMessage = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4 border-4 border-red-400">
      <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center">
        <img
          src="/images/insigniaClick.png"
          alt="Logro"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-black">¡Logro desbloqueado!</h3>
        <p className="text-gray-600">
          Has alcanzado 10 clicks en la pantalla.
          <br />
          Vuelve en 15 min para volver a intentarlo.
        </p>
      </div>
    </div>
  );
};

export default function RelaxingSpace() {
  // Estado para manejar clics y mostrar AchievementMessage
  const [clickCount, setClickCount] = useState(0);
  const [showAchievement, setShowAchievement] = useState(false);
  const [showMedal, setShowMedal] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showAchievement) {
      timer = setTimeout(() => {
        setShowAchievement(false);
      }, 5000); // El AchievementMessage desaparecerá después de 5 segundos
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showAchievement]);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount + 1 === 10) {
      setShowAchievement(true); // Mostrar el AchievementMessage después de 10 clics
      setShowMedal(true);
    }
  };

  const circleColor = "rgba(37,99,235,.15)"; // bg-emerald-700
  const bgColor = "bg-slate-950";

  const infoContent = [
    {
      title: "PaintVR",
      description:
        "PaintVR es una aplicación de realidad virtual que permite a los usuarios pintar en un espacio 3D utilizando un visor de realidad virtual. La aplicación es ideal para artistas y personas que buscan una forma alternativa de pintar.",
      logo: "/images/IconVR.png",
      bgColor: "from-blue-600/50 via-blue-400/30 to-blue-800/30",
    },
  ];

  return (
    <>
      <TransitionPage bgColor="bg-slate-950" />
      <main
        className="h-screen w-full relative overflow-auto snap-y snap-mandatory"
        onClick={handleClick} // Añadir la función onClick al contenedor principal
      >
        {showMedal && (
          <span className="fixed top-20 right-5 w-[60px] h-[60px] bg-gradient-to-br from-blue-600/50 via-blue-400/30 to-blue-800/30 z-50">
            <img src="images/paleta.png" alt="" />
          </span>
        )}
        <div className="snap-center">
          <CoverParticles colorParticles="#fff" />
        </div>
        <div className="snap-center" id="home2">
          <HeroSection />
        </div>
        <div className="snap-center" id="about2">
          <InfoSection
            title={infoContent[0].title}
            description={infoContent[0].description}
            logo={infoContent[0].logo}
            bgColor={infoContent[0].bgColor}
            showButton={false}
          />
        </div>
        <div className="snap-center" id="goal2">
          <ProblemaObjetivo
            descripcionProblema="Las herramientas tradicionales restringen la creatividad a superficies planas y, sin ambiente adecuado, ello limita la exploración del potencial artístico."
            descripcionObjetivo="PaintVR busca ofrecer una plataforma inmersiva de realidad virtual para crear arte en un entorno 3D, fomentando la creatividad y la expresión artística."
            colorProblema="bg-gradient-to-br from-blue-600/50 via-blue-400/30 to-blue-800/30"
            colorObjetivo="bg-gradient-to-br from-blue-600/50 via-blue-400/30 to-blue-800/30"
          />
        </div>
        <div className="snap-center" id="anexos2">
          <DragCards />
        </div>
      </main>
      <Background circleColor={circleColor} backgroundColor={bgColor} />
      {showAchievement && <AchievementMessage />}{" "}
      {/* Mostrar el mensaje de logro si es necesario */}
    </>
  );
}
