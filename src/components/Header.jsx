import React from "react";
import { ProfileImg } from "../assets";

const Header = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-5 md:px-10 gap-5 py-5 mt-10 md:gap-15">
      <div className="flex flex-col mb-20">
        <span className="text-lg font-bold text-orange-700 dark:text-orange-400">
          FULL-STACK DEVELOPER
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-neutral-100">
          Hi, I'm <span className="text-orange-500">Sabhimanu Patel</span>
        </h1>
        <p className="text-md text-black dark:text-gray-100 mt-5 2xl:mt-10 max-w-[700px]">
          Full-Stack Developer who builds responsive React interfaces, develops
          secure Node.js servers and deploys applications on AWS. Looking for a
          full-stack developer role where I can build and ship real products.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#project">
            <button className="text-lg font-medium bg-orange-500 rounded-md px-5 py-3 text-white">
              View Projects
            </button>
          </a>
          <a href="/Sabhimanu_Patel_Resume.pdf" target="_blank">
            <button className="text-lg font-medium rounded-md px-5 py-3 border border-orange-600 text-orange-600 dark:text-orange-400">
              Download Resume
            </button>
          </a>
          <a href="#email">
            <button className="text-lg font-medium bg-orange-700 rounded-md px-5 py-3 text-white">
              Contact Me
            </button>
          </a>
        </div>
      </div>

      <div className="border rounded-full border-gray-500 dark:border-gray-200 w-[300px] h-[300px] relative overflow-hidden">
        <img
          className="w-full h-full rounded-full object-cover  origin-top scale-125 absolute hover:scale-150 duration-500"
          src={ProfileImg}
          alt="Sabhimanu Patel"
        />
      </div>
    </div>
  );
};

export default Header;
