"use client"
import { Socials } from "@/../../constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 z-[40] w-full h-[60px] bg-transparent flex justify-between items-center px-10 md:px-20 mt-10 bg-opacity-80">
      {/* Logo and Heading aligned properly */}
      <div className="flex flex-row items-center gap-3 ">
        <div className="relative">
          <Image
            src="/d.png"
            alt="logo"
            width={60}
            height={60}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-[20px] sm:text-[25px] font-semibold truncate hover:text-purple-500 transition-all duration-300 ease-in-out">
          DANIA NIZAM's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-red-500  hover:text-purple-500 transition-all duration-300 ease-in-out">
            PORTFOLIO
          </span>
        </h1>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex flex-col items-end">
        <button onClick={toggleMenu} className="text-white">
          {/* Hamburger Icon */}
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-[60px] right-0 bg-gray-800 p-5 rounded-lg w-full sm:w-[200px] bg-opacity-90`}
      >
        <div className="flex flex-col gap-4">
          {Socials.map((social) => (
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
