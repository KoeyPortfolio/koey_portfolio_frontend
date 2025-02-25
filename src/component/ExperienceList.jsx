import React from "react";

export default function ExperienceList({ children = [] }) {
  return (
    <>
      <div className="relative">
        <ul className="before:absolute before:left-[25%] before:w-[2px] before:h-full before:bg-indigo-900 gap-[40px] flex flex-col">
          { children }
        </ul>
      </div>
    </>
  );
}

ExperienceList.Item = function ExperienceListItem({ period, company, details = []}) {
  return (
    <>
      <li className="flex relative">
        <div className="text-2xl font-bold w-[25%] before:w-[10px] before:h-[10px] before:bg-indigo-900 before:rounded-[50%] before:absolute before:left-[25%] before:-translate-x-[4px] before:top-[12px] after:w-[16px] after:h-[16px] after:border-indigo-900 after:border-1 after:rounded-[50%] after:absolute after:top-[9px] after:left-[25%] after:-translate-x-[7px]">{ period }</div>
        <div className="w-[75%] ps-[40px]">
          <h3>{ company }</h3>
          {
            details.map((x, i) =>
              <p key={ i }>{ x }</p>
            )
          }
        </div>
      </li>
    </>
  );
}