import CoverParticles from '@/components/cover-particles';
import HeroSection from '@/components/relaxing-space/hero-section';
import TransitionPage from '@/components/transition-page';
import ProblemaObjetivo from '@/components/relaxing-space/ProblemaObjetivo';
import Info from '@/components/relaxing-space/Info';
import Navbar from '@/components/navbar';

export default function RelaxingSpace() {
   return (
      <>
         <TransitionPage bgColor='bg-white' />

         <Navbar bgColor='bg-emerald-200' gradientColor='from-emerald-500 to-emerald-300' />
         <TransitionPage bgColor='bg-emerald-200' />
         <CoverParticles colorParticles='#6DEE9A' />
         <HeroSection />
         <Info />
         <ProblemaObjetivo />
         <div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#6DEE9A_100%)]"></div></div>
         <div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#a7f3d0_100%)]"></div></div>
      </>
   );
}