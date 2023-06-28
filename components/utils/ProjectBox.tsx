import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  if (link) {
    return (
      <Link href={link} target="_black" rel="noreferrer">
        <div
          className="project-box-item min-h-[194px] md:ml-[15px] bg-white cursor-pointer rounded-[12px] border-[1px] border-black px-[41px] py-[40px]"
          style={{ boxShadow: `-10px 10px 0px 3px ${color}` }}
        >
          <h1 className="font-[500] text-[26px] leading-[23px] mb-[17px] flex items-center">
            {title}
            <span className="bg-dark-blue text-white rounded-full px-2 text-xs py-1 ml-2">
              live
            </span>
          </h1>
          <p className="font-light text-[16px] leading-[140%]">{description}</p>
          <div className="text-white flex items-start mt-[22px]">
            <Image
              src={"/static/images/tool-icon.svg"}
              alt="tool-icon"
              width={22}
              height={22}
              className="min-h-[22px] min-w-[22px]"
            />
            <p className="font-[400] text-[16px] leading-tight text-black ml-[8px]">
              {stack.join(", ")}
            </p>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div
      className="project-box-item min-h-[194px] md:ml-[15px] bg-white cursor-pointer rounded-[12px] border-[1px] border-black px-[41px] py-[40px]"
      style={{ boxShadow: `-10px 10px 0px 3px ${color}` }}
    >
      <h1 className="font-[500] text-[26px] leading-[23px] mb-[17px]">
        {title}
      </h1>
      <p className="font-light text-[16px] leading-[140%]">{description}</p>
      <div className="text-white flex items-start mt-[22px]">
        <Image
          src={"/static/images/tool-icon.svg"}
          alt="tool-icon"
          width={22}
          height={22}
          className="min-h-[22px] min-w-[22px]"
        />
        <p className="font-[400] text-[16px] leading-start text-black ml-[8px]">
          {stack.join(", ")}
        </p>
      </div>
    </div>
  );
}
