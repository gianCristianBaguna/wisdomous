"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Facebook,
  Code,
  MapPin,
  Clock,
  Server,
  Database,
  Cloud,
  Terminal,
  Layout,
  Paintbrush,
  GitBranch,
  Smartphone,
  Palette,
  Layers,
  Settings,
  Globe,
  BadgeCheck,
  Rocket,
  Briefcase,
  Laptop,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFigma,
  SiFlutter,
  SiTailwindcss,
  SiExpress,
  SiVercel,
  SiKubernetes,
  SiSwift,
  SiKotlin,
} from "react-icons/si";

const developers = [
  {
    id: 1,
    name: "Alvin!",
    intro: "Hi, Im",
    role: "Senior Full-Stack Developer",
    location: "Iloilo City, Philippines",
    experience:
      "Systems Engineering, Relational & Non-Relational Databases, Software & Network Security, DevOps, Software Architecture/Design",
    frameworks: ["Next.js", "Express.js", "NestJS", "React Native"],
    specialties: ["React", "Next", ".NET core", ".NET Framework", "Falcon"],
    bio: "The Backbone of our Development Team, More than 5 years of experience in the industry, Very passionate in coding and mentoring Junior Developers.",
    imageUrl: "/developers/alvin.png",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alvinbesa",
    facebook: "https://facebook.com/alvinbesa",
  },
  {
    id: 2,
    name: "Aaron!",
    intro: "Hi, Im",
    role: "Fullstack Developer",
    location: "Iloilo City, Philippines",
    experience:
      "Web development, Relational & Non-Relational Databases: PostgreSQL, MongoDB",
    frameworks: ["React, Express.js, Next.js"],
    specialties: [
      "React",
      "ExpressJS",
      "NextJS",
      "Mongo DB",
      "PostgreSQL",
      "Vercel",
    ],
    bio: "The Enthusiast, always eager and venture new technologies, a sharp advocate within the Development Team.",
    imageUrl: "/developers/aaron.png",
    github: "https://github.com/sarahrodriguez",
    linkedin: "https://linkedin.com/in/aaronciervo",
    facebook: "https://facebook.com/aaronciervo",
  },
  // {
  //   id: 3,
  //   name: "Aljason!",
  //   intro: "Hi, Im",
  //   role: "Fullstack Developer",
  //   location: "Iloilo City, Philippines",
  //   experience: "5 years",
  //   frameworks: ["Django", "FastAPI", "Flask", "Django REST"],
  //   specialties: ["Python", "Django", "PostgreSQL", "Docker"],
  //   bio: "Backend specialist focused on building robust APIs and database architectures. Passionate about clean code and system optimization.",
  //   imageUrl: "/developers/aljason.png",
  //   github: "https://github.com/marcusjohnson",
  //   linkedin: "https://linkedin.com/in/aljasonjavier",
  //   facebook: "https://facebook.com/aljasonjavier",
  // },
  {
    id: 4,
    name: "Gian!",
    intro: "Hi, Im",
    role: "Frontend Developer",
    location: "Iloilo City, Philippines",
    experience:
      "Has multiple involvements in local projects, and is notorious on his caliber in creating excellent UI/UX design.",
    frameworks: ["React Native", "Flutter", "Ionic", "Xamarin"],
    specialties: ["React Native", "Swift", "Kotlin", "Flutter"],
    bio: "The Artist, a creative designer and has a keen eye in developing apps aesthetically.",
    imageUrl: "/developers/gian.png",
    github: "https://github.com/emilyzhang",
    linkedin: "https://linkedin.com/in/gianbaguna",
    facebook: "https://facebook.com/gianbaguna",
  },
  {
    id: 5,
    name: "Wayne!",
    intro: "Hi, Im",
    role: "Frontend Developer",
    location: "Iloilo City, Philippines",
    experience:
      "MERN, PERN, Prisma, and Firebase stacks; REST/GraphQL APIs, authentication; Relational & Non-Relational Databases: MySQL, PostgreSQL, MongoDB, Firebase",
    frameworks: ["React", "Angular", "Vue.js", "Svelte"],
    specialties: ["React", "Next.js", "Node.js", "Express"],
    bio: "Creative designer and developer who bridges the gap between design and code. Passionate about creating intuitive user experiences and pixel-perfect implementations.",
    imageUrl: "/developers/wayne.png",
    github: "https://github.com/mariasantos",
    linkedin: "https://linkedin.com/in/jonwaynecabusbusan",
    facebook: "https://facebook.com/jonwaynecabusbusan",
  },
  {
    id: 6,
    name: "Raine!",
    intro: "Hi, Im",
    role: "Frontend Developer",
    location: "Iloilo City, Philippines",
    experience: `Champion, during Philippine Blockchain Week 2025,
    Product Owner, Haböl App (DTI),
    President, Philippine Society of Software Engineers (2024–2025),
    Cross-platform development with React Native and Expo
    Realtime data with Firestore,
    UI styling with Tailwind CSS & Nativewind
    Cloud integration using Firebase`,
    frameworks: ["Terraform", "Ansible", "Jenkins", "GitLab CI"],
    specialties: ["Next.js", "React Native", "Node.js"],
    bio: "The Achiever, always hiking and exploring new possibilities and pushing boundaries when it comes to Software Development.",
    imageUrl: "/developers/raine.png",
    github: "https://github.com/carlosrodriguez",
    linkedin: "https://linkedin.com/in/rainechristineperez",
    facebook: "https://facebook.com/rainechristineperez",
  },
  // {
  //   id: 7,
  //   name: "Paul!",
  //   intro: "Hi, Im",
  //   role: "Frontend Developer",
  //   location: "Victorias City, Negros Occidental, Philippines",
  //   experience: "5 years",
  //   frameworks: ["Next.js", "React Native", "Gatsby", "Nuxt.js"],
  //   specialties: ["Next JS", "React Native", "Tailwind", "Figma"],
  //   bio: "Quality assurance expert dedicated to ensuring software reliability and performance. Specializes in automated testing frameworks and continuous integration processes.",
  //   imageUrl: "/developers/paul.png",
  //   github: "https://github.com/lisachen",
  //   linkedin: "https://linkedin.com/in/pauliancapanas",
  //   facebook: "https://facebook.com/pauliancapanas",
  // },
];

