"use client";
import Navbar from '@/components/navbar';
import { usePathname } from 'next/navigation';
import { sectionsLandings } from './page';
import { sectionsProject } from './(routes)/relaxingspace/page';

interface SecondLayoutProps {
   children: React.ReactNode;
}

export default function SecondLayout({ children }: SecondLayoutProps) {
   const pathname = usePathname(); // Obtiene la ruta actual

   // Selecciona las secciones dinámicamente según la ruta
   const sections =
      pathname === '/' ? sectionsLandings : sectionsProject;

   return (
      <div>
         <Navbar
            bgColor="bg-slate-600"
            gradientColor="from-slate-400/20 to-slate-300/30"
            sections={sections}
         />
         {children}
      </div>
   );
}
