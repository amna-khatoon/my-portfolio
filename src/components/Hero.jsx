import React from "react";
import { Download } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import profile from "../assets/picture.png";
import { motion } from "framer-motion";
import "../css/style.css";
function Hero() {
  return (
    <section className="h-max md:h-screen bg-gradient-t0-1 bg-gray-950 text-white flex flex-col justify-center items-center z-10 pb-10">
      <div className="hero-section">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between">
        <div className="md:space-y-6 px-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-5xl text-3xl font-bold mb-4"
          >
            Hi👋, I'm <p className="text-blue-400">Amna Khatoon</p>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="md:text-2xl text-lg mb-3"
          >
            Full-Stack Developer | MERN Stack Enthusiant
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300"
          >
            I am a passionate MERN Stack Developer with a strong focus on
            building responsive, user-friendly, and high-performance web
            applications. I love turning ideas into real-world digital solutions
            using MongoDB, Express, React, and Node.js. I enjoy learning new
            technologies, solving problems, and continuously improving my
            development skills.
          </motion.p>
          <motion.a
            href="/cv.pdf"
            download="Amna-Khatoon-CV.pdf"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="px-3 py-2 mt-6 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]"
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>
          <div className="flex gap-3 text-2xl transition-all mt-5 md:mt-0">
            <FaFacebook className="hover:text-blue-400" />
            <FaInstagram className="hover:text-blue-400" />
            <a
              href="https://www.linkedin.com/in/amna-khatoon-a25743284/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaLinkedin className="hover:text-blue-400" />
            </a>
            <FaSquareXTwitter className="hover:text-blue-400" />
            <a
              href="https://github.com/amna-khatoon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-blue-400 cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={profile}
            alt="profile"
            className="rounded-full border-4 border-blue-600 md:w-[350px] w-[200px]
    shadow-[0px_0px_30px_5px_rgba(51,204,255,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
