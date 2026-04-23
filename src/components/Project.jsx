import React from "react";
import blog from "../assets/blog.png";
import todo from "../assets/todo.png";
import ecommerce from "../assets/ecommerce.png";
import restorent from "../assets/restorent.png";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Blog App",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
    techStack: ["React.js", "MongoDB", "Node.js", "Tailwind CSS"],
    link: "https://blog.app/",
    github: "https://github.com/amna-khatoon",
    image: blog,
  },
  {
    title: "Smart Task Management System",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
    techStack: ["React", "Node.js", "MongoDB", "CSS"],
    link: "https://todo.app/",
    github: "https://github.com/amna-khatoon/todo-app-mern",
    image: todo,
  },
  {
    title: "Restaurant App",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
    techStack: ["React.js", "CSS"],
    link: "https://restorent.app/",
    github: "https://github.com/amna-khatoon/restaurant-table-booking",
    image: restorent,
  },
  {
    title: "E-Commerce Website",
    description:
      "Modern e-commerce web application with product listing, cart system, and responsive UI.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://ecommerce.app/",
    github: "https://github.com/amna-khatoon/ecommerce-website",
    image: ecommerce,
  },
];
function Project() {
  return (
    <section id="project" className="bg-gradient-to-r bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-950 rounded-lg shadow-lg overflow-hidden 
           transform transition-all duration-300 
           hover:scale-105
           hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-purple-600/20
           hover:shadow-[0_0_35px_8px_rgba(59,130,246,0.4)]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover px-3 pt-3 rounded-2xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors"
                  >
                    <FaGithub /> Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
