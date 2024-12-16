"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
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
        src="/images/psicologo.jpg"
        alt="ASESORAMIENTO CON EXPERTO"
        rotate="6deg"
        top="5%"
        left="20px"
        className="w-36 md:w-56"
        description="En asesoramiento con un psicólogo, especializado en estudiantes universitarios, decidimos que el proyecto se centrará en ayudar a estudiantes al manejo del estrés académico. Para ello, pusimos en marcha una encuesta para validar la necesidad de este proyecto."
        buttons={[]}
      />
      <Card
        containerRef={containerRef}
        src="/images/needfind.png"
        alt="NEEDFINDING"
        rotate="-12deg"
        top="65%"
        left="30px"
        className="w-[250px]"
        description="Luego de validar la necesidad de este proyecto, decidimos que el proyecto se centrará en ayudar a estudiantes al manejo del estrés académico. Realizamos el proceso de needfinding con usuarios voluntarios, que nos ayudaron a entender mejor el problema que estamos tratando de resolver y recopilar necesidades que vamos a tener en cuenta para el proyecto."
        buttons={[
          {
            text: "Videos de las entrevistas",
            url: "https://www.youtube.com/playlist?list=PLCFYbu8kDdyimfYAzMtgsMOYnkGxSUFKy",
          },
          {
            text: "Ver documento",
            url: "https://drive.google.com/file/d/1y2-_Tb3ETuDHw8FLvXxGSaBz6u-RY0qg/view",
          },
        ]}
      />
      <Card
        containerRef={containerRef}
        src="/images/storyboard.png"
        alt="STORYBOARD"
        rotate="-5deg"
        top="50%"
        left="70%"
        className="w-[300px]"
        description="Ahora con las necesidades identificadas, procedimos con el diseño del storyboard y validar con los usuarios que se ajustarán a la idea."
        buttons={[
          {
            text: "Ir a los videos",
            url: "https://www.youtube.com/playlist?list=PLCFYbu8kDdyhs5_4TUGtFUlDFCJe1KPzd",
          },
          {
            text: "Ver documento",
            url: "https://drive.google.com/file/d/1eWQZKh02goFiyDQtBK8-MQBRZKG0s8qS/view",
          },
        ]}
      />
      <Card
        containerRef={containerRef}
        src="/images/mockup.png"
        alt="MOCKUP"
        rotate="10deg"
        top="10%"
        left="75%"
        className="w-[350px]"
        description="Con las correcciones realizadas, procedimos a realizar el diseño del mockup, validando junto con el psicologo las ideas."
        buttons={[
          {
            text: "Ver el canvas",
            url: "https://www.canva.com/design/DAGXb9RFI6k/ddqI_S3G4yrXgXzfPP7MYQ/edit",
          },
          {
            text: "Validación el psicologo",
            url: "https://www.youtube.com/watch?v=rSxhBEZ4drk",
          },
        ]}
      />
      <Card
        containerRef={containerRef}
        src="/images/encuesta.png"
        alt="ENCUESTA"
        rotate="-3deg"
        top="30%"
        left="35%"
        className="w-[350px]"
        description="Se realizo una encuesta para validar la necesidad de este proyecto, decidimos que el proyecto se centrará en ayudar a estudiantes al manejo del estrés académico."
        buttons={[
          {
            text: "Ver formulario",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSfUYCwfsPFgy3CSHenS58ErGIk8FuFPtLYuvO73Q67vdaZq4g/viewform",
          },
          {
            text: "Ver resultados",
            url: "https://docs.google.com/spreadsheets/d/1HdK6PZsAzGnUPeJvaLzxFcH_7UaE6RgCjptwSFXUoHY/edit?gid=878736401#gid=878736401",
          },
        ]}
      />
    </div>
  );
};

interface ButtonProps {
  text: string;
  url: string;
}

interface CardProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className: string;
  description: string;
  buttons: ButtonProps[]; // Cambiado de un solo botón a un arreglo
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
  buttons,
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
          "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4 cursor-pointer",
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

          <p className="text-center text-lg font-semibold text-gray-700 mt-2">
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
              <img
                src={src}
                alt={alt}
                className="w-full max-h-[250px] rounded"
              />
            </div>

            {/* Descripción y botones a la derecha */}
            <div className="w-1/2 pl-6">
              <h2 className="text-xl font-bold mb-4 text-black">{alt}</h2>
              <p className="text-gray-700 mb-6">{description}</p>
              <div className="flex flex-col space-y-2">
                {buttons.slice(0, 2).map((button, index) => (
                  <a
                    key={index}
                    href={button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition"
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};
