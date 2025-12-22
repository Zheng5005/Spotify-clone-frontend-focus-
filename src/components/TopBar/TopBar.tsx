// src/components/Topbar/Topbar.tsx
import { Home, Search } from "lucide-react";
import { IconButton } from "./IconButton";

export default function Topbar() {
  return (
    <header
      className="h-16 px-4 bg-black border-b border-black
                 grid grid-cols-3 items-center"
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <img
          src="/spotify.svg"
          alt="Spotify"
          className="h-8 w-auto"
        />
      </div>

      {/* Center: Navigation Icons */}
      <nav className="flex justify-center gap-4">
        <IconButton label="Home">
          <Home size={20} />
        </IconButton>

        <IconButton label="Search">
          <Search size={20} />
        </IconButton>
      </nav>

      {/* Right: Auth Buttons */}
      <div className="flex justify-end gap-3">
        <button className="text-sm font-medium text-neutral-300 hover:text-white">
          Sign up
        </button>

        <button
          className="text-sm font-medium bg-white text-black
                     px-4 py-1.5 rounded-full hover:scale-105 transition"
        >
          Log in
        </button>
      </div>
    </header>
  );
}

