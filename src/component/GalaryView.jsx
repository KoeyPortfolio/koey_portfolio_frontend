import React, { useEffect, useRef, useState } from "react";

export default function GalaryView({ imgUrls=[] }) {
  const [mainImgUrl, setMainImgUrl] = useState(undefined);
  const scrollContainerRef = useRef(null);

  useEffect(bindMainImgUrl, [imgUrls]);

  function bindMainImgUrl(url) {
    const data = url ? url : imgUrls.find(() => true);

    setMainImgUrl(data);
  }

  const galaryViewItemListCss = "flex overflow-auto bg-gray-900 border-b-4 border-gray-900";
  const galaryViewItemCss = "w-[22%] aspect-[16/10] shrink-0";
  const mainItemCss = "aspect-[16/10]";
  const imgListCss = "w-full h-full block object-cover hover:cursor-pointer";
  const mainImgCss = "w-full h-full block object-contain bg-gray-900";

  return (
    <>
      <ul className={galaryViewItemListCss} ref={scrollContainerRef}>
        {
          imgUrls.map((x, i) =>
            <li key={i} className={galaryViewItemCss}>
              <img src={x} className={imgListCss} onClick={_ => bindMainImgUrl(x)}/>
          </li>)
        }
      </ul>
      <div className={mainItemCss}>
        <img src={mainImgUrl} className={mainImgCss} />
      </div>
    </>
  );
}