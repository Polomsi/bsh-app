import React, { useEffect, useState } from 'react'
import Modal from '../../Modal'
import { fetchInventoryCharacter } from '../../../api/character';

export const CharacterInventory = ({ title, children, onClose, character }) => { 
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDescription, setShowDescription] = useState(null); // Estado para la descripción visible

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        const data = await fetchInventoryCharacter(character);
        setItems(data);
      } catch (err) {
        setError("Error al cargar el personaje.");
      } finally {
        setLoading(false);
      }
    };

    loadCharacter();
  }, [character]);

  const toggleDescription = (index) => {
    // Alterna la visibilidad de la descripción
    setShowDescription((prev) => (prev === index ? null : index));
  };

  if (loading) {
    return <p className="text-white text-center">Cargando personaje...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

    return (
      <Modal title={title} onClose={onClose}>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex text-white flex-col space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold">{item.name}</span>
              <div className="flex space-x-2 items-center">
                {/* Botón de Información */}
                <button
                  onClick={() => toggleDescription(index)}
                  className="bg-transparent border-2 border-color-subititle-color text-subtitle-color font-bold rounded-full w-6 h-6 flex items-center justify-center"
                >
                  i
                </button>
                {/* Botón Usar */}
                <button className="bg-btns text-white font-bold py-1 px-3 rounded">
                  +
                </button>
              </div>
            </div>
            {/* Cuadro de descripción con animación */}
            <div
              className={`overflow-hidden transition-all  duration-300 ease-in-out ${
                showDescription === index
                  ? "max-h-[200px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div
                className="text-white bg-modal-desc p-2 rounded text-sm"
                dangerouslySetInnerHTML={{
                  __html: item.description || "Sin descripción disponible.",
                }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
      </Modal>
    )
}
