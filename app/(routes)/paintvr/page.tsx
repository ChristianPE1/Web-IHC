import CoverParticles from '@/components/cover-particles';
import HeroSection from '@/components/paintvr/hero-section';
import TransitionPage from '@/components/transition-page';
import ProblemaObjetivo from '@/components/paintvr/ProblemaObjetivo';
import Info from '@/components/paintvr/Info';


export default function PaintVR() {
   return (
      <>
         <TransitionPage bgColor='bg-white' />
         
         <HeroSection />
         <Info />
         <ProblemaObjetivo />
         <div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#d97706_100%)]"></div></div>
      </>
   );
}