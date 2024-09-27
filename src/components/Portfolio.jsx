import { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { AiFillGithub } from "react-icons/ai";
import ShinyEffect from "./ShinyEffect";

const projects = [
  {
    img: project1,
    title: "Projeto #1",
    description: "UI para desenvolvimento frontend usando React.",
    links: {
      site: "https://checkout-two-gamma.vercel.app/",
      github: "https://github.com/jacintohub/checkout",
    },
  },
  {
    img: project2,
    title: "Projeto #2",
    description: "Aplicação Fullstack construída com Node.js e MongoDB.",
    links: {
      site: "https://checkout-two-gamma.vercel.app/",
      github: "https://github.com/jacintohub/checkout",
    },
  },
  {
    img: project3,
    title: "Projeto #3",
    description: "Aplicação Mobile-friendly usando React Native.",
    links: {
      site: "https://checkout-two-gamma.vercel.app/",
      github: "https://github.com/jacintohub/checkout",
    },
  },
  {
    img: project4,
    title: "Projeto #4",
    description: "Plataforma E-commerce com várias funcionalidades.",
    links: {
      site: "https://checkout-two-gamma.vercel.app/",
      github: "https://github.com/jacintohub/checkout",
    },
  },
  {
    img: project5,
    title: "Projeto #5",
    description: "Dashboard personalizado com React e Redux.",
    links: {
      site: "https://checkout-two-gamma.vercel.app/",
      github: "https://github.com/jacintohub/checkout",
    },
  },
  {
    img: project6,
    title: "Projeto #6",
    description: "Aplicação de chat em tempo real usando WebSockets.",
    links: {
      site: "https://checkout-two-gamma.vercel.app/",
      github: "https://github.com/jacintohub/checkout",
    },
  },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div className="relative max-w-[1100px] mx-auto p-6 md:my-20 flex flex-col md:flex-row items-center bg-gradient-to-b from-[#232526] to-[#414345] rounded-xl shadow-lg">
      {/* Apresentação do Projeto */}
      <div className="z-10 glass p-8 w-full max-w-[600px] border-2 border-gray-600 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
        <div className="w-full h-80 overflow-hidden rounded-lg">
          <img
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
            className="w-full h-full object-cover rounded-md mb-4 transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-100 my-4">
          {projects[currentProject].title}
        </h3>
        <p className="text-gray-300 mb-6">
          {projects[currentProject].description}
        </p>
        <div className="flex space-x-4">
          <a
            href={projects[currentProject].links.site}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            Ver Site
          </a>
          <a
            href={projects[currentProject].links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-gray-100 text-2xl rounded-lg hover:bg-gray-700 transition-transform duration-300 hover:scale-105"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>

      <div className="absolute inset-0 ">
        <div className="hidden md:block">
          <ShinyEffect left={100} top={0} size={1300} />
        </div>
      </div>

      {/* Lista de Projetos */}
      <ul className="z-10 ml-10 flex flex-row md:flex-col gap-8 flex-wrap justify-center mt-8 md:mt-0 md:gap-4">
        {projects.map((project, index) => (
          <li
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-4 max-w-[150px] text-center transition-all duration-300 hover:bg-slate-800 hover:shadow-lg ${
              currentProject === index ? "bg-slate-900 scale-105 shadow-xl" : ""
            }`}
          >
            <span className="text-lg font-semibold">{project.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
