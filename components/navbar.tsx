"use client"
import TransitionComponent from './transition-component';
import Link from 'next/link';

interface SectionProps {
   name: string;
   id: string;
   icon: React.ReactNode;
}

interface NavbarProps {
   bgColor: string;
   gradientColor: string;
   //onNavigate: (section: string) => void;
   sections: SectionProps[]; // Prop para los nombres e IDs de las secciones
}

export default function Navbar({ bgColor, gradientColor, sections }: NavbarProps) {

   const scrollToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
         section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
   };

   return (
      <TransitionComponent position="top" className='fixed top-0 md:left-0 right-0 z-50 h-20 flex justify-between items-center px-4 mt-4 text-white/70 w-full'>
         <div className='flex items-center justify-between gap-10 w-full'>
            <Link href="/" className='font-bold text-xl py-2 px-4 hover:underline underline-offset-8 rounded-3xl hover:text-white'>Grupo <span className='text-purple-600 '> SCS</span></Link>
            <nav className={`flex items-center gap-3 px-8 py-3 rounded-full  ease-in-out duration-500 hover:${bgColor}`}>
               {sections.map((section) => (
                  <button
                     key={section.id}
                     onClick={() => scrollToSection(section.id)}
                     className='flex flex-row gap-x-2 hover:underline underline-offset-8 py-2 px-4 rounded-full font-semibold hover:text-white '
                  >
                     {section.icon}
                     {section.name}
                  </button>
               ))}
            </nav>
         </div>
      </TransitionComponent>
   );
}
