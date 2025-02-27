import React from "react";

export default function Title1({ children }) {
  return(
    <>
      <h1 className={'text-2xl my-10 font-bold'}>{ children }</h1>
    </>
  );
}