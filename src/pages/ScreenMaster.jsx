import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../api/character";
import { CharacterList } from "../components/Master/Character/CharacterList";

export const ScreenMaster = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los personajes.");
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  if (loading) {
    return <p className="text-white text-center">Cargando personajes...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-bsh-bg p-4 text-white">
      {/* LISTA DE PLAYERS */}
      <CharacterList characters={characters}/>
      {/* LISTA DE NPCs */}
      <div className="">NPCs</div>
      {/* ACCIONES */}
      <div className="">ACCIONES</div>
    </div>
  );
};
