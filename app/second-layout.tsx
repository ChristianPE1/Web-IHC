"use client";
import Navbar from '@/components/navbar';


interface SecondLayoutProps {
   children: React.ReactNode;
}

export default function SecondLayout({ children }: SecondLayoutProps) {

   return (
      <div>
         <Navbar />
         {children}
      </div>
   );
}
