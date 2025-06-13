import React from "react";
import { Panda, Fish, Bug } from "lucide-react";
import Badge from "./Badge";
import GradientDivider from "./ui/GradientDivider";
import GradientButton from "./ui/GradientButton";

const About: React.FunctionComponent<{}> = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <GradientDivider />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-600 dark:text-gray-300">
                <p className="text-xl leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  voluptatem iusto reprehenderit iste modi in nihil culpa sed!
                  Facere, quisquam?
                </p>

                <p className="text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  nam ducimus quisquam libero ex delectus voluptate ullam
                  veritatis quae aliquam.
                </p>

                <p className="text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ipsum veritatis voluptate. Temporibus, tempore exercitationem
                  sit architecto nemo consectetur optio.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-6">
                <Badge icon={Bug} label="Coding" theme="blue" />
                <Badge icon={Fish} label="Coding" theme="cyan" />
                <Badge icon={Panda} label="Coding" theme="teal" />
              </div>

              <div className="pt-8">
                <GradientButton
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Let's Connect
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </GradientButton>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl">
                  <img
                    src="https://picsum.photos/400/700"
                    alt="Developer workspace"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Title
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">Subtitle</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-teal-200 dark:from-blue-800/30 dark:to-teal-800/30 rounded-2xl transform -rotate-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
