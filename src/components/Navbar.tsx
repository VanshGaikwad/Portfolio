"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const links = [
    { name: "Email", href: "mailto:vanshgaikwad@gmail.com" },
    { name: "Resume", href: "https://drive.google.com/file/d/18ER76dNVymqBU8Q-gQFOU_Oq8LEwBlcW/view?usp=sharing" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/vansh-gaikwad/" },
    { name: "Github", href: "https://github.com/VanshGaikwad" },
  ];

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-md mx-auto z-50 bg-[#0a0a0a]/95 border border-blue-500/20 rounded-2xl px-8 py-3 shadow-[0_0_25px_rgba(0,120,255,0.25)] backdrop-blur-md",
        className
      )}
    >
      <nav
        className="flex justify-center gap-10 text-base font-semibold text-white
        max-[600px]:flex-wrap max-[600px]:gap-4 max-[600px]:text-sm max-[600px]:px-2"
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group hover:text-blue-400 transition-all"
          >
            {link.name}
           <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>

          </Link>
        ))}
      </nav>
    </div>
  );
}
