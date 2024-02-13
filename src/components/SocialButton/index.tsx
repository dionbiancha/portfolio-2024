import React, { useState } from "react";

interface SocialButtonProps {
  icon: React.ReactNode;
  link?: string;
}

function SocialButton({ icon, link }: SocialButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      title="Clique para abrir o link em uma nova aba"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex duration-500 items-center justify-center w-8 h-8 bg-[#111111] border rounded-md cursor-pointer  mr-2 ${
        isHovered
          ? "shadow-neon-blue text-[#fff]"
          : "border-[#1F1F1F] text-[#9ca3af]"
      }`}
    >
      <span
        className={`absolute right-0 top-0 h-0 w-0 border-r-2 shadow-neon-blue transition-all duration-500 ${
          isHovered ? "h-full" : ""
        }`}
      ></span>

      <span
        className={`absolute bottom-0 left-0 h-0 w-0 border-l-2 shadow-neon-blue transition-all duration-500 ${
          isHovered ? "h-full" : ""
        }`}
      ></span>
      {icon}
    </div>
  );
}

export default SocialButton;
