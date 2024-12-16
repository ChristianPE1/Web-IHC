"use client";

import React, { useRef } from 'react';
import { motion } from 'motion/react';

interface ProblemaObjetivoProps {
  descripcionProblema: string;
  descripcionObjetivo: string;
  colorProblema: string;
  colorObjetivo: string;
}

const RevealLinks = () => {
  return (
    <div className="flex-1 p-6 relative overflow-hidden transform transition-transform duration-300 ease-in-out flex items-center justify-center">
      <div className="flex flex-col gap-y-4 text-current">
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
      className="relative block overflow-hidden whitespace-nowrap text-7xl 2xl:text-8xl font-black uppercase"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
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
              initial: { y: "100%" },
              hovered: { y: 0 },
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

const Card = ({ title, description, color }: { title: string; description: string; color: string }) => {
  const paintVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={`flex-1 rounded-3xl p-8 relative overflow-hidden transform transition-all duration-300 ease-in-out ${color} hover:-translate-y-2 backdrop-blur-sm border border-white border-opacity-60 h-1/2 flex items-center justify-center`}>
      {/* Floating squares behind */}
      <div className="absolute top-1/4 left-4 w-16 h-16 bg-gray-700 bg-opacity-60 rounded-lg transform rotate-12 filter blur-sm"></div>
      <div className="absolute bottom-1/4 right-4 w-20 h-20 bg-gray-700 bg-opacity-60 rounded-lg transform -rotate-6 filter blur-sm"></div>
      <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-gray-700 bg-opacity-60 rounded-lg transform rotate-45 filter blur-sm"></div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h3
          className="text-4xl font-bold text-white mb-4"
          variants={paintVariants}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-xl text-white mb-6"  // Cambié 'text-lg' a 'text-xl'
          variants={paintVariants}
          initial="hidden"
          animate="visible"
        >
          {description}
        </motion.p>
      </div>

      {/* Floating squares in front */}
      <div className="absolute top-8 left-1/4 w-12 h-12 bg-white bg-opacity-60 rounded-lg transform -rotate-12 z-20"></div>
      <div className="absolute bottom-8 right-1/3 w-16 h-16 bg-white bg-opacity-60 rounded-lg transform rotate-6 z-20"></div>
    </div>
  );
};

const ProblemaObjetivo: React.FC<ProblemaObjetivoProps> = ({
  descripcionProblema,
  descripcionObjetivo,
  colorProblema,
  colorObjetivo,
}) => {


  return (
    <section className="w-full h-screen text-white p-8">
      <div className="w-full h-full flex gap-8 overflow-hidden items-center">
        <RevealLinks />

        <Card
          title="Problema"
          description={descripcionProblema}
          color={colorProblema}
        />

        <Card
          title="Objetivo"
          description={descripcionObjetivo}
          color={colorObjetivo}
        />
      </div>
    </section>
  );
};

export default ProblemaObjetivo;
