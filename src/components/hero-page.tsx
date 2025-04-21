"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Sparkles, Code, Layers } from "lucide-react"
import Link from "next/link"
import { useSwipeable } from "react-swipeable"

const slides = [
  {
    title: "CUSTOM SOLUTIONS",
    description:
      "We craft tailored software solutions designed to fit your unique business needs. From lightweight web apps to internal tools, we focus on clean code, scalability, and a seamless user experience.",
    icon: <Code className="w-8 h-8 text-[#00a7e0]" />,
  },
  {
    title: "MOBILE AND WEB",
    description:
      "We design and build responsive web platforms and mobile applications that deliver seamless performance across all devices. From intuitive UIs to powerful backends, our solutions are crafted for speed and user experience.",
    icon: <Layers className="w-8 h-8 text-[#00a7e0]" />,
  },
]

export const HeroPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const heroRef = useRef(null)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Throttled mouse movement for better performance
  useEffect(() => {
    if (isMobile) return // Skip on mobile for better performance

    let timeoutId: NodeJS.Timeout | null = null
    interface MousePosition {
      x: number
      y: number
    }

    const handleMouseMove = (e: MouseEvent): void => {
      if (timeoutId) return

      timeoutId = setTimeout(() => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      setMousePosition({
        x: (clientX / innerWidth) * 2 - 1,
        y: (clientY / innerHeight) * 2 - 1,
      })
      timeoutId = null
      }, 50)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [isMobile])

  const scrollLeft = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const scrollRight = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  // Auto-scroll slides
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight()
    }, 10000)
    return () => clearInterval(interval)
  }, [currentSlide])

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => scrollRight(),
    onSwipedRight: () => scrollLeft(),
    preventScrollOnSwipe: true,
    trackMouse: false,
    trackTouch: true,
  })

  return (
    <div
      {...swipeHandlers}
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-[#0a0f1a] pt-16 pb-8 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0f172a] to-[#1e293b] z-0"></div>

      {/* Gradient orbs - simplified for mobile */}
      {!isMobile && (
        <>
          <div
            className="absolute w-[400px] h-[400px] bg-[#00a7e0]/20 rounded-full blur-2xl z-0"
            style={{
              top: "-100px",
              left: "-100px",
              transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] bg-[#9333ea]/20 rounded-full blur-2xl z-0"
            style={{
              bottom: "-100px",
              right: "-100px",
              transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />
        </>
      )}

      {/* Navigation buttons - desktop only */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/20 p-3 rounded-full z-20 transition-all border border-white/10 hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/20 p-3 rounded-full z-20 transition-all border border-white/10 hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center w-full max-w-4xl z-10 mt-4 md:mt-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col items-center gap-6 text-center px-4"
          >
            {/* Logo */}
            <div className="relative mb-2">
              <div className="absolute inset-0 bg-[#00a7e0]/20 rounded-full transform scale-150 blur-xl"></div>
              <div className="relative z-10 w-[100px] h-[100px] flex items-center justify-center">
                <motion.div
                  className="text-[#00a7e0] text-4xl font-bold"
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

            {/* Icon */}
            <div className="p-4 rounded-full bg-white/5 border border-white/10">{slides[currentSlide].icon}</div>

            {/* Title */}
            <h1 className="font-montserrat text-[#00a7e0] text-3xl sm:text-4xl md:text-5xl font-black tracking-wider drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>

            {/* Description */}
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 shadow-lg max-w-lg">
              <p className="text-white leading-relaxed text-base md:text-lg">{slides[currentSlide].description}</p>
            </div>

            {/* Button */}
            <Link href="/contact" className="mt-4">
              <button className="px-6 py-3 bg-[#00a7e0] text-white font-semibold rounded-xl shadow-lg hover:bg-[#0077cc] transition-colors duration-300 flex items-center justify-center gap-2">
                <span>Contact Us</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-8 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-[#00a7e0]" : "bg-white/30"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
