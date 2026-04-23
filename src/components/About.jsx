import React from "react";
import Aboutimg from "../assets/amna.png";
import {
  FaChevronRight,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbLetterC } from "react-icons/tb";

function About() {
  return (
    <div id="about" className="py-20 bg-gray-900 z-50 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-11 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-20 items-center">
          {/* image section */}
          <div>
            <img
              src={Aboutimg}
              alt=""
              className="w-[300px] md:w-[900px] rounded-full border border-blue-600 shadow-[0px_0px_25px_5px_rgba(29,78,216,0.7)]"
            />
          </div>
          {/* paragrapgh section */}
          <div className="p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
            <p className="text-lg leading-7 mb-6">
              Hi! I'm Amna Khatoon a passionate MERN Stack Developer with
              hands-on experience in building modern, responsive, and scalable
              web applications. I specialize in MongoDB, Express.js, React.js,
              and Node.js, focusing on clean code, optimized performance, and
              smooth user experiences.
            </p>
            <p className="text-lg leading-7 mb-6">
              I enjoy transforming ideas into fully functional digital products
              from designing intuitive interfaces to building secure backend
              APIs. I'm always excited to learn new technologies, solve
              real-world problems, and contribute to impactful projects.
            </p>
            <p className="text-lg leading-7 mb-6">
              I believe in writing clean, reusable code and continuously
              improving myself as a developer. My goal is to build applications
              that are fast, user-friendly, and scalable.
            </p>
            <div className="mt-10">
              <h1 className="font-bold text-3xl mb-6 text-blue-400 text-center">
                My Skills
              </h1>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {[
                  {
                    name: "HTML",
                    icon: <FaHtml5 className="text-orange-500 text-3xl" />,
                  },
                  {
                    name: "CSS",
                    icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
                  },
                  {
                    name: "JavaScript",
                    icon: (
                      <IoLogoJavascript className="text-yellow-400 text-3xl" />
                    ),
                  },
                  {
                    name: "React.js",
                    icon: <FaReact className="text-blue-400 text-3xl" />,
                  },

                  {
                    name: "Next.js",
                    icon: <SiNextdotjs className="text-blue-400 text-3xl" />,
                  },
                  {
                    name: "Tailwind CSS",
                    icon: <FaCss3Alt className="text-cyan-400 text-3xl" />,
                  },
                  {
                    name: "Node.js",
                    icon: <FaNodeJs className="text-green-500 text-3xl" />,
                  },
                  {
                    name: "Express.js",
                    icon: <SiExpress className="text-gray-300 text-3xl" />,
                  },
                  {
                    name: "MongoDB",
                    icon: <SiMongodb className="text-green-600 text-3xl" />,
                  },
                  {
                    name: "GitHub",
                    icon: <FaGithub className="text-white text-3xl" />,
                  },
                  {
                    name: "C & C++",
                    icon: <TbLetterC className="text-blue-300 text-3xl" />,
                  },
                  {
                    name: "Python",
                    icon: <FaPython className="text-yellow-300 text-3xl" />,
                  },
                  {
                    name: "Java",
                    icon: <FaJava className="text-red-400 text-3xl" />,
                  },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="
                               group relative p-5 rounded-xl bg-gray-900 border border-gray-700
                                shadow-[0_0_20px_rgba(0,0,0,0.4)]
                                hover:shadow-[0_0_30px_10px_rgba(59,130,246,0.5)]
                              transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center gap-3"
                  >
                    {/* Glow Layer */}
                    <div
                      className="
                        absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
                        bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 blur-xl"
                    ></div>

                    {/* Icon */}
                    <div className="relative">{skill.icon}</div>

                    {/* Skill Name */}
                    <p className="relative text-lg font-semibold text-gray-300 group-hover:text-white transition">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button className="px-3 mt-5 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1">
              Contact
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
