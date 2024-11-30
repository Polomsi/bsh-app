import React from "react";
import { getMainLore } from "../../helpers";
import { fetchDiceConfig } from "../../api/dices";

const CharacterHeader = ({
  character,
  handleBackClick,
  widthIcons,
  heightIcons,
  ArtifactsIcon,
  SpiritsIcon,
  onRoll,
}) => {
  const roll = () => {
    const loadDiceNote = async () => {
      try {
        const diceNotation = await fetchDiceConfig(character.id, 'doom');
        onRoll(diceNotation.dice);
      } catch(err) {
        console.log(err)
      }

    }

    loadDiceNote();
  };

  return (
    <header className="bg-content-bg text-white p-4 flex justify-between items-center flex-col">
      <div className="w-full flex justify-between items-center">
        {/* Botón para regresar */}
        <button
          onClick={handleBackClick}
          className="bg-transparent relative z-2 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19L8 12L15 5"
            />
          </svg>
        </button>
        <div className="text-center flex-1">
          <h1 className="text-2xl font-bold">{character.name}</h1>
          <p className="flex items-center justify-center gap-2 text-subtitle-color">
            Nivel {character.level}
            <span className="relative before:content-[''] before:w-[1px] before:h-[20px] before:bg-red-500 before:inline-block before:mr-2 before:align-middle">
              {getMainLore(character)}
            </span>
          </p>
        </div>

        <p>
          <img
            src={character.avatar}
            alt={`${character.name} avatar`}
            className="w-16 h-16 rounded object-cover border border-avatar-border"
          />
        </p>
      </div>
      <div className="relative flex justify-center">
        <button
          className="mb-0 mt-3 bg-content-border-color p-3"
          onClick={() => roll()}
        >
          DU: 1D{character.current_doom_dice}
        </button>
      </div>
    </header>
  );
};

export default CharacterHeader;
