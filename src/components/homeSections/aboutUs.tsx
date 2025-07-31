"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Users, Target, Lightbulb, Shield, Award, Zap, Code, TrendingUp, CheckCircle } from "lucide-react"

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

const stats = [
  { number: "10+", label: "Companies Trust Us", icon: <Users className="w-6 h-6 text-white" /> },
  { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6 text-white" /> },
  { number: "10TB+", label: "Data Processed Daily", icon: <Zap className="w-6 h-6 text-white" /> },
  { number: "24/7", label: "Expert Support", icon: <Award className="w-6 h-6 text-white" /> },
]

const features = [
  {
    icon: <Code className="w-6 h-6 text-[#0a0f1a]" />,
    title: "Technical Excellence",
    description: "We pride ourselves on clean, efficient code and cutting-edge technical solutions.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#0a0f1a]" />,
    title: "Collaborative Approach",
    description: "We work closely with clients to understand their unique needs and business goals.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#0a0f1a]" />,
    title: "Rapid Delivery",
    description: "Our agile methodology ensures quick iterations and timely project completion.",
  },
  {
    icon: <Award className="w-6 h-6 text-[#0a0f1a]" />,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control are built into every step of our process.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#0a0f1a]" />,
    title: "Scalable Solutions",
    description: "We build with growth in mind, ensuring your solution can evolve with your business.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-[#0a0f1a]" />,
    title: "Client Satisfaction",
    description: "Our success is measured by the success and satisfaction of our clients.",
  },
]

const missionPoints = [
  "Delivering high-quality, scalable software solutions",
  "Building long-term partnerships with our clients",
  "Staying at the forefront of technological innovation",
  "Maintaining the highest standards of code quality and security",
]

export const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-grid-pattern bg-grid-xl pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00a7e0]/5 rounded-full blur-3xl -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-48 translate-y-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-[#00a7e0]/10 rounded-full border border-[#00a7e0]/20">
            <span className="text-[#00a7e0] font-semibold">About Wisdomous</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We Build <span className="text-[#00a7e0]">Digital Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of experts combines technical expertise with creative innovation to deliver solutions that exceed
            expectations and drive business growth.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              variants={fadeInUpVariant}
              animate={isInView ? "visible" : "hidden"}
              className="bg-[#00a7e0]/90 rounded-2xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-black text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              variants={fadeInUpVariant}
              animate={isInView ? "visible" : "hidden"}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-[#00a7e0]/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00a7e0]/70 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-gray-900 text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#00a7e0]/10 text-[#00a7e0] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              Our Mission
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Transforming Businesses Through Innovation
            </h3>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At Wisdomous, we're committed to transforming businesses through innovative technology solutions. We
              believe that the right software can revolutionize how companies operate and engage with their customers.
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our mission is to empower organizations with custom-built digital tools that solve real problems,
              streamline operations, and create exceptional user experiences.
            </p>

            <div className="space-y-4">
              {missionPoints.map((point, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  variants={fadeInUpVariant}
                  animate={isInView ? "visible" : "hidden"}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-[#00a7e0] mt-0.5 flex-shrink-0" />
                  <span className="text-black font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Vision Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Background Card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00a7e0]/10 to-blue-500/10 rounded-3xl transform rotate-2 scale-105"></div>

            {/* Main Card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-[#00a7e0]" />
              </div>

              {/* Content */}
              <div className="relative z-10">

                {/* Quote */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                  "Our vision is to be the leading provider of innovative software solutions that empower businesses to
                  thrive in the digital age through intelligent automation and data-driven insights."
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Leadership Team</div>
                    <div className="text-gray-600 text-sm">Aljason Javier</div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#00a7e0]/5 to-transparent rounded-full transform translate-x-16 translate-y-16"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-12 h-12 bg-[#00a7e0] rounded-full flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Lightbulb className="w-6 h-6 text-white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{
                y: [0, 8, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
