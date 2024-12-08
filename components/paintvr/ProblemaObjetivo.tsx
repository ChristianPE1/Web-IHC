"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZIndex = -Infinity;

    els.forEach((el) => {
      const elZIndex = parseInt(window.getComputedStyle(el).getPropertyValue("z-index"));
      if (!isNaN(elZIndex) && elZIndex > maxZIndex) {
        maxZIndex = elZIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

const ProblemaObjetivo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full h-screen bg-white p-8 flex flex-col">
      {/* Título de la sección */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black">Problema & Objetivo</h2>
      </div>

      {/* Contenedor de las tarjetas */}
      <div className="flex flex-1 gap-8 overflow-hidden">
        {/* Tarjeta "Problema" */}
        <div className="flex-1 rounded-lg p-6 relative overflow-hidden transform transition-transform transition-colors duration-300 ease-in-out bg-yellow-300 hover:bg-yellow-400 hover:-translate-y-1">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Figura decorativa */}
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 opacity-50"></div>
          </div>
          <div className="relative z-10 flex flex-col h-full justify-end">
            <h3 className="text-2xl font-bold text-black mb-2">Problema</h3>
            <p className="text-black mb-4">
              Explicación breve del problema que se quiere abordar. Este texto sustituye la descripción original.
            </p>
            <p className="text-sm text-gray-700">Ejemplo: Detalle de autores u otra info</p>
          </div>
        </div>

        {/* Tarjeta "Objetivo" */}
        <div className="flex-1 rounded-lg p-6 relative overflow-hidden transform transition-transform transition-colors duration-300 ease-in-out bg-green-400 hover:bg-green-500 hover:-translate-y-1">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Otra figura decorativa */}
            <div className="w-40 h-40 bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-500 opacity-50 transform rotate-45 rounded-lg"></div>
          </div>
          <div className="relative z-10 flex flex-col h-full justify-end">
            <h3 className="text-2xl font-bold text-black mb-2">Objetivo</h3>
            <p className="text-black mb-4">
              Aquí se describe el objetivo a alcanzar a partir del problema. Este texto reemplaza a la descripción original.
            </p>
            <p className="text-sm text-gray-700">Ejemplo: Detalle de autores u otra info</p>
          </div>
        </div>

        {/* Tarjeta Opcional con imágenes arrastrables */}
        <div 
          className="flex-1 rounded-lg p-6 relative overflow-hidden transform transition-transform transition-colors duration-300 ease-in-out bg-blue-400 hover:bg-blue-500 hover:-translate-y-1"
          ref={containerRef}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Otra figura decorativa */}
            <div className="w-40 h-40 bg-gradient-to-r from-green-500 via-purple-500 to-red-500 opacity-50 rounded-full"></div>
          </div>

          {/* Contenedor de las imágenes arrastrables */}
          <div className="relative z-10 w-full h-full">
            <Card
              containerRef={containerRef}
              src="https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop"
              alt="Imagen 1"
              rotate="6deg"
              top="20%"
              left="25%"
              className="w-36 md:w-56"
            />

            <Card
              containerRef={containerRef}
              src="https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?q=80&w=2787&auto=format&fit=crop"
              alt="Imagen 2"
              rotate="12deg"
              top="45%"
              left="60%"
              className="w-24 md:w-48"
            />

            <Card
              containerRef={containerRef}
              src="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?q=80&w=2670&auto=format&fit=crop"
              alt="Imagen 3"
              rotate="-6deg"
              top="20%"
              left="40%"
              className="w-52 md:w-80"
            />

            <Card
              containerRef={containerRef}
              src="https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=2609&auto=format&fit=crop"
              alt="Imagen 4"
              rotate="8deg"
              top="50%"
              left="40%"
              className="w-48 md:w-72"
            />

            <Card
              containerRef={containerRef}
              src="https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2671&auto=format&fit=crop"
              alt="Imagen 5"
              rotate="18deg"
              top="20%"
              left="65%"
              className="w-40 md:w-64"
            />

            <Card
              containerRef={containerRef}
              src="https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop"
              alt="Imagen 6"
              rotate="-3deg"
              top="35%"
              left="55%"
              className="w-24 md:w-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemaObjetivo;
