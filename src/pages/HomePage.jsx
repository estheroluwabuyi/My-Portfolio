import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import NavBar from "./NavBar";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let timer;
    const handleLoad = () => {
      timer = setTimeout(() => setIsLoaded(true), 3000);
    };

    window.addEventListener("load", handleLoad);

    if (document.readyState === "complete") {
      timer = setTimeout(() => setIsLoaded(true), 2000);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>{!isLoaded && <Preloader />}</AnimatePresence>
      {isLoaded && (
        <div className="h-screen w-full bg-gradient-to-r from-blue-500 to-purple-500">
          <NavBar />
        </div>
      )}
    </>
  );
};

export default HomePage;
