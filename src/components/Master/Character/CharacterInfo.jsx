import React from "react";
import { CharacterLifeBar } from "./CharacterLifeBar";

export const CharacterInfo = ({character}) => {
  return (
    <div className="flex gap-3 items-center">
      {/* PLAYER NAME E IMAGEN */}
      <div className="flex flex-col justify-center items-center">
        <p>
          <img
            className="w-16 min-w-16 min-h-16 h-16 rounded object-cover border border-avatar-border"
            src={character.avatar}
            alt={character.name}
          />
        </p>
      </div>
      {/* LIFEBAR */}
      <CharacterLifeBar name={character.name} currentHitPoints={character.current_hit_points} hitPoints={character.hit_points} />
    </div>
  );
};
