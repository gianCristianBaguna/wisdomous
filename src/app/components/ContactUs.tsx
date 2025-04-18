"use client"

import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"

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
      // Replace with your actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form submitted:", formData)
      setSubmitStatus("success")

      // Optional: Reset form after successful submission
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

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }
  }

  return (
    <div className="w-full max-w-[450px] bg-gradient-to-b from-[#0f1724] to-[#0c1119] p-8 rounded-lg shadow-xl relative overflow-hidden border border-white/10">
      {/* Elegant top accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>

      {/* Elegant side accent */}
      <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-white/40 via-white/10 to-transparent"></div>

      <h2 className="text-2xl font-light text-white mb-6 tracking-wide flex items-center">
        <span className="mr-3">CONTACT</span>
        <div className="h-px flex-grow bg-gradient-to-r from-white/50 to-transparent"></div>
      </h2>

      {submitStatus === "success" && (
        <div className="mb-6 p-3 bg-[#0d2b1d]/50 backdrop-blur-sm border-l-2 border-[#4ade80] rounded-sm text-[#4ade80] text-sm animate-fadeIn">
          Your message has been sent successfully. We'll be in touch soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-3 bg-[#2d1518]/50 backdrop-blur-sm border-l-2 border-[#f87171] rounded-sm text-[#f87171] text-sm animate-fadeIn">
          There was an error sending your message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-white/70 text-xs uppercase tracking-wider mb-2 font-light">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#161c2c]/70 border border-white/10 rounded-sm p-2.5 text-white text-sm focus:outline-none focus:border-white/30 transition-all placeholder:text-white/30"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white/70 text-xs uppercase tracking-wider mb-2 font-light">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#161c2c]/70 border border-white/10 rounded-sm p-2.5 text-white text-sm focus:outline-none focus:border-white/30 transition-all placeholder:text-white/30"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-white/70 text-xs uppercase tracking-wider mb-2 font-light">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full bg-[#161c2c]/70 border border-white/10 rounded-sm p-2.5 text-white text-sm focus:outline-none focus:border-white/30 transition-all placeholder:text-white/30"
            placeholder="What is this regarding?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-white/70 text-xs uppercase tracking-wider mb-2 font-light">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-[#161c2c]/70 border border-white/10 rounded-sm p-2.5 text-white text-sm focus:outline-none focus:border-white/30 transition-all resize-none placeholder:text-white/30"
            placeholder="Your message here..."
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 bg-[#00a7e0] border border-white/30 text-white font-light rounded-sm transition-all flex items-center justify-center hover:bg-white/5 hover:border-white/50 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              "SENDING..."
            ) : (
              <>
                <span className="tracking-wider text-sm">SEND MESSAGE</span>
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Elegant corner accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24">
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-white/20 to-transparent"></div>
      </div>
    </div>
  )
}
