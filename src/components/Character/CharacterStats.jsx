import React from "react";
import { CharacterStat } from "./CharacterStat";

const CharacterStats = ({
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
  onRoll,
  characterId
}) => {
  const stats = [
    { name: "Fuerza", value: strength },
    { name: "Destreza", value: dexterity },
    { name: "Constitución", value: constitution },
    { name: "Inteligencia", value: intelligence },
    { name: "Sabiduría", value: wisdom },
    { name: "Carisma", value: charisma },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 mx-auto max-w-[520px] justify-items-center">
      {stats.map((stat, index) => (
        <CharacterStat key={index} stat={stat} onRoll={onRoll} characterId={characterId} />
      ))}
    </div>
  );
};

export default CharacterStats;
