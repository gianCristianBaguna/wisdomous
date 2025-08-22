"use client";

import React from "react";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Target,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  TrendingUp,
  MapPin,
  Calendar,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Building,
  Rocket,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";

const stats = [
  {
    label: "Year in Business",
    value: "1",
    icon: <Calendar className="w-6 h-6 text-blue-600" />,
  },
  {
    label: "Happy Clients",
    value: "5",
    icon: <Users className="w-6 h-6 text-green-600" />,
  },
  {
    label: "Projects Completed",
    value: "5",
    icon: <Rocket className="w-6 h-6 text-purple-600" />,
  },
  {
    label: "Countries Served",
    value: "2",
    icon: <Globe className="w-6 h-6 text-orange-600" />,
  },
];

const values = [
  {
    title: "Innovation First",
    description:
      "We embrace cutting-edge technologies and innovative solutions to solve complex problems.",
    icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
  },
  {
    title: "Client Success",
    description:
      "Our clients' success is our success. We're committed to delivering exceptional results.",
    icon: <Target className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Quality & Security",
    description:
      "We maintain the highest standards of quality and security in everything we build.",
    icon: <Shield className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Team Collaboration",
    description:
      "We believe in the power of teamwork and collaborative problem-solving.",
    icon: <Heart className="w-8 h-8 text-red-600" />,
  },
];

const offices = [
  {
    city: "Iloilo City",
    address: "Central Philippine University, Lopez Jaena St., Jaro",
    country: "Philippines",
    employees: "5+",
    mapUrl:
      "https://maps.google.com/maps?q=10.731843, 122.548914&hl=en&z=16&output=embed",
  },
];

