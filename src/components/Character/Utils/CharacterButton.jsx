import React from "react";

export const CharacterButton = ({ icon, onClick, width, height, alt }) => {
  return (
    <div className={`relative group"`} style={{ width: `${width}px`, height: `${height}px` }}>
      {/* Botón */}
      <button onClick={onClick} className={`w-[${width}px] h-[${height}px] flex items-center justify-center`}>
        <img className={`w-[${width}px] h-[${height}px]`} src={icon} alt={alt} />
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
        {alt}
      </div>
    </div>
  );
};
