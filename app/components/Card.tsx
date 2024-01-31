import { TCard } from "../lib/definitions";

type CardProps = {
  card: TCard;
  onDeleteCard?: (id: string) => void;
  isDeleting: boolean;
};

export const Card: React.FC<CardProps> = ({
  card,
  onDeleteCard,
  isDeleting,
}) => {
  const displayWithQuotes = (value: string) => {
    return value === "" ? `"${value}"` : value;
  };

  return (
    <div className="text-black decoration-none border border-solid border-gray-100 w-50">
      <li key={card.id} className="">
        <div className="w-25 mx-auto max-w-30 p-4 flex flex-col justify-between">
          <div className="card__text">
            <p className="card__text">{card.id}</p>
            <p className="card__text">{card.name}</p>
            <p className="card__text">{card.description}</p>
            <p className="card__text">
              Exclude Pattern: {displayWithQuotes(card.excludePattern)}
            </p>
            <p className="card__text">Include Pattern: {card.includePattern}</p>
            <p className="card__text">Sensitivity: {card.sensitivity}</p>
          </div>
          {isDeleting && onDeleteCard ? (
            <button
              className="bg-sky-100 text-blue-600 h-12 rounded-md"
              onClick={() => onDeleteCard(card.id)}>
              DELETE
            </button>
          ) : null}
        </div>
      </li>
    </div>
  );
};
