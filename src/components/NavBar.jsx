import React from "react";
import { FiSun } from "react-icons/fi";
import { MdNightlight } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";


const NavBar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className="w-full items-center justify-between py-4 px-10">
      <div className="flex items-center justify-between w-full ">
        <a href="/" className="text-2xl font-bold text-blue-500 cursor-pointer">
          #Sabhimanu
        </a>
        <ul className="hidden md:flex gap-10 text-lg text-slate-700 dark:text-gray-300">
          <li className="cursor-pointer hover:text-blue-700">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer hover:text-blue-700">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer hover:text-blue-700">
            <a href="#project">Project</a>
          </li>
        </ul>
        <button onClick={toggleTheme}>
          {darkMode ? (
            <FiSun size={24} color={"white"} />
          ) : (
            <MdNightlight size={24} color={"gray"} />
          )}
        </button>

        <div className="md:hidden">
          <button onClick={toggleMenu} type="button">
            <BiMenu
              size={26}
              className={`${isOpen ? "hidden" : "block"} text-gray-800 dark:text-gray-200 `}
            />{" "}
            <IoMdClose
              size={26}
              className={`${isOpen ? "block" : "hidden"} text-gray-800 dark:text-gray-200 `}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`${isOpen ? "block pt-4" : "hidden"} md:hidden  px-5 py-2`}
      >
        <div className="flex flex-col gap-4 text-md text-gray-700 dark:text-neutral-200">
          <a href="#home" onClick={toggleMenu} className="cursor-pointer">
            Home
          </a>
          <a href="#about" onClick={toggleMenu} className="cursor-pointer">
            About
          </a>
          <a href="#projects" onClick={toggleMenu} className="cursor-pointer">
            Projects
          </a>
        </div>
      </div>

     
      
    </div>
  );
};

export default NavBar;
