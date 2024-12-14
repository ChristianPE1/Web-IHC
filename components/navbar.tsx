"use client"
import TransitionComponent from './transition-component';
import Link from 'next/link';

interface NavbarProps {
   bgColor: string;
   gradientColor: string;
   onNavigate: (section: string) => void;
   sections: { name: string; id: string }[]; // Prop para los nombres e IDs de las secciones
}

export default function Navbar({ bgColor, gradientColor, onNavigate, sections }: NavbarProps) {
   return (
      <TransitionComponent position="top" className='fixed top-0 md:left-0 right-0 z-50 h-20 flex justify-between items-center px-4 mt-4 text-white w-full'>
         <div className='flex items-center justify-between gap-10 w-full'>
            <Link href="/" className='font-bold text-xl py-2 px-4 hover:underline underline-offset-8 rounded-3xl'>Grupo <span className='text-purple-600 '> SCS</span></Link>
            <nav className={`flex items-center gap-10 px-8 py-3 rounded-full  ease-in-out duration-500 hover:${bgColor}`}>
               {sections.map((section) => (
                  <button
                     key={section.id}
                     onClick={() => onNavigate(section.id)}
                     className='hover:underline underline-offset-8 py-2 px-4 rounded-full font-semibold'
                  >
                     {section.name}
                  </button>
               ))}
            </nav>
         </div>
      </TransitionComponent>
   );
}
