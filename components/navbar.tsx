"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Importa usePathname
import TransitionComponent from "./transition-component";
import Link from "next/link";
import { RefreshCcw } from "lucide-react";
import { Home, Goal, Info, Component, Users, FolderCode } from "lucide-react";

export default function Navbar() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname(); // Obtener la ruta actual

  const [visitedSections, setVisitedSections] = useState<
    Record<string, boolean>
  >({});
  const [selectedColor, setSelectedColor] = useState(0);
  const [showRefreshText, setShowRefreshText] = useState(false);
  const [hasShownRefreshText, setHasShownRefreshText] = useState(false);

  useEffect(() => {
    //setProgress(visitedSections.length / 4);
    if (pathname === "/")
      setProgress((Object.keys(visitedSections).length / 3) * 100);
    else if (pathname === "/relaxingspace")
      setProgress((Object.keys(visitedSections).length / 4) * 100);
    else if (pathname === "/paintvr")
      setProgress((Object.keys(visitedSections).length / 4) * 100);
  }, [visitedSections]);

  // Definir las secciones directamente según la ruta actual
  const sections = (() => {
    if (pathname === "/") {
      return [
        { name: "Inicio", id: "inicio", icon: <Home /> },
        { name: "Proyectos", id: "projects", icon: <FolderCode /> },
        { name: "Equipo", id: "team", icon: <Users /> },
        
      ];
    } else if (pathname === "/relaxingspace") {
      return [
        { name: "Inicio", id: "home", icon: <Home /> },
        { name: "Acerda de", id: "about", icon: <Info /> },
        { name: "Objetivo", id: "goal", icon: <Goal /> },
        { name: "Anexos", id: "anexos", icon: <Component /> },
      ];
    } else if (pathname === "/paintvr") {
      return [
        { name: "Inicio", id: "home2", icon: <Home /> },
        { name: "Acerda de", id: "about2", icon: <Info /> },
        { name: "Objetivo", id: "goal2", icon: <Goal /> },
        { name: "Anexos", id: "anexos2", icon: <Component /> },
      ];
    }
    return []; // Si no coincide ninguna ruta, devuelve un array vacío
  })();

  useEffect(() => {
    // Recuperar estado desde sessionStorage
    const storedVisitedSections = sessionStorage.getItem("visitedSections");
    const storedColor = sessionStorage.getItem("selectedColor");
    const storedHasShownRefreshText = sessionStorage.getItem(
      "hasShownRefreshText"
    );

    if (storedVisitedSections) {
      setVisitedSections(JSON.parse(storedVisitedSections));
    }
    if (storedColor) {
      setSelectedColor(parseInt(storedColor, 10));
    }
    if (storedHasShownRefreshText === "true") {
      setHasShownRefreshText(true); // Evita mostrar el texto nuevamente si ya se mostró
    }
    // Usar selectedColor en una operación lógica o condicional
    if (selectedColor) {
      console.log(`Selected color is ${selectedColor}`);
    }
  }, []);

  useEffect(() => {
    // Verificar si todas las secciones han sido visitadas
    const allVisited = sections.every((section) => visitedSections[section.id]);

    if (allVisited && !hasShownRefreshText) {
      setShowRefreshText(true);
      setHasShownRefreshText(true); // Evitar que se muestre más de una vez
      sessionStorage.setItem("hasShownRefreshText", "true"); // Guardar en sessionStorage

      // Ocultar el texto "Refrescar para personalizar" después de 5 segundos
      const timer = setTimeout(() => {
        setShowRefreshText(false);
      }, 5000);

      return () => clearTimeout(timer); // Limpiar el temporizador
    }
  }, [visitedSections, sections, hasShownRefreshText]);

  useEffect(() => {
    // Configurar un IntersectionObserver para detectar scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;

            setVisitedSections((prevVisitedSections) => {
              const newVisitedSections = {
                ...prevVisitedSections,
                [sectionId]: true,
              };
              sessionStorage.setItem(
                "visitedSections",
                JSON.stringify(newVisitedSections)
              );
              return newVisitedSections;
            });
          }
        });
      },
      { threshold: 0.5 } // Detectar cuando al menos el 50% de la sección es visible
    );

    // Observar cada sección
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      observer.disconnect(); // Limpiar observadores al desmontar
    };
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      // Marcar la sección como visitada
      setVisitedSections((prevVisitedSections) => {
        const newVisitedSections = {
          ...prevVisitedSections,
          [sectionId]: true,
        };
        sessionStorage.setItem(
          "visitedSections",
          JSON.stringify(newVisitedSections)
        ); // Guardar en sessionStorage
        return newVisitedSections;
      });
    }
  };

  return (
    <TransitionComponent
      position="top"
      className="fixed top-0 md:left-0 right-0 z-50 h-20 flex justify-between items-center px-4 mt-4 text-white/70 w-full"
    >
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-300">
        <div
          className="h-full  bg-purple-400"
          style={{
            width: `${progress}%`,
            transition: "width 0.2s ease",
          }}
        ></div>
      </div>
      <div className="flex items-center justify-between gap-10 w-full">
        <Link
          href="/"
          className="font-bold text-xl py-2 px-4 hover:underline underline-offset-8 rounded-3xl hover:text-white"
        >
          Grupo <span className="text-purple-600 "> SCS</span>
        </Link>
        {showRefreshText && (
          <div className="ml-40 flex flex-row gap-x-4 text-white/60">
            <RefreshCcw size={24} />
            <p>Refrescar para personalizar</p>
          </div>
        )}
        <nav
          className={`flex items-center gap-3 px-8 py-3 rounded-full ease-in-out duration-500`}
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex flex-row gap-x-2 hover:underline underline-offset-8 py-2 px-4 rounded-full font-semibold hover:text-white ${
                visitedSections[section.id] ? "text-purple-500" : ""
              }`} // Cambiar el color si ha sido visitada
            >
              {section.icon}
              {section.name}
            </button>
          ))}
        </nav>
      </div>
    </TransitionComponent>
  );
}
