interface IconButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function IconButton({
  handleClick,
  children,
  className = "",
}: IconButtonProps) {
  return (
    <button
      aria-label="icon button"
      type="button"
      onClick={handleClick}
      className={`flex justify-center items-center p-0 outline-none ${className}`}
    >
      {children}
    </button>
  );
}
