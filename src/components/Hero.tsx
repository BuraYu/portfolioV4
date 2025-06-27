import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import GradientButton from "./ui/GradientButton";
import OutlineButton from "./ui/OutlineButton";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const [displayText, setDisplayText] = useState("");
  const fullText = t("hero.title");
  const { isDarkMode } = useTheme();

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-teal-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span
                className={`animate-pulse ${
                  isDarkMode ? "text-gray-500" : "text-black"
                }`}
              >
                |
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-700 dark:text-gray-300 mb-6">
              Burak Yüksel
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              {t("hero.text")}
            </p>
          </div>

          {/* Social Links */}
          {/* TODO deprecated icons replace */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/burayu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/burakyüksel-/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:burak.yueksel@hotmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <GradientButton
              label={t("hero.button.work")}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
            <OutlineButton
              label={t("hero.button.connect")}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>

          {/* Scroll */}
          <div className="animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
