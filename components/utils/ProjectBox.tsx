import React from "react";
import Image from "next/image";

type ProjectBox = {
  color: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  stack: string[];
};

export default function ProjectBox({
  color,
  children,
  title = "Title of Project",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed mattis mi. Etiam aliquet pulvinar dignissim. Integer convallis sagittis enim eget congue.",
  stack,
}: ProjectBox) {
  return (
    <div
      className="project-box-item min-h-[194px] ml-[15px] bg-white cursor-pointer rounded-[12px] border-[1px] border-black px-[41px] py-[40px]"
      style={{ boxShadow: `-10px 10px 0px 3px ${color}` }}
    >
      <h1 className="font-[500] text-[26px] leading-[23px] mb-[17px]">
        {title}
      </h1>
      <p className="font-light text-[16px] leading-[140%]">{description}</p>
      <div className="text-white flex items-center mt-[22px]">
        <Image
          src={"/static/images/tool-icon.svg"}
          alt="tool-icon"
          width={22}
          height={22}
        />
        <span className="font-[400] text-[16px] leading-[14px] text-black underline ml-[8px]">
          view stack
        </span>
      </div>
    </div>
  );
}
