import React from "react";
import CharacterStats from "./CharacterStats";
import { CharacterButton } from "./Utils";
import InventoryIcon from "../../assets/icons/inventario.png";
import EquipmentIcon from "../../assets/icons/equipamiento.png";
import GiftsIcon from "../../assets/icons/dones.png";
import NotesIcon from "../../assets/icons/notas.png";
import ArtifactsIcon from "../../assets/icons/ciencia_macabra.png";
import SpiritsIcon from "../../assets/icons/pactos_demoniacos.png";
import { CharacterLifeBar } from "./Utils/CharacterLifeBar";

export const CharacterContent = ({
  character,
  widthIcons,
  heightIcons,
  activeModal,
  handleOpenModal,
  handleCloseModal,
  onRoll,
}) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-7 gap-4 p-4 flex-row">
      {/* Barra lateral izquierda */}
      <section className="bg-content-bg shadow rounded p-4 flex justify-around align-center md:flex-col md:justify-around text-center md:max-w-[80px]">
        {/* Botón Inventario */}
        <CharacterButton
          icon={InventoryIcon}
          onClick={() => handleOpenModal("inventory")}
          width={widthIcons}
          height={heightIcons}
          alt="Inventario"
        />

        {/* Botón Equipamiento */}
        <CharacterButton
          icon={EquipmentIcon}
          onClick={() => handleOpenModal("equipment")}
          width={widthIcons}
          height={heightIcons}
          alt="Equipamiento"
        />

        {/* Botón Dones */}
        <CharacterButton
          icon={GiftsIcon}
          onClick={() => handleOpenModal("gifts")}
          width={widthIcons}
          height={heightIcons}
          alt="Dones"
        />
      </section>

      
        {/* Barra de vida */}
        <div className="m-auto flex justify-center items-center flex-col px-1 w-full">
          <p className="text-title-color mb-2">Puntos de golpe</p>
          <CharacterLifeBar
            totalLife={character.hit_points}
            currentLife={character.current_hit_points}
          />
        </div>

      {/* Contenido principal derecho */}
      <section className="md:col-span-6">
        <CharacterStats
          onRoll={onRoll}
          dexterity={character.dexterity}
          strength={character.strength}
          constitution={character.constitution}
          intelligence={character.intelligence}
          wisdom={character.wisdom}
          charisma={character.wisdom}
          characterId={character.id}
        />
      </section>
      {/* Barra lateral izquierda */}
      <section className="bg-content-bg shadow rounded p-4 flex justify-around align-center md:flex-col md:justify-around text-center md:max-w-[80px]">
        {/* Botón Inventario */}
        <CharacterButton
          icon={NotesIcon}
          onClick={() => handleOpenModal("notes")}
          width={widthIcons}
          height={heightIcons}
          alt="Inventario"
        />

        {/* Botón Equipamiento */}
        <CharacterButton
          icon={SpiritsIcon}
          onClick={() => handleOpenModal("spirits")}
          width={widthIcons}
          height={heightIcons}
          alt="Equipamiento"
        />

        {/* Botón Dones */}
        <CharacterButton
          icon={ArtifactsIcon}
          onClick={() => handleOpenModal("artifacts")}
          width={widthIcons}
          height={heightIcons}
          alt="Dones"
        />
      </section>
    </main>
  );
};
