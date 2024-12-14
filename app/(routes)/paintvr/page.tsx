import CoverParticles from '@/components/cover-particles';
import HeroSection from '@/components/paintvr/hero-section';
import TransitionPage from '@/components/transition-page';
import Background from '@/components/background';
import Navbar from '@/components/navbar';
import Info from '@/components/project-sections/Info';
import ProblemaObjetivo from '@/components/project-sections/ProblemaObjetivo';

export default function PaintVR() {
   //const circleColor = "rgba(234,88,12,.15)"; // bg-orange-600
   const circleColor = "rgba(255,255,255,.55)"; // bg-white
   const bgColor = "bg-orange-600/60";

   const infoContent = [
      {
         title: "PaintVR",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis autem vero omnis incidunt. Aliquid, inventore non culpa voluptate magnam dolore deserunt, rem dolor commodi, assumenda quasi hic est magni excepturi.",
         logo: "/logos/paint-vr-logo.png",
         bgColor: "from-white/30 via-orange-400/30 to-orange-100/30"
      }
   ]

   return (
      <>
         <TransitionPage bgColor='bg-slate-950' />
         <Navbar bgColor='bg-slate-600' gradientColor='from-slate-600 to-slate-300' />
         <CoverParticles colorParticles='#fff' />
         <HeroSection />
         <Info title={infoContent[0].title} description={infoContent[0].description} logo={infoContent[0].logo} bgColor={infoContent[0].bgColor} />
         <ProblemaObjetivo />
         <Background circleColor={circleColor} backgroundColor={bgColor} />
         {/*<div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#d97706_100%)]"></div></div>*/}
      </>
   );
}