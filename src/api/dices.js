export const fetchDiceConfig = async (characterId, typeDice) => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    try {
      const response = await fetch(`${BASE_URL}/dice-config/${characterId}/${typeDice}`);
      if (!response.ok) {
        throw new Error(`Error al obtener los resultados: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al llamar a la API:", error);
      throw error;
    }
}   