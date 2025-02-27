import React, { useEffect, useState } from "react";
import TechStackRepository from "../../lib/repository/tech_stack_repository";
import IconScore from "./IconScore";

export default function TechStacks() {
  return (
    <>
      <div className="px-2 py-5 rounded-2xl inset-shadow-sm bg-stone-100">
        <TechStackCardList />
      </div>
    </>
  );
}

function TechStackCardList() {
  const techStackCardList = "grid gap-2 justify-items-center grid-cols-[repeat(auto-fit,minmax(280px,auto))] auto-rows-[1fr]";

  return (
    <>
      <ul className={techStackCardList}>
        <TechStackCard category={'웹 프레임워크'} />
        <TechStackCard category={'프로그래밍 언어'} />
        <TechStackCard category={'데이터베이스'} />
        <TechStackCard category={'버전관리 툴'} />
        <TechStackCard category={'협업 툴'} />
      </ul>
    </>
  );
}

function TechStackCard({ category }) {
  const [items, setItems] = useState([]);

  useEffect(bindItems, [category]);

  function bindItems() {
    const data = new TechStackRepository().getTechStackByCategory(category);

    setItems(data);
  }

  const techStackCard = "flex flex-col justify-start w-70 rounded-2xl shadow-md p-5 bg-white";
  const techCategory = "text-xl font-bold w-fit shadow-(--shadow-underline-indigo-100) mb-4";
  const techItem = "flex justify-between mt-1";

  return (
    <>
      <li className={techStackCard}>
        <h2 className={techCategory}>{ category }</h2>
        <ul>
          {
            items.map((x, i) =>
              <li key={i} className={techItem}>
                <div>{ x.name }</div>
                <div><IconScore className="text-xs" filled={'🔲'} emptied={'⬛'} score={x.score} maxScore={x.maxScore} /></div>
              </li>
            )
          }
        </ul>
      </li>
    </>
  );
}