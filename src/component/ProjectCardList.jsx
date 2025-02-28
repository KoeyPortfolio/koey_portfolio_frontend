import React from "react";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";


export default function ProjectCardList({ projects }) {
  const navigate = useNavigate();

  const projectCardGridViewCss = "grid gap-5 justify-items-center grid-cols-[repeat(auto-fill,minmax(360px,1fr))]";

  function redirectToProjectDetailPage(projectId) {
    navigate(`/projects/${projectId}`);
  }

  return (
    <>
      <div className={projectCardGridViewCss}>
        {
          projects.map((x, i) =>
            <ProjectCard key={i} project={ x } onClick={_ => redirectToProjectDetailPage(x.id)} />
          )
        }
      </div>
    </>
  );
}