import React from "react";

export default function Title1({ children, className }) {
  return(
    <>
      <h1 className={`text-3xl/20 font-bold ${className}`}>{ children }</h1>
    </>
  );
}