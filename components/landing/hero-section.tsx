"use client";
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
   gradientColor: string;
   textColor: string;
}

export default function HeroSection({ gradientColor, textColor }: HeroProps) {

   const navigateToProjects = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
         projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <section className="z-30 h-screen text-white w-full">
         <div className="flex w-full items-center justify-center h-full flex-col">
            <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-5xl font-semibold leading-tight text-transparent lg:text-8xl sm:leading-tight md:text-7xl md:leading-tight">
               Grupo <span className={`text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r ${gradientColor} inline-block text-transparent bg-clip-text mt-4 relative z-10`}>
                  SCS
               </span>
            </h1>
            <p className="my-6 max-w-2xl text-center text-base leading-relaxed md:text-xl md:leading-relaxed">
               Grupo de desarrollo de software especializado en aplicaciones web y móviles. Nuestro equipo se caracteriza por su
               <span className={`font-bold ${textColor}`}>
                  <TypeAnimation
                     preRenderFirstString={true}
                     sequence={[
                        ' creatividad.',
                        10000,
                        ' calidad.',
                        10000,
                        ' compromiso.'
                     ]}
                     wrapper="span"
                     repeat={Infinity}
                     speed={50}
                  />
               </span>
            </p>
            <a
               onClick={navigateToProjects}
               className={`z-50 cursor-pointer flex flex-row justify-center items-center gap-x-2  animate-bounce t-4 px-6 py-3 ${textColor} font-bold rounded-full hover:underline underline-offset-8`}
            >
               <ArrowDown size={24} className="inline-block" />
               Revisar nuestros proyectos
            </a>

         </div>
      </section>
   );
}
