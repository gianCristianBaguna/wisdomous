"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";

const stats = [
  {
    label: "Years in Business",
    value: "1+",
    icon: <Calendar className="w-6 h-6 text-blue-600" />,
  },
  {
    label: "Happy Clients",
    value: "20+",
    icon: <Users className="w-6 h-6 text-green-600" />,
  },
  {
    label: "Projects Completed",
    value: "20+",
    icon: <Rocket className="w-6 h-6 text-purple-600" />,
  },
  {
    label: "Countries Served",
    value: "3+",
    icon: <Globe className="w-6 h-6 text-orange-600" />,
  },
];

const values = [
  {
    title: "Innovation First",
    description:
      "We embrace cutting-edge technologies and innovative solutions to solve complex problems.",
    icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
    color: "yellow",
  },
  {
    title: "Client Success",
    description:
      "Our clients' success is our success. We're committed to delivering exceptional results.",
    icon: <Target className="w-8 h-8 text-blue-600" />,
    color: "blue",
  },
  {
    title: "Quality & Security",
    description:
      "We maintain the highest standards of quality and security in everything we build.",
    icon: <Shield className="w-8 h-8 text-green-600" />,
    color: "green",
  },
  {
    title: "Team Collaboration",
    description:
      "We believe in the power of teamwork and collaborative problem-solving.",
    icon: <Heart className="w-8 h-8 text-red-600" />,
    color: "red",
  },
];

const offices = [
  {
    city: "Iloilo City",
    address: "Central Philippine University, Lopez Jaena St., Jaro",
    country: "Philippines",
    employees: "5+",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.4089357268383!2d122.562058!3d10.724181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af0ffbfcf369b3%3A0x93c6a529118a69a9!2sCentral%20Philippine%20University!5e0!3m2!1sen!2sph!4v1690797000000!5m2!1sen!2sph",
  },
];


const team = [
  {
    name: "Aljason",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in tech industry, passionate about building innovative solutions.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Paul Ian",
    role: "CTO",
    bio: "Technical architect with expertise in scalable systems and emerging technologies.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Gian",
    role: "Head of Design",
    bio: "Creative director focused on user-centered design and exceptional user experiences.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Alvin",
    role: "VP of Engineering",
    bio: "Engineering leader with a track record of building high-performance development teams.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Aaron",
    role: "Backend",
    bio: "Engineering leader with a track record of building high-performance development teams.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
];

const timeline = [
  {
    year: "2025",
    title: "Company started",
    description: "Established the initialization of the company",
  },
  {
    year: "May",
    title: "Projects",
    description: "Received multiple projects",
  },
  {
    year: "June",
    title: "Projects",
    description: "Received multiple projects",
  },
  {
    year: "July",
    title: "Corporation",
    description: "Wisdomous into corporation world",
  },
];

export default function CompanyPage() {
  const [activeOffice, setActiveOffice] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      {/* Background Elements */}
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
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
                  </div>
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

      {/* Team Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The visionary leaders driving our company's mission and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex gap-3">
                      {member.social.linkedin && (
                        <Link href={member.social.linkedin}>
                          <button className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors">
                            <Linkedin className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                          </button>
                        </Link>
                      )}
                      {member.social.twitter && (
                        <Link href={member.social.twitter}>
                          <button className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors">
                            <Twitter className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                          </button>
                        </Link>
                      )}
                      {member.social.github && (
                        <Link href={member.social.github}>
                          <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                            <Github className="w-4 h-4 text-gray-600" />
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped our company's growth and
              evolution.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-8"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 relative z-10">
                    {item.year}
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                className="group cursor-pointer w-full sm:w-[500px] md:w-[500px] lg:w-[520px]"
                onClick={() => setActiveOffice(index)}
              >
                <div
                  className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                    activeOffice === index ? "ring-2 ring-blue-600" : ""
                  }`}
                >
                  <div className="relative h-[280px] w-full">
                    <iframe
                      className="w-full h-full"
                      src={office.mapUrl || "https://maps.google.com"}
                      loading="lazy"
                      allowFullScreen
                    ></iframe>

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700 shadow">
                      {office.employees} employees
                    </div>
                  </div>
                  <div className="p-6">
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
              <Link href="/careers">
                <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group">
                  <span>View Careers</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
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
