type Props = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: Props) => {
  return (
    <button
      className='bg-[#29bc9b] font-bold h-[45px] min-w-[120px] rounded-[8px] text-white hover:bg-[#1e9a7a] transition-colors duration-200 ease-in-out'
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
