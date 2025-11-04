import clsx from "clsx";
import { useState } from "react";

import { motion } from "framer-motion";

import Footer from "../components/sections/Footer";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import cyberposture from "/images/projects/cyberposture.webp";
import corefit from "/images/projects/corefit.webp";
import talentsncrowns from "/images/projects/talenntsncrowns.webp";
import grilli from "/images/projects/grilli.webp";
import portfolio from "/images/projects/portfolio.webp";
import todolist from "/images/projects/todolist.webp";
import countryFinder from "/images/projects/countryfinder.webp";

const projects = [
  {
    title: "TalentsNCrowns",
    img: talentsncrowns,
    subtitle:
      "A modern job matching platform connecting talented creatives with employers, featuring user profiles, job listings, and seamless application processes.",
    github: "https://github.com/archsaintnexus/talent-n-crowns-client",
    live: "https://talentncrowns.vercel.app/",
    stack: "Next.js, TypeScript, CSS Modules, Tailwind CSS, REST API",
  },
  {
    title: "CoreFit",
    img: corefit,
    subtitle:
      "CoreFit is a modern gym website that doubles as an e-commerce platform. It allows users to explore gym equipment, view detailed product descriptions, and add items to their cart. The site also showcases gym programmes and services.",
    github: "https://github.com/estheroluwabuyi/corefit-gym",
    live: "https://corefit-gym.vercel.app/",
    stack:
      "React, JavaScript, CSS, React Context API, Toast Notifications, Framer Motion",
  },
  {
    title: "Grilli",
    img: grilli,
    subtitle:
      "A modern restaurant website featuring an interactive menu, responsive design, and smooth user experience to explore dishes and view reservation options.",
    github: "https://github.com/estheroluwabuyi/Grilli-Website",
    live: "https://grilli-restaurant-thecodegal.netlify.app/",
    stack: "HTML, CSS, JavaScript",
  },
  {
    title: "CyberPosture",
    img: cyberposture,
    subtitle:
      "A clean, responsive landing page that highlights cybersecurity services, featuring clear CTAs and modern design to boost client trust.",
    github: "https://github.com/estheroluwabuyi/cyberposture--v2",
    live: "https://cyberposture-the-code-gal.netlify.app/",
    stack: "React, JavaScript, CSS",
  },

  {
    title: "Portfolio Website",
    img: portfolio,
    subtitle:
      "A personal portfolio showcasing my web development projects, skills, and contact options, designed for a clean and engaging experience.",
    github: "https://github.com/estheroluwabuyi/My-Portfolio",
    live: "https://esther-oluwabuyi-portfolio.vercel.app/",
    stack: "React, JavaScript, Tailwind CSS, Framer Motion",
  },
  {
    title: "CountryFinder",
    img: countryFinder,
    subtitle:
      "A user-friendly web app to search and explore countries, displaying key info like population, official language, capital, continent, and flag.",
    github: "https://github.com/estheroluwabuyi/CountryFinder",
    live: "https://countryfinder-the-code-gal.netlify.app/",
    stack: "HTML, CSS, JavaScript, REST API",
  },
  // {
  //   title: "Todo List",
  //   img: todolist,
  //   subtitle:
  //     "A todo list app that lets users add, edit, and delete tasks, with filtering options for completed and pending tasks. It stores data in local storage.",
  //   github: "https://github.com/estheroluwabuyi/TodoList-App",
  //   live: "https://todo-list-app-thecodegal-estheroluwabuyis-projects.vercel.app/",
  //   stack: "React, JavaScript, CSS, LocalStaorage",
  // },
];

function Projects() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="min-h-screen bg-black pt-[10rem] px-[2rem] md:pt-[13rem] pb-[7rem] ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-[2.5rem] font-poppins md:text-[4rem] font-bold text-primary mb-[3rem] text-center">
            Here's a Glimpse of My Work So Far;
          </h1>
          <ul className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
            {projects.map((project, index) => (
              <li
                key={index}
                className={clsx(
                  "bg-primary/10 shadow-lg text-primary border border-primary/5 rounded-xl p-6 flex flex-col gap-5 transition-all duration-1000 ease-in-out",
                  {
                    "bg-primary/15!": active === index,
                  }
                )}
                onMouseOver={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onTouchStart={() => setActive(index)}
                onTouchEnd={() => setActive(null)}
              >
                <div className=" overflow-hidden rounded-lg mb-4 border border-primary/20 ">
                  <img
                    src={project.img}
                    alt={project.title}
                    width={300}
                    height={180}
                    className={clsx(
                      "w-full h-auto  object-cover transition-all duration-3000 ease-in-out",
                      {
                        "scale-105": active === index,
                      }
                    )}
                  />
                </div>
                <div className="text-center mt-5">
                  <h3 className="text-[1.5rem] lg:text-[1.7rem] font-medium">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-[1.2rem] lg:text-[1.3rem] text-primary/80 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <div className="text-center mt-3 ">
                  <p className="text-base md:text-[1.2rem] lg:text-[1.3rem]">
                    <span className="font-medium  mr-2.5">Tech Stack:</span>
                    <span className="text-primary/80">
                      {project.stack}
                    </span>{" "}
                  </p>
                </div>

                <div className="flex text-[2rem] md:text-[2.5rem] items-center justify-center gap-[2rem] mt-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, opacity: 1 }}
                    initial={{ opacity: 0.85 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mr-4"
                  >
                    <FaGithub title="GitHub Code" />
                  </motion.a>

                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, opacity: 1 }}
                    initial={{ opacity: 0.85 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FiExternalLink title="Live Demo" />
                  </motion.a>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <Footer bg="bg-black" />
    </>
  );
}

export default Projects;
