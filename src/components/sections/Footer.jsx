import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer({ bg = "" }) {
  return (
    <div
      className={`relative flex justify-center items-center flex-col gap-7 z-200 ${bg} py-5 px-5`}
    >
      <div className="flex gap-10 text-[2rem] md:text-[2.5rem] justify-between">
        <a
          href="https://www.linkedin.com/in/esther-oluwabuyi-838651234/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className=" transition hover:scale-110 active:scale-110 duration-600 ease-in-out hover:opacity-80 active:opacity-80" />
        </a>
        <a
          href="https://github.com/estheroluwabuyi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className=" transition hover:scale-110 active:scale-110 duration-600 ease-in-out hover:opacity-80 active:opacity-80" />
        </a>
        <a
          href="https://x.com/thecodegirlie_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className=" transition hover:scale-110 active:scale-110 duration-600 ease-in-out hover:opacity-80" />
        </a>
        <a href="mailto:estheroluwabuyi@gmail.com">
          <HiOutlineMail className=" transition hover:scale-110 active:scale-110 duration-600 ease-in-out hover:opacity-80 active:opacity-80" />
        </a>
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
