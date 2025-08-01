"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  MapPin,
  Calendar,
  Award,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

const developers = [
  {
    id: 1,
    name: "Besa Alvin Glenn",
    role: "Senior Full-Stack Developer",
    location: "Iloilo City, Philippines",
    experience: "8+ years",
    specialties: ["React", "Node.js", "TypeScript", "AWS"],
    bio: "Passionate about building scalable web applications and mentoring junior developers. Led the development of our core platform architecture.",
    image: "/placeholder.svg?height=300&width=300",
    github: "https://github.com/alexchen",
    achievements: ["AWS Certified", "React Expert", "Team Lead"],
  },
  {
    id: 2,
    name: "Aaron Ciervo",
    role: "Fullstack Developer",
    location: "Iloilo City, Philippines",
    experience: "5 years",
    specialties: ["React", "Vue.js", "UI/UX", "Performance"],
    bio: "Specializes in creating beautiful, performant user interfaces. Expert in modern frontend frameworks and design systems.",
    image: "/placeholder.svg?height=300&width=300",
    github: "https://github.com/sarahrodriguez",
    achievements: [
      "Design Systems Expert",
      "Performance Guru",
      "Open Source Contributor",
    ],
  },
  {
    id: 3,
    name: " Gian Cristian Baguna",
    role: "Frontend Developer",
    location: "Iloilo City, Philippines",
    experience: "5 years",
    specialties: ["Python", "Django", "PostgreSQL", "Docker"],
    bio: "Backend specialist focused on building robust APIs and database architectures. Passionate about clean code and system optimization.",
    image: "/placeholder.svg?height=300&width=300",
    github: "https://github.com/marcusjohnson",
    achievements: ["Database Expert", "API Architect", "DevOps Specialist"],
  },
  {
    id: 4,
    name: "Jon Wayne Cabusbusan",
    role: "Frontend Developer",
    location: "Iloilo City, Philippines",
    experience: "5 years",
    specialties: ["React Native", "Swift", "Kotlin", "Flutter"],
    bio: "Cross-platform mobile development expert. Creates seamless mobile experiences that users love across iOS and Android platforms.",
    image: "/placeholder.svg?height=300&width=300",
    github: "https://github.com/emilyzhang",
    achievements: [
      "Mobile Expert",
      "Cross-Platform Specialist",
      "App Store Featured",
    ],
  },
];

const quickStartSteps = [
  {
    title: "Faprna",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "CPU",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "MTSI",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Apollo",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function DevelopersPage() {
  const [selectedDeveloper, setSelectedDeveloper] = useState<number | null>(
    null
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
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
      <div className="relative z-10 pt-20 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
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
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Team Grid - 2x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {developers.map((developer, index) => (
              <motion.div
                key={developer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={developer.image || "/placeholder.svg"}
                      alt={developer.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover border-3 border-indigo-100"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      {developer.name}
                    </h3>
                    <p className="text-base sm:text-lg text-indigo-600 font-semibold mb-2">
                      {developer.role}
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-xs sm:text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span className="hidden sm:inline">
                          {developer.location}
                        </span>
                        <span className="sm:hidden">
                          {developer.location.split(",")[0]}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {developer.experience}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    {developer.bio}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {developer.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {developer.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-xs text-gray-600"
                      >
                        <Award className="w-3 h-3 text-yellow-500" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center sm:justify-start">
                    <Link
                      href={developer.github}
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Profile
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notable Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Our development process ensures quality, efficiency, and
              innovation in every project we undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {quickStartSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-4 hover:shadow-xl transition-shadow">
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
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 bg-gradient-to-r from-indigo-600 to-blue-600 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Interested in Our Services?
            </h2>
            <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto">
              Let's discuss how our development team can help bring your ideas
              to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300">
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
