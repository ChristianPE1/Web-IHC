"use client";
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
   gradientColor: string;
   textColor: string;
   gradientColorTransparent: string;
}

export default function HeroSection({ gradientColor, textColor,gradientColorTransparent }: HeroProps) {

   const navigateToProjects = (sectionId:string) => {
      const projectsSection = document.getElementById(sectionId);
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

            <footer className="flex flex-row gap-x-20 absolute bottom-0 mb-10 text-center text-2xl text-gray-400">
               <div onClick={()=>navigateToProjects('projects')}
                  className={`z-20 cursor-pointer flex justify-center items-center gap-x-3 px-12 py-10 w-fit ${gradientColorTransparent} bg-gradient-to-br text-white rounded-full border-white border-2 relative group overflow-hidden`}
                  
               >
                  Proyectos
                  <ArrowDown size={24} />
                  <div
                     className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ backgroundImage: "url('/hero-imgs/bg_project.png')" }}
                  ></div>
               </div>
               <div onClick={() => navigateToProjects('team')}
                  className={`z-20 cursor-pointer flex justify-center items-center gap-x-3 px-12 py-10 w-fit ${gradientColorTransparent} bg-gradient-to-br text-white rounded-full border-white border-2 relative group overflow-hidden`}

               >
                  Equipo
                  <ArrowDown size={24} />
                  <div
                     className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ backgroundImage: "url('/hero-imgs/bg_team.png')" }}
                  ></div>
               </div>

            </footer>

         </div>
      </section>
   );
}
