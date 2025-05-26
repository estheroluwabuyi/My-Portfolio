import { Link } from "react-router-dom";

import LinkedParticles from "../LinkedParticles";
import Esther from "/images/avatar-esther.jpg";
import { motion } from "framer-motion";
import resume from "/pdf/Esther_Oluwabuyi_CV.pdf";

function Hero() {
  return (
    <section className="relative z-50 h-screen w-full  pt-[7rem]  md:pt-[10rem]">
      {/* HERO */}
      <div className="absolute z-100 flex flex-col justify-center items-center w-full h-full top-0 left-0 px-[2rem]">
        <div className="w-[120px] h-[120px] md:w-[135px] md:h-[135px] rounded-[50%] border-2 border-primary bg-secondary p-[2.5px] mb-7">
          <img
            src={Esther}
            alt="Esther's avatar"
            loading="eager"
            className="w-full h-full rounded-[50%] object-cover filter brightness-75"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3 }}
        >
          <div className="text-center">
            <h1 className="text-[2rem] font-poppins sm:text-[2.5rem] md:text-[4rem] font-bold">
              Hi, I'm Esther Oluwabuyi — a Frontend Developer.
            </h1>

            <p className="text-[1.17rem] mt-5 sm:text-[1.25rem] md:text-[1.65rem] leading-relaxed max-w-2xl sm:max-w-3xl md:max-w-4xl m-auto">
              I build fast, responsive, and visually appealing websites with
              clean and seamless user experiences.
            </p>
          </div>

          <div className="flex gap-[2.5rem]  mt-6 justify-center">
            <a href={resume} download>
              <button
                className="px-7 py-3.5 bg-primary text-secondary rounded-lg font-semibold hover:bg-transparent border transition md:px-10 md:py-5 sm:px-8 sm:py-4 duration-600 ease-in-out
              hover:scale-105 active:scale-95
              hover:border-primary active:border-primary
              hover:text-primary active:text-primary"
              >
                View Resume
              </button>
            </a>

            <Link to="/projects">
              <button
                className="px-7 py-3.5 border border-primary text-primary rounded-lg font-semibold duration-600 ease-in-out transition md:px-10 md:py-5 sm:px-8 sm:py-4
                hover:scale-105 active:scale-95
               hover:bg-primary active:bg-primary
                hover:text-secondary active:text-secondary"
              >
                See Projects
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* PARTICLES */}
      <LinkedParticles />
    </section>
  );
}

export default Hero;
