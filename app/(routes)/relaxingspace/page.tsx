import CoverParticles from '@/components/cover-particles';
import HeroSection from '@/components/relaxing-space/hero-section';
import TransitionPage from '@/components/transition-page';
import ProblemaObjetivo from '@/components/relaxing-space/ProblemaObjetivo';
import Info from '@/components/relaxing-space/Info';

export default function RelaxingSpace() {
   return (
      <>
         <TransitionPage bgColor='bg-white' />
         
         <HeroSection />
         <Info />
         <ProblemaObjetivo />
         <div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#6DEE9A_100%)]"></div></div>
      </>
   );
}