"use client";

import Link from "next/link";
import { Menu, User, Home } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 py-0" 
          : "bg-white border-b border-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Home className="text-sidi-blue h-8 w-8" />
            <Link href="/" className="font-bold text-2xl tracking-tight text-gray-900">
              Dar<span className="text-sidi-blue">Tounes</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/properties" className="text-gray-600 hover:text-sidi-blue font-medium transition">Properties</Link>
            <Link href="/new-projects" className="text-gray-600 hover:text-sidi-blue font-medium transition">New Projects</Link>
            <Link href="/agents" className="text-gray-600 hover:text-sidi-blue font-medium transition">Agents</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/signin" className="text-gray-600 hover:text-sidi-blue transition flex items-center gap-2">
              <User size={20} />
              <span className="font-medium">Sign In</span>
            </Link>
            <Link href="/list-property" className="bg-sidi-blue hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg font-medium transition shadow-sm">
              List Property
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-gray-600">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
