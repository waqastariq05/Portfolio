import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Linkedin, Github, Facebook } from "lucide-react";

const HeroSection = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer.",
        "Front End Developer.",
        "UI Designer.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="w-full md:w-[85%] grid grid-flow-row md:grid-cols-2 items-center md:gap-5 mx-auto md:h-screen mb-16 md:mb-0 section"
      id="home"
    >
      {/* -- Left Section (text) */}
      <div className="pt-5 order-2 md:order-none px-5 md:px-0 md:pt-10">
        <div className="whileInView-bounce text-sm font-semibold capitalize text-white bg-black tracking-wide rounded-md sm:py-2 py-3 px-5 w-28 text-center relative md:mb-5 mb-4 animate-bounce delay-100">
          <span>Hi there!</span>
          <div className="border-solid border-t-black border-t-8 border-x-transparent border-x-[9px] border-b-0 absolute -bottom-2 left-12"></div>
        </div>
        <h2 className="text-white lg:text-6xl md:text-5xl text-4xl font-bold mb-5 capitalize">
          i’m Waqas Tariq
        </h2>
        <h3 className="text-textOrange lg:text-4xl md:text-2xl text-xl font-bold lg:mb-7 mb-5">
          <span className="text-textOrange" ref={el}></span>
        </h3>
        <p className="text-white/80 lg:text-base text-sm font-normal mb-10 sm:mb-14 lg:w-[85%]">
          Over 1 year of practical experience with a good knowledge in Full
          Stack development.
        </p>
        <div className="flex flex-wrap items-center gap-5 sm:gap-3">
          <a
            href="#project"
            className="btn w-full sm:w-auto m-0 lg:m-[10px] text-sm sm:text-base"
          >
            Projects
          </a>
          <a
            href="./Waqas_Tariq_Resume.pdf"
            target="_blank"
            className="px-[25px] py-[14px] text-center w-full sm:w-auto text-sm sm:text-base font-semibold rounded-[10px] uppercase tracking-wide border-2 text-white border-white hover:text-black hover:bg-white transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
      {/* -- right Section (img) */}
      <div className="pt-5 md:pt-0 mt-10">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "drop-shadow(0 0 15px rgba(253, 72, 29, 1))" }}
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stopColor="rgba(253, 72, 29, 1)"
                offset="20%"
              ></stop>
              <stop
                id="stop2"
                stopColor="rgba(240, 152, 25, 1)"
                offset="80%"
              ></stop>
            </linearGradient>
          </defs>
          <mask id="mask1" mask-type="alpha">
            <path
              fill="url(#sw-gradient)"
              d="M21,-19.5C28.1,-13.8,35.5,-6.9,35.5,-0.1C35.4,6.8,27.8,13.5,20.7,21C13.5,28.4,6.8,36.6,-1,37.6C-8.7,38.5,-17.4,32.3,-24.4,24.8C-31.5,17.4,-36.9,8.7,-36,0.9C-35.1,-6.9,-27.9,-13.8,-20.9,-19.5C-13.8,-25.2,-6.9,-29.7,0,-29.7C6.9,-29.7,13.8,-25.2,21,-19.5Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
              style={{ transition: "all 0.3s ease 0s" }}
            ></path>
          </mask>
          <g mask="url(#mask1)">
            <path
              fill="url(#sw-gradient)"
              d="M21,-19.5C28.1,-13.8,35.5,-6.9,35.5,-0.1C35.4,6.8,27.8,13.5,20.7,21C13.5,28.4,6.8,36.6,-1,37.6C-8.7,38.5,-17.4,32.3,-24.4,24.8C-31.5,17.4,-36.9,8.7,-36,0.9C-35.1,-6.9,-27.9,-13.8,-20.9,-19.5C-13.8,-25.2,-6.9,-29.7,0,-29.7C6.9,-29.7,13.8,-25.2,21,-19.5Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
              style={{ transition: "all 0.3s ease 0s" }}
            ></path>
            <image href="./me.png" alt="" x={24} y={26} className="w-1/2" />
          </g>
        </svg>
      </div>
      {/* -- Social Media icons */}
      <div className="absolute right-7 top-[40%] sm:right-10 md:top-auto flex flex-col gap-7">
        <a href="https://www.linkedin.com/in/waqas-tariq-705a671bb/">
          <Linkedin
            size={22}
            className="cursor-pointer text-white/90 hover:text-textOrange transition-all duration-200 hover:scale-125"
          />
        </a>
        <a href="https://github.com/waqastariq05">
          <Github
            size={22}
            className="cursor-pointer text-white/90 hover:text-textOrange transition-all duration-200 hover:scale-125"
          />
        </a>
        <a href="https://www.facebook.com/waqas.tariq05">
          <Facebook
            size={22}
            className="cursor-pointer text-white/90 hover:text-textOrange transition-all duration-200 hover:scale-125"
          />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
