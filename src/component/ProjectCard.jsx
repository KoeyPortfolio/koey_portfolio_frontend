import React from "react";
import Card from "./Card";
import dayjs from "dayjs";
import LinkIcon from "./LinkIcon";

export default function ProjectCard({ project: { title, thumbnailUrl, start, end, usedSkills, summaries, gitLink }, onClick }) {
  const projectCardCss = "w-full max-w-110 border border-indigo-50 bg-white flex flex-col justify-stretch";
  const thumbnailCss = "block w-full h-60 object-cover";
  const cardFooterCss = "p-5 flex flex-col justify-stretch gap-2 grow";
  const projectDurationCss = "text-gray-500";
  const usedSkillListCss = "flex flex-wrap gap-2";
  const usedSkillCss = "bg-indigo-100 text-sm text-indigo-600 px-1 rounded-sm";
  const projectSummaryItemCss = "before:content-['-'] before:me-2 text-base/6 my-2";
  const projectSummaryListCss = "grow";

  return (
    <>
      <Card className={projectCardCss}>
        <div onClick={onClick} className="hover:cursor-pointer">
          <h2 className="p-5 text-lg font-bold object-cover">{ title }</h2>
          <img className={ thumbnailCss } src={ thumbnailUrl } alt="프로젝트 대표 이미지" />
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
          <ul className={ projectSummaryListCss }>
            {
              summaries.map((x, i) =>
                <li key={i} className={projectSummaryItemCss}>{ x }</li>
              )
            }
          </ul>
          <p className="flex justify-end">
            <a className="text-xs text-gray-500 flex items-center" href={ gitLink } target="_blank">
              <LinkIcon className="me-1" />
              <span className="text-sm">Git</span>
            </a>
          </p>
        </div>
      </Card>
    </>
  );
}