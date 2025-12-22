interface IconButtonProps {
  children: React.ReactNode;
  label: string;
}

export function IconButton({ children, label }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className="p-2 rounded-full text-neutral-300
                 hover:text-white hover:bg-neutral-800
                 focus:outline-none focus:ring-2 focus:ring-white"
    >
      {children}
    </button>
  );
}

