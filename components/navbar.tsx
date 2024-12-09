
import Image from 'next/image';
import Link from 'next/link';
import TransitionComponent from './transition-component';


export default function Navbar() {
   return (
      <TransitionComponent position="right" className='fixed top-0 md:left-0 right-0 z-50 h-16 flex justify-between items-center px-4 mt-4 text-black'>
         <nav className='flex items-center gap-10 px-8 py-3 bg-slate-300/60 rounded-full m-auto text-black'>
            <Link href='/' className='hover:bg-slate-300 py-1 px-3 rounded-full'>Home</Link>
            <Link href='/about' className='hover:bg-slate-300 py-1 px-3 rounded-full'>Team</Link>
            <Link href='/about' className='hover:bg-slate-300 py-1 px-3 rounded-full'>Projects</Link>
         </nav>
      </TransitionComponent>
   );
}