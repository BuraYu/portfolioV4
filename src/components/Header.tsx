import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Header: React.FunctionComponent<{}> = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <h1>Darkmode test</h1>
      <button onClick={toggleDarkMode}>Change Mode</button>
      {isDarkMode ? (
        <h1 className="bg-amber-300">Bright</h1>
      ) : (
        <h1 className="bg-blue-900">Dark</h1>
      )}
    </div>
  );
};

export default Header;
