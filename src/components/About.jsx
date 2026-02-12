import React from "react";
import { CoderImg, ProfileImg } from "../assets";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdWifiCalling2 } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20 ">
      <div className=" lg:w-1/2 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md overflow-hidden">
        <img
          src={CoderImg}
          className="h-full w-full object-cover p-1 rounded-md ease-in-out duration-300 hover:scale-125"
        />
      </div>

      <div className="w-full flex flex-col">
        <p className="text-3xl font-bold text-black dark:text-white  ">
          About Me
        </p>
        <p className="text-lg text-black dark:text-gray-400 leading-10">
          I am a passionate Full Stack Developer with hands-on experience in
          building real-world web applications using the MERN stack. I recently
          completed my Full Stack Developer Internship at Sheryians Private
          Limited , where I worked on production-level features and improved my
          problem-solving skills
        </p>

        <div className="mt-5 2xl:mt-10 flex flex-wrap gap-5">
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
            <FaUserAlt size={14} />
            Sabhimanu Patel
          </p>
          <a href="#email">
            <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
              <MdOutlineAlternateEmail size={14} /> sabhimanu707@gmail.com
            </p>
          </a>
          <a
            href="https://wa.me/+917898766708"
             target="_blank"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer"
          >
            <BsWhatsapp size={14} /> +91 7898766708
          </a>
          <a
            href="/sabhimanuResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer hover:bg-[#0a1f4d] transition"
          >
            <IoNewspaperOutline size={14} /> Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
