import React from "react";

export default function FullScreenImage({ imgUrl, onExit }) {
  const containerCss = "fixed w-screen h-screen bg-gray-900/80 m-auto top-0 left-0 flex justify-center items-center";
  const imgCss = "h-[90%] w-[90%] object-contain";
  const exitBtnCss = "absolute bg-gray-900/50 text-gray-50/50 hover:bg-white hover:text-gray-900 right-[10%] top-[10%] aspect-square w-12 rounded-full hover:cursor-pointer";
  
  return (
    <>
      <div className={containerCss}>
        <img src={imgUrl} className={imgCss} />
        <button type="button" className={exitBtnCss} onClick={onExit}>
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    </>
  );
}