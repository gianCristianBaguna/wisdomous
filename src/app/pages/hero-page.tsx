"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Sparkles, Code, Layers } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    title: "CUSTOM SOLUTIONS",
    description: (
      <>
        We craft tailored software solutions designed to fit your unique business needs. From lightweight{" "}
        <span className="text-[#00a7e0] font-semibold">web apps</span> to
        <span className="text-[#00a7e0] font-semibold"> internal tools</span>, we focus on clean code, scalability, and
        a seamless user experience. Our agile approach ensures your vision is built efficiently with flexibility and
        precision.
      </>
    ),
    icon: <Code className="w-8 h-8 text-[#00a7e0]" />,
  },
  {
    title: "MOBILE AND WEB DEVELOPMENT",
    description: (
      <>
        We design and build responsive web platforms and mobile applications that deliver seamless performance across
        all devices. From intuitive UIs to powerful backends, our solutions are crafted for speed, scalability, and user
        experience—whether it's a website, a mobile app, or both.
      </>
    ),
    icon: <Layers className="w-8 h-8 text-[#00a7e0]" />,
  },
]

export const HeroPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([])

  // Generate fewer particles for better performance
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  // Throttled mouse movement for better performance
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null
    interface MousePosition {
      x: number;
      y: number;
    }

    const handleMouseMove = (e: MouseEvent): void => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth) * 2 - 1,
        y: (clientY / innerHeight) * 2 - 1,
      });
      timeoutId = null;
      }, 50); // Throttle to 50ms
    };

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  const scrollLeft = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const scrollRight = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  // Auto-scroll slides (longer interval for better performance)
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight()
    }, 10000)
    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <div
      ref={heroRef}
      className="relative overflow-hidden h-screen flex items-center justify-center px-6 sm:px-20 bg-[#0a0f1a]"
      style={{
        backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Reduced number of animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#00a7e0]"
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transform: `translate(${particle.x}%, ${particle.y}%)`,
            willChange: "opacity",
          }}
        />
      ))}

      {/* Simplified gradient orbs - reduced blur and animation complexity */}
      <div
        className="absolute w-[600px] h-[600px] bg-[#00a7e0]/20 rounded-full blur-2xl z-0"
        style={{
          top: "-200px",
          left: "-150px",
          transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
          transition: "transform 0.5s ease-out",
          willChange: "transform",
        }}
      />

      <div
        className="absolute w-[500px] h-[500px] bg-[#9333ea]/20 rounded-full blur-2xl z-0"
        style={{
          bottom: "-150px",
          right: "-100px",
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
          transition: "transform 0.5s ease-out",
          willChange: "transform",
        }}
      />

      {/* Simplified background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a]/90 via-[#0f172a]/80 to-[#1e293b]/90 z-0"></div>

      {/* Navigation buttons with simplified hover effects */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/20 p-3 rounded-full z-20 transition-all border border-white/10"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/20 p-3 rounded-full z-20 transition-all border border-white/10"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      {/* Simplified slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-[#00a7e0]" : "bg-white/30"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Main content with optimized transitions */}
      <div className="flex flex-col items-center justify-center w-full max-w-7xl z-10 px-4">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-8 text-center max-w-3xl"
          >
            {/* Logo with simplified glow effect */}
            <div className="relative mb-2">
              <div className="absolute inset-0 bg-[#00a7e0]/20 rounded-full transform scale-150 blur-xl"></div>
              <div className="relative z-10 w-[140px] h-[120px] flex items-center justify-center">
                <motion.div
                  className="text-[#00a7e0] text-5xl font-bold"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    repeatType: "mirror",
                  }}
                >
                  W
                </motion.div>
              </div>
            </div>

            {/* Icon with simplified animation */}
            <div className="p-4 rounded-full bg-white/5 border border-white/10">{slides[currentSlide].icon}</div>

            {/* Title with simplified animation */}
            <h1 className="font-montserrat text-[#00a7e0] text-5xl md:text-6xl font-black tracking-widest drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>

            {/* Description with simplified glass panel */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg">
              <h5 className="font-montserrat text-white leading-relaxed text-lg text-center">
                {slides[currentSlide].description}
              </h5>
            </div>

            {/* Button with simplified hover effects */}
            <Link
            href="/contact">
            <button className="mt-4 px-8 py-3 bg-[#00a7e0] text-white font-semibold rounded-xl shadow-lg hover:bg-[#0077cc] transition-colors duration-300 flex items-center justify-center gap-2">
              <span>Contact Us</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
