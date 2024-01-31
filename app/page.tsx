"use client";

import useSWR from "swr";
import { getCards } from "./api/cards-api";
import { CardList } from "./components/CardList";

export default function View() {
  const { data, isLoading, error, mutate } = useSWR(
    ["/data-elements/", "100", "0"],
    getCards
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <main>
      <CardList cardList={data.items} isDeleting={false} />
    </main>
  );
}
