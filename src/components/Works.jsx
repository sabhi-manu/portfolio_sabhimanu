import React from "react";
import { projects } from "../data";

const Works = () => {
  return (
    <section className="w-full flex flex-col gap-12">
      <h4 className="text-4xl text-center font-bold text-black dark:text-white">
        Projects
      </h4>

      <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
        {projects.map((prj) => (
          <div
            key={prj.id}
            className="w-[350px] rounded-xl overflow-hidden shadow-xl bg-white dark:bg-[#04133e]
                       transition-transform duration-300 hover:-translate-y-2"
          >
            <a
              href={prj.liveLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={prj.img}
                  alt={prj.title}
                  loading="lazy"
                  className="w-full h-[230px] object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300
                                flex items-center justify-center">
                  <span className="text-white font-semibold text-sm tracking-wide">
                    View Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                  {prj.title}
                </h4>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {prj.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
