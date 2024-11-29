"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/../../constants'
import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/bg-4.png)"}}
     className='w-full h-full sm:w-full sm:h-full md:w-screen md:h-screen flex items-center justify-center bg-center bg-cover'>
      <div className=' md:grid grid-cols-2 sm:gap-5 max-w-[90%] max-h-[90%] opacity-100'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
          />
        ))}
      </div>
    </div>
  )
}

export default Page