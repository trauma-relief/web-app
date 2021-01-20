import axios from "axios";

export async function getResults(selectedFlashCardIds) {
  try {
    const config = {
      params: { selectedFlashCards: [selectedFlashCardIds] },
    };

    const response = await axios.get("/api/results", config);

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch flash card results");
  }
}