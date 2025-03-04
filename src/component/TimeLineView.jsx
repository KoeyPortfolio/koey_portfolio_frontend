import React, { Children } from "react";

export default function TimeLineView({ children }) {
  const viewItems = Children.toArray(children).filter(x => x.type === TimeLineView.Item);

  const listItemCss = "py-5";
  const viewCss = "relative before:w-[2px] before:bg-indigo-600 before:h-full before:absolute before:left-[25%]";

  return (
    <>
      <ul className={viewCss}>
        {
          viewItems.map((x, i) =>
            <li key={i} className={listItemCss}>
              { x }
            </li>
          )
        }
      </ul>
    </>
  );
}

TimeLineView.Item = function({ children }) {
  const containerCss = "w-full flex";
  const leftCss = "w-[25%] text-end pe-[6%] relative before:w-[10px] before:h-[10px] before:bg-indigo-600 before:rounded-full before:absolute before:top-[1em] before:translate-y-[-5px] before:left-full before:translate-x-[-4px] after:w-[18px] after:h-[18px] after:rounded-full after:border after:border-indigo-600 after:absolute after:top-[1em] after:translate-y-[-9px] after:left-full after:translate-x-[-8px]";
  const rightCss = "w-[75%] ps-[6%]";

  const leftComponent = Children.toArray(children).filter(x => x.type === TimeLineView.Item.Left).find(_ => true);
  const rightComponent = Children.toArray(children).filter(x => x.type === TimeLineView.Item.Right).find(_ => true);

  return (
    <>
      <div className={containerCss} >
        <div className={leftCss}>
          { leftComponent }
        </div>
        <div className={rightCss}>
          { rightComponent }
        </div>
      </div>
    </>
  );
}

TimeLineView.Item.Left = function({ children }) {
  return (
    <>
      { children }
    </>
  );
}

TimeLineView.Item.Right = function({ children }) {
  return (
    <>
      { children }
    </>
  );
}