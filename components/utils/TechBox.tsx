import React from "react";
import Image from "next/image";

export default function TechBox({
  color,
  icon,
  width,
}: {
  color: string;
  icon?: string;
  width?: number;
}) {
  return (
    <div
      className={`${color} tech-box w-[85px] h-[85px] flex justify-center items-center border-[1px] border-black`}
    >
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
