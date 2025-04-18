"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#121620] shadow-md border-b border-gray-600 px-6 py-4 flex items-center justify-between font-montserrat">
      <Link href="/" className="text-xl font-bold text-[#00a7e0]">
        Wisdomous
      </Link>

      <ul className="flex mr-20 space-x-20 text-white">
        <li>
          <Link href="/about" className="hover:text-[#00a7e0] transition-colors">
            About
          </Link>
        </li>
        <li>
        <Link href="/contact" className="hover:text-[#00a7e0] transition-colors">
          Contact
        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
