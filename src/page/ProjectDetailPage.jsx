import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectRepository from "../../lib/repository/project_repository";
import GalaryView from "../component/GalaryView";
import Title1 from "../component/Title1";
import GalaryListView from "../common_component/GalaryListView";
import FullScreenImage from "../common_component/FullScreenImage";

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
      <ProjectDetailHeader>{ projectDetail && projectDetail.title }</ProjectDetailHeader>
      <Title1>캡쳐 이미지</Title1>
      {
        projectDetail && <GalaryListView items={projectDetail.imgs} onItemClick={item => setDetailImgUrl(item.imgUrl)} />
      }
      <FullScreenImage imgUrl={detailImgUrl} onExit={_ => setDetailImgUrl(undefined)} />
      <Title1>프로젝트 설명</Title1>
      <p>이 프로젝트는 무슨무슨 프로젝트입니다. 인스타그램을 모방하는 SNS를 만들거나 그냥 토스 웹 사이트 클론코딩을 해보려고 했습니다.</p>
      <Title1>내가 기여한 부분</Title1>
      <ul>
        <li>내가 장바구니 기능 만들었습니다.</li>
        <li>내가 전체 UI, 웹 페이지 만들었습니다.</li>
        <li>내가 api 서버 전체를 만들었습니다.</li>
        <li>관리자페이지의 모든 UI와 모든 API를 직접 만들었습니다.</li>
        <li>로그인 기능을 구현했습니다.</li>
        <li>비밀번호 변경, 아이디 및 비밀번호 찾기 기능도 제가 구현했습니다.</li>
      </ul>
      <Title1>트러블 슈팅</Title1>
      <h2>트러블 주제 1</h2>
      <h3>트러블 배경 및 원인</h3>
      <p>이런저런 배경이 있었고, 이런저런 원인으로 인해 이런저런 문제가 발생했습니다.</p>
      <h3>해결방법</h3>
      <p>이런저런 방법을 시도해 이렇게 저렇게 해결하고 이러한저러한 성과를 얻었습니다.</p>
      <Title1>프로젝트 기간</Title1>
      <p>2023년 8월 28일 ~ 2023년 9월 22일</p>
      <Title1>참여 인원</Title1>
      <ul>
        <li>디자이너 1명</li>
        <li>프론트엔드 개발자 5명</li>
        <li>백엔드 개발자 5명</li>
        <li>'역할이름' n명</li>
      </ul>
      <Title1>기술 스택</Title1>
      <ul>
        <li>Spring Boot</li>
        <li>React</li>
        <li>Git</li>
        <li>MariaDB</li>
        <li>Git</li>
      </ul>
    </>
  );
}

function ProjectDetailHeader({ children }) {
  const headerCss = "flex justify-center items-center text-3xl font-bold mb-25";

  return (
    <>
      <div className={headerCss}>
        { children }
      </div>
    </>
  );
}