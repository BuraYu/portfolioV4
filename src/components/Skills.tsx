import React, { useEffect } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { useTheme } from "../contexts/ThemeContext";
import GradientDivider from "./ui/GradientDivider";
import AOS from "aos";
import "aos/dist/aos.css";

const techStacks = {
  frontend: [
    { icon: <SiJavascript />, label: "JavaScript", color: "text-yellow-400" },
    { icon: <SiTypescript />, label: "TypeScript", color: "text-blue-500" },
    { icon: <SiReact />, label: "React", color: "text-cyan-400" },
    {
      icon: <SiNextdotjs />,
      label: "NextJS",
      color: "text-black dark:text-white",
    },
    { icon: <SiTailwindcss />, label: "Tailwind", color: "text-sky-400" },
    { icon: <SiRedux />, label: "Redux", color: "text-purple-500" },
    { icon: <SiSass />, label: "SASS", color: "text-pink-400" },
  ],
  backend: [
    { icon: <SiNodedotjs />, label: "NodeJS", color: "text-green-600" },
    {
      icon: <SiExpress />,
      label: "ExpressJS",
      color: "text-gray-800 dark:text-gray-200",
    },
    { icon: <SiMongodb />, label: "MongoDB", color: "text-green-500" },
  ],
};

const Skills: React.FunctionComponent<{}> = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section
      id="skills"
      className="flex items-center justify-center relative overflow-hidden py-20 px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-teal-900/20"></div>
      <div className="relative z-10 w-full max-w-[1148px] flex flex-col gap-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <GradientDivider />
        </div>
        {Object.entries(techStacks).map(([section, skills]) => (
          <div
            key={section}
            className="flex flex-col md:flex-row justify-between items-start gap-8"
          >
            <h2
              className={`text-[38px] font-anton uppercase dark:text-gray-400 text-gray-500 bg-clip-text tracking-tighter font-bold`}
            >
              {section}
            </h2>

            <div
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-3 md:w-[650px]"
              data-aos="fade-right"
            >
              {skills.map(({ icon, label, color }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 transition-transform hover:scale-105 cursor-pointer"
                >
                  <div
                    className={`w-10 h-10 text-[28px] flex items-center justify-center ${color}`}
                  >
                    {icon}
                  </div>
                  <span
                    className={`text-[20px] ${
                      isDarkMode ? "text-gray-300" : "text-gray-800"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
