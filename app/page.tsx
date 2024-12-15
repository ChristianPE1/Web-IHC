"use client"
import { useRef } from 'react';
import { useState } from 'react';
import CoverParticles from '@/components/cover-particles';
import HeroSection from '@/components/landing/hero-section';
import Projects from '@/components/landing/projects';
import Team from '@/components/landing/team';
import TransitionPage from '@/components/transition-page';
import Navbar from '@/components/navbar';
import Background from '@/components/background';
import { Home, Users, FolderCode } from 'lucide-react';
import {WandSparkles} from 'lucide-react';
import SpeedDial from '@/components/landing/speed-dial';

const colors = {
  circleColors: ['rgba(126,34,206,.25)', 'rgba(5,150,105,.15)', 'rgba(192,38,211,.15)'],
  textColors: ['text-purple-600', 'text-emerald-600', 'text-fuchsia-600'],
  gradientColors: ['from-purple-700 via-purple-600 to-purple-500', 'from-emerald-700 via-emerald-600 to-emerald-500', 'from-fuchsia-700 via-fuchsia-600 to-fuchsia-500']
};

export default function LandingPage() {
  const bgColor = "bg-slate-950";

  const [gradientIndex, setGradientIndex] = useState(0);

  const handleGradientChange = (index: number) => {
    setGradientIndex(index);
  };

  return (
    <>
      <TransitionPage bgColor="bg-slate-950" />
      <main className="h-screen w-full relative overflow-auto snap-y snap-mandatory">

        <div className="snap-center">
          <CoverParticles colorParticles="#fff" />
        </div>
        <div id="inicio" className="snap-center">
          <HeroSection gradientColor={colors.gradientColors[gradientIndex]} textColor={colors.textColors[gradientIndex]} />
        </div>
        <div id="team" className="snap-center">
          <Team textColor={colors.textColors[gradientIndex]} />
        </div>
        <div id="projects" className="snap-center">
          <Projects />
        </div>

      </main>
      <SpeedDial onColorChange={handleGradientChange} />
      <Background circleColor={colors.circleColors[gradientIndex]} backgroundColor={bgColor} />
    </>
  );
}

export const sectionsLandings = [
  { name: "Inicio", id: "inicio", icon: <Home size={24} /> },
  { name: "Equipo", id: "team", icon: <Users size={24} /> },
  { name: "Proyectos", id: "projects", icon: <FolderCode size={24} /> }
];
