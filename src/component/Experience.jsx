import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import ExperienceRepository from "../../lib/repository/experience_repository";
import TimeLineView from "./TimeLineView";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(bindExperiences, [])

  function bindExperiences() {
    const data = new ExperienceRepository().getExperiences();
    
    setExperiences(data);
  }

  return (
    <>
      <TimeLineView>
        {
          experiences.map((x, i) =>
            <TimeLineView.Item key={i}>
              <TimeLineView.Item.Left>
                <div className="text-lg font-bold">
                  <div className="me-6">
                    { dayjs(x.start).format('YYYY.MM') }
                  </div>
                  <div>
                    ~ { x.end ? dayjs(x.end).format('YYYY.MM') : '현재' }
                  </div>
                </div>
              </TimeLineView.Item.Left>
              <TimeLineView.Item.Right>
                <h3 className="font-bold text-xl/12 before:content-['🏢'] before:mr-1">{ x.company }</h3>
                <div className="flex ms-4 gap-2 mb-4">
                  <JobTag>{ x.department }</JobTag>
                  <JobTag>{ x.jobTitle }</JobTag>
                </div>
                <ol>
                  {
                    x.details.map((y, j) =>
                      <li key={ j } className="text-base/6 list-disc my-2">{ y }</li>
                    )
                  }
                </ol>
              </TimeLineView.Item.Right>
            </TimeLineView.Item>
          )
        }
      </TimeLineView>
    </>
  );
}

function ExperienceList({ children = [] }) {
  const class1 = `before:absolute before:left-[25%] before:w-[2px] before:h-full before:bg-indigo-900 gap-10 flex flex-col`;
  
  return (
    <>
      <div className="relative m-4">
        <ul className={class1}>
          { children }
        </ul>
      </div>
    </>
  );
}

ExperienceList.Item = function({ start, end, company, details = [], department, jobTitle}) {
  const class1 = `text-lg/6 font-bold w-[25%] before:w-[10px] before:h-[10px] before:bg-indigo-900 before:rounded-[50%] before:absolute before:left-[25%] before:-translate-x-[4px] before:top-[20px] after:w-[16px] after:h-[16px] after:border-indigo-900 after:border-1 after:rounded-[50%] after:absolute after:top-[17px] after:left-[25%] after:-translate-x-[7px] text-end pe-10`;

  return (
    <>
      <li className="flex relative">
        <div className={class1}>
          <div className="me-6">
            { start }
          </div>
          <div>
            ~ { end }
          </div>
        </div>
        <div className="w-[75%] ps-12">
          <h3 className="font-bold text-2xl/12 before:content-['🏢'] before:mr-1">{ company }</h3>
          <div className="flex ms-4 gap-2 mb-4">
            <JobTag>{ department }</JobTag>
            <JobTag>{ jobTitle }</JobTag>
          </div>
          <ol>
            {
              details.map((x, i) =>
                <li key={ i } className="text-base/6 list-disc my-2">{ x }</li>
              )
            }
          </ol>
        </div>
      </li>
    </>
  );
}

function JobTag({ children }) {
  return (
    <p className="flex items-center text-indigo-600 px-2 bg-indigo-100 rounded-lg">
      { children }
    </p>
  );
}