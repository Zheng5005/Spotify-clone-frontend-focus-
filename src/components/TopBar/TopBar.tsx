// src/components/Topbar/Topbar.tsx
import { Home, Search } from "lucide-react";
import { IconButton } from "./IconButton";
import { Link } from "react-router";

export default function Topbar() {
  return (
    <header
      className="h-16 px-4 bg-black border-b border-black
                 grid grid-cols-3 items-center"
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/spotify.svg"
            alt="Spotify"
            className="h-8 w-auto"
          />
        </Link>
      </div>

      {/* Center: Navigation Icons */}
      <nav className="flex justify-center gap-4">
        <Link to="/">
          <IconButton label="Home">
            <Home size={20} />
          </IconButton>
        </Link>

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

