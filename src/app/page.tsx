"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      {/* Background Image Section */}
      <div
        className="flex items-center w-full bg-cover bg-center h-full pt-0 pb-0 mt-0 mb-0"
        style={{ backgroundImage: "url(/bg.png)" }}
      >
        <div className="pl-10 md:pl-40 pb-10 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px] w-full">
          {/* Heading */}
          <h1 className="text-[20px] sm:text-[35px] text-white font-semibold font-serif leading-snug">
            <span className="hover:text-purple-500 transition-all duration-300 ease-in-out">
              Hi! I AM DANIA
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 hover:from-red-500 hover:to-purple-500 transition-all duration-500 ease-in-out">
              FRONTEND <span className="hover:text-white transition-all duration-300">WEB DEVELOPER</span>
            </span>
          </h1>
          {/* Description */}
          <p className="text-gray-200 text-lg hidden md:block hover:text-white transition-all duration-300">
            Passionate frontend web developer with a flair for creating engaging user experiences and clean, maintainable code.
          </p>

          {/* Desktop Buttons */}
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile View Buttons */}
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5 w-full px-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-400"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black"
        >
          Contact me
        </Link>
      </div>

      {/* Optional Additional Elements */}
      <div className="absolute bottom-0 right-0 z-[10]">
        {/* Any extra content goes here */}
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        {/* Background blur or effects go here */}
      </div>
    </main>
  );
}
