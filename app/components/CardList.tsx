import { Card } from "./Card";
import { TCard } from "../lib/definitions";

type CardListProps = {
  cardList: TCard[];
  onDeleteCard?: (id: string) => void;
  isDeleting: boolean;
};

export const CardList: React.FC<CardListProps> = ({
  cardList,
  onDeleteCard,
  isDeleting,
}) => {
  return (
    <section className="flex">
      <ul className="flex flex-wrap gap-4 justify-center">
        {cardList.map((card: TCard) => (
          <Card
            key={card.id}
            card={card}
            isDeleting={isDeleting}
            onDeleteCard={onDeleteCard}
          />
        ))}
      </ul>
    </section>
  );
};
