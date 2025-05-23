import LinkedParticles from "../LinkedParticles";
import Esther from "/avatar-esther.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative z-50 h-screen w-full  bg-black pt-[7rem]  md:pt-[10rem]">
      {/* HERO */}
      <div className="absolute z-100 flex flex-col justify-center items-center w-full h-full top-0 left-0 px-[2rem]">
        <div className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-[50%] border-2 border-primary bg-secondary p-[2.5px] mb-7">
          <img
            src={Esther}
            alt="Esther's avatar"
            className="w-full h-full rounded-[50%] object-cover"
          />
        </div>

        <div className="text-center">
          <h1 className="text-[2rem] font-poppins sm:text-[2.5rem] md:text-[4rem] font-bold">
            Hi, I'm Esther Oluwabuyi — a Frontend Developer
          </h1>

         <motion.p
  className="text-[1.17rem] mt-5 sm:text-[1.25rem] md:text-[1.65rem] leading-relaxed max-w-2xl sm:max-w-3xl md:max-w-4xl m-auto"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.3 }}
>
  I build fast, responsive, and visually appealing websites with clean
  and seamless user experiences.
</motion.p>
        </div>

        <div>
          <button></button>
        </div>
      </div>

      {/* PARTICLES */}
      <LinkedParticles />
    </section>
  );
}

export default Hero;
