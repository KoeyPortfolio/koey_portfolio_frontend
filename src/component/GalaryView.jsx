import React, { Children } from "react";

export default function GalaryView({ children }) {
  const items = Children.toArray(children).filter(x => x.type === GalaryView.Item);
  
  return (
    <>
    </>
  );
}

GalaryView.Item = function() {

}