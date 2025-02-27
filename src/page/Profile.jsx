import React from "react";
import Title1 from "../component/Title1";
import Experience from "../component/Experience"
import TechStacks from "../component/TechStacks";
import AcademicBackground from "../component/AcademicBackground";
import MilitaryBackground from "../component/MilitaryBackground";
import Introduction from "../component/Introduction";

export default function Profile() {
  return (
    <>
      <Introduction />
      <Title1>경력</Title1>
      <Experience />
      <Title1>기술스택</Title1>
      <TechStacks />
      <Title1>학력</Title1>
      <AcademicBackground />
      {/* <Title1>자격 및 자격증</Title1>
      <Title1>연수 및 교육생</Title1>
      <Title1>대외활동 및 수상내역</Title1>
      <Title1>병역사항</Title1>
      <MilitaryBackground /> */}
    </>
  );
}