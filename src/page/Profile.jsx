import React from "react";
import Title1 from "../component/Title1";
import Experience from "../component/Experience"
import TechStacks from "../component/TechStacks";
import AcademicBackground from "../component/AcademicBackground";

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
      <Title1>경력</Title1>
      <Experience />
      <Title1>기술스택</Title1>
      <TechStacks />
      <Title1>학력</Title1>
      <AcademicBackground />
      <Title1>자격 및 자격증</Title1>
      <Title1>연수 및 교육생</Title1>
      <Title1>대외활동 및 수상내역</Title1>
      <Title1>병역사항</Title1>
    </>
  );
}