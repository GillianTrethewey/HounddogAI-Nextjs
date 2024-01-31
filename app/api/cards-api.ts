import axios from "axios";
import { TCard } from "../lib/definitions";

const baseUrl = "https://api-staging.hounddog.ai";

const authToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImFiM2UzYzQ1LTI1MGYtNGRjNC05NWY5LTBlMTAyZTAwMDM5MSJ9.eyJzdWIiOiI2YmFhODE0Mi03MmIyLTRjNDMtOGVkNi1jMzU5NDk4OTU2MGYiLCJpYXQiOjE3MDYxNjg4MzYsImV4cCI6MTcwODc2MDgzNiwidXNlcl9pZCI6IjZiYWE4MTQyLTcyYjItNGM0My04ZWQ2LWMzNTk0OTg5NTYwZiIsImlzcyI6Imh0dHBzOi8vOTY5ODEyNTk0LnByb3BlbGF1dGh0ZXN0LmNvbSIsImVtYWlsIjoiY2FuZGlkYXRlK2dpbGxpYW5AaG91bmRkb2cuYWkiLCJmaXJzdF9uYW1lIjoiR2lsbGlhbiIsImxhc3RfbmFtZSI6IlRyZXRoZXdheSIsIm9yZ19pZF90b19vcmdfbWVtYmVyX2luZm8iOnsiMTlhNDVmNTgtZTU4Ni00ODdlLWI3MzAtZTE5YzRmMjQyYzlkIjp7Im9yZ19pZCI6IjE5YTQ1ZjU4LWU1ODYtNDg3ZS1iNzMwLWUxOWM0ZjI0MmM5ZCIsIm9yZ19uYW1lIjoiSW50ZXJ2aWV3IENhbmRpZGF0ZXMiLCJ1cmxfc2FmZV9vcmdfbmFtZSI6ImludGVydmlldy1jYW5kaWRhdGVzIiwib3JnX21ldGFkYXRhIjp7fSwidXNlcl9yb2xlIjoiTWVtYmVyIiwiaW5oZXJpdGVkX3VzZXJfcm9sZXNfcGx1c19jdXJyZW50X3JvbGUiOlsiTWVtYmVyIl0sInVzZXJfcGVybWlzc2lvbnMiOltdfX19.abwn18OPIL1NCVZ-Wc0F-4gp_tip_hOxRf51U3xbJbPQcF1F4OtBWtUgFRd1rJwhrk-Z_AyNPkBL3ACmECSeucO1ySDBTihOaNJmITUIhW8K8vyCurwXfaMCNVqpQZb3KUgS7qEP9lYw8zBYg2jYk9R-9rK-sAn_ovwc0dSri9MVbaOFgUuV3YliDittzmGxqjVyIVXZUQumziK3fJJZLy_iFylmRjKnudsyKIgoeqt2tibPO71U8kc1HorEFAxgxlxot8z6B5NS0DAY6ul33xqxM-hbaHPnJsJEsTam-IeVKgQMlJhTYkffJEiGa1I5Tx0IHBTDQCdssGhT-QClVA";

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
