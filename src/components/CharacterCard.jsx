import React from 'react';
import { getMainLore } from '../helpers';

const CharacterCard = ({ character, onSelect }) => {
  return (
    <div
      key={character.id}
      className="bg-content-bg bg-opacity-75 shadow rounded p-4 cursor-pointer hover:bg-opacity-100 border border-content-border-color flex gap-4"
      onClick={() => onSelect(character.id)}
    >
      {/* Imagen del Avatar */}
      <img
        src={character.avatar}
        alt={`${character.name} avatar`}
        className="w-16 h-16 rounded object-cover border border-avatar-border"
      />

      {/* Información del Personaje */}
      <div>
        <h2 className="text-xl font-bold">{character.name}</h2>
        <p className="flex items-center gap-2 text-subtitle-color">
          Nivel {character.level}{' '}
          <span className="relative before:content-[''] before:w-[1px] before:h-[20px] before:bg-red-500 before:inline-block before:mr-2 before:align-middle">
            {getMainLore(character)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;