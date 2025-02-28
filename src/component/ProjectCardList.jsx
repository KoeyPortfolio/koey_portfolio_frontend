import React from "react";
import ProjectCard from "./ProjectCard";


export default function ProjectCardList({ projects }) {
    const projectCardGridViewCss = "grid gap-5 justify-items-center grid-cols-[repeat(auto-fill,minmax(360px,1fr))]";

  return (
    <>
      <div className={projectCardGridViewCss}>
        {
          projects.map((x, i) =>
            <ProjectCard key={i} project={ x } />
          )
        }
      </div>
    </>
  );
}