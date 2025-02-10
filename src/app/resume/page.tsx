'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, User } from 'lucide-react';

const resumeData = {
  name: 'DANIA NIZAM',
  title: 'Frontend Developer | UI/UX Designer | Enthusiast of AI and Cloud Computing Pursuing Agent AI Engineering' ,
  summary:
    'Passionate frontend developer with expertise in TypeScript, Next.js, and Tailwind CSS Javascript,Figma,Sanity CMS . Enthusiastic about generative AI and creating intuitive web experiences.',
  skills: ['TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'Html', 'CSS','Sanity CMS','Python', 'Figma'],
  experience: [
    {
      role: 'Frontend Developer',
      
      description: ' Experiance of Building scalable ,Modern and responsive web applications using Next.js,Tailwind CSS,Sanity CMS,Figma and TypeScript.',
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science',
      university: 'University of Karachi',
      year: '2022',
    },

    {
      degree: 'Agentic AI Engeenering',
      university: 'GIAIC',
      year: '2024 contineu...',
    },
  ],
  projects: [
    {
      name: 'Car Rental E-Commerce',
      description: 'Developed a car rental website with Next.js, Sanity, and Redux Toolkit.',
      link: 'https://market-place-hackathon-28pz-h75zex868-dania-nizams-projects.vercel.app',
    },

    {
      name: 'E-Commerce Website',
      description: 'Developed a E-Commerce Website with Next.js, TailwindCSS and Next Auth,Stripe, Redux Toolkit.',
      link: 'https://ecommerce-website-kwagiypjx-dania-nizams-projects.vercel.app',
    },

    {
      name: 'Admin Dashboard',
      description: 'Developed a car rental website  Admin Dashboard with Next.js,  Tailwind CSS ,Typescript.',
      link: 'https://admin-dashboard-ppeqzlhj6-dania-nizams-projects.vercel.app',
    },

    {
      name: 'Blog Website',
      description: 'Developed a Blog Website using NextJs Typescript Sanity CMS and Tailwind CSS.',
      link: 'https://blog-web-sanity-7zdpy6dh5-dania-nizams-projects.vercel.app',
    },
  ],
};

export default function Resume() {
  return (
    <div
      className="flex items-center justify-center  w-full min-h-screen bg-black bg-opacity-90 bg-cover bg-center"
      style={{ backgroundImage: "url(/bg.png)" }}
    >
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full mx-4 mt-32 md:mx-auto p-8 md:p-10 bg-white/10 shadow-2xl rounded-2xl backdrop-blur-md border border-gray-600"
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-extrabold mb-7 text-white tracking-wide">{resumeData.name}</h1>
          <p className="text-gray-300 text-lg">{resumeData.title}</p>
        </motion.div>

        {/* Summary */}
        <motion.div 
          className="mb-6 text-center px-4"
          whileHover={{ scale: 1.03 }}
        >
          <p className="text-gray-300 text-lg italic">{resumeData.summary}</p>
        </motion.div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white">Skills</h2>
          <div className="flex flex-wrap gap-3 mt-2">
            {resumeData.skills.map((skill) => (
              <motion.span
                key={skill}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-110 shadow-md hover:shadow-blue-500/50"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <Briefcase /> Experience
          </h2>
          {resumeData.experience.map((exp) => (
            <motion.div
              key={exp.role}
              className="mt-3 p-4 bg-white/10 border border-gray-600 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
              
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <GraduationCap /> Education
          </h2>
          {resumeData.education.map((edu) => (
            <motion.div
              key={edu.degree}
              className="mt-3 p-4 bg-white/10 border border-gray-600 rounded-lg transition-all hover:shadow-lg hover:shadow-indigo-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
              <p className="text-gray-400">{edu.university} | {edu.year}</p>
            </motion.div>
          ))}
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <Code /> Projects
          </h2>
          {resumeData.projects.map((proj) => (
            <motion.div
              key={proj.name}
              className="mt-3 p-4 bg-white/10 border border-gray-600 rounded-lg transition-all hover:shadow-lg hover:shadow-purple-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-semibold text-white">{proj.name}</h3>
              <p className="text-gray-300">{proj.description}</p>
              <a
                href={proj.link}
                className="text-blue-400 hover:text-blue-300 transition-all underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
