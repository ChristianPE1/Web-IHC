"use client";

import React, { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const RevealLinks = () => {
  return (
    <div className="flex-1 p-6 relative overflow-hidden transform transition-transform duration-300 ease-in-out flex items-center justify-center">
      <div className="grid place-content-center gap-4 text-current">
        <FlipLink href="#">Problema</FlipLink>
        <FlipLink href="#">&</FlipLink>
        <FlipLink href="#">Objetivo</FlipLink>

      </div>
    </div>
  );
};

interface FlipLinkProps {
  children: string;
  href: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;
const FlipLink = ({ children, href }: FlipLinkProps) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-8xl font-black uppercase"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const ProblemaObjetivo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full h-screen text-white p-8 flex flex-col">

      {/* Contenedor de tarjetas (RevealLinks, Problema y Objetivo) */}
      <div className="flex flex-1 gap-8 overflow-hidden">
        {/* Contenedor de RevealLinks */}
        <RevealLinks />

        {/* Tarjeta "Problema" */}
        <div className="flex-1 rounded-lg p-6 relative overflow-hidden transform transition-transform  duration-300 ease-in-out bg-yellow-300 hover:bg-yellow-400 hover:-translate-y-1">
          <div className="absolute inset-0 flex items-center justify-center">
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
        <div className="flex-1 rounded-lg p-6 relative overflow-hidden transform transition-colors duration-300 ease-in-out bg-green-400 hover:bg-green-500 hover:-translate-y-1">
          <div className="absolute inset-0 flex items-center justify-center">
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
      </div>
    </section>
  );
};

export default ProblemaObjetivo;