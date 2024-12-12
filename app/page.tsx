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
      <main className='h-full'>
        <TransitionPage bgColor='bg-slate-950' />
        <CoverParticles colorParticles='#fff' />
        <HeroSection textColor='from-purple-700 via-purple-600 to-purple-500' />
        <Team textColor='text-purple-600' />
        <Projects />
        {/*<div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div></div>*/}
        <Background circleColor={circleColor} />
      </main>
    </>
  );
}


