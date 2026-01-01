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

 export function PlayButtonGreen({size = 20}) {
  return (
    <button
      aria-label="PlaySong"
      className="bg-green-500 text-black rounded-full p-3
                 shadow-lg hover:scale-105 transition"
    >
      <Play size={size} />
    </button>
  );
}

 export function PlayButtonBig() {
  return (
    <button
      aria-label="PlaySong"
      className="mt-4 bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-full w-fit p-3"
    >
      <Play size={40} />
    </button>
  );
}
