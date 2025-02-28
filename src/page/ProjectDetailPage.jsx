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

  const projectDetailPageTitleCss = "text-2xl font-bold my-10";

  const galaryMainImgCss = "block w-full aspect-[calc(16/10)] object-contain";
  const galaryPreviewImgListCss = "w-full flex overflow-auto";
  const galaryPreviewImgCss = "block object-cover w-40 aspect-[calc(16/10)]";
  const galaryPreviewImgItemCss = "shrink-0";
  const galaryBtnCss = "w px-3 text-3xl text-black/0 font-bold hover:bg-gray-900/40 hover:text-gray-50/60 hover:cursor-pointer flex items-center justify-center";

  return (
    <>
      <h2 className="text-2xl font-bold my-10">갤러리</h2>
      <GalaryView>
        <GalaryView.Item>
          
        </GalaryView.Item>
      </GalaryView>
      <div className="mx-auto max-w-200 min-w-120">
        <ul className={galaryPreviewImgListCss}>
          <li className={galaryPreviewImgItemCss}>
            <img className={galaryPreviewImgCss} src="https://images.unsplash.com/photo-1740149263431-098cc6705df4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"/>
          </li>
          <li className={galaryPreviewImgItemCss}>
            <img className={galaryPreviewImgCss} src="https://images.unsplash.com/photo-1737392402963-a489a17826eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"/>
          </li>
          <li className={galaryPreviewImgItemCss}>
            <img className={galaryPreviewImgCss} src="https://images.unsplash.com/photo-1739996698574-30dfcdaa64b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"/>
          </li>
          <li className={galaryPreviewImgItemCss}>
            <img className={galaryPreviewImgCss} src="https://plus.unsplash.com/premium_photo-1736392070194-530edb275b36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"/>
          </li>
          <li className={galaryPreviewImgItemCss}>
            <img className={galaryPreviewImgCss} src="https://images.unsplash.com/photo-1736618625357-2a7f197f8c23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"/>
          </li>
          <li className={galaryPreviewImgItemCss}>
            <img className={galaryPreviewImgCss} src="https://images.unsplash.com/photo-1740257862940-66edfed66a6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"/>
          </li>
          <li className={galaryPreviewImgItemCss}>
            <img className={galaryPreviewImgCss} src="https://plus.unsplash.com/premium_photo-1673139285535-80a03340beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"/>
          </li>
        </ul>
        <div className="bg-gray-900 flex flex-col relative justify-center">
          <img className={galaryMainImgCss} src="https://images.unsplash.com/photo-1740149263431-098cc6705df4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" />
          <div className="absolute w-full h-full flex justify-between">
            <button className={galaryBtnCss} type="button">
              <i className="bi bi-arrow-left"></i>
            </button>
            <button className={galaryBtnCss} type="button">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}