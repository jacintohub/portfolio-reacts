import { FaGithubSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[1300px] mx-auto p-6 md:p-20 mt-12 text-gray-400">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Branding and Social Icons */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-3xl text-gray-200 font-extrabold tracking-wider">
            Jacinto<span className="text-sky-600">.</span>
          </h3>
          <div className="flex flex-row gap-6 justify-center md:justify-start text-4xl">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-125 hover:text-sky-600 hover:rotate-6"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-125 hover:text-pink-600 hover:rotate-6"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-6 md:mt-0 text-center text-gray-500 text-sm md:text-lg hover:text-gray-300 transition-colors duration-300">
          &copy; 2024 Jacinto Lela. Todos os direitos reservados.
        </p>
      </div>

      {/* Bottom Border */}
      <div className="mt-8 h-[1px] bg-gradient-to-r from-sky-600 via-gray-500 to-pink-600 w-full opacity-50"></div>
    </footer>
  );
};

export default Footer;
