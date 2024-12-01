import React from "react";

export const CharacterLifeBar = ({name, hitPoints, currentHitPoints}) => {
    const percentage = Math.max((currentHitPoints / hitPoints) * 100, 0)
  return (
    <div className="w-full">
      <p className="text-center">{name}</p>
      <div className="w-full bg-gray-200 rounded-full h-6 relative">
        {/* Fondo de la barra */}
        <div
          className="bg-current-life h-6 rounded-full transition-all duration-300"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
        {/* Texto en la barra */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
          {currentHitPoints} / {hitPoints}
        </div>
      </div>
    </div>
  );
};
