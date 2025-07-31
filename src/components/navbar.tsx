"use client"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image";


const navItems = [
  { name: "DEVELOPERS", href: "/pages/developers", hasDropdown: true },
  { name: "COMPANY", href: "/pages/company", hasDropdown: true },
]

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
               <Image
              src="/img/logo-nav.png" 
              alt="Uplift Foundation"
              width={160}
              height={80}
              priority
              className="h-10 w-auto"
            />
            <span className="font-semibold text-gray-900 text-lg tracking-wide">WISDOMOUS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </Link>
              </div>
            ))}
            <Link
              href="/pages/contact"
              className="bg-[#1029A2] hover:bg-[#00a7e0] text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between text-gray-700 hover:text-gray-900 font-medium text-sm py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              ))}
              <Link
                href="@/app/pages/contact/page"
                className="bg-[#00d084] hover:bg-[#00b872] text-white px-6 py-3 rounded-lg font-medium text-sm text-center transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
