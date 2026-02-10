import React from "react";
import { skills, softskills } from "../data";
import { BsCheck2All } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="flex flex-col py-20 ">
      <h4 className="text-2xl font-bold dark:text-white text-black  text-center mb-10">
        Technical Skills{" "}
      </h4>
      <div className="w-full flex flex-wrap gap-10 items-center justify-center">
        {skills.map((item, index) => (
          <div className="flex gap-4 shadow-lg py-2 px-6 bg-[#04133e] rounded-full items-center hover:animate-bounce ease-in-out duration-500">
            <div className="w-10 h-10 ">
              <img src={item.icon} alt="skill icon" className="object-cover" />
            </div>
            <p className="text-md font-semibold text-white">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-[5rem] ">
        <h4 className="text-3xl font-bold text-black dark:text-white text-center">
          Soft Skills
        </h4>
        <div className="flex items-center justify-center flex-col md:flex-row gap-14 mt-10">

          <div className="flex  flex-col bg-[#000000] dark:bg-[#334cff10] p-6 rounded-4xl hover:scale-110 ease-in-out duration-500  ">
            {softskills.slice(0,5).map((soft, index) => (
              <div key={index+ soft} className="flex items-center gap-3 p-4">
                <BsCheck2All color="white" size={22} />
                <p className="text-white" > {soft} </p>
              </div>
            ))}
          </div>
          <div className="flex  flex-col bg-[#000000] dark:bg-[#334cff10] p-6 rounded-4xl hover:scale-110 ease-in-out duration-500  ">
            {softskills.slice(5,15).map((soft, index) => (
              <div key={index+ soft} className="flex items-center gap-3 p-4">
                <BsCheck2All color="white" size={22} />
                <p className="text-white" > {soft} </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
