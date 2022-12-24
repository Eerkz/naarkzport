import React from "react";
import Image from "next/image";

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
  return (
    <div
      className={`${color} tech-box cursor-pointer w-[85px] h-[85px] flex justify-center items-center border-[1px] border-black`}
    >
      {name && <span className="tooltip">{name}</span>}
      {icon && (
        <Image
          src={`/static/images/tech_icons/${icon}`}
          alt="tech-stack-item-icon"
          width={width ? width : 41}
          height={width ? width : 41}
        />
      )}
    </div>
  );
}
