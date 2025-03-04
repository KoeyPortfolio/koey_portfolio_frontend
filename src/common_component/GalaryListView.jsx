import React from "react";

export default function GalaryListView({ items = [], onItemClick }) {
  const galaryListCss = "flex flex-wrap gap-y-2 gap-x-4 justify-center";
  const galaryItemCss = "max-w-75 max-h-75 flex flex-col justify-end items-center relative hover:cursor-pointer";
  const galaryItemImgCss = "block w-full h-full object-contain";
  const galaryItemTitleCss = "bg-white/80 w-full absolute py-1 px-2";

  return (
    <>
      <ul className={galaryListCss}>
        {
          items.map((x, i) =>
            <li key={i} className={galaryItemCss} onClick={_ => onItemClick(x)}>
              <img src={ x.imgUrl } className={galaryItemImgCss} />
              <p className={galaryItemTitleCss}>
                { x.imgTitle }
              </p>
            </li>
          )
        }
      </ul>
    </>
  );
}