import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../../store/ThemeContext";

type ProjectBox = {
  color: string;
  link?: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  stack: string[];
};

export default function ProjectBox({
  color,
  children,
  link,
  title = "Title of Project",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed mattis mi. Etiam aliquet pulvinar dignissim. Integer convallis sagittis enim eget congue.",
  stack,
}: ProjectBox) {
  const { theme } = useTheme();
  const conditinaStyles =
    theme === "light"
      ? "border-[1px] border-black bg-white text-dark-mode-secondary"
      : "bg-dark-mode-secondary-light dark-shadow";

  if (link) {
    return (
      <Link href={link} target="_black" rel="noreferrer">
        <div
          className={`project-box-item min-h-[194px] md:ml-[15px] bg-white cursor-pointer rounded-[12px] ${conditinaStyles} px-[41px] py-[40px]`}
          style={{
            boxShadow: theme === "light" ? `-10px 10px 0px 3px ${color}` : "",
          }}
        >
          <h1 className="font-[500] text-[26px] leading-[23px] mb-[17px] flex items-center">
            {title}
            <span
              className={`bg-dark-blue ${
                theme === "light"
                  ? "text-white"
                  : "text-dark-mode-secondary-light"
              } rounded-full px-2 text-xs py-1 ml-2`}
              style={{ backgroundColor: theme === "light" ? "#0a0b1e" : color }}
            >
              live
            </span>
          </h1>
          <p className="font-light text-[16px] leading-[140%]">{description}</p>
          <div className="flex items-start mt-[22px]">
            <svg
              width="25"
              height="25"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-[1px] min-w-[22px] min-h-[22px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM13.41 12.141L12.15 13.401C11.97 13.581 11.691 13.581 11.511 13.401L8.442 10.332C7.344 10.719 6.066 10.485 5.184 9.603C4.185 8.604 4.014 7.092 4.653 5.913L6.768 8.028L8.037 6.759L5.922 4.653C7.11 4.014 8.613 4.185 9.612 5.184C10.494 6.066 10.728 7.344 10.341 8.442L13.41 11.511C13.581 11.682 13.581 11.97 13.41 12.141Z"
                fill={theme === "light" ? "#0A0B1E" : color}
              />
            </svg>
            <p className="font-[400] text-[16px] leading-tight ml-[8px]">
              {stack.join(", ")}
            </p>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div
      className={`project-box-item min-h-[194px] md:ml-[15px]  cursor-pointer rounded-[12px] ${conditinaStyles} px-[41px] py-[40px] `}
      style={{
        boxShadow: theme === "light" ? `-10px 10px 0px 3px ${color}` : "",
      }}
    >
      <h1 className="font-[500] text-[26px] leading-[23px] mb-[17px]">
        {title}
      </h1>
      <p className={`font-light text-[16px] leading-[140%]`}>{description}</p>
      <div className="flex items-start mt-[22px]">
        <svg
          width="25"
          height="25"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-[1px] min-w-[22px] min-h-[22px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM13.41 12.141L12.15 13.401C11.97 13.581 11.691 13.581 11.511 13.401L8.442 10.332C7.344 10.719 6.066 10.485 5.184 9.603C4.185 8.604 4.014 7.092 4.653 5.913L6.768 8.028L8.037 6.759L5.922 4.653C7.11 4.014 8.613 4.185 9.612 5.184C10.494 6.066 10.728 7.344 10.341 8.442L13.41 11.511C13.581 11.682 13.581 11.97 13.41 12.141Z"
            fill={theme === "light" ? "#0A0B1E" : color}
          />
        </svg>

        <p className="font-[400] text-[16px] leading-startml-[8px]">
          {stack.join(", ")}
        </p>
      </div>
    </div>
  );
}
