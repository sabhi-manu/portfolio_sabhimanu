import React from "react";
import { skills } from "../data";


const Skills = () => {
  return (
    <div className="flex flex-col py-20 ">
      <h4 className="text-2xl font-bold dark:text-white text-black  text-center mb-10">
        Technical Skills{" "}
      </h4>
      <div className="w-full flex flex-wrap gap-10 items-center justify-center">
        {skills.map((item, index) => (
          <div key={index} className="flex gap-4 shadow-lg py-2 px-6 bg-[#04133e] rounded-full items-center hover:animate-bounce ease-in-out duration-500">
            <div className="w-10 h-10 ">
              <img src={item.icon} alt="skill icon" className="object-cover" />
            </div>
            <p className="text-md font-semibold text-white">{item.name}</p>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Skills;
