import { useState } from "react";
import emailjs from "@emailjs/browser";

import Footer from "../components/sections/Footer";
import { FaEnvelope } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import { RiCheckLine } from "react-icons/ri";
import { FiAlertCircle } from "react-icons/fi";

import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ success: null });
  const [loading, setLoading] = useState(false);
  const isPopupOpen = status.success !== null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_5ozdyqs";
    const templateID = "template_u9a57u4";
    const publicKey = "vgngdXI1vHXskv64I";

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        setStatus({ success: true });
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      },
      (error) => {
        setStatus({ success: false });
        setLoading(false);
      }
    );
  };

  const handleClosePopup = () => {
    setStatus({ success: null });
  };

  return (
    <>
      <div className="min-h-screen bg-black pb-[7rem]  pt-[10rem] px-5 md:pt-[13em] flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
          
          className=" w-full bg-secondary border border-primary/20 rounded-xl py-15 px-7 sm:px-10 lg:px-20 md:max-w-6xl mx-auto"
        >
          <h2 className="text-[2.5rem] font-poppins md:text-[4rem] font-bold text-primary mb-4 text-center">
            Contact Me
          </h2>
          <p className="text-primary text-[1.25rem] md:text-[1.5rem] mb-15 text-center font-poppins">
            I'd love to hear from you! Drop a message below{" "}
            <FaEnvelope className=" ml-2 text-primary inline" />
          </p>

          <form onSubmit={handleSubmit} className="space-y-7  ">
            <input
              type="text"
              name="name"
              placeholder="Enter name here"
              value={form.name}
              disabled={isPopupOpen || loading}
              onChange={handleChange}
              className="w-full p-5 py-7 rounded-lg bg-black border border-primary/20 text-primary placeholder-primary/70 focus:outline-none focus:ring-2 focus:ring-primary"
              style={
                isPopupOpen || loading
                  ? { cursor: "not-allowed", opacity: 0.5 }
                  : {}
              }
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter email here"
              value={form.email}
              onChange={handleChange}
              disabled={isPopupOpen || loading}
              className="w-full  p-5 py-7 rounded-lg bg-black border border-primary/20 text-primary  placeholder-primary/70  focus:outline-none focus:ring-2 focus:ring-primary"
              style={
                isPopupOpen || loading
                  ? { cursor: "not-allowed", opacity: 0.5 }
                  : {}
              }
              required
            />
            <textarea
              name="message"
              placeholder="Enter your Message"
              value={form.message}
              disabled={isPopupOpen || loading}
              onChange={handleChange}
              rows="5"
              className="w-full p-5 py-7 rounded-lg bg-black border border-primary/20 text-primary  placeholder-primary/70 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              style={
                isPopupOpen || loading
                  ? { cursor: "not-allowed", opacity: 0.5 }
                  : {}
              }
              required
            ></textarea>
            <button
              type="submit"
              className="w-full mt-5 h-[5rem] bg-primary text-secondary hover:bg-primary/90 text-primary py-3 rounded-lg transition duration-300 font-semibold text-[1.35rem] flex items-center justify-center font-poppins hover:scale-105 active:scale-95 disabled:opacity-50"
              style={
                isPopupOpen ||
                loading ||
                !form.name ||
                !form.email ||
                !form.message
                  ? { cursor: "not-allowed", scale: 0.95 }
                  : {}
              }
              disabled={
                loading ||
                !form.name ||
                !form.email ||
                !form.message ||
                isPopupOpen
              }
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <p className="text-primary md:text-[1.5rem] mt-10 text-center ">
              You can find me below{" "}
              <FiArrowDown className=" ml-2 text-primary inline" /> (links in
              footer)!
            </p>

            {status.success ? (
              <div className="backdrop-blur-md bg-primary/80 text-secondary border border-secondary/10 shadow-xl rounded-xl px-6 py-4 text-center text-[1.4rem] max-w-[90%] w-[300px] h-[150px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium flex  justify-center  flex-col gap-5">
                <p className="flex flex-col justify-center items-center gap-5">
                  <RiCheckLine className="text-green-500 text-[5rem]" />
                  Your message has been sent!
                </p>

                <button
                  className=" bg-secondary text-primary px-4 py-1 self-end rounded-lg
                transition duration-300 ease-in-out border
                hover:scale-105 active:scale-95
                hover:border-secondary active:border-secondary
               hover:bg-primary active:bg-primary
                hover:text-secondary active:text-secondary"
                  onClick={handleClosePopup}
                  aria-label="Close popup"
                >
                  Ok
                </button>
              </div>
            ) : status.success === false ? (
              <div className="backdrop-blur-md bg-primary/80 text-secondary border border-secondary/10 shadow-xl rounded-xl px-6 py-4 text-center text-[1.4rem] max-w-[90%] w-[300px] h-[170px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium flex  justify-center  flex-col gap-5">
                <p className="flex flex-col justify-center items-center gap-5">
                  <FiAlertCircle className="text-red-500 text-[5rem]" />
                  Failed to send message. Please try again later.
                </p>

                <button
                  className=" bg-secondary text-primary px-4 py-1 self-end rounded-lg
                transition duration-300 ease-in-out border
                hover:scale-105 active:scale-95
                hover:border-secondary active:border-secondary
               hover:bg-primary active:bg-primary
                hover:text-secondary active:text-secondary"
                  onClick={handleClosePopup}
                  aria-label="Close popup"
                >
                  Close
                </button>
              </div>
            ) : null}
          </form>
        </motion.div>
      </div>

      <Footer bg="bg-black" />
    </>
  );
}

export default Contact;
