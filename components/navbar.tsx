
import Image from 'next/image';
import Link from 'next/link';
import TransitionComponent from './transition-component';

interface NavbarProps {
   bgColor: string;
   gradientColor: string;
}

export default function Navbar({ bgColor, gradientColor }: NavbarProps) {
   return (
      <TransitionComponent position="top" className='fixed top-0 md:left-0 right-0 z-50 h-16 flex justify-between items-center px-4 mt-4 text-black w-full'>
         <nav className={`flex items-center gap-10 px-8 py-3 bg-gradient-to-b ${gradientColor} rounded-full m-auto text-black hover:shadow-md hover:shadow-white/50 ease-in-out duration-500 hover:${bgColor}`}>
            <Link href='/' className='hover:bg-slate-300 py-1 px-3 rounded-full font-semibold '>Home</Link>
            <Link href='/about' className='hover:bg-slate-300 py-1 px-3 rounded-full font-semibold '>Team</Link>
            <Link href='/about' className='hover:bg-slate-300 py-1 px-3 rounded-full font-semibold '>Projects</Link>
         </nav>
      </TransitionComponent>
   );
}