const team = [
  {
    name: "Aljason",
    role: "CEO",
    bio: "The Tactician, strategizes the company's road to success.",
    image: "/employees/Aljason.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/aljason-javier-79b2961a1/",
      github: "https://linkedin.com/in/aljasonjavier",
    },
  },
  {
    name: "Paul",
    role: "CTO",
    bio: "The Visionary, focuses on the innovative solutions and long term goals of the company.",
    image: "/employees/Paul-4.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/paul-ian-capanas-b610b4180/",
      github: "https://github.com/PaulIanCapanas",
    },
  },
  {
    name: "Riane",
    role: "COO",
    bio: "The Organizer, ensures the productivity and efficiency of the company'soperations.",
    image: "/employees/rainne.png",
    social: {
      linkedin: "https://www.linkedin.com/in/raine-christine-perez-1a856b368/",
      github: "https://github.com/raynieee",
    },
  },
  {
    name: "Cheska",
    role: "Executive Secretary",
    bio: "The Rapporteur, facilitates the flow of information and communication within the company.",
    image: "/employees/Cheska.JPG",
    social: {
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Faith",
    role: "Marketing Executive Director",
    bio: "The Sales Expert, strategizes the company's marketing initiatives.",
    image: "/employees/Faith.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/faith-ni%C3%B1a-marie-magsael/#",
      github: "",
    },
  },
  {
    name: "Alvin",
    role: "Senior Developer",
    bio: "The Backbone of our Development Team, More than 5 years of experience in the industry, Very passionate in coding and mentoring Junior Developers.",
    image: "/employees/Alvin.png",
    social: {
      linkedin: "https://www.linkedin.com/in/alvin-glenn-c-besa-01b402241/",
      github: "",
    },
  },
  {
    name: "Danica",
    role: "HR Manager",
    bio: "The Catalyst, Ensures the overall company's workforce aligns with the company's goals.",
    image: "/employees/danica.png",
    social: {
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Cloyd",
    role: "Graphic Designer",
    bio: "The Artist, works with the company's creative design with his artful creativity.",
    image: "/employees/Cloyd-3.jpg",
    social: {
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Allan",
    role: "Product Owner",
    bio: "The Manager, acts as the voice of the customers and ensures their needs are met and prioritized in the development process.",
    image: "/employees/Allan.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/allan-loyd-pacete-2606aa226/",
      github: "",
    },
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

export default function CompanyPage() {
  const [activeOffice, setActiveOffice] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const currentMember = team[currentIndex];

  // Enhanced avatar positioning with better distribution
  const getAvatarPosition = (index: number, total: number) => {
    const angle = (index * 360) / total - 90;
    const radius = window.innerWidth < 768 ? 200 : 300;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y };
  };

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % team.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, team.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />

      {/* Background Elements */}
      <div className="relative z-0">
        <div
          className="fixed top-80 left-50 w-full h-full -z-10 bg-no-repeat bg-cover bg-center -rotate-40"
          style={{ backgroundImage: "url('/img/bgwaves.png')" }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
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
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-6">
                <Building className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  About Our Company
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Building the Future of
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Technology
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                We're a passionate team of innovators, designers, and engineers
                dedicated to creating software solutions that transform
                businesses and improve lives around the world.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To empower businesses worldwide with innovative software
                  solutions that drive growth, efficiency, and digital
                  transformation. We believe technology should be accessible,
                  reliable, and transformative.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our commitment extends beyond just building software – we're
                  partners in our clients' success, providing ongoing support
                  and evolving solutions that adapt to changing business needs.
                </p>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the global leader in innovative software solutions,
                  recognized for our technical excellence, client-centric
                  approach, and positive impact on businesses and communities
                  worldwide.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Proven Growth</h4>
                      <p className="text-blue-100">
                        Consistent year-over-year expansion
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Client Satisfaction</h4>
                      <p className="text-blue-100">98% client retention rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company
              culture.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Team Carousel Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">
                Our Team
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The visionary leaders driving our company's mission and growth.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Featured Card (Left Side) */}
            <div className="flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95, x: -30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-md border border-gray-100"
                >
                  <div className="relative h-130 overflow-hidden">
                    <Image
                      src={currentMember.image || "/placeholder.svg"}
                      alt={currentMember.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-blue-600">
                        {currentMember.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-15">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {currentMember.name}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4" />
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {currentMember.bio}
                      </p>
                    </div>
                    <div className="flex justify-center gap-3">
                      {currentMember.social.linkedin &&
                        currentMember.social.linkedin.trim() !== "" && (
                          <Link
                            href={currentMember.social.linkedin}
                            target="_blank"
                            className="group"
                          >
                            <div className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition">
                              <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
                            </div>
                          </Link>
                        )}
                      {currentMember.social.github &&
                        currentMember.social.github.trim() !== "" && (
                          <Link
                            href={currentMember.social.github}
                            target="_blank"
                            className="group"
                          >
                            <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                              <Github className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
                            </div>
                          </Link>
                        )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Team List (Right Side) */}
            <div className="flex flex-wrap justify-center gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={`${member.name}-${index}`}
                  className="cursor-pointer group w-[280px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: index === currentIndex ? "blur(0px)" : "blur(1px)",
                    scale: index === currentIndex ? 1.05 : 1,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    filter: { duration: 0.2 },
                  }}
                  onClick={() => goToSlide(index)}
                  whileHover={{
                    filter: "blur(0px)",
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div
                    className={`flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-blue-50 border-2 border-blue-300 shadow-lg"
                        : "bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-white shadow-sm">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {index === currentIndex && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4
                        className={`font-semibold text-lg truncate ${
                          index === currentIndex
                            ? "text-blue-900"
                            : "text-gray-900"
                        }`}
                      >
                        {member.name}
                      </h4>
                      <p
                        className={`text-sm truncate ${
                          index === currentIndex
                            ? "text-blue-600"
                            : "text-gray-500"
                        }`}
                      >
                        {member.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {team.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 w-6"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Autoplay Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-xs px-4 py-2 rounded-full transition-all duration-300 ${
                isAutoPlaying
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {isAutoPlaying ? "Auto-playing" : "Paused"}
            </button>
          </div>
        </div>
      </div>

      {/* Offices Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-10">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer w-full sm:w-[800px] md:w-[800px] lg:w-[800px]"
                onClick={() => setActiveOffice(index)}
              >
                <div
                  className={`flex flex-col justify-between min-h-[300px] bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                    activeOffice === index ? "ring-2 ring-blue-600" : ""
                  }`}
                >
                  <div className="relative h-[480px] w-full">
                    <iframe
                      className="w-full h-full"
                      src={office.mapUrl}
                      loading="lazy"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700 shadow">
                      {office.employees} employees
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-1">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        {office.city}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-base">{office.address}</p>
                    <p className="text-gray-500 text-sm">{office.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Butang lang ni kung mag damo na ang Client ta -Paul */}
      {/* Clients and Partnerships Section - Commented Out */}
      {/* 
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
      {/*
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
      {/*
          <div className="sm:hidden mb-8">
            <div className="relative">
              {/* Carousel Container */
      /*
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
      {/*
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
      */}

      {/* CTA Section */}
      <div className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Join Our Journey
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to be part of something amazing? Explore career
              opportunities or partner with us on your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
