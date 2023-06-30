import React from "react";
import projects from "../../data/projects.json";
import ProjectBox from "../utils/ProjectBox";

export default function Projects() {
  return (
    <>
      {projects.map((project, idx) => (
        <ProjectBox
          title={project.title}
          key={`project_${idx}`}
          link={project.link}
          description={project.description}
          stack={project.stack}
          color={project.color}
        />
      ))}
    </>
  );
}
