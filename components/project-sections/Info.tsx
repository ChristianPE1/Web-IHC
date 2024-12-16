"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface InfoSectionProps {
  title: string;
  description: string;
  logo: string;
  bgColor: string;
  showButton?: boolean; // Nueva propiedad para controlar la visibilidad del botón
}

export default function InfoSection({
  title,
  description,
  logo,
  bgColor,
  showButton = true, // Valor por defecto para mostrar el botón
}: InfoSectionProps) {
  const paintVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const vrVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <section className="relative w-full min-h-screen p-8 flex flex-col justify-center items-center overflow-hidden">
      {/* Floating squares behind */}
      <div className="absolute top-1/4 left-4 w-24 h-24 bg-white bg-opacity-40 rounded-lg transform rotate-12 filter blur"></div>
      <div className="absolute bottom-1/4 right-4 w-32 h-32 bg-white bg-opacity-40 rounded-lg transform -rotate-6 filter blur"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white bg-opacity-40 rounded-lg transform rotate-45 filter blur"></div>
      <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-white bg-opacity-40 rounded-lg transform -rotate-12 filter blur"></div>

      {/* Contenedor de imagen e información */}
      <div className={`h-5/6 max-w-[1100px] bg-gradient-to-br ${bgColor} p-8 rounded-3xl shadow-lg backdrop-filter backdrop-blur-sm border border-white border-opacity-60 z-10`}>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Espacio para la imagen */}
          <div className="md:w-1/3 rounded-fullbg-white">
            <img src={logo} alt="Your Image" className="w-full h-full object-cover rounded-full" />
          </div>

          {/* Contenedor de información */}
          <div className="w-full md:w-2/3">
            <div className="mb-6">
              <div className="text-5xl md:text-7xl font-bold mb-2">{title}</div>
              <motion.p
                className="text-xl md:text-2xl font-medium mb-4"
                variants={vrVariants}
                initial="hidden"
                animate="visible"
              >
                {description}
              </motion.p>
            </div>

            {/* Renderiza el botón solo si showButton es verdadero */}
            {showButton && (
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-full text-white font-bold bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition-all duration-300">
                  Ir al documento
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating squares in front */}
      <div className="absolute top-8 left-1/4 w-20 h-20 bg-white bg-opacity-60 rounded-lg transform -rotate-12 z-20"></div>
      <div className="absolute bottom-8 right-1/3 w-28 h-28 bg-white bg-opacity-60 rounded-lg transform rotate-6 z-20"></div>
      <div className="absolute top-1/3 right-8 w-16 h-16 bg-white bg-opacity-60 rounded-lg transform -rotate-45 z-20"></div>
    </section>
  );
}
