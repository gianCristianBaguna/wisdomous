"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "@/app/img/hero.png";
import logoImg from "@/app/img/logo-body1.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "CUSTOM SOLUTIONS",
    description: (
      <>
        We craft tailored software solutions designed to fit your unique
        business needs. From lightweight{" "}
        <span className="text-[#00a7e0] font-semibold">web apps</span> to
        <span className="text-[#00a7e0] font-semibold"> internal tools</span> ,
        we focus on clean code, scalability, and a seamless user experience. Our
        agile approach ensures your vision is built efficiently with flexibility
        and precision.
      </>
    ),
  },
  {
    title: "MOBILE AND WEB DEVELOPMENT",
    description: (
      <>
        We design and build responsive web platforms and mobile applications
        that deliver seamless performance across all devices. From intuitive UIs
        to powerful backends, our solutions are crafted for speed, scalability,
        and user experience—whether it’s a website, a mobile app, or both.
      </>
    ),
  },
];

export const HeroPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollLeft = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative overflow-hidden mt-30 h-[700px] flex items-center justify-center px-6 sm:px-20 bg-[#0f172a]">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#00a7e0] opacity-20 blur-[120px] rounded-full z-0"></div>

      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#6c63ff] opacity-20 blur-[120px] rounded-full z-0"></div>

      <div className="absolute w-[600px] h-[600px] bg-[#00a7e0]/20 rounded-full blur-3xl top-[-200px] left-[-150px] z-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#9333ea]/20 rounded-full blur-2xl bottom-[-150px] right-[-100px] z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0f172a]/50 to-[#1e293b] z-0"></div>

      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full z-20 transition"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full z-20 transition"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-7xl z-10"
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="relative mb-4">
            <Image src={logoImg} alt="Logo" width={100} height={80} />
          </div>
          <h1 className="font-montserrat text-[#00a7e0] text-5xl font-black tracking-widest drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>
          <h5 className="font-montserrat text-white leading-relaxed text-lg drop-shadow-sm text-center">
            {slides[currentSlide].description}
          </h5>
          <button className="mt-4 px-6 py-2 bg-[#00a7e0] text-white font-semibold rounded-xl shadow-lg hover:bg-[#008fbf] transition duration-300">
            Read Me
          </button>
        </div>

        
      </motion.div>
    </div>
  );
};
