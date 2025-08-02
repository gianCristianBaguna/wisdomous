"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

const developers = [
  {
    id: 1,
    name: "Alvin Glenn Besa",
    role: "Senior Full-Stack Developer",
    location: "Iloilo City, Philippines",
    experience: "8+ years",
    specialties: ["React", "Node.js", "TypeScript", "AWS"],
    bio: "Passionate about building scalable web applications and mentoring junior developers. Led the development of our core platform architecture.",
    imageUrl: "/developers/alvin.png",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alvinbesa",
    facebook: "https://facebook.com/alvinbesa",
  },
  {
    id: 2,
    name: "Aaron Ciervo",
    role: "Fullstack Developer",
    location: "Iloilo City, Philippines",
    experience: "5 years",
    specialties: ["React", "Vue.js", "UI/UX", "Performance"],
    bio: "Specializes in creating beautiful, performant user interfaces. Expert in modern frontend frameworks and design systems.",
    imageUrl: "/developers/aaron.png",
    github: "https://github.com/sarahrodriguez",
    linkedin: "https://linkedin.com/in/aaronciervo",
    facebook: "https://facebook.com/aaronciervo",
  },
  {
    id: 3,
    name: " Aljason Javier",
    role: "Fullstack Developer",
    location: "Iloilo City, Philippines",
    experience: "5 years",
    specialties: ["Python", "Django", "PostgreSQL", "Docker"],
    bio: "Backend specialist focused on building robust APIs and database architectures. Passionate about clean code and system optimization.",
    imageUrl: "/developers/aljason.png",
    github: "https://github.com/marcusjohnson",
    linkedin: "https://linkedin.com/in/aljasonjavier",
    facebook: "https://facebook.com/aljasonjavier",
  },
  {
    id: 4,
    name: "Gian Cristian Baguna",
    role: "Frontend Developer",
    location: "Iloilo City, Philippines",
    experience: "5 years",
    specialties: ["React Native", "Swift", "Kotlin", "Flutter"],
    bio: "Cross-platform mobile development expert. Creates seamless mobile experiences that users love across iOS and Android platforms.",
    imageUrl: "/developers/gian.png",
    github: "https://github.com/emilyzhang",
    linkedin: "https://linkedin.com/in/gianbaguna",
    facebook: "https://facebook.com/gianbaguna",
  },
  {
    id: 5,
    name: "Jon Wayne Cabusbusan",
    role: "Frontend Developer",
    location: "Iloilo City, Philippines",
    experience: "5 years",
    specialties: ["Figma", "React", "CSS/SCSS", "Design Systems"],
    bio: "Creative designer and developer who bridges the gap between design and code. Passionate about creating intuitive user experiences and pixel-perfect implementations.",
    imageUrl: "/developers/wayne.png",
    github: "https://github.com/mariasantos",
    linkedin: "https://linkedin.com/in/jonwaynecabusbusan",
    facebook: "https://facebook.com/jonwaynecabusbusan",
  },
  {
    id: 6,
    name: "Raine Christine Perez",
    role: "Frontend Developer",
    location: "Iloilo City, Philippines",
    experience: "5 years",
    specialties: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    bio: "Infrastructure specialist focused on automation, scalability, and reliability. Expert in containerization and cloud technologies for modern application deployment.",
    imageUrl: "/developers/raine.png",
    github: "https://github.com/carlosrodriguez",
    linkedin: "https://linkedin.com/in/rainechristineperez",
    facebook: "https://facebook.com/rainechristineperez",
  },
  {
    id: 7,
    name: "Paul Ian Capanas",
    role: "Frontend Developer",
    location: "Victorias City, Negros Occidental, Philippines",
    experience: "5 years",
    specialties: ["Next JS", "React Native", "Tailwind", "Figma"],
    bio: "Quality assurance expert dedicated to ensuring software reliability and performance. Specializes in automated testing frameworks and continuous integration processes.",
    imageUrl: "/developers/paul.png",
    github: "https://github.com/lisachen",
    linkedin: "https://linkedin.com/in/pauliancapanas",
    facebook: "https://facebook.com/pauliancapanas",
  },
];

