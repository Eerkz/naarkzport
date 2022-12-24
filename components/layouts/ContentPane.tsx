import React from "react";
import ProjectBox from "../utils/ProjectBox";

export default function ContentPane() {
  return (
    <div
      id="projects-container"
      className="flex md:w-[60%] w-full gap-[40px] flex-wrap md:p-[20px] max-h-[100%] md:mt-[110px] mt-[50px] md:overflow-scroll lg:mr-[50px]"
    >
      <div className="h-[10px] md:block hidden"></div>
      <ProjectBox
        stack={["Typescript", "NextJS", "Tailwind"]}
        color={"#81F4D6"}
      />{" "}
      <ProjectBox
        stack={["Typescript", "NextJS", "Tailwind"]}
        color={"#96A7FF"}
      />
      <ProjectBox
        stack={["Typescript", "NextJS", "Tailwind"]}
        color={"#FFBF72"}
      />
      <ProjectBox
        stack={["Typescript", "NextJS", "Tailwind"]}
        color={"#FF837D"}
      />
    </div>
  );
}
