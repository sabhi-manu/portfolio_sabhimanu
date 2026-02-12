import React from "react";
import { experienceData } from "../data";

const Experience = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Experience
      </h2>

      <div className="space-y-10">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="p-6 md:p-8 rounded-2xl shadow-md 
                       bg-white dark:bg-[#1e293b] 
                       border border-gray-200 dark:border-gray-700
                       hover:shadow-xl hover:-translate-y-1
                       transition-all duration-300"
          >
            {/* Top Section */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.company} • {exp.employmentType}
                </p>
              </div>

              <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                <p>{exp.duration}</p>
                <p>{exp.location}</p>
              </div>
            </div>

            {/* Responsibilities */}
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-5">
              {exp.responsibilities.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3">
              {exp.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full 
                             bg-gray-200 dark:bg-gray-700 
                             text-gray-800 dark:text-gray-200
                             hover:bg-blue-500 hover:text-white
                             transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
