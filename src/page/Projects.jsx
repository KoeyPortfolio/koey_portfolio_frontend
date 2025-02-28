import React, { useEffect, useState } from "react";
import ProjectCardList from "../component/ProjectCardList";
import ProjectRepository from "../../lib/repository/project_repository";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const projectRepository = new ProjectRepository();

  useEffect(bindProjects, []);

  function bindProjects() {
    const data = projectRepository.getProjects();

    setProjects(data);
  }

  return (
    <>
      <h1 className="text-2xl font-bold my-10">프로젝트</h1>
      <ProjectCardList projects={ projects } />
    </>
  );
}