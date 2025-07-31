{/* "use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code2,
  Database,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  CheckCircle,
  Play,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "../../components/navbar";

const products = [
  {
    id: 1,
    title: "Enterprise CRM Suite",
    category: "Business Management",
    description:
      "Comprehensive customer relationship management platform with advanced analytics, automation, and integration capabilities.",
    features: ["Advanced Analytics", "Workflow Automation", "Third-party Integrations", "Mobile Access"],
    icon: <Database className="w-8 h-8 text-blue-600" />,
    image: "/placeholder.svg?height=300&width=400",
    price: "Starting at $99/month",
    rating: 4.8,
    users: "10K+",
    growth: "+25%",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "AI Code Assistant",
    category: "Development Tools",
    description:
      "Intelligent code completion and generation tool powered by machine learning to boost developer productivity.",
    features: ["Smart Code Completion", "Bug Detection", "Code Optimization", "Multi-language Support"],
    icon: <Code2 className="w-8 h-8 text-purple-600" />,
    image: "/placeholder.svg?height=300&width=400",
    price: "Starting at $29/month",
    rating: 4.9,
    users: "50K+",
    growth: "+40%",
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Mobile App Builder",
    category: "No-Code Platform",
    description:
      "Drag-and-drop mobile app development platform that enables anyone to create professional mobile applications.",
    features: ["Drag & Drop Builder", "Native Performance", "App Store Publishing", "Real-time Preview"],
    icon: <Smartphone className="w-8 h-8 text-green-600" />,
    image: "/placeholder.svg?height=300&width=400",
    price: "Starting at $49/month",
    rating: 4.7,
    users: "25K+",
    growth: "+35%",
    color: "green",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Cloud Infrastructure Manager",
    category: "DevOps & Cloud",
    description:
      "Unified platform for managing multi-cloud infrastructure with automated scaling and cost optimization.",
    features: ["Multi-cloud Support", "Auto Scaling", "Cost Optimization", "Security Monitoring"],
    icon: <Cloud className="w-8 h-8 text-orange-600" />,
    image: "/placeholder.svg?height=300&width=400",
    price: "Starting at $199/month",
    rating: 4.6,
    users: "5K+",
    growth: "+60%",
    color: "orange",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Cybersecurity Suite",
    category: "Security & Compliance",
    description:
      "Comprehensive security solution with threat detection, vulnerability assessment, and compliance management.",
    features: ["Threat Detection", "Vulnerability Scanning", "Compliance Reports", "24/7 Monitoring"],
    icon: <Shield className="w-8 h-8 text-red-600" />,
    image: "/placeholder.svg?height=300&width=400",
    price: "Starting at $149/month",
    rating: 4.9,
    users: "15K+",
    growth: "+45%",
    color: "red",
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: 6,
    title: "Performance Analytics",
    category: "Data & Analytics",
    description: "Real-time performance monitoring and analytics platform for web applications and services.",
    features: ["Real-time Monitoring", "Custom Dashboards", "Alert System", "Performance Insights"],
    icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
    image: "/placeholder.svg?height=300&width=400",
    price: "Starting at $79/month",
    rating: 4.8,
    users: "30K+",
    growth: "+30%",
    color: "indigo",
    gradient: "from-indigo-500 to-blue-500",
  },
]

const categories = [
  "All Products",
  "Business Management",
  "Development Tools",
  "No-Code Platform",
  "DevOps & Cloud",
  "Security & Compliance",
  "Data & Analytics",
]

export default function SoftwareProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products")
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  useEffect(() => {
    if (selectedCategory === "All Products") {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter((product) => product.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
    <Navbar />
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

      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Powerful Software Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Smart Software
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of software products designed to streamline operations, boost
              productivity, and drive innovation across your organization.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProduct(product.id)}
                  onHoverEnd={() => setHoveredProduct(null)}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                    {/* Product Image 
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-10`} />
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                        {product.icon}
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                          {product.category}
                        </div>
                      </div>
                    </div>

                    {/* Product Content 
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                      </div>

                      {/* Features 
                      <div className="space-y-2">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats 
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-medium">{product.rating}</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-600">
                            <Users className="w-4 h-4" />
                            <span>{product.users}</span>
                          </div>
                          <div className="flex items-center gap-1 text-green-600">
                            <TrendingUp className="w-4 h-4" />
                            <span>{product.growth}</span>
                          </div>
                        </div>
                      </div>

                      {/* Price and CTA 
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-gray-900">{product.price}</span>
                          <button className="text-blue-600 hover:text-blue-700 p-2 rounded-full hover:bg-blue-50 transition-colors">
                            <Play className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex gap-2">
                          <Link href="/demo" className="flex-1">
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium transition-colors duration-300 flex items-center justify-center gap-2 group">
                              <span>Try Demo</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </Link>
                          <Link href="/contact">
                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-colors duration-300">
                              Contact
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect 
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA Section 
      <div className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of companies already using our software solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/demo">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
*/}