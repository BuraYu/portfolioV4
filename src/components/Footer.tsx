import React, { useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import LogoName from "./ui/LogoName";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer: React.FunctionComponent<{}> = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/burayu", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/burakyüksel-/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:burak.yueksel@hotmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-gray-900 dark:bg-gray-950 text-white py-12"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <LogoName />
              <p className="text-gray-400 leading-relaxed">
                {t("footer.description")}
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{t("footer.links")}</h3>
              <div className="space-y-2">
                {[
                  "footer.hero",
                  "footer.about",
                  "footer.skills",
                  "footer.projects",
                  "footer.contact",
                ].map((key) => {
                  const label = t(key); 
                  const sectionId = key.split(".")[1]; 

                  return (
                    <button
                      key={key}
                      onClick={() => {
                        const element = document.getElementById(sectionId);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="block text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{t("footer.touch")}</h3>
              <div className="space-y-2">
                <p className="text-gray-400">burak.yueksel@hotmail.com</p>
                <p className="text-gray-400">+49 163 88 71 88 1</p>
                <p className="text-gray-400">Berlin</p>
              </div>
              <div className="flex space-x-4 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 dark:bg-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-gray-400">
              <span>© {currentYear} Made </span>
              <span>by Burak Yüksel</span>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-4 sm:mt-0 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
