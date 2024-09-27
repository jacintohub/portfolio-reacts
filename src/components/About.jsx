import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project6 from "../assets/project6.png";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiMongodb,
  DiGithubBadge,
  DiPostgresql,
} from "react-icons/di";

const About = () => {
  return (
    <div
      className="max-w-[1250px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center"
      id="about"
    >
      {/* Primeira seção - Imagem à esquerda, texto à direita */}
      <div className="relative group order-1 md:order-none">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-600 rounded-lg opacity-30 group-hover:opacity-100 transition duration-500 transform group-hover:scale-105"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg">
          <img
            src={project1}
            alt="Projeto 1"
            className="rounded-xl md:max-w-[500px] shadow-md"
          />
        </div>
      </div>

      <div className="p-6 order-2 md:order-none">
        <h2 className="text-gray-100 text-4xl font-bold mb-6 tracking-wider">
          Habilidades
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Com mais de 5 anos de experiência, especializo-me na criação de
          websites visualmente impressionantes e responsivos usando tecnologias
          modernas.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiSass className="text-pink-600" />
          <DiBootstrap className="text-purple-600" />
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
          <DiNodejsSmall className="text-green-500" />
          <DiMongodb className="text-green-700" />
          <DiGithubBadge className="text-gray-200" />
        </div>
      </div>

      {/* Segunda seção - Texto à esquerda, imagem à direita */}
      <div className="p-6 order-4 md:order-none">
        <h2 className="text-gray-100 text-4xl font-bold mb-6 tracking-wider">
          Experiência Frontend
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Eu me destaco na criação de aplicações web modernas e responsivas,
          utilizando as mais recentes tecnologias frontend.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiSass className="text-pink-600" />
          <DiBootstrap className="text-purple-600" />
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
        </div>
      </div>

      <div className="relative group order-3 md:order-none">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-600 rounded-lg opacity-30 group-hover:opacity-100 transition duration-500 transform group-hover:scale-105"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg">
          <img
            src={project2}
            alt="Projeto 2"
            className="rounded-xl md:max-w-[500px] shadow-md"
          />
        </div>
      </div>

      {/* Terceira seção - Imagem à esquerda, texto à direita (mesmo que a primeira) */}
      <div className="relative group order-5 md:order-none">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-600 rounded-lg opacity-30 group-hover:opacity-100 transition duration-500 transform group-hover:scale-105"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg">
          <img
            src={project6}
            alt="Projeto 3"
            className="rounded-xl md:max-w-[500px] shadow-md"
          />
        </div>
      </div>

      <div className="p-6 order-6 md:order-none">
        <h2 className="text-gray-100 text-4xl font-bold mb-6 tracking-wider">
          Experiência Fullstack
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Eu forneço soluções completas usando as mais modernas tecnologias
          fullstack.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiMongodb className="text-green-700" />
          <DiPostgresql className="text-blue-800" />
          <DiReact className="text-blue-500" />
          <DiNodejsSmall className="text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default About;
