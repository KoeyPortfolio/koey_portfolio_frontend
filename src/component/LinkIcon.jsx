import React from "react";

export default function LinkIcon({className}) {
  const linkIconCss = "material-symbols-outlined " + className;
  return (
    <>
      <span className={ linkIconCss }>link</span>
    </>
  );
}