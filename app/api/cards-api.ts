import axios from "axios";
import { TCard } from "../lib/definitions";

const baseUrl = "";

const authToken = "";

export const getCards = async (args: string[]) => {
  const [key, limit, offset] = args;
  const getCardResponse = await axios.get(
    `${baseUrl}${key}?limit=${limit}&offset=${offset}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return getCardResponse.data;
};

export const createCard = async (newCardObject: TCard) => {
  const postCardResponse = await axios.post(
    `${baseUrl}/data-elements/`,
    newCardObject,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  return postCardResponse.data;
};

export const deleteCard = async (cardId: string) => {
  const deleteCardResponse = await axios.delete(
    `${baseUrl}/data-elements/${cardId}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  return deleteCardResponse.data;
};
