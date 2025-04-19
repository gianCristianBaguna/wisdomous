"use client";

import Link from "next/link";
import Image from "next/image";
import navLogo from "@/app/img/logo-nav.png";
import profileLogo from "@/app/img/profile.png";

const Navbar = () => {
  return (
    <nav className="bg-[#121620] shadow-md border-b border-gray-600 px-6 py-4 flex items-center justify-between font-montserrat fixed top-0 left-0 right-0 z-50">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#00a7e0] opacity-20 blur-[120px] rounded-full z-0"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#6c63ff] opacity-20 blur-[120px] rounded-full z-0"></div>

      <Link href="/" className="text-xl font-bold text-[#00a7e0]">
        <Image
          src={navLogo}
          alt="Hero"
          width={60}
          height={40}
          className=" object-contain drop-shadow-2xl ml-10"
        />
      </Link>

      <ul className="flex mr-20 space-x-20 text-white">
        <li>
          <Link
            href="/"
            className="relative text-base font-medium text-white transition-colors hover:text-cyan-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/#about"
            className="relative text-base font-medium text-white transition-colors hover:text-cyan-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="relative text-base font-medium text-white transition-colors hover:text-cyan-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
          >
            Contact
          </Link>
        </li>
        <li>
          <Image src={profileLogo} alt="Hero" width={20} height={10} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
