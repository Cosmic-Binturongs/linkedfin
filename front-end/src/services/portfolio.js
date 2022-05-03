import api from "./apiConfig.js";

export const getCharacters = async () => {
  try {
    const response = await api.get("/ditto");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
