import React, { useState } from "react";
import { CoderImg } from "../assets";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const EMAIL = "sabhimanu707@gmail.com";

const chipClass =
  "flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer hover:bg-[#0a1f4d] transition";

const About = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">
      <div className="lg:w-1/2 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md overflow-hidden">
        <img
          src={CoderImg}
          alt="Illustration of a developer working on a laptop"
          className="h-full w-full object-cover p-1 rounded-md ease-in-out duration-300 hover:scale-125"
        />
      </div>

      <div className="w-full flex flex-col">
        <p className="text-3xl font-bold text-black dark:text-white">
          About Me
        </p>
        <p className="text-lg text-black dark:text-gray-400 leading-8 mt-3">
          I build full-stack web applications with the MERN stack, from the
          interface to the server to the cloud. During my Full Stack Developer
          internship at Sheryians, I cut API response time from 3s to 100ms
          using Redis caching and message queues, and fixed slow database
          queries. My latest project, Memorbit, is a travel story app that I
          deployed on AWS with a custom VPC, load balancer, CloudFront and
          Auto Scaling.
        </p>

        <div className="mt-5 2xl:mt-10 flex flex-wrap gap-5">
          <button type="button" onClick={copyEmail} className={chipClass}>
            <MdOutlineEmail size={14} />
            {copied ? "Email copied!" : EMAIL}
          </button>
          <a
            href="https://wa.me/917898766708"
            target="_blank"
            rel="noopener noreferrer"
            className={chipClass}
          >
            <BsWhatsapp size={14} /> +91 7898766708
          </a>
          <a
            href="https://www.linkedin.com/in/sabhimanupatel/"
            target="_blank"
            rel="noopener noreferrer"
            className={chipClass}
          >
            <FaLinkedin size={14} /> LinkedIn
          </a>
          <a
            href="https://github.com/sabhi-manu"
            target="_blank"
            rel="noopener noreferrer"
            className={chipClass}
          >
            <FaGithub size={14} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;