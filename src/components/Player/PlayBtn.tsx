import { Play } from "lucide-react";

export function PlayButton() {
  return (
    <button
      aria-label="Play"
      className="bg-white text-black rounded-full p-2
                 hover:scale-105 transition"
    >
      <Play size={20} />
    </button>
  );
}
 export function PlayButtonGreen() {
  return (
    <button
      aria-label="PlaySong"
      className="bg-green-500 text-black rounded-full p-3
                 shadow-lg hover:scale-105 transition"
    >
      <Play size={20} />
    </button>
  );
}
