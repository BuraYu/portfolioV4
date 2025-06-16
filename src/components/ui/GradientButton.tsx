import React from "react";

interface GradientButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  label?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  onClick,
  children,
  className = "",
  label,
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${className}`}
    >
      {label || children}
    </button>
  );
};

export default GradientButton;
