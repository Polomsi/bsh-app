import React from "react";

export const CharacterStat = ({attr, value}) => {
  return (
    <div className="w-16 h-16 min-w-16 min-h-16 border border-content-border-color rounded flex flex-col items-center justify-center">
      <p className="text-xs">{attr}</p>
      <p className="text-2xl">{value}</p>
    </div>
  );
};
