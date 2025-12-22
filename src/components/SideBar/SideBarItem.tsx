// src/components/Sidebar/SidebarItem.tsx
interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
}

export default function SidebarItem({
  icon,
  label,
}: SidebarItemProps) {
  return (
    <button
      className="flex items-center gap-3 p-2 w-full rounded-md 
                 text-neutral-300 hover:text-white hover:bg-neutral-800"
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}

