import React, { useEffect, useState } from "react";
import AcademicBackgroundRepository from "../../lib/repository/academic_backgrounds_repository";
import TimeLineView from "./TimeLineView"
import dayjs from "dayjs";

export default function AcademicBackground() {
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