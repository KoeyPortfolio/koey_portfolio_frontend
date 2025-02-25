import React from "react";

export default function Title1({ children }) {
  return(
    <>
      <h1 className="text-3xl font-bold leading-20">{ children }</h1>
    </>
  );
}