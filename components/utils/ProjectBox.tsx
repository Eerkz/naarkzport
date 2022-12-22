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
      className="w-[253px] h-[254px] bg-white rounded-[12px] border-[1px] border-black px-[41px] pt-[42px]"
      style={{ boxShadow: `-10px 10px 0px 3px ${color}` }}
    >
      <h1 className="font-[500] text-[20px] leading-[23px] mb-[17px]">
        {title}
      </h1>
      <p className="font-light text-[12px] leading-[140%]">{description}</p>
      <div className="text-white flex items-center mt-[22px]">
        <Image
          src={"/static/images/tool-icon.svg"}
          alt="tool-icon"
          width={18}
          height={18}
        />
        <span className="font-[400] text-[12px] leading-[14px] text-black underline ml-[5px]">
          view stack
        </span>
      </div>
    </div>
  );
}
