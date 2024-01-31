"use client";

import useSWR from "swr";
import { getCards } from "../api/cards-api";
import { CardList } from "../components/CardList";
import { deleteCard } from "../api/cards-api";

export default function Delete() {

  const { data, isLoading, error, mutate } = useSWR(
    ["/data-elements/", "100", "0"],
    getCards
  );

  const handleDeleteCard = async (cardId:string) => {

    try {
      const id = await deleteCard(cardId);
      mutate();

    }catch(error) {
      console.error("Error deleting card:", error);
      throw error;
    }
  };



  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="mt-20">
      <CardList cardList={data.items} isDeleting={true} onDeleteCard={handleDeleteCard}/>
    </main>
  );
}
