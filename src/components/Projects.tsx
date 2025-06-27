import React, { useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
// import {  ArrowRight } from "lucide-react";
import BackgroundVideo from "./ui/BackgroundVideo";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects: React.FunctionComponent<{}> = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Flokkr",
      description: t("projects.projectOneDescription"),
      image: "/flokkr.mp4",
      tech: [
        "React/NextJS",
        "JavaScript",
        "Tailwind CSS",
        "JWT-Token",
        "API Integration",
      ],
      github: "https://github.com/BuraYu/rsvp",
      live: "https://rsvp-rust.vercel.app/",
      reverse: false,
    },
    {
      id: 2,
      title: "Shalia",
      description: t("projects.projectTwoDescription"),
      image: "/shalia.mp4",
      tech: ["React/NextJS", "Tailwind CSS"],
      github: "https://github.com/BuraYu/shaila",
      live: "https://shaila-rho.vercel.app/",
      reverse: true,
    },
    {
      id: 3,
      title: "Bento",
      description: t("projects.projectThreeDescription"),
      image: "/BentoGrid.mp4",
      tech: ["NextJS", "MongoDB", "Framer Motion", "Slick"],
      github: "https://github.com/BuraYu/portfolioV3",
      live: "https://portfolio-v3-ten-alpha.vercel.app/",
      reverse: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {t("projects.title")}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("projects.subTitle")}
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project) => (
              <div
                key={project.id}
                data-aos={`${project.reverse ? "fade-right" : "fade-left"}`}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  project.reverse ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`relative group ${
                    project.reverse ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                    {/* TODO remove scale. Fullscreen?  */}
                    <BackgroundVideo
                      src={project.image}
                      className="w-full h-64 sm:h-80 object-fit transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div
                  className={`space-y-6 ${
                    project.reverse ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      {t("projects.technology")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Github size={20} className="mr-2" />
              {t("projects.viewMore")}
            </a>
            {/* <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Browse Other Projects
              <ArrowRight size={20} className="ml-2" />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
