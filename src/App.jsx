import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Email from "./components/Email";
import Works from "./components/Works";
import Skills from "./components/Skills";
import About from "./components/About";
import Tools from "./components/Tools";
import Header from "./components/Header";
import Experience from "./components/Experience";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div
      className={`w-full h-full min-h-screen bg-white ${darkMode ? "dark" : ""}`}
    >
      <div className=" w-full h-full min-h-screen bg-white  ">
        <div className="dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]  ">
          <NavBar
            darkMode={darkMode}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            toggleTheme={toggleTheme}
          />
          <section id="home" className="px-0 lg:px-5 py-10 lg:py-2 ">
            <Header />{" "}
          </section>
          <section id="home" className="w-full bg-[#061130] py-20 border">
            <Tools />{" "}
          </section>
          <section
            id="about"
            className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e] border"
          >
            <About />
          </section>

          <section
            id="skills"
            className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] border"
          >
            <Skills />
          </section>
          <section
            id="skills"
            className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] border"
          >
            <Experience />
          </section>

          <section
            id="project"
            className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e] border"
          >
            <Works />
          </section>

          <div   id="email" className="w-full px-0 lg:px-5  py-5 lg:py-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] ">
            <Email />
          </div>
          <div className="w-full px-0 lg:px-5  py-5 lg:py-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] ">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
