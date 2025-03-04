import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectRepository from "../../lib/repository/project_repository";
import GalaryView from "../component/GalaryView";

export default function ProjectDetailPage() {
  const {id: projectId} = useParams();
  const [projectDetail, setProjectDetail] = useState(undefined);

  useEffect(bindProjectDetail, [projectId]);

  const projectRepository = new ProjectRepository();

  function bindProjectDetail() {
    const data = projectRepository.getProjectDetail(projectId);

    setProjectDetail(data);
  }

  const imgUrls = [
    "https://images.unsplash.com/photo-1740149263431-098cc6705df4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1736618625357-2a7f197f8c23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1737392402963-a489a17826eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1739996698574-30dfcdaa64b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1736392070194-530edb275b36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1740257862940-66edfed66a6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1673139285535-80a03340beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
  ]

  return (
    <>
      <h2 className="text-2xl font-bold my-10">갤러리</h2>
      <GalaryView imgUrls={imgUrls} />
    </>
  );
}