import CoverParticles from '@/components/cover-particles';
import HeroSection from '@/components/landing/hero-section';
import Projects from '@/components/landing/projects';
import Team from '@/components/landing/team';
import Image from "next/image";
import TransitionPage from '@/components/transition-page';
import Navbar from '@/components/navbar';
import Background from '@/components/landing/background';

export default function Home() {



  //const circleColor = "rgba(255,0,182,.15)";
  //const circleColor = "rgba(9,76,195,.15)";
  //const circleColor = "rgba(192,38,211,.15)"; // bg-fuchsia-600
  const circleColor = "rgba(126,34,206,.15)"; // bg-purple-600
  //const circleColor = "rgba(5,150,105,.15)"; // bg-emerald-600


  return (
    <>
      <Navbar bgColor='bg-slate-600' gradientColor='from-slate-600 to-slate-300' />
      <main className='h-screen w-full relative overflow-auto snap-y snap-mandatory'>
        <div className='snap-center'>
          <TransitionPage bgColor='bg-slate-950' />
        </div>
        <div className='snap-center'>
          <CoverParticles colorParticles='#fff' />
        </div>
        <div className='snap-center'>
          <HeroSection gradientColor='from-purple-700 via-purple-600 to-purple-500' textColor='text-purple-600' />
        </div>
        <div className='snap-center'>
          <Team textColor='text-purple-600' />
        </div>
        <div className='snap-center'>
          <Projects />
        </div>
        <Background circleColor={circleColor} />
      </main>
    </>
  );
}


