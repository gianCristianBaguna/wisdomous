"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.67c0 .73.593 1.323 1.325 1.323h11.495v-9.845H9.69V10.41h3.13V7.797c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.1 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763V10.41h3.587l-.467 3.738h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.324V1.325C24 .593 23.408 0 22.675 0z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0f1a] text-white px-6 sm:px-20 py-10 border-t border-white/10 z-10 ">
      <div className="absolute top-[-150px] right-[-100px] w-[300px] h-[300px] bg-[#00a7e0]/20 rounded-full blur-2xl z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-center md:text-left">
          <p className="font-semibold text-[#00a7e0]">© {new Date().getFullYear()} Wisdomous Tech</p>
          <p className="text-white/60">Building ideas with precision and passion.</p>
        </div>

        <div className="flex gap-6">
          <Link
            href="wisdomoustech@gmail.com"
            className="hover:text-[#00a7e0] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.facebook.com/share/18mjZ3ExFK/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00a7e0] transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </Link>
          <div
            className="text-sm hover:text-[#00a7e0] transition-colors"
            aria-label="Phone"
          >
            +639-96-774-475

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
