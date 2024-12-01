import React from 'react'
import { CharacterInfo } from './CharacterInfo'
import { CharacterStats } from './CharacterStats'

export const CharacterList = ({characters}) => {
  return (
    <div className="flex gap-3">
        {/* PLAYER */}
        {characters.map((character) => (
          <div
            className="min-w-[400px] max-w-[500px] bg-content-bg rounded p-4 flex flex-col gap-3"
            key={character.id}
          >
            {/* INFO */}
            <CharacterInfo character={character}/>
            {/* STATS */}
            <CharacterStats character={character}/>
            {/* EQUIPAMIENTO */}
            <div className="border border-content-border-color p-4 rounded">
                EQUIPAMIENTO
            </div>
            {/* CUADROS */}
            <div className="flex flex-row flex-wrap gap-3 justify-between">
                <div className="w-[48%] border border-content-border-color p-4 rounded">Contenido</div>
                <div className="w-[48%] border border-content-border-color p-4 rounded">Contenido</div>
                <div className="w-[48%] border border-content-border-color p-4 rounded">Contenido</div>
                <div className="w-[48%] border border-content-border-color p-4 rounded">Contenido</div>
            </div>
            {/* ACCIONES */}
            <div className="w-full p-4 border border-content-border-color rounded">ACCIONES</div>
          </div>
        ))}
      </div>
  )
}
