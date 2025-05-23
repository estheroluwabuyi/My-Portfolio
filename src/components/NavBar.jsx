import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import closeIcon from "/images/close.svg";
import menuIcon from "/images/menu.svg";

const links = [
  { link: "/about", text: "About me" },
  { link: "/projects", text: "Projects" },
  { link: "/contact", text: "Contact" },
];

const slideVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // keep track of when users scroll on page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // clean up function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // close nav links when users move to a new page
  useEffect(() => {
    setToggle(false);
  }, [location.pathname]);

  // Toggle nav icons
  const handleToggleIcon = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-150 w-full px-[2rem] py-[1rem] md:py-[2rem] flex justify-between items-center md:justify-around font-poppins transition-colors duration-300 ${
        scrolled ? "bg-black/30 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="text-[3rem] md:text-[4rem] font-great-vibes font-semibold tracking-wide">
        <Link to="/">Esther.</Link>
      </div>

      <div className="md:hidden ">
        <button
          className="w-[45px] h-[45px] p-0.5 z-50 "
          onClick={handleToggleIcon}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {toggle ? (
              <motion.img
                key="close"
                src={closeIcon}
                alt="close menu"
                className="w-full h-full "
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.img
                key="menu"
                src={menuIcon}
                alt="open menu"
                className="w-full h-full "
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </button>

        <AnimatePresence>
          {toggle && (
            <div className="absolute top-full left-0 w-full ">
              <motion.div
                className=" flex flex-col justify-between items-center text-center gap-[1.5rem] p-1.5  text-secondary text-[1.5rem] sm:text-[1.7rem] backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-lg"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 0.4 }}
              >
                {links.map(({ link, text }, index) => (
                  <NavLink
                    key={index}
                    to={link}
                    className="p-[1.5rem] bg-primary w-full text-center rounded-lg hover:bg-primary/90 transition mobile-link "
                  >
                    {text}
                  </NavLink>
                ))}
              </motion.div>{" "}
            </div>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden md:flex justify-around md:gap-[5rem] lg:gap-[7rem] text-[1.7rem]">
        {links.map(({ link, text }, index) => (
          <NavLink
            key={index}
            to={link}
            className="p-[1.5rem] rounded-lg hover:bg-primary/90 hover:!text-secondary transition desktop-link"
          >
            {text}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
