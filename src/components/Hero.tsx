import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Hero: React.FunctionComponent<{}> = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      {isDarkMode ? (
        <h1 className="bg-blue-950">Dark</h1>
      ) : (
        <h1 className="bg-yellow-300">Light</h1>
      )}
    </div>
  );
};

export default Hero;
