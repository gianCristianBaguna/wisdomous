"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Terminal,
  Book,
  Zap,
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  Github,
  Play,
  Download,
  Users,
  Star,
  Package,
  Webhook,
  Database,
  Shield,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

const developerTools = [
  {
    id: 1,
    title: "REST API",
    description:
      "Comprehensive RESTful API with full CRUD operations and real-time capabilities.",
    icon: <Database className="w-6 h-6 text-blue-600" />,
    features: [
      "Rate Limiting",
      "Authentication",
      "Webhooks",
      "Real-time Updates",
    ],
    language: "cURL",
    code: `curl -X GET "https://api.example.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
    docs: "/docs/api",
    github: "https://github.com/example/api",
    downloads: "50K+",
    stars: 1200,
  },
  {
    id: 2,
    title: "JavaScript SDK",
    description:
      "Modern JavaScript SDK with TypeScript support and comprehensive error handling.",
    icon: <Code2 className="w-6 h-6 text-yellow-600" />,
    features: [
      "TypeScript Support",
      "Promise-based",
      "Error Handling",
      "Tree Shaking",
    ],
    language: "javascript",
    code: `import { ExampleSDK } from '@example/sdk';

const client = new ExampleSDK({
  apiKey: 'your-api-key',
  environment: 'production'
});

const users = await client.users.list();`,
    docs: "/docs/javascript-sdk",
    github: "https://github.com/example/js-sdk",
    downloads: "25K+",
    stars: 800,
  },
  {
    id: 3,
    title: "Python SDK",
    description:
      "Pythonic SDK with async support and comprehensive data validation.",
    icon: <Terminal className="w-6 h-6 text-green-600" />,
    features: ["Async Support", "Data Validation", "Auto-retry", "Logging"],
    language: "python",
    code: `from example_sdk import ExampleClient

client = ExampleClient(api_key="your-api-key")

# Synchronous usage
users = client.users.list()

# Async usage
users = await client.users.alist()`,
    docs: "/docs/python-sdk",
    github: "https://github.com/example/python-sdk",
    downloads: "15K+",
    stars: 600,
  },
  {
    id: 4,
    title: "Webhooks",
    description:
      "Real-time event notifications with secure payload verification.",
    icon: <Webhook className="w-6 h-6 text-purple-600" />,
    features: [
      "Payload Verification",
      "Retry Logic",
      "Event Filtering",
      "Rate Limiting",
    ],
    language: "json",
    code: `{
  "event": "user.created",
  "data": {
    "id": "user_123",
    "email": "user@example.com",
    "created_at": "2024-01-15T10:30:00Z"
  },
  "timestamp": 1705312200
}`,
    docs: "/docs/webhooks",
    github: "https://github.com/example/webhooks",
    downloads: "10K+",
    stars: 400,
  },
];

const quickStartSteps = [
  {
    step: 1,
    title: "Get API Key",
    description: "Sign up and get your API key from the dashboard",
    icon: <Shield className="w-5 h-5 text-blue-600" />,
  },
  {
    step: 2,
    title: "Install SDK",
    description: "Install our SDK using your preferred package manager",
    icon: <Package className="w-5 h-5 text-green-600" />,
  },
  {
    step: 3,
    title: "Make First Call",
    description: "Initialize the client and make your first API call",
    icon: <Zap className="w-5 h-5 text-yellow-600" />,
  },
  {
    step: 4,
    title: "Go Live",
    description: "Deploy to production and start building amazing features",
    icon: <Cpu className="w-5 h-5 text-purple-600" />,
  },
];

const resources = [
  {
    title: "API Documentation",
    description: "Complete API reference with examples and use cases",
    icon: <Book className="w-6 h-6 text-blue-600" />,
    link: "/docs",
    type: "Documentation",
  },
  {
    title: "Code Examples",
    description: "Ready-to-use code examples in multiple languages",
    icon: <Code2 className="w-6 h-6 text-green-600" />,
    link: "/examples",
    type: "Examples",
  },
  {
    title: "Developer Community",
    description: "Join our community of developers and get help",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    link: "/community",
    type: "Community",
  },
  {
    title: "Status Page",
    description: "Real-time API status and incident reports",
    icon: <Zap className="w-6 h-6 text-orange-600" />,
    link: "/status",
    type: "Status",
  },
];

export default function DevelopersPage() {
  const [selectedTool, setSelectedTool] = useState(0);
  const [copiedCode, setCopiedCode] = useState<number | null>(null);

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <Navbar />
      Background Elements
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
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-6">
                <Terminal className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium text-gray-700">
                  Developer Platform
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Build Amazing Apps with
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Our APIs
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Powerful, flexible APIs and SDKs that help you build faster. Get
                started in minutes with our comprehensive developer tools and
                documentation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group">
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/examples">
                  <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    <span>View Examples</span>
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
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
              Developer Tools & SDKs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of SDKs and tools to integrate with
              your favorite programming language.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            Tools List
            <div className="space-y-4">
              {developerTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedTool(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedTool === index
                      ? "bg-white shadow-xl border-2 border-indigo-200"
                      : "bg-white/60 hover:bg-white hover:shadow-lg border border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-50 rounded-xl">{tool.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {tool.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            <span>{tool.downloads}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{tool.stars}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{tool.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="lg:sticky lg:top-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTool}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">
                        {developerTools[selectedTool].language}
                      </span>
                      <button
                        onClick={() =>
                          copyCode(
                            developerTools[selectedTool].code,
                            selectedTool
                          )
                        }
                        className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        {copiedCode === selectedTool ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <pre className="text-gray-300 text-sm leading-relaxed overflow-x-auto">
                      <code>{developerTools[selectedTool].code}</code>
                    </pre>
                  </div>
                  <div className="p-4 border-t border-gray-700 flex gap-3">
                    <Link href={developerTools[selectedTool].docs}>
                      <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors text-sm">
                        <Book className="w-4 h-4" />
                        <span>Docs</span>
                      </button>
                    </Link>
                    <Link href={developerTools[selectedTool].github}>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm">
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
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
              Quick Start Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get up and running in just a few minutes with our step-by-step
              guide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStartSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < quickStartSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-indigo-200 -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
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
              Developer Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to build, test, and deploy your applications
              successfully.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={resource.link}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-indigo-50 transition-colors">
                        {resource.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {resource.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex items-center text-indigo-600 font-medium group-hover:gap-2 transition-all">
                      <span>Learn more</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10 bg-gradient-to-r from-indigo-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Join thousands of developers already building amazing applications
              with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <button className="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                  Talk to Sales
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
