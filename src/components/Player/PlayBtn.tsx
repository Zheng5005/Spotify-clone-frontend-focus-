import { Pause, Play } from "lucide-react";
import { useDispatch } from "react-redux";
import { playSong } from "../../store/playerSlice";

interface Props {
  handleClick: () => void;
  isPlaying: boolean;
}

interface PropsGreen {
  size?: number;
  handleClick?: () => void;
  song?: any
}

export function PlayButton({handleClick, isPlaying}: Props) {
  return (
    <button
      onClick={handleClick}
      aria-label="Play"
      className="bg-white text-black rounded-full p-2
                 hover:scale-105 transition"
    >
      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
    </button>
  );
}

 export function PlayButtonGreen({size = 20, song}: PropsGreen) {
  const dispatch = useDispatch()

  return (
    <button
      onClick={() => dispatch(playSong(song))}
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
