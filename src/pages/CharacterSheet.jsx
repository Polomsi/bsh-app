import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCharacterById } from "../api/character";
import NotesIcon from "../assets/icons/notas.png";
import ArtifactsIcon from "../assets/icons/ciencia_macabra.png";
import SpiritsIcon from "../assets/icons/pactos_demoniacos.png";
import CharacterHeader from "../components/Character/CharacterHeader";
import { CharacterContent } from "../components/Character/CharacterContent";
import { CharacterLifeBar } from "../components/Character/Utils/CharacterLifeBar";
import { CharacterButton } from "../components/Character/Utils";
import {
  CharacterArtifacts,
  CharacterEquipment,
  CharacterGifts,
  CharacterInventory,
  CharacterNotes,
  CharacterSpirits,
} from "../components/Character/Modals";
import DiceBox from "@3d-dice/dice-box";
import PusherComponent from "../components/PusherComponent";

const widthIcons = 50;
const heightIcons = 50;
const heightNotes = 35;
const widthNotes = 35;
const Dice = new DiceBox(
  "#dice-box", // target DOM element to inject the canvas for rendering
  {
    id: "dice-canvas", // canvas element id
    assetPath: "/assets/",
    startingHeight: 8,
    throwForce: 6,
    spinForce: 5,
    lightIntensity: 0.9,
    themeColor: "#990000"
  }
);

// initialize the Dice Box outside of the component
Dice.init().then(() => {
  // clear dice on click anywhere on the screen
  document.addEventListener("mousedown", () => {
    const diceBoxCanvas = document.getElementById("dice-canvas");
    if (window.getComputedStyle(diceBoxCanvas).display !== "none") {
      Dice.hide().clear();
    }
  });
});
const CharacterSheet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [animateExit, setAnimateExit] = useState(false);



  const [rollResult, setRollResult] = useState();
  const [pendingRoll, setPendingRoll] = useState();

  // create a ref so the Dice Box doesn't try to reinitialize every time the App rerenders.
  const initialized = useRef(false);

  // set up the callback for when the dice are finished rolling - https://fantasticdice.games/docs/usage/callbacks
  Dice.onRollComplete = (results) => {
    console.log("results", results);
    setRollResult(results[0].value);
  };

  // trigger dice roll
  const rollDice = (notation) => {
    console.log(notation)
    // save which attribute we're rolling for
    // setPendingRoll(group);
    // setPendingRoll(group);
    // trigger the dice roll
    Dice.show().roll(notation);
  };

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        const data = await fetchCharacterById(id);
        setCharacter(data);
      } catch (err) {
        setError("Error al cargar el personaje.");
      } finally {
        setLoading(false);
      }
    };

    loadCharacter();
  }, [id]);

  const handleBackClick = () => {
    setAnimateExit(true);
    setTimeout(() => {
      navigate(-1);
    }, 500);
  };

  const handleOpenModal = (modalType) => setActiveModal(modalType);

  const handleCloseModal = () => setActiveModal(null);

  if (loading) {
    return <p className="text-white text-center">Cargando personaje...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!character) {
    return <p className="text-white text-center">Personaje no encontrado</p>;
  }

  return (
    <div className="relative">
      <div
        className={`absolute top-0 left-0 w-full min-h-screen bg-bsh-bg transition-transform duration-500 z-20 ${
          animateExit ? "-translate-x-full" : "translate-x-0"
        }
         `}
      >
         {/* before:content-[''] before:absolute before:inset-0 before:rounded-lg before:box-shadow-inset-red before:animate-pulse */}
        {/* Barra superior */}
        <CharacterHeader
          character={character}
          handleBackClick={handleBackClick}
          widthIcons={widthIcons}
          heightIcons={heightIcons}
          ArtifactsIcon={ArtifactsIcon}
          SpiritsIcon={SpiritsIcon}
          onRoll={rollDice}
        />

        {/* Contenido principal */}
        <CharacterContent
          character={character}
          widthIcons={widthIcons}
          heightIcons={heightIcons}
          activeModal={activeModal}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          onRoll={rollDice}
        />
      </div>
        
      {/* <div
        className={`fixed z-20 bottom-3 right-3 bg-content-bg rounded-full w-[${widthIcons}px] h-[${heightIcons}px] flex items-center justify-center shadow-lg`}
      >
        <CharacterButton
          icon={NotesIcon}
          onClick={() => handleOpenModal("notes")}
          width={widthNotes}
          height={heightNotes}
          alt="Notas"
        />
      </div> */}

      {/* Modales */}
      {activeModal === "inventory" && (
        <CharacterInventory title="Inventario" onClose={handleCloseModal} character={character}>
          <p>Contenido del modal de Inventario...</p>
        </CharacterInventory>
      )}
      {activeModal === "equipment" && (
        <CharacterEquipment title="Equipamiento" onClose={handleCloseModal} character={character}>
          <p>Contenido del modal de Equipamiento...</p>
        </CharacterEquipment>
      )}
      {activeModal === "gifts" && (
        <CharacterGifts title="Dones" onClose={handleCloseModal} id={id}>
          <p>Contenido del modal de Dones...</p>
        </CharacterGifts>
      )}
      {activeModal === "notes" && (
        <CharacterNotes title="Notas" onClose={handleCloseModal} character={character}>
          <p>Contenido del modal de Notas...</p>
        </CharacterNotes>
      )}
      {activeModal === "spirits" && (
        <CharacterSpirits title="Espíritus" onClose={handleCloseModal} id={id}>
          <p>Contenido del modal de Espíritus...</p>
        </CharacterSpirits>
      )}
      {activeModal === "artifacts" && (
        <CharacterArtifacts title="Artefactos" onClose={handleCloseModal}>
          <p>Contenido del modal de Artefactos...</p>
        </CharacterArtifacts>
      )}
    </div>
  );
};

export default CharacterSheet;
