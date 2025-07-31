"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Database,
  Code,
  Layers,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

const cardImg = ["/img/system.png", "/img/custom.png", "/img/mobweb.png"];
const imagePaths = ["/img/stack1.png", "/img/stack2.png", "/img/stack3.png"];
const slideVariants = [
  { initialY: -200 }, // top
  { initialY: 0 }, // middle
  { initialY: 200 }, // bottom
];

const slides = [
  {
    title:
      "Build Your Vision with Us  Custom Systems Designed for Your Success",
    subtitle:
      "Let’s build something amazing together. Partner with us today your system, your way.",
    description:
      "WisdomousTech builds smart, custom systems that solve problems and fuel growth  for startups and established businesses alike.",
    icon: <Database className="w-12 h-12 text-[#00a7e0]" />,
    ctaText: "Systems",
    ctaSubtext: "Generate and manage test data for development and testing.",
  },
  {
    title: "CUSTOM SOLUTIONS",
    subtitle: "Tailored software solutions for your business",
    description:
      "We craft tailored software solutions designed to fit your unique business needs. From lightweight web apps to internal tools, we focus on clean code, scalability, and a seamless user experience.",
    icon: <Code className="w-12 h-12 text-[#00a7e0]" />,
    ctaText: "CUSTOM DEVELOPMENT",
    ctaSubtext: "Build solutions that scale with your business.",
  },
  {
    title: "MOBILE AND WEB",
    subtitle: "Responsive platforms across all devices",
    description:
      "We design and build responsive web platforms and mobile applications that deliver seamless performance across all devices. From intuitive UIs to powerful backends, our solutions are crafted for speed and user experience.",
    icon: <Layers className="w-12 h-12 text-[#00a7e0]" />,
    ctaText: "WEB & MOBILE",
    ctaSubtext: "Cross-platform solutions for modern businesses.",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const scrollLeft = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      scrollRight();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => scrollRight(),
    onSwipedRight: () => scrollLeft(),
    preventScrollOnSwipe: true,
    trackMouse: false,
    trackTouch: true,
  });

  return (
    <div
      {...swipeHandlers}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >

      <div className="relative z-0"><div
        className="fixed top-80 left-50 w-full h-full -z-10 bg-no-repeat bg-cover bg-center -rotate-40"
        style={{ backgroundImage: "url('/img/bgwaves.png')" }}
      /></div>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-[#00a7e0]/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-gray-300/20 rounded-full blur-xl"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Navigation Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg hover:shadow-xl p-3 rounded-full z-20 transition-all duration-300 border border-gray-200 hidden md:block group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-gray-700 group-hover:text-gray-900 w-6 h-6 transition-colors" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg hover:shadow-xl p-3 rounded-full z-20 transition-all duration-300 border border-gray-200 hidden md:block group"
        aria-label="Next slide"
      >
        <ChevronRight className="text-gray-700 group-hover:text-gray-900 w-6 h-6 transition-colors" />
      </button>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl z-10 gap-12">
        <div className="absolute top-30 left-90 w-full h-full -z-10 flex items-center justify-center gap-10">
          {imagePaths.map((src, i) => {
            const height = i === 2 ? 660 : i === 1 ? 300 : 240;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: slideVariants[i].initialY }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <Image
                  src={src}
                  alt={`Stack ${i}`}
                  width={240}
                  height={height}
                  className="object-contain opacity-80 hover:opacity-100 transition duration-300"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Icon */}
              <motion.div
                className="inline-flex p-4 bg-white rounded-2xl shadow-lg border border-gray-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {slides[currentSlide].icon}
              </motion.div>

              {/* Title */}
              <div className="space-y-4">
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.h2
                  className="text-xl sm:text-2xl text-gray-600 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>
              </div>

              {/* Description */}
              <motion.p
                className="text-lg text-gray-600 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Link href="/contact">
                  <button className="inline-flex items-center gap-3 bg-[#00a7e0] hover:bg-[#1029A2] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <span>{slides[currentSlide].ctaText}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Content - Visual Element */}
        <div className="flex-1 max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 relative overflow-hidden top-20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00a7e0]/10 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4 relative">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {slides[currentSlide].ctaText}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {slides[currentSlide].ctaSubtext}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#00a7e0] font-medium">
                      <span>
                        <a href="">Contact Us</a>
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>

                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#00a7e0] rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "75%" }}
                        transition={{
                          delay: 0.8,
                          duration: 1.5,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Database Icons */}
              <motion.div
                className="absolute top-10 -right-10 z-10"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={cardImg[currentSlide]}
                  alt={slides[currentSlide].ctaText}
                  width={120}
                  height={120}
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-[#00a7e0] scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
