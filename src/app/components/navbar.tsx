"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import NavLogo from "@/app/img/logo-nav.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled || menuOpen
          ? "bg-[#0a0f1a]/95 backdrop-blur-sm"
          : "bg-[#0a0f1a]"
      } py-3`}
    >
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#00a7e0] opacity-20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#6c63ff] opacity-20 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 z-10">
            <Image src={NavLogo} width={50} height={50} alt="Logo" />
            <span className="text-white font-bold text-lg">WISDOMOUS</span>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none md:hidden z-10"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-[#00a7e0] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#00a7e0] after:transition-all hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-white hover:text-[#00a7e0] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#00a7e0] after:transition-all hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#00a7e0] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#00a7e0] after:transition-all hover:after:w-full"
            >
              Contact
            </Link>
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#0a0f1a] z-[100] transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#00a7e0] z-[110] p-2"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
            <Link
              href="/"
              className="text-white hover:text-[#00a7e0] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-white hover:text-[#00a7e0] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#00a7e0] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
