"use client";
import { NavLinks } from "@/../../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  // Check for route change
  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  // Clear transition state after a delay
  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200); // Transition duration
      return () => clearTimeout(timeout);
    }
  }, [isRouting, path]);

  return (
    <>
      {/* Full-screen transition when routing */}
      {isRouting && (
        <div className="absolute z-[60] inset-0 bg-black opacity-80 transition-all  duration-500 ease-in-out">
          <Transition />
        </div>
      )}

      {/* Navigation */}
      <div
        className="  fixed  z-[50]  bottom-5 left-1/3 sm:left-1/2 transform -translate-x-1/2 w-[40%] sm:w-[20%]  max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7"
      >
        <div className="   flex flex-wrap justify-between items-center w-full">
          {NavLinks.map((nav) => (
            <Link
              key={nav.name}
              href={nav.link}
              className="mb-4 md:mb-0"
            >
              <nav.icon
                className={`w-[24px] h-[24px] transition-all duration-300 ease-in-out ${
                  path === nav.link ? "text-purple-800 scale-110" : "text-white"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;

