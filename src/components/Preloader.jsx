import { motion, AnimatePresence } from "framer-motion";
import Esther from "/Esther.png"

function Preloader() {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed flex h-full w-full flex-col justify-center items-center bg-primary z-50"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="backdrop-blur-md bg-primary/50 rounded-2xl shadow-md px-7 pt-7"
      >
        <img
          src={Esther}
          alt="Profile Avatar"
          loading="eager"
          className="w-[100px] h-auto"
        />
      </motion.div>
      <div className="absolute bottom-0 flex px-3 pb-7 gap-2 font-semibold md:text-[1.7rem] text-[1.25rem] font-poppins  preloader-text">
        <h1>Esther Oluwabuyi</h1>-<h2>Frontend Developer</h2>
      </div>
    </motion.section>
  );
}

export default Preloader;
