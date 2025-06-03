import clsx from "clsx";
import { useState } from "react";

import { motion } from "framer-motion";

import Footer from "../components/sections/Footer";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import cyberposture from "/images/projects/cyberposture.png";
import talentsncrowns from "/images/projects/talenntsncrowns.png";
import grilli from "/images/projects/grilli.png";
import portfolio from "/images/projects/portfolio.png";
import todolist from "/images/projects/todolist.png";
import countryFinder from "/images/projects/countryfinder.png";

const projects = [
  {
    title: "TalentsNCrowns",
    img: talentsncrowns,
    subtitle:
      "A job matching platform that connects job seekers with employers in creative industries",
    github: "https://github.com/archsaintnexus/talent-n-crowns-client",
    live: "https://talentncrowns.vercel.app/",
  },
  {
    title: "Grilli",
    img: grilli,
    subtitle: "A modern food website with interactive and a stylish layout",
    github: "https://github.com/estheroluwabuyi/Grilli-Website",
    live: "https://grilli-restaurant-thecodegal.netlify.app/",
  },
  {
    title: "CyberPosture",
    img: cyberposture,
    subtitle:
      "A responsive landing page showcasing cybersecurity services and solutions",
    github: "https://github.com/estheroluwabuyi/cyberposture--v2",
    live: "https://cyberposture-the-code-gal.netlify.app/",
  },

  {
    title: "Portfolio",
    img: portfolio,
    subtitle:
      "My personal portfolio to showcase my projects and skills as a developer",
    github: "https://github.com/estheroluwabuyi/My-Portfolio",
    live: "https://esther-oluwabuyi-portfolio.vercel.app/",
  },
  {
    title: "CountryFinder",
    img: countryFinder,
    subtitle:
      "A simple web app to search for countries and view useful details",
    github: "https://github.com/estheroluwabuyi/CountryFinder",
    live: "https://countryfinder-the-code-gal.netlify.app/",
  },
  {
    title: "Todo List",
    img: todolist,
    subtitle:
      "A task manager with features to add, edit, group, and filter tasks by completion status",
    github: "https://github.com/estheroluwabuyi/TodoList-App",
    live: "https://todo-list-app-thecodegal-estheroluwabuyis-projects.vercel.app/",
  },
];

function Projects() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="min-h-screen bg-black pt-[10rem] px-[2rem] md:pt-[13rem] pb-[7rem]">
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
                className=" bg-secondary shadow-lg text-primary border border-primary/5 rounded-xl p-6 flex flex-col gap-5"
              >
                <div
                  className=" overflow-hidden rounded-lg mb-4 border border-primary/20 "
                  onMouseOver={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                  onTouchStart={() => setActive(index)}
                  onTouchEnd={() => setActive(null)}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    width={300}
                    height={300}
                    className={clsx(
                      "w-full h-auto  object-cover transition-transform duration-600 ease-in-out",
                      {
                        "scale-105": active === index,
                      }
                    )}
                  />
                </div>
                <div className="text-center mt-5">
                  <h3 className="text-[1.5rem] font-medium">{project.title}</h3>
                  <p className="text-base md:text-[1.2rem] text-primary/80 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex text-[2rem] md:text-[2.5rem] items-center justify-center gap-[2rem] mt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub title="GitHub Code" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink title="Live Demo" />
                  </a>
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

/*
https://talentncrowns.vercel.app/
https://github.com/archsaintnexus/talent-n-crowns-client

https://cyberposture-the-code-gal.netlify.app/
https://github.com/estheroluwabuyi/cyberposture--v2

https://grilli-restaurant-thecodegal.netlify.app/
https://github.com/estheroluwabuyi/Grilli-Website

https://todo-list-app-thecodegal-estheroluwabuyis-projects.vercel.app/
https://github.com/estheroluwabuyi/TodoList-App

https://esther-oluwabuyi-portfolio.vercel.app/
https://github.com/estheroluwabuyi/My-Portfolio

https://countryfinder-the-code-gal.netlify.app/
https://github.com/estheroluwabuyi/CountryFinder
 */
