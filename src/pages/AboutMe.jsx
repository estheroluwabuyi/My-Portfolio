import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import Tools from "../components/sections/Tools.jsx";
import Footer from "../components/sections/Footer.jsx";
import Esther from "/images/About-1.webp";

function AboutMe() {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-black pt-[10rem] px-[2rem] md:pt-[13rem] pb-[7rem]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20">
            {/* Image Section */}
            <section className="lg:self-end p-2 w-full md:w-3/4 lg:w-1/2 max-w-[400px] mb-10 shrink-0">
              <img
                src={Esther}
                alt="Esther Oluwabuyi"
                className="w-full rounded-[40%] bg-secondary p-[0.45rem] h-auto z-100 flex justify-center items-center border-[0.5rem] border-primary"
                width={400}
                height={450}
                loading="eager"
                decoding="async"
              />
            </section>

            {/* Text Section */}
            <section className="w-full lg:max-w-5xl md:max-w-5xl flex flex-col gap-4 ">
              <h1 className="text-[2.5rem] font-poppins md:text-[4rem] font-bold text-primary text-center">
                About Me
              </h1>

              <p className="leading-relaxed text-center lg:text-left lg:text-[1.4rem]">
                Hello! I'm{" "}
                <span className="font-semibold">Esther Oluwabuyi</span>, — a
                frontend developer with over 3 years of experience. I enjoy
                building functional, user-friendly, and visually appealing
                websites, and I love bringing creative ideas to life in the
                browser. Seeing a project grow from a basic structure into
                something dynamic and responsive is always rewarding.
                <br />
                When I’m not coding, I’m usually exploring new technologies,
                journaling, dreaming of travel adventures, or reading (I’m a big
                V.C. Andrews fan!). <br />I believe in continuous learning and
                I’m always looking to grow. I enjoy working with others, and I’m
                excited to connect with people who are building things that
                matter. Let’s create something great together!
              </p>

              <div className="mt-8 flex flex-col md:flex-row gap-8 justify-between text-[1.2rem]">
                <div
                  className={clsx(
                    "bg-primary/10 p-5 rounded-lg shadow-md flex-1 flex flex-col justify-center items-center text-center transition duration-600 ease-in-out hover:bg-primary/20",
                    hover === true && "bg-primary/20"
                  )}
                  onTouchStart={() => setHover(true)}
                  onTouchEnd={() => setHover(false)}
                >
                  <h4 className="text-[1.35rem] font-bold text-primary mb-2">
                    Favourite Quote
                  </h4>
                  <p className="italic">"Dream big, code bigger."</p>
                </div>
              </div>
            </section>
          </div>

          <Tools />
        </motion.div>
      </div>
      <Footer bg="bg-black" />
    </>
  );
}

export default AboutMe;
