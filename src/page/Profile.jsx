import React from "react";
import Title1 from "../component/Title1";
import ExperienceList from "../component/ExperienceList"

export default function Profile() {
  return (
    <>
      <div className="flex gap-5 items-center">
        <img className="w-50 h-50 object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="프로필 이미지" />
        <p className="text-3xl/12">
          <b>"</b>안녕 날 소개하지 <br />
          내 이름은 김하온 직업은 트래블러 <br />
          취미는 타이치, 메디테이션, 독서, 영화시청<b>"</b>
        </p>
      </div>
      <Title1 className={"mt-4"}>경력</Title1>
      <ExperienceList>
        <ExperienceList.Item start={'2023.10'} end={'2024.08'} company={'(주)토마토파트너'} details={['FCM 푸시서버 마이그레이션(프레임워크 변경)', '토마토투자자문 비대면 투자일임계약서 작성 서비스 개발', '토마토투자자문 방송 서비스 리팩토링으로 소스코드 50% 이상 감축 및 유지보수성 향상', '이토마토, 토마토투자자문, 증권통 3개 웹 서비스 유지보수']} department={'개발팀'} jobTitle={'사원'} />
      </ExperienceList>
      <Title1 className={"mt-4"}>기술스택</Title1>
      <Title1 className={"mt-4"}>자격 및 자격증</Title1>
      <Title1 className={"mt-4"}>학력</Title1>
      <Title1 className={"mt-4"}>연수 및 교육생</Title1>
      <Title1 className={"mt-4"}>대외활동 및 수상내역</Title1>
      <Title1 className={"mt-4"}>병역사항</Title1>
    </>
  );
}