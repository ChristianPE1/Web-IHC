"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-start justify-center pt-20 text-black overflow-hidden">
      <motion.h1
        className="text-8xl font-bold z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <span className="text-white">Relaxing</span>{" "}
        <span className="text-green-500">Space</span>
      </motion.h1>

      <motion.div
        className="absolute bottom-0 w-full h-full"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 5 }}
        style={{
          backgroundImage: "url(images/fondo.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      />
    </section>
  );
};

export default HeroSection;
