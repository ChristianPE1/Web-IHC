"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden ">
      <h2 className="relative z-0 text-[20vw] font-black text-white/30 md:text-[200px]">
        ANEXOS
      </h2>
      <Cards />
    </section>
  );
};

export default DragCards;

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/images/Sketching.jpg"
        alt="SKETCHING"
        rotate="6deg"
        top="5%"
        left="20px"
        className="w-36 md:w-56"
        description="Se bocetaron algunas vistas que el usuario iba a tener en el juego, asi como las mecanicas que este iba a tener y posibles interacciones con el usuario."
        buttonText="Ver Sketching"
        buttonUrl="https://drive.google.com/file/d/1qpL8otT3f02zOWCEvkNcCqSbnPajZW1l/view"
      />
      <Card
        containerRef={containerRef}
        src="/images/evaluacionUsuario.jpg"
        alt="Evaluación con usuarios"
        rotate="-12deg"
        top="65%"
        left="30px"
        className="w-[350px]"
        description="Se hizo una evaluacion con diferentes usuarios, de modo que, pudimos observar como ellos interactuan con el ambiente, algunas dificultades que tienen y que tareas se podrian modificar ."
        buttonText="Ir a los videos"
        buttonUrl="https://www.youtube.com/playlist?list=PLCFYbu8kDdyh8CSxQQCByQCPL1rVQVTpQ"
      />
      <Card
        containerRef={containerRef}
        src="/images/evolucionIdea.png"
        alt="EVOLUCION DE LA IDEA"
        rotate="-5deg"
        top="40%"
        left="70%"
        className="w-[350px]"
        description="Dimos otro enfoque a la idea de nuestro videojuego, ahora el usuario es un pintor, tendra diferentes dificultades y dependiendo de la habilidad del usario ganara mas o menos puntos."
        buttonText=""
        buttonUrl=""
      />
      <Card
        containerRef={containerRef}
        src="/images/primerPrototipo.png"
        alt="Primer Prototipo"
        rotate="10deg"
        top="10%"
        left="75%"
        className="w-[350px]"
        description="En base a la retroalimentacion de los usarios, se realiza diferentes moficaciones y se pudo observar una mejora, de igual manera se continuo la evaluacion con los usuarios para poder observar que otras cosas se podrian mejora"
        buttonText=""
        buttonUrl=""
      />
    </div>
  );
};

interface CardProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

const Card: React.FC<CardProps> = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
  description,
  buttonText,
  buttonUrl,
}) => {
  const [zIndex, setZIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      const zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsPopupOpen(false);
    }
  };

  return (
    <>
      <motion.div
        onMouseDown={updateZIndex}
        style={{
          top,
          left,
          rotate,
          zIndex,
        }}
        className={twMerge(
          "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
          className
        )}
        drag
        dragConstraints={containerRef}
        dragElastic={0.65}
      >
        <div className="relative group">
          <Image
            src={src}
            alt={alt}
            width={300}
            height={300}
            className="w-full h-auto transition-transform duration-500 group-hover:brightness-75 pointer-events-none"
          />

          <p className="text-center text-sm font-semibold text-gray-700 mt-2">
            {alt}
          </p>
          <button
            className="absolute inset-0 m-auto h-10 w-24 bg-white text-black text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={(e) => {
              e.stopPropagation(); // Evita conflictos con drag
              setIsPopupOpen(true);
            }}
          >
            Ver más
          </button>
        </div>
      </motion.div>
      {/* Popup */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg flex w-11/12 max-w-3xl relative"
          >
            {/* Botón de cerrar (X) en la esquina superior derecha */}
            <button
              className="absolute top-4 right-6 text-2xl text-gray-500 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsPopupOpen(false)}
            >
              &times;
            </button>

            {/* Imagen a la izquierda */}
            <div className="flex justify-center">
              <Image
                src={src}
                alt={alt}
                width={300}
                height={300}
                className="w-auto max-h-[300px] rounded"
              />
            </div>

            {/* Descripción y botón a la derecha */}
            <div className="w-1/2 pl-6">
              <h2 className="text-xl font-bold mb-4 text-black">{alt}</h2>
              <p className="text-gray-700 mb-6">{description}</p>
              {buttonText.length > 0 && (
                <a
                  href={buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition"
                >
                  {buttonText}
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};
