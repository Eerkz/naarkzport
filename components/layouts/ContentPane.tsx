import React from "react";
import ProjectBox from "../utils/ProjectBox";

export default function ContentPane() {
  return (
    <div
      id="projects-container"
      className="flex md:w-[60%] w-full gap-[40px] flex-wrap p-[20px] md:max-h-[600px] md:mt-[100px] mt-[50px] md:overflow-scroll"
    >
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
