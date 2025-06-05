import { useState } from "react";
import clsx from "clsx";

import html from "/images/tools-icons/html-svgrepo-com.svg";
import css from "/images/tools-icons/css-3-svgrepo-com.svg";
import js from "/images/tools-icons/javascript-svgrepo-com.svg";
import react from "/images/tools-icons/react-svgrepo-com.svg";
import next from "/images/tools-icons/nextjs-svgrepo-com.svg";
import ts from "/images/tools-icons/typescript-official-svgrepo-com.svg";
import tailwind from "/images/tools-icons/tailwind-svgrepo-com.svg";
import git from "/images/tools-icons/git-svgrepo-com.svg";
import vite from "/images/tools-icons/vite-svgrepo-com.svg";
import restApi from "/images/tools-icons/rest-api-icon.svg";
import vscode from "/images/tools-icons/vscode-svgrepo-com.svg";

const toolsList = [
  {
    title: "HTML",
    img: html,
    subtitle: "Structure and semantics for the web",
  },
  {
    title: "CSS",
    img: css,
    subtitle: "Styling and layout design",
  },
  {
    title: "JavaScript",
    img: js,
    subtitle: "Dynamic, interactive functionalities",
  },
  {
    title: "React",
    img: react,
    subtitle: "Building reusable UI components",
  },
  {
    title: "Next.js",
    img: next,
    subtitle: "Server-side rendering and advanced routing",
  },
  {
    title: "TypeScript",
    img: ts,
    subtitle: "Type checking and scalability",
  },
  {
    title: "Tailwind CSS",
    img: tailwind,
    subtitle: "Utility-first, responsive styling",
  },
  {
    title: "REST API",
    img: restApi,
    subtitle: "Fetching and interacting with external data",
  },
  {
    title: "Git & Github",
    img: git,
    subtitle: "Version control and collaboration",
  },
  {
    title: "Vite",
    img: vite,
    subtitle: "Fast development build tool",
  },
  {
    title: "VSCode",
    img: vscode,
    subtitle: "Code editing and debugging",
  },
];

function Tools() {
  const [active, setActive] = useState(null);

  return (
    <section className="pt-[3rem]  bg-black text-primary overflow-hidden">
      <div className=" mx-auto px-4">
        <h1 className="text-[2.5rem] font-poppins md:text-[4rem] font-bold text-primary mb-4 text-center">
          Essential Tools I Use
        </h1>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          As a Frontend Developer, I rely on a variety of tools to streamline my
          workflow and enhance productivity. Here are some of the essential
          tools I use:
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {toolsList.map((tool, index) => (
            <div
              key={index}
              className={clsx(
                "flex flex-col items-center text-center p-4 bg-primary/10 rounded-lg active:shadow-lg transition duration-800 ease-in-out backdrop-blur-md",
                active === index && "bg-primary/20 scale-97",

                "w-[calc(50%-12px)]",
                "md:w-[calc(33.333%-16px)]",
                "lg:w-[calc(20%-19.2px)]"
              )}
              onMouseOver={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              onTouchStart={() => setActive(index)}
              onTouchEnd={() => setActive(null)}
            >
              <img
                src={tool.img}
                alt={tool.title}
                className={clsx(
                  "w-16 h-16 mb-2 transition duration-1000 ease",
                  (index === 4 || index === 7) &&
                    "bg-primary rounded-[100%] border",
                  active === index && "scale-110"
                )}
              />
              <h2 className="font-bold">{tool.title}</h2>
              <p className="text-[1.05rem] text-gray-300">{tool.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
