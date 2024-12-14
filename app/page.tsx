"use client"
import { useRef } from 'react';
import CoverParticles from '@/components/cover-particles';
import HeroSection from '@/components/landing/hero-section';
import Projects from '@/components/landing/projects';
import Team from '@/components/landing/team';
import TransitionPage from '@/components/transition-page';
import Navbar from '@/components/navbar';
import Background from '@/components/background';

const colors = {
  circleColors: ['rgba(126,34,206,.25)', 'rgba(5,150,105,.15)', 'rgba(192,38,211,.15)'],
  textColors: ['text-purple-600', 'text-emerald-600', 'text-fuchsia-600'],
  gradientColors: ['from-purple-700 via-purple-600 to-purple-500', 'from-emerald-700 via-emerald-600 to-emerald-500', 'from-fuchsia-700 via-fuchsia-600 to-fuchsia-500']
};

export default function Home() {
  const bgColor = "bg-slate-950";

  // Referencias para las secciones
  const homeRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Función para desplazarse a una sección
  const scrollToSection = (section: string) => {
    if (section === 'inicio') homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'team') teamRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'projects') projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        bgColor="bg-slate-600"
        gradientColor="from-slate-400/20 to-slate-300/30"
        onNavigate={scrollToSection}
        sections={[
          { name: "Inicio", id: "inicio" },
          { name: "Equipo", id: "team" },
          { name: "Proyectos", id: "projects" }
        ]}
      />
      <TransitionPage bgColor="bg-slate-950" />
      <main className="h-screen w-full relative overflow-auto snap-y snap-mandatory">

        <div className="snap-center">
          <CoverParticles colorParticles="#fff" />
        </div>
        <div className="snap-center" ref={homeRef}>
          <HeroSection gradientColor="from-purple-700 via-purple-600 to-purple-500" textColor="text-purple-600" />
        </div>
        <div ref={teamRef} className="snap-center">
          <Team textColor="text-purple-600" />
        </div>
        <div ref={projectsRef} className="snap-center">
          <Projects />
        </div>
      </main>
      <Background circleColor={colors.circleColors[0]} backgroundColor={bgColor} />
    </>
  );
}
