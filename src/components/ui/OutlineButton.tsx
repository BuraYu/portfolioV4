import React from "react";

interface OutlineButtonProps {
  label: string;
  onClick?: () => void;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300"
  >
    {label}
  </button>
);

export default OutlineButton;
