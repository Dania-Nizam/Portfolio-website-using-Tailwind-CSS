
"use client";

import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { Projects } from "@/../../constants";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-4.png)" }}
      className="w-screen min-h-screen bg-cover bg-center flex flex-col items-center pt-20" // Adjust `pt-20` as per navbar height
    >
      {/* Grid Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 w-full max-w-screen-xl py-10">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.src}
            title={project.title}
            text={project.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
