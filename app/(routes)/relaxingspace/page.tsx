import CoverParticles from '@/components/cover-particles';
import HeroSection from '@/components/relaxing-space/hero-section';
import TransitionPage from '@/components/transition-page';
import ProblemaObjetivo from '@/components/project-sections/ProblemaObjetivo';
import Info from '@/components/project-sections/Info';
import Navbar from '@/components/navbar';
import Background from '@/components/background';
import { title } from 'process';
import { desc } from 'motion/react-client';

export default function RelaxingSpace() {

   const circleColor = "rgba(4,120,87,.15)"; // bg-emerald-700
   const bgColor = "bg-emerald-600/60";

   const infoContent = [
      {
         title: "Relaxing Space",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis autem vero omnis incidunt. Aliquid, inventore non culpa voluptate magnam dolore deserunt, rem dolor commodi, assumenda quasi hic est magni excepturi.",
         logo: "/logos/relaxing-space-logo.png",
         bgColor: "from-white/30 via-green-400/30 to-green-100/30"
      }
   ]

   return (
      <>
         <TransitionPage bgColor='bg-slate-950' />

         <Navbar bgColor='bg-slate-600' gradientColor='from-slate-600 to-slate-300' />
         <TransitionPage bgColor='bg-slate-950' />
         <CoverParticles colorParticles='#fff' />
         <HeroSection />
         <Info title={infoContent[0].title} description={infoContent[0].description} logo={infoContent[0].logo} bgColor={infoContent[0].bgColor} />
         <ProblemaObjetivo />
         <Background circleColor={circleColor} backgroundColor={bgColor} />
         {/*<div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#6DEE9A_100%)]"></div></div>
         <div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#a7f3d0_100%)]"></div></div>*/}
      </>
   );
}