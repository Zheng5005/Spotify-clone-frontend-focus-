interface ControlButtonProps {
  children: React.ReactNode;
  label: string;
}

export function ControlButton({
  children,
  label,
}: ControlButtonProps) {
  return (
    <button
      aria-label={label}
      className="text-neutral-400 hover:text-white
                 transition focus:outline-none"
    >
      {children}
    </button>
  );
}
