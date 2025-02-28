import React from "react";

export default function Card({ children, className, onClick }) {
  const cardCss = "shadow-xl rounded-xl " + className;

  return (
    <>
      <div className={cardCss} onClick={onClick}>
        { children }
      </div>
    </>
  );
}