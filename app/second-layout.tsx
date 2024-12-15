"use client";
import Navbar from '@/components/navbar';
import { usePathname } from 'next/navigation';
import { sectionsLandings } from './page';
import { sectionsRelaxingSpace } from './(routes)/relaxingspace/page';
import { sectionsPaintVR } from './(routes)/paintvr/page';


interface SecondLayoutProps {
   children: React.ReactNode;
}

export default function SecondLayout({ children }: SecondLayoutProps) {
   const pathname = usePathname(); // Obtiene la ruta actual

   // Selecciona las secciones dinámicamente según la ruta
   const sections =
      pathname === '/' ? sectionsLandings :
      pathname === '/paintvr' ? sectionsPaintVR :
      pathname === '/relaxingspace' ? sectionsRelaxingSpace :
      [];

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
