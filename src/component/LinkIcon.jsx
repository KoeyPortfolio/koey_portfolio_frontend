import React from "react";

export default function LinkIcon({className}) {
  const linkIconCss = "bi bi-link " + className;
  return (
    <>
      <i className={ linkIconCss }></i>
    </>
  );
}