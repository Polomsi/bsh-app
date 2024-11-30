import React from "react";
import { fetchDiceConfig } from "../../api/dices";

export const CharacterStat = ({characterId, stat, onRoll}) => {
  const roll = () => {
    const loadDiceNote = async () => {
      try {
        const diceNotation = await fetchDiceConfig(characterId, 'stat');
        onRoll(diceNotation.dice);
      } catch(err) {
        console.log(err)
      }

    }

    loadDiceNote();

    
    
  };
  return (
    <div
      onClick={roll}
      className="relative w-full max-w-[150px] aspect-square bg-opacity-75 flex flex-col items-center justify-between p-4"
    >
      {/* SVG de Borde Decorativo */}
  <svg
    className="absolute inset-0 z-[-1] w-full h-full pointer-events-none fill-content-bg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    preserveAspectRatio="none"
  >
    <path
      d="M10 20 Q20 10 40 10 H160 Q180 10 190 20 V160 Q190 170 180 180 H160 Q140 180 130 190 H70 Q60 180 40 180 H20 Q10 170 10 160 Z"
      fill="#3C545E"
      stroke="#688A8A" /* Color del borde */
      strokeWidth="3"
    />
    
  </svg>
      {/* Nombre de la Stat */}
      <h3
        className="font-bold text-white uppercase text-center break-words"
        style={{
          fontSize: "clamp(0.875rem, 0.6513rem + 0.8421vw, 1.125rem)",
        }}
      >
        {stat.name}
      </h3>

      {/* Valor de la Stat */}
      <p
        className="font-bold text-white text-center break-words"
        style={{
          fontSize: "2.5rem", // Responsive font size
        }}
      >
        {stat.value}
      </p>
    </div>
  );
};
