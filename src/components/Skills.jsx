import React from "react";
import { skillCategories } from "../data.js";



const Skills = () => {
  return (
    <div className="flex flex-col py-20 px-5 md:px-10">
      <h4 className="text-3xl font-bold dark:text-white text-black text-center mb-12">
        Technical Skills
      </h4>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] w-full mx-auto">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-xl border border-gray-600 bg-[#04133e] p-6 shadow-lg"
          >
            <h5 className="text-lg font-bold text-orange-400 mb-4">
              {cat.title}
            </h5>

            <div className="flex flex-wrap gap-3">
              {cat.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex gap-2 items-center rounded-full bg-[#030a1c] px-4 py-2"
                  >
                    <Icon size={20} color={item.color} />
                    <span className="text-sm font-semibold text-white">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {cat.tags && (
              <div className="flex flex-wrap gap-2 mt-4">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-300 border border-gray-600 rounded-md px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;