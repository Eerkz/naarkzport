import React from "react";
import Image from "next/image";
import { useTheme } from "../../store/ThemeContext";

export default function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full sm:px-[69px] px-[38px] top-[50px] flex justify-between z-[1100] absolute">
      <nav
        className={`w-full h-[64px] fold:pl-[33px] pl-[12px] pr-[12px] rounded-[20px]  flex justify-between items-center ${
          theme === "light"
            ? "bg-white border-solid border-[1px] border-black top-nav"
            : "bg-dark-mode-secondary-light dark-shadow"
        }`}
      >
        <div className="flex">
          <Image
            src={`/static/images/${
              theme === "light" ? "logo-small" : "logo-small-white"
            }.svg`}
            alt="naarkz-logo-small"
            width={33}
            height={21}
          />
          <span
            className={`font-bold text-[20px] ml-[11px] ${
              theme === "light" ? "text-dark-mode-secondary" : "text-white"
            }`}
          >
            naarkz.dev
          </span>
        </div>
        <div className="flex relative">
          {theme === "light" ? (
            <Image
              src={"/static/images/night.svg"}
              alt="night-icon"
              width={33}
              height={21}
              className="cursor-pointer"
              onClick={toggleTheme}
            />
          ) : (
            <Image
              src={"/static/images/sun.svg"}
              alt="night-icon"
              width={33}
              height={21}
              className="cursor-pointer"
              onClick={toggleTheme}
            />
          )}
        </div>
      </nav>
    </div>
  );
}
