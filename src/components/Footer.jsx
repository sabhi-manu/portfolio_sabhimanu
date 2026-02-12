import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <hr className="hidden dark:block" />

      <div className="w-full flex flex-col md:flex-row py-10 px-8 md:px-10 gap-5 lg:gap-25 justify-center ">
        <p className="text-gray-400 text-md tracking-wider">
          @2026 Sabhimanu Patel
        </p>
        <div className="flex flex-col md:flex-row text-md gap-2 md:gap-10 dark:text-white ">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center justify-center  ">
        <p className="text-black font-semibold tracking-wider dark:text-white">
          Social Media
        </p>

        <div className="flex gap-10 text-black text-2xl mb-5 dark:text-white">
        <a href="https://github.com/sabhi-manu">

          <FaGithub className="hover:scale-125" />
        </a>
        <a href="">

          <BsInstagram className="hover:scale-125" />
        </a> 
        <a href="https://www.linkedin.com/in/sabhimanupatel">

          <BsLinkedin className="hover:scale-110" />
        </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
