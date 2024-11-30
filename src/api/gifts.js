// import { BASE_URL } from "./variables";

/**
 * Obtiene la lista de personajes desde la API.
 * @returns {Promise<Array>} Lista de personajes.
 */
export const fetchCharacterGifts = async (id) => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    try {
      const response = await fetch(`${BASE_URL}/character/gifts/${id}`);
      if (!response.ok) {
        throw new Error(`Error al obtener los dones: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al llamar a la API:", error);
      throw error;
    }
  };