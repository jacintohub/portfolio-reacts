import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="flex justify-between text-[17px] text-gray-200 items-center py-8 px-6 max-w-[1300px] mx-auto">
      <a href="/" className="text-3xl font-bold">
        Jacinto<span className="text-sky-600">.</span>
      </a>

      <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
        <li className="relative group">
          <Link to="about" smooth={true} offset={50} duration={500}>
            Sobre
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>

        <li className="relative group">
          <Link to="portfolio" smooth={true} offset={50} duration={500}>
            Portfólio
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>

        <li className="relative group">
          <Link to="contact" smooth={true} offset={50} duration={500}>
            Contato
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>
      </ul>

      <div onClick={toggleNav} className="md:hidden z-30">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "text-center z-20 fixed h-full w-full left-0 top-0 bg-[#232323]"
            : "fixed left-[-100%]"
        }
      >
        <ul className="font-semibold text-4xl space-y-8 mt-24">
          <li>
            <Link
              to="about"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Portfólio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
