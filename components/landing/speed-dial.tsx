import { useState } from 'react';
import {Home,Circle, Palette } from 'lucide-react';  // Usando iconos de react-icons para ejemplo
import Image from 'next/image';
import  CircleIcon  from '@/components/iconsjs/circle';

interface SpeedDialProps {
   onColorChange: (index: number) => void;
}

export default function SpeedDial({ onColorChange }: SpeedDialProps) {
   const [isOpen, setIsOpen] = useState(false);

   const toggleSpeedDial = () => {
      setIsOpen((prev) => !prev);
   };

   const items = [
      {
         icon: <CircleIcon color="#ea580c" />,
         label: "Orange",
         onClick: () => onColorChange(0) // Cambia al índice 0
      },
      {
         icon: <CircleIcon color="#0891b2" />,
         label: "Teal",
         onClick: () => onColorChange(1) // Cambia al índice 1
      },
      {
         icon: <CircleIcon color="#9333ea" />,
         label: "Purple",
         onClick: () => onColorChange(2) // Cambia al índice 2
      }
   ];

   return (
      <div className="absolute z-40">
         {/* Botón principal (abre/cierra el speed dial) */}
         <button
            onClick={toggleSpeedDial}
            className="fixed bottom-10 left-10 bg-white/5 text-white p-4 rounded-full shadow-lg hover:bg-slate-200/20 focus:outline-none transition-all"
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
};
