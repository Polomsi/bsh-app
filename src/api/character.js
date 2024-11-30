// import { BASE_URL } from "./variables";
const BASE_URL = process.env.REACT_APP_API_URL;
/**
 * Obtiene la lista de personajes desde la API.
 * @returns {Promise<Array>} Lista de personajes.
 */
export const fetchCharacters = async () => {
  try {
    const response = await fetch(`${BASE_URL}/characters`);
    if (!response.ok) {
      throw new Error(`Error al obtener personajes: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al llamar a la API:", error);
    throw error;
  }
};

/**
 * Obtiene los datos del personaje desde la API.
 * @returns {Promise<Object>} Datos del personaje.
 */
export const fetchCharacterById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/characters/${id}`);
    if (!response.ok) {
      throw new Error(`Error al obtener el personaje: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al llamar a la API:", error);
    throw error;
  }
};

export const updateCharacter = async (character) => {
  const payload = {
    ...character, // Las notas que deseas enviar
  };

  try {
    const response = await fetch(`${BASE_URL}/characters/${character.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", // Indicamos que enviamos JSON
      },
      body: JSON.stringify(payload), // Convertimos el payload a una cadena JSON
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data = await response.json(); // Parseamos la respuesta
    return data; // Opcional: Devuelve los datos de la respuesta si es necesario
  } catch (error) {
    throw error; // Opcional: Propaga el error para que pueda ser manejado en otro lugar
  }
};

export const fetchInventoryCharacter = async (character) => {
  try {
    const response = await fetch(`${BASE_URL}/character/inventory/${character.id}`);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data = await response.json(); // Parseamos la respuesta
    console.log("Notas enviadas exitosamente:", data);
    return data; // Opcional: Devuelve los datos de la respuesta si es necesario
  } catch (error) {
    console.error("Error al enviar las notas:", error);
    throw error; // Opcional: Propaga el error para que pueda ser manejado en otro lugar
  }
};

export const fetchEquipmentCharacter = async (character) => {
  try {
    const response = await fetch(`${BASE_URL}/character/equipment/${character.id}`);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data = await response.json(); // Parseamos la respuesta
    return data; // Opcional: Devuelve los datos de la respuesta si es necesario
  } catch (error) {
    console.error("Error al enviar las notas:", error);
    throw error; // Opcional: Propaga el error para que pueda ser manejado en otro lugar
  }
};
