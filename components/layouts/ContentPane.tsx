import React from "react";
import ProjectBox from "../utils/ProjectBox";

export default function ContentPane() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-[40px]">
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
