import React, { useEffect, useState } from "react";
import TechStackRepository from "../../lib/repository/tech_stack_repository";
import IconScore from "./IconScore";

export default function TechStacks() {
  return (
    <>
      <TechStackCardList />
    </>
  );
}

function TechStackCardList() {
  const [techCategories, setTechCategories] = useState([]);

  useEffect(bindTechCategories, []);

  function bindTechCategories() {
    new TechStackRepository().getTechCategories()
    .then(data => setTechCategories(data));
  }

  const techStackCardList = "grid gap-5 justify-items-center grid-cols-[repeat(auto-fit,minmax(280px,auto))] auto-rows-[1fr]";

  return (
    <>
      <ul className={techStackCardList}>
        {
          techCategories.map((x, i) =>
          <TechStackCard key={i} category={x} />)
        }
      </ul>
    </>
  );
}

function TechStackCard({ category }) {
  const [items, setItems] = useState([]);

  useEffect(bindItems, [category]);

  function bindItems() {
    new TechStackRepository().getTechStackByCategory(category)
    .then(data => setItems(data));
  }

  const techStackCard = "flex flex-col justify-start w-full rounded-2xl shadow-md p-5 bg-white";
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