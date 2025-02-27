import React from "react";

export default function IconScore({ className, filled = '❤', emptied = '🤍', score, maxScore }) {
  const iconScore = filled.repeat(score) + emptied.repeat(maxScore - score);

  const iconScoreClass = "";

  return (
    <span className={`${iconScoreClass} ${className}`}>
      { iconScore }
    </span>
  );
}