import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectRepository from "../../lib/repository/project_repository";
import GalaryView from "../component/GalaryView";
import Title1 from "../component/Title1";
import GalaryListView from "../common_component/GalaryListView";

export default function ProjectDetailPage() {
  const {id: projectId} = useParams();
  const [projectDetail, setProjectDetail] = useState(undefined);
  const [detailImgUrl, setDetailImgUrl] = useState(undefined);

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
        projectDetail && <GalaryListView items={projectDetail.imgs} onItemClick={item => setDetailImgUrl(item.imgUrl)} />
      }
      {
        detailImgUrl && 
        <div className="fixed w-screen h-screen bg-gray-900/80 m-auto top-0 left-0 flex justify-center items-center">
          <img src={detailImgUrl} className="h-[90%] w-[90%] object-contain" />
          <button type="button" className="absolute bg-gray-900/50 text-gray-50/50 hover:bg-white hover:text-gray-900 right-[10%] top-[10%] aspect-square w-12 rounded-full hover:cursor-pointer" onClick={_ => setDetailImgUrl(undefined)}>
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      }
      
      <Title1>사용한 기술</Title1>
    </>
  );
}