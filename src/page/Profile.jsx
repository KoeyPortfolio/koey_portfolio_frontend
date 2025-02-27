import React, { useEffect, useState } from "react";
import Title1 from "../component/Title1";
import Experience from "../component/Experience"
import TechStacks from "../component/TechStacks";
import AcademicBackgroundRepository from "../../lib/repository/academic_backgrounds_repository";
import TimeLineView from "../component/TimeLineView";
import dayjs from "dayjs";

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
      <Experience />
      <Title1 className={"mt-4"}>기술스택</Title1>
      <TechStacks />
      <Title1 className={"mt-4"}>학력</Title1>
      <AcademicBackground />
      <Title1 className={"mt-4"}>자격 및 자격증</Title1>
      <Title1 className={"mt-4"}>연수 및 교육생</Title1>
      <Title1 className={"mt-4"}>대외활동 및 수상내역</Title1>
      <Title1 className={"mt-4"}>병역사항</Title1>
    </>
  );
}

function AcademicBackground() {
  const [academicBackgrounds, setAcademicBackgrounds] = useState([]);

  useEffect(bindAcademicBackgrounds, []);

  function bindAcademicBackgrounds() {
    const data = new AcademicBackgroundRepository().getAcademicBackgrounds();

    setAcademicBackgrounds(data);
  }

  const dateCss = "font-bold text-lg";

  return (
    <>
      <TimeLineView>
        {
          academicBackgrounds.map((x, i) =>
            <TimeLineView.Item key={i}>
              <TimeLineView.Item.Left>
                <div className={`${dateCss} me-8`}>
                  {dayjs(x.start).format('YYYY.MM')}
                </div>
                <div className={dateCss}>
                  ~ {x.end ? dayjs(x.end).format('YYYY.MM') : '현재'}
                </div>
              </TimeLineView.Item.Left>
              <TimeLineView.Item.Right>
                <div>
                  <div className="text-sm text-gray-500">{ x.educationType }</div>
                  <div className="flex gap-3 items-end mb-1">
                    <h2 className="text-lg font-bold">{ x.institutionName }</h2>
                    <span className="text-indigo-600 bg-indigo-100 rounded-sm px-1">{x.degree}</span>
                  </div>
                  <p>{ x.fieldOfStudy }</p>
                </div>
              </TimeLineView.Item.Right>
            </TimeLineView.Item>
          )
        }
      </TimeLineView>
    </>
  );
}