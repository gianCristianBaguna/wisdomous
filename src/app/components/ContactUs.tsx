"use client"

import type React from "react"
import { useState } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form submitted:", formData)
      setSubmitStatus("success")

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)

      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0f1a] to-[#0f172a]">
      <div className="absolute top-[-200px] left-[-150px] w-[600px] h-[600px] bg-[#00a7e0]/10 rounded-full opacity-30"></div>
      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-[#9333ea]/10 rounded-full opacity-30"></div>

      <div className="relative z-10 w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <div className="text-[#00a7e0] text-5xl font-bold">W</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wider">
            CONTACT <span className="text-[#00a7e0]">US</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Have a project in mind or want to learn more about our services? Get in touch with our team and we'll get
            back to you shortly.
          </p>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <div className="relative bg-[#111827] border border-white/10 rounded-2xl p-8 md:p-10 shadow-lg">
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-[#00a7e0]/10 border border-[#00a7e0]/30 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-[#00a7e0] mr-3 flex-shrink-0" />
                <p className="text-white">Your message has been sent successfully. We'll be in touch soon.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                <p className="text-white">There was an error sending your message. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#00a7e0] text-sm uppercase tracking-wider mb-2 font-light"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a2234] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00a7e0]/50 transition-colors placeholder:text-white/30"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#00a7e0] text-sm uppercase tracking-wider mb-2 font-light"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a2234] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00a7e0]/50 transition-colors placeholder:text-white/30"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-[#00a7e0] text-sm uppercase tracking-wider mb-2 font-light"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a2234] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00a7e0]/50 transition-colors placeholder:text-white/30"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#00a7e0] text-sm uppercase tracking-wider mb-2 font-light"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#1a2234] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00a7e0]/50 transition-colors resize-none placeholder:text-white/30"
                  placeholder="Your message here..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-[#00a7e0] text-white font-medium rounded-lg transition-colors hover:bg-[#0077cc] flex items-center justify-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <span className="tracking-wider">SENDING...</span>
                    ) : (
                      <>
                        <span className="tracking-wider">SEND MESSAGE</span>
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
