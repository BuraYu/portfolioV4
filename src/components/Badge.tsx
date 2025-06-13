import React from "react";

import type { FC } from "react";

interface BadgeProps {
  icon: React.ElementType;
  label: string;
  theme: "blue" | "cyan" | "teal";
}

const themeClasses = {
  blue: {
    bg: "bg-blue-50 dark:bg-blue-900/30",
    icon: "text-blue-600 dark:text-blue-400",
    text: "text-blue-700 dark:text-blue-300",
  },
  cyan: {
    bg: "bg-cyan-50 dark:bg-cyan-900/30",
    icon: "text-cyan-600 dark:text-cyan-400",
    text: "text-cyan-700 dark:text-cyan-300",
  },
  teal: {
    bg: "bg-teal-50 dark:bg-teal-900/30",
    icon: "text-teal-600 dark:text-teal-400",
    text: "text-teal-700 dark:text-teal-300",
  },
};

const Badge: FC<BadgeProps> = ({ icon: Icon, label, theme }) => {
  const color = themeClasses[theme];

  return (
    <div
      className={`flex items-center space-x-2 ${color.bg} px-4 py-2 rounded-full`}
    >
      <Icon className={`${color.icon}`} size={20} />
      <span className={`${color.text} font-medium`}>{label}</span>
    </div>
  );
};

export default Badge;
