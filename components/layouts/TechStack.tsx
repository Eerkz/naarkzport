import React from "react";
import TechBox from "../utils/TechBox";
import techstack from "../../data/techstack.json";

export default function TechStack() {
  return (
    <div className="my-[40px]">
      <h1 className="font-medium text-[28px]">
        What makes my work possible...
      </h1>
      <p className="text-[18px] font-normal mt-[21px]">
        Anything that&apos;s not here, you can bet I can learn quickly as
        needed. That&apos;s what we developers do.
      </p>
      <small className="italic">
        Note: Any grayed out boxes means i&apos;m currently learning them...
      </small>
      <div className="flex flex-wrap gap-[21px] mt-[43px] md:justify-start justify-center">
        {techstack.tech_stack.map((tech) => {
          const imagePath = techstack.icons_base_path
            ? `${techstack.icons_base_path}/${tech.icon}`
            : tech.icon;
          return (
            <TechBox
              key={`tech_box_${tech.name}`}
              color={tech.color}
              icon={imagePath}
              name={tech.name}
            />
          );
        })}
      </div>
    </div>
  );
}