const quickStartSteps = [
  {
    id: "faprna",
    title: "Faprna",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "cpu",
    title: "CPU",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "mtsi",
    title: "MTSI",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "apollo",
    title: "Apollo",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function DevelopersPage() {
  const [selectedDeveloper, setSelectedDeveloper] = useState<number | null>(
    null
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality for mobile carousel
  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startCarousel = () => {
      interval = setInterval(() => {
        setCurrentSlide(
          (prev) => (prev + 1) % Math.ceil(quickStartSteps.length / 2)
        );
      }, 5000); // Auto-advance every 5 seconds
    };

    const handleResize = () => {
      clearInterval(interval);
      const isMobile = window.innerWidth < 640;
      if (isMobile && quickStartSteps.length > 0) {
        startCarousel();
      }
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [quickStartSteps.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-x-hidden">
      <Navbar />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                Meet our Developers
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
                Behind the success of Wisdomous, there's a team of dedicated
                Software Developers who are passionate about building innovative
                solutions. Our developers are experts in their respective roles,
                constantly pushing boundaries and creating impactful solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Developers Section */}
      <div className="relative z-10 w-full">
        {developers.map((developer, index) => (
          <section
            key={developer.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start py-12 px-4 sm:px-6 lg:px-8 bg-white w-full max-w-7xl mx-auto"
          >
            {/* Left Side - Name, Role, and Bio */}
            <div className="lg:col-span-4 space-y-4 md:space-y-6 text-center lg:text-left order-1">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                  {developer.name}
                </h1>
                <p className="text-lg md:text-xl font-semibold text-gray-700">
                  {developer.role}
                </p>
              </div>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                {developer.bio}
              </p>
            </div>

            {/* Center - Image */}
            <div className="lg:col-span-4 relative flex justify-center items-center p-4 md:p-0 order-2">
              <div className="relative z-10 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
                <Image
                  src={developer.imageUrl || "/placeholder.svg"}
                  alt={developer.name}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full rounded-lg"
                  priority={index < 2}
                />
              </div>
            </div>

            {/* Right Side - Details and Social Links */}
            <div className="lg:col-span-4 space-y-4 md:space-y-6 text-center lg:text-left order-3 pt-32 mt-32">
              <div className="space-y-3 pt-2">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    Details
                  </h3>
                  <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700 text-sm md:text-base">
                    <li>
                      <span className="font-medium">Address:</span>{" "}
                      {developer.location}
                    </li>
                    <li>
                      <span className="font-medium">Years of Experience:</span>{" "}
                      {developer.experience}
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    Specialties
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2 justify-center lg:justify-start">
                    {developer.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href={developer.github}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href={developer.linkedin}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link
                  href={developer.facebook}
                  className="text-gray-600 hover:text-blue-800 transition-colors"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Clients Section */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/50 w-full">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Clients and Partnerships
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Our development process ensures quality, efficiency, and
              innovation in every project we undertake.
            </p>
          </motion.div>

          {/* Desktop Grid - Hidden on mobile */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickStartSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-4 hover:shadow-xl transition-shadow h-full">
                  <div className="w-full h-32 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel - Visible only on mobile */}
          <div className="sm:hidden mb-8">
            <div className="relative">
              {/* Carousel Container */}
              <div ref={carouselRef} className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({
                    length: Math.ceil(quickStartSteps.length / 2),
                  }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                      <div className="grid grid-cols-2 gap-4">
                        {quickStartSteps
                          .slice(slideIndex * 2, slideIndex * 2 + 2)
                          .map((step) => (
                            <motion.div
                              key={step.id}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              viewport={{ once: true }}
                              className="text-center"
                            >
                              <div className="bg-white rounded-xl shadow-lg p-3 mb-3 hover:shadow-xl transition-shadow h-full">
                                <div className="w-full h-24 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 overflow-hidden">
                                  <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full h-full object-cover rounded-xl"
                                  />
                                </div>
                                <h3 className="text-sm font-bold text-gray-900 mb-2">
                                  {step.title}
                                </h3>
                              </div>
                            </motion.div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({
                length: Math.ceil(quickStartSteps.length / 2),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-blue-600 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 bg-gradient-to-r from-indigo-600 to-blue-600 py-12 sm:py-16 w-full">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Interested in Our Services?
            </h2>
            <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto">
              Let's discuss how our development team can help bring your ideas
              to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
