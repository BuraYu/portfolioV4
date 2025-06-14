import React from "react";

interface GradientDividerProps {
  className?: string;
}

const GradientDivider: React.FC<GradientDividerProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full ${className}`}
    />
  );
};

export default GradientDivider;
