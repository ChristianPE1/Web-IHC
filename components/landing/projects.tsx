"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Card = ({
  imageSrc,
  title,
  description,
  link,
  colors,
  music,
}: {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  colors: string;
  music: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null); // Referencia al audio


  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
    if (audioRef.current) {
      audioRef.current.pause(); // Pausar el audio cuando se sale del hover
      audioRef.current.currentTime = 0; // Opcional: reiniciar el audio al inicio
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    }
  };


  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-white to-slate-300 hover:shadow-2xl"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className={`absolute inset-2 grid place-content-center rounded-xl bg-gradient-to-br ${colors} shadow-lg duration-1000 `}
      >
        <Image
          src={imageSrc}
          alt={title}
          width={200}
          height={200}
          className="rounded-xl m-auto"
        />
        <h3
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-3xl font-bold"
        >
          {title}
        </h3>
        <Link
          style={{
            transform: "translateZ(40px)",
          }}
          href={link}
          className={`transition-all duration-500 ease-in-out text-center text-lg w-4/5 m-auto mt-2 p-2 text-white rounded-full 
               ${
                 isHovered
                   ? "bg-slate-400/80 hover:bg-slate-600/50 font-bold"
                   : ""
               }`}
        >
          {isHovered ? "Ver más" : description}
        </Link>
      </div>
      <audio ref={audioRef} src={music} />
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      imageSrc: "/logos/relaxing-space-logo.png",
      title: "Relaxing Space",
      description: "Un videojuego móvil para reducir el estrés",
      link: "/relaxingspace",
      colors: "from-green-300 to-emerald-600",
      music: "/music/relaxing-space.mp3",
    },
    {
      imageSrc: "/images/IconVR.png",
      title: "Paint VR",
      description: "Una videojuego de pintura en realidad virtual",
      link: "/paintvr",
      colors: "from-blue-700 to-sky-400",
      music: "/music/paintvr.mp3",
    },
    // Agrega más proyectos aquí
  ];

  return (
    <section className="h-screen z-30 flex flex-col justify-center items-center gap-10">
      <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight">
        Proyectos
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            link={project.link}
            colors={project.colors}
            music={project.music}

          />
        ))}
      </div>
    </section>
  );
}
