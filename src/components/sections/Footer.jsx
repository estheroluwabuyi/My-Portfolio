import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer({ bg = "" }) {
  
  const pulseAnimation = {
    initial: { scale: 0.9 },
    animate: { scale: 1.05 },
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
    whileHover: { scale: 1.2, opacity: 0.8 }, 
  };

  return (
    <div
      className={`relative flex justify-center items-center flex-col gap-7 z-200 ${bg} py-7 px-5`}
    >
      <div className="flex gap-10 text-[2rem] md:text-[2.5rem] justify-between">
        <motion.a
          {...pulseAnimation}
          href="https://www.linkedin.com/in/esther-oluwabuyi-838651234/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          {...pulseAnimation}
          href="https://github.com/estheroluwabuyi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          {...pulseAnimation}
          href="https://x.com/thecodegirlie_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          {...pulseAnimation}
          href="mailto:estheroluwabuyi@gmail.com"
        >
          <HiOutlineMail />
        </motion.a>
      </div>

      <div className="text-center md:text-[1.5rem]">
        <p>
          &copy; {new Date().getFullYear()} Esther Oluwabuyi. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
