import type React from "react";

const LogoName: React.FunctionComponent<{}> = () => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">BY</span>
      </div>
      <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
        Burak Yüksel
      </span>
    </div>
  );
};

export default LogoName;
