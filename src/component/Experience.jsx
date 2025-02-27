import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import ExperienceRepository from "../../lib/repository/experience_repository";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(bindExperiences, [])

  function bindExperiences() {
    const data = new ExperienceRepository().getExperiences();
    
    setExperiences(data);
  }

  return (
    <>
      <ExperienceList>
        {
          experiences.map((x, i) =>
            <ExperienceList.Item key={i} company={x.company} department={x.department} jobTitle={x.jobTitle} start={dayjs(x.start).format('YYYY.MM')} end={dayjs(x.end).format('YYYY.MM')} details={x.details} />
          )
        }
      </ExperienceList>
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

ExperienceList.Item = function ExperienceListItem({ start, end, company, details = [], department, jobTitle}) {
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
    <p className="flex items-center text-white px-2 bg-indigo-700 rounded-lg">
      { children }
    </p>
  );
}