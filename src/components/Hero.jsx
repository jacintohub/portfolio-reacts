import profilepic from "../assets/profilepic.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion"; // sugiro usar framer-motion para animações suaves
import ShinyEffect from "./ShinyEffect";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14 px-6">
      {/* Left section - Text and animation */}
      <div className="max-w-[800px]">
        <p className="text-gray-100 md:text-6xl text-3xl tracking-tight leading-tight mb-6">
          HEY, I AM <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] font-extrabold">
            JACINTO LELA
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Developer",
              1000,
              "Web Designer",
              1000,
              "Consultant",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold italic text-[#50a7c7] mt-2"
          />
        </p>
        <h2 className="text-gray-300 text-lg mb-4">
          With 5+ years of experience creating high-quality web solutions.
        </h2>

        {/* Call-to-action buttons */}
        <div className="flex flex-row gap-6 mb-4">
          <button className="transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-[#3d6ca4] via-[#1f7c8f] to-[#50a7c7] z-10 cursor-pointer font-bold text-gray-200 px-6 py-3 bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-lg shadow-md">
            Download CV
          </button>
          <button className="transform transition-transform hover:scale-105 hover:shadow-2xl z-10 cursor-pointer font-bold text-gray-200 px-6 py-3 border border-gray-400 rounded-lg shadow-md">
            View Work
          </button>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden md:overflow-visible">
        <div className="hidden md:block">
          <ShinyEffect left={100} top={200} size={1400} />
        </div>
        <ShinyEffect left={-100} top={0} size={1200} />
      </div>

      {/* Right section - Profile image with infinite slow rotation */}
      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }} // Rotação suave e lenta
      >
        <img
          src={profilepic}
          className="relative w-[300px] md:w-[500px]"
          alt="Profile"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
