import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import ExperienceRepository from "../../lib/repository/experience_repository";
import TimeLineView from "./TimeLineView";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(bindExperiences, [])

  function bindExperiences() {
    new ExperienceRepository().getExperiences()
    .then(data => setExperiences(data));
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

function JobTag({ children }) {
  return (
    <p className="flex items-center text-indigo-600 px-2 bg-indigo-100 rounded-lg">
      { children }
    </p>
  );
}