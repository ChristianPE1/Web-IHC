"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import Image from 'next/image';


const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center pt-20 text-black overflow-hidden">
      <motion.h1
        className="flex flex-col justify-center items-center z-20 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <div>
          <Image
            src="/images/IconVR.png"
            alt="PaintVR"
            width={250}
            height={250}
            className="drop-shadow-4xl"
          />
        </div>
        <div className="text-7xl 2xl:text-8xl font-bold [text-shadow:_0_8px_8px_rgb(0_0_0_/_0.8)]">
          <span className="text-white">Pain</span>{" "}
          <span className="text-blue-500">VR</span>
        </div>
      </motion.h1>

      <motion.div
        className="absolute bottom-0 w-full h-full"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 5 }}
        style={{
          backgroundImage: "url(images/paintvr-fondo.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      />
    </section>
  );
};

export default HeroSection;
