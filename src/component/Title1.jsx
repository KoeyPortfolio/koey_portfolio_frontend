import React from "react";

export default function Title1({ children, className }) {
  return(
    <>
      <h1 className={`text-2xl my-10 font-bold ${className}`}>{ children }</h1>
    </>
  );
}