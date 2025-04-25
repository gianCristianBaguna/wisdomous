"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Code, Users, Zap, CheckCircle, TrendingUp } from "lucide-react"

export const AboutUs = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
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

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
     

      
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00a7e0]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#9333ea]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3 px-4 py-1 bg-[#00a7e0]/10 rounded-full border border-[#00a7e0]/20"
          >
            <span className="text-[#00a7e0] font-medium">About Wisdomous</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            We Build <span className="text-[#00a7e0]">Digital Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-300 text-lg"
          >
            Our team of experts combines technical expertise with creative innovation to deliver solutions that exceed
            expectations and drive business growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Code className="w-6 h-6 text-[#00a7e0]" />,
              title: "Technical Excellence",
              description: "We pride ourselves on clean, efficient code and cutting-edge technical solutions.",
            },
            {
              icon: <Users className="w-6 h-6 text-[#00a7e0]" />,
              title: "Collaborative Approach",
              description: "We work closely with clients to understand their unique needs and business goals.",
            },
            {
              icon: <Zap className="w-6 h-6 text-[#00a7e0]" />,
              title: "Rapid Delivery",
              description: "Our agile methodology ensures quick iterations and timely project completion.",
            },
            {
              icon: <Award className="w-6 h-6 text-[#00a7e0]" />,
              title: "Quality Assurance",
              description: "Rigorous testing and quality control are built into every step of our process.",
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-[#00a7e0]" />,
              title: "Scalable Solutions",
              description: "We build with growth in mind, ensuring your solution can evolve with your business.",
            },
            {
              icon: <CheckCircle className="w-6 h-6 text-[#00a7e0]" />,
              title: "Client Satisfaction",
              description: "Our success is measured by the success and satisfaction of our clients.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              variants={fadeInUpVariant}
              animate={isInView ? "visible" : "hidden"}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="bg-[#00a7e0]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-gray-300 mb-4">
              At Wisdomous, we're committed to transforming businesses through innovative technology solutions. We
              believe that the right software can revolutionize how companies operate and engage with their customers.
            </p>
            <p className="text-gray-300 mb-6">
              Our mission is to empower organizations with custom-built digital tools that solve real problems,
              streamline operations, and create exceptional user experiences.
            </p>
            <ul className="space-y-3">
              {[
                "Delivering high-quality, scalable software solutions",
                "Building long-term partnerships with our clients",
                "Staying at the forefront of technological innovation",
                "Maintaining the highest standards of code quality and security",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  initial="hidden"
                  variants={fadeInUpVariant}
                  animate={isInView ? "visible" : "hidden"}
                  className="flex items-start"
                >
                  <CheckCircle className="w-5 h-5 text-[#00a7e0] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00a7e0]/20 to-[#9333ea]/20 rounded-2xl transform rotate-3 scale-105"></div>
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-[#0a0f1a] to-[#1e293b] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-[#00a7e0] text-5xl font-bold mb-4">W</div>
                  <p className="text-white text-lg">
                    "Our vision is to be the leading provider of innovative software solutions that empower businesses
                    to thrive in the digital age."
                  </p>
                  <div className="mt-4 text-gray-400">- Aljason Javier</div>
                  <div className="text-gray-400">CEO</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
