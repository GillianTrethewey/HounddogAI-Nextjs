type ButtonProps = {
  btnLabel: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ btnLabel, onClick }) => {
  return (
    <button
      className="bg-sky-100 text-blue-600 w-full h-12 rounded-md"
      onClick={onClick}>
      {btnLabel}
    </button>
  );
};
