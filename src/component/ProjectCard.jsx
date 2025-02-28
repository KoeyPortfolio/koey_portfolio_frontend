import React from "react";
import Card from "./Card";
import dayjs from "dayjs";
import LinkIcon from "./LinkIcon";

export default function ProjectCard({ project: { title, thumbnailUrl, start, end, usedSkills, summaries, gitLink } }) {
  const projectCardCss = "w-100 border border-indigo-50";
  const cardFooterCss = "p-5 flex flex-col gap-2";
  const projectDurationCss = "text-gray-500";
  const usedSkillListCss = "flex flex-wrap gap-2";
  const usedSkillCss = "bg-indigo-100 text-sm text-indigo-600 px-1 rounded-sm";
  const projectSummaryItemCss = "before:content-['-'] before:me-2";

  return (
    <>
      <Card className={projectCardCss}>
        <div onClick={e => alert('enter to project detail.')} className="hover:cursor-pointer">
          <h2 className="p-5 text-lg font-bold object-cover">{ title }</h2>
          <img className="block w-full h-60 " src={ thumbnailUrl } alt="프로젝트 대표 이미지" />
        </div>
        <div className={cardFooterCss}>
          <p className={projectDurationCss}>
            {dayjs(start).format('YYYY. MM')} ~ {end ? dayjs(end).format('YYYY. MM') : '진행 중'}
          </p>
          <div>
            <ul className={usedSkillListCss}>
              {
                usedSkills.map((x, i) =>
                  <li key={i} className={usedSkillCss}>{x}</li>
                )
              }
            </ul>
          </div>
          <div>
            <ul>
              {
                summaries.map((x, i) =>
                  <li key={i} className={projectSummaryItemCss}>{ x }</li>
                )
              }
            </ul>
          </div>
          <p>
            <a className="text-sm text-gray-500 flex items-center" href={ gitLink } target="_blank">
              <LinkIcon className="me-1" />Git
            </a>
          </p>
        </div>
      </Card>
    </>
  );
}