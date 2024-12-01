import React from "react";
import { CharacterStat } from "./CharacterStat";

export const CharacterStats = ({character}) => {
  return (
    <div className="flex gap-3 items-center justify-between">
      <CharacterStat attr={'FUE'} value={character.strength}/>
      <CharacterStat attr={'DES'} value={character.dexterity}/>
      <CharacterStat attr={'INT'} value={character.intelligence}/>
      <CharacterStat attr={'CON'} value={character.constitution}/>
      <CharacterStat attr={'SAB'} value={character.wisdom}/>
      <CharacterStat attr={'CAR'} value={character.charisma}/>
    </div>
  );
};
