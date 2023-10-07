type Props = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({ text, onClick, className }: Props) => {
  return (
    <button
      className={`${className} font-bold h-[45px] min-w-[120px] rounded-[8px]`}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
