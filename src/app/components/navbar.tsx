"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import navLogo from "@/app/img/logo-nav.png";
import profileLogo from "@/app/img/profile.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative bg-[#121620] shadow-md border-b border-gray-600 px-6 py-4 flex items-center justify-between font-montserrat fixed top-0 left-0 right-0 z-50">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#00a7e0] opacity-20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#6c63ff] opacity-20 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <Link href="/" className="z-10">
        <Image
          src={navLogo}
          alt="Hero"
          width={60}
          height={40}
          className="object-contain drop-shadow-2xl"
        />
      </Link>

      <div className="md:hidden z-10">
        {menuOpen ? (
          <X
            size={30}
            className="text-white cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <Menu
            size={30}
            className="text-white cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      <ul
        className={`${
          menuOpen
            ? "flex flex-col items-center bg-[#121620] absolute top-16 left-0 w-full space-y-6 py-6 z-40"
            : "hidden"
        } md:flex md:flex-row md:static md:space-x-20 md:mr-20 text-white transition-all duration-300`}
      >
        <li>
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="relative text-base font-medium transition-colors hover:text-cyan-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/#about"
            onClick={() => setMenuOpen(false)}
            className="relative text-base font-medium transition-colors hover:text-cyan-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="relative text-base font-medium transition-colors hover:text-cyan-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
          >
            Contact
          </Link>
        </li>
        <li>
          <Image src={profileLogo} alt="Hero" width={20} height={20} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
