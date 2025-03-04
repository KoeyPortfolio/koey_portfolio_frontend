import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectRepository from "../../lib/repository/project_repository";
import GalaryView from "../component/GalaryView";
import Title1 from "../component/Title1";
import GalaryListView from "../common_component/GalaryListView";

export default function ProjectDetailPage() {
  const {id: projectId} = useParams();
  const [projectDetail, setProjectDetail] = useState(undefined);

  useEffect(bindProjectDetail, [projectId]);

  const projectRepository = new ProjectRepository();

  function bindProjectDetail() {
    projectRepository.getProjectDetail(projectId)
    .then(data => setProjectDetail(data));
  }

  return (
    <>
      <Title1>{ projectDetail ? projectDetail.title : '타이틀이 없음' }</Title1>
      <Title1>갤러리</Title1>
      {/* {
        projectDetail && <GalaryView imgUrls={projectDetail.imgs.map(x => x.imgUrl)} />
      } */}
      {
        projectDetail && <GalaryListView items={projectDetail.imgs} onItemClick={item => alert(item.imgUrl)} />
      }
      <Title1>사용한 기술</Title1>
    </>
  );
}