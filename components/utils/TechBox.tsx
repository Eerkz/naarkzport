import React from "react";
import Image from "next/image";
import { useTheme } from "../../store/ThemeContext";

export default function TechBox({
  color,
  icon,
  width,
  name,
}: {
  color: string;
  icon?: string;
  width?: number;
  name?: string;
}) {
  const { theme } = useTheme();
  return (
    <div
      className={`${color} tech-box cursor-pointer w-[85px] h-[85px] flex justify-center items-center ${
        theme === "light"
          ? "border-[1px] tech-box-light border-black"
          : "dark-shadow"
      }`}
    >
      {name && (
        <span
          className={`tooltip ${
            theme === "light" ? "tooltip-light" : "tooltip-dark"
          }`}
        >
          {name}
        </span>
      )}
      {icon && (
        <Image
          src={icon}
          alt="tech-stack-item-icon"
          width={width ? width : 41}
          height={width ? width : 41}
        />
      )}
    </div>
  );
}
