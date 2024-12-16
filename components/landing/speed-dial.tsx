import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';
import CircleIcon from '@/components/iconsjs/circle';

interface SpeedDialProps {
   onColorChange: (index: number) => void;
}

export default function SpeedDial({ onColorChange }: SpeedDialProps) {
   const [isOpen, setIsOpen] = useState(false);
   const [canUseSpeedDial, setCanUseSpeedDial] = useState(false);

   const checkVisitedSections = () => {
      const visitedSections = JSON.parse(sessionStorage.getItem('visitedSections') || '{}');
      const requiredSections = ['inicio', 'team', 'projects'];
      return requiredSections.every((section) => visitedSections[section]);
   };

   useEffect(() => {
      const updateCanUseSpeedDial = () => {
         const allVisited = checkVisitedSections();
         setCanUseSpeedDial(allVisited);

         // Actualizar estilos dinámicamente
         const speedDial = document.getElementById('speed-dial');
         if (speedDial) {
            if (allVisited) {
               speedDial.classList.add('hover:bg-slate-200/20');
               speedDial.classList.remove('text-white/30');
               speedDial.classList.add('text-white');
            } else {
               speedDial.classList.remove('hover:bg-slate-200/20');
               speedDial.classList.remove('text-white');
               speedDial.classList.add('text-white/30');
            }
         }
      };

      // Ejecutar la verificación inicial
      updateCanUseSpeedDial();

      // Escuchar cambios en sessionStorage
      const handleStorageChange = () => {
         updateCanUseSpeedDial();
      };

      window.addEventListener('storage', handleStorageChange);

      return () => {
         window.removeEventListener('storage', handleStorageChange);
      };
   }, []);

   useEffect(() => {
      if (!canUseSpeedDial) {
         setIsOpen(false); // Asegurarse de que el Speed Dial esté cerrado si no se puede usar
      }
   }, [canUseSpeedDial]);

   const toggleSpeedDial = () => {
      if (canUseSpeedDial) {
         setIsOpen((prev) => !prev);
      }
   };

   const items = [
      {
         icon: <CircleIcon color="#9333ea" />,
         label: 'Purple',
         onClick: () => {
            sessionStorage.setItem('selectedColor', '0'); // Guardar índice del color
            onColorChange(0);
         },
      },
      {
         icon: <CircleIcon color="#c2410c" />,
         label: 'Orange',
         onClick: () => {
            sessionStorage.setItem('selectedColor', '1');
            onColorChange(1);
         },
      },
      {
         icon: <CircleIcon color="#2563eb" />,
         label: 'Blue',
         onClick: () => {
            sessionStorage.setItem('selectedColor', '2');
            onColorChange(2);
         },
      },
   ];

   return (
      <div className="absolute z-40">
         {/* Botón principal (abre/cierra el speed dial) */}
         <button
            id="speed-dial"
            onClick={toggleSpeedDial}
            className="fixed bottom-10 left-10 bg-white/5 text-white p-4 rounded-full shadow-lg focus:outline-none transition-all"
         >
            <Palette size={24} />
         </button>

         {/* Contenedor Speed Dial */}
         {isOpen && (
            <div className="fixed bottom-16 left-10 flex flex-col items-center gap-y-6 mb-5">
               {items.map((item, index) => (
                  <button
                     key={index}
                     onClick={item.onClick}
                     className="bg-slate-200/5 text-white p-4 rounded-full shadow-lg hover:bg-slate-200/10 focus:outline-none transition-all transform duration-300 ease-in-out"
                     style={{
                        transform: `translateY(-${index * 10}px)`, // Animación hacia arriba
                     }}
                  >
                     {item.icon}
                  </button>
               ))}
            </div>
         )}
      </div>
   );
}