export default function DevelopersPage() {
  const [selectedDeveloper, setSelectedDeveloper] = useState<number>(0);
  const dev = developers[selectedDeveloper];

  const techIcons: Record<string, ReactNode> = {
    React: <SiReact className="text-white w-4 h-4" />,
    "Next.js": <SiNextdotjs className="text-white w-4 h-4" />,
    TypeScript: <SiTypescript className="text-white w-4 h-4" />,
    "Node.js": <SiNodedotjs className="text-white w-4 h-4" />,
    MongoDB: <SiMongodb className="text-white w-4 h-4" />,
    PostgreSQL: <SiPostgresql className="text-white w-4 h-4" />,
    Docker: <SiDocker className="text-white w-4 h-4" />,
    Figma: <SiFigma className="text-white w-4 h-4" />,
    Flutter: <SiFlutter className="text-white w-4 h-4" />,
    "Tailwind CSS": <SiTailwindcss className="text-white w-4 h-4" />,
    ExpressJS: <SiExpress className="text-white w-4 h-4" />,
    Vercel: <SiVercel className="text-white w-4 h-4" />,
    Kubernetes: <SiKubernetes className="text-white w-4 h-4" />,
    Swift: <SiSwift className="text-white w-4 h-4" />,
    Kotlin: <SiKotlin className="text-white w-4 h-4" />,
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full blur-3xl"
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

      {/* Hero Section with Background */}
      <div className="relative z-10 pt-20 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8 w-full mt-10 overflow-hidden bg-white">
        {/* 💠 Background Glow & Blob */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-white  opacity-80" />

          {/* Abstract Blob */}
          <svg
            className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] opacity-10 blur-3xl"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#00a7e0"
              d="M49.8,-64.5C63.4,-55.2,72.8,-37.8,75.1,-20.5C77.4,-3.1,72.7,14.2,65.6,30.3C58.5,46.4,49,61.3,35.6,67.9C22.2,74.5,4.9,72.8,-11.6,70C-28.2,67.1,-44,63.2,-55.6,52.6C-67.1,42.1,-74.4,24.9,-73.8,9.4C-73.2,-6.1,-64.7,-20,-54.2,-30.9C-43.7,-41.9,-31.3,-49.9,-18.1,-58.7C-4.9,-67.6,9.1,-77.2,23.5,-77.7C37.8,-78.1,51.5,-69.4,49.8,-64.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* 🧠 Hero Content */}
        <div className="max-w-7xl mx-auto mb-10">
          <div className="text-center space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Icon */}
              <div className="flex justify-center">
                <svg
                  className="w-16 h-16 text-[#00a7e0] mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4h16v16H4V4zm5 8l-2 2m0-4l2 2m8-2l-2-2m0 4l2-2"
                  />
                </svg>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 sm:mb-6">
                Meet our <span className="text-[#00a7e0]">Developers</span>
              </h1>

              <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
                Behind the success of Wisdomous, there's a team of dedicated
                Software Developers who are passionate about building innovative
                solutions.
              </p>
              <div className="relative z-0">
                {/* Background Images */}
                <div className="absolute -bottom-20 left-0 w-[240px] h-[660px] pointer-events-none -rotate-40">
                  <Image
                    src="/img/stack3.png"
                    alt="Stack 3"
                    width={240}
                    height={660}
                    loading="lazy"
                    className="object-contain transition duration-300"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="absolute -bottom-10 right-0 w-[240px] h-[660px] pointer-events-none rotate-20">
                  <Image
                    src="/img/stack2.png"
                    alt="Stack 2"
                    width={240}
                    height={660}
                    loading="lazy"
                    className="object-contain transition duration-300"
                    style={{ color: "transparent" }}
                  />
                </div>

                {/* Foreground Section */}
                <section className="relative z-10 bg-[#0a0f1a] rounded-2xl py-16 px-6">
                  <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 flex justify-center items-center gap-2">
                      <span className="inline-flex items-center text-[#00a7e0]">
                        <Laptop className="w-6 h-6 mr-2" />
                        Technology Stack
                      </span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                      {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Node.js",
                        "MongoDB",
                        "PostgreSQL",
                        "Docker",
                        "AWS",
                        "Figma",
                        "Flutter",
                        "Tailwind CSS",
                        "CI/CD",
                        "ExpressJS",
                        "Vercel",
                        "Kubernetes",
                        "Swift",
                        "Kotlin",
                      ].map((tech, i) => (
                        <span
                          key={i}
                          className="hover:scale-110 transition transform duration-300 bg-gradient-to-br from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md flex items-center gap-2"
                        >
                          {techIcons[tech]}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Developers Carousel Section */}
      <div className="relative z-10 w-full  px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex justify-between items-center max-w-6xl mx-auto mb-6 pt-10">
          <h2 className="text-3xl font-bold text-black">Meet the Team</h2>
          <div className="flex gap-4">
            <button
              onClick={() =>
                setSelectedDeveloper((prev) =>
                  prev === 0 ? developers.length - 1 : prev! - 1
                )
              }
              className="text-black px-3 py-2 border border-white rounded hover:bg-[#00a7e0] hover:text-[#0a0f1a] transition"
            >
              Prev
            </button>
            <button
              onClick={() =>
                setSelectedDeveloper((prev) =>
                  prev === developers.length - 1 ? 0 : prev! + 1
                )
              }
              className="text-black px-3 py-2 border border-white rounded hover:bg-[#00a7e0] hover:text-[#0a0f1a] transition"
            >
              Next
            </button>
          </div>
        </div>

        <div className="overflow-hidden max-w-7xl mx-auto">
          <motion.div
            key={developers[selectedDeveloper ?? 0].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <section className="relative isolate grid grid-cols-1 lg:grid-cols-12 gap-10 items-start bg-[#0a0f1a] min-h-[80vh] w-full overflow-hidden rounded-2xl border border-white/10 px-8 py-12 shadow-lg">
              {/* Left Side */}
              <div className="lg:col-span-4 space-y-5 text-center lg:text-left">
                <div className="space-y-2">
                  <h1 className="text-8xl font-extrabold text-white leading-tight">
                    Hi, I'm <span className="text-[#00a7e0]">{dev.name}</span>
                  </h1>
                  <p className="text-xl font-medium text-[#00e0d4] flex items-center justify-center lg:justify-start gap-2">
                    <Briefcase className="w-5 h-5 text-[#00e0d4]" />
                    {dev.role}
                  </p>
                </div>
                <p className="text-gray-300 text-2xl leading-relaxed border-l-4 border-[#00a7e0] pl-4 italic">
                  “{dev.bio}”
                </p>
              </div>

              {/* Image Center */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center">
                <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[400px] rounded-2xl overflow-hidden border-4 border-[#00a7e0]/20 shadow-2xl hover:scale-105 transition duration-300">
                  {/* 👇 Background Text Layer */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white/5 leading-tight text-center z-0 select-none pointer-events-none">
                      <span className="text-[#00a7e0]/10">{dev.role}</span>
                    </h1>
                  </div>

                  {/* 👇 Foreground Image */}
                  <Image
                    src={dev.imageUrl}
                    alt={dev.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full relative z-10"
                  />
                </div>

                <div className="mt-6 bg-[#101729] rounded-xl border border-white/10 px-6 py-6 shadow-md w-full max-w-xl text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Code className="w-5 h-5 text-[#00a7e0]" />
                    <h3 className="text-lg font-semibold text-white tracking-wide">
                      Tech Stack
                    </h3>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3">
                    {dev.specialties.map((skill, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 bg-gradient-to-br from-[#00a7e0] to-[#0070f3] text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:scale-105 transition"
                      >
                        {techIcons[skill] ?? <Code className="w-4 h-4 mr-1" />}
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white tracking-wide flex items-center gap-2">
                    <span className="text-[#00a7e0]">
                      <MapPin className="w-6 h-6" />
                    </span>
                    Quick Details
                  </h3>

                  <ul className="text-[#00a7e0] text-base space-y-3">
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div className="flex flex-wrap items-baseline gap-1">
                        <span className="font-medium text-white text-base">
                          Experience:
                        </span>
                        <span className="text-[#00a7e0]">{dev.experience}</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start gap-4 mt-60 ml-10">
                  <Link href={dev.github} target="_blank">
                    <Github className="text-white hover:text-[#00a7e0] w-20 h-20 transition" />
                  </Link>
                  <Link href={dev.linkedin} target="_blank">
                    <Linkedin className="text-white hover:text-[#0077b5] w-20 h-20 transition" />
                  </Link>
                  <Link href={dev.facebook} target="_blank">
                    <Facebook className="text-white hover:text-[#4267B2] w-20 h-20 transition" />
                  </Link>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
