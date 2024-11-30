import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CharacterCard from "../components/CharacterCard.jsx";
import { fetchCharacters } from "../api/character";
import PusherComponent from "../components/PusherComponent.jsx";

const CharacterSelection = () => {
  const navigate = useNavigate();
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

  const selectCharacter = (id) => {
    navigate(`/character/${id}`);
  };

  if (loading) {
    return <p className="text-white text-center">Cargando personajes...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-bsh-bg p-4 text-white">
      <h1 className="text-2xl font-bold mb-6">Selecciona tu Personaje</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onSelect={selectCharacter}
          />
        ))}
      </div>
      {/* <PusherComponent /> */}
    </div>
  );
};

export default CharacterSelection;
