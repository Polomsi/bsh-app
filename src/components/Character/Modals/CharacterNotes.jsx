import React, { useState } from "react";
import { updateCharacter } from "../../../api/character";
import Modal from "../../Modal";

export const CharacterNotes = ({ children, title, onClose, character }) => {
  const [notes, setNotes] = useState(character.notes); // Estado para las notas
  const [loading, setLoading] = useState(false); // Estado para la carga
  const [error, setError] = useState(null); // Estado para errores

  const handleSubmit = async () => {
    setLoading(true); // Indica que la solicitud está en progreso
    character.notes = notes;

    try {
      await updateCharacter(character); // Llama a la función con el ID y las notas
      onClose();
    } catch (err) {
      setError("Error al enviar las notas. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  // Combina el envío y el cierre del padre
  const customOnClose = async () => {
    await handleSubmit(); // Ejecuta la lógica de envío
    if (onClose) onClose(); // Llama al `onClose` del padre
  };

  return (
    <Modal title={title} onClose={customOnClose}>
      <div className="w-full">
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Escribe tus notas aquí..."
          className="p-2 text-white rounded w-full bg-modal-desc border-2 border-color-content-border-color"
          rows="5"
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </Modal>
  );
};
