import {
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
} from "lucide-react";
import { ControlButton } from "./ControlBtn";
import { PlayButton } from "./PlayBtn";
import { useDispatch, useSelector } from "react-redux";
import { playSong, tooglePlay } from "../../store/playerSlice";
import { artists } from "../../data/artist";

export default function Player() {
  const dispatch = useDispatch()
  const { currentSong, isPlaying } = useSelector((state: any) => state.player)

  function handleSelection() {
    if (isPlaying) {
      dispatch(tooglePlay())
    } else {
      dispatch(playSong(currentSong))
    }
  }

  if (!currentSong) return null

  const artist = artists.find((ar) => ar.id === currentSong?.artistID)

  return (
    <footer
      className="h-24 bg-black border-t border-black
                 grid grid-cols-3 items-center px-4"
    >
      {/* Left: Track Info */}
      <div className="flex items-center gap-4">
        <img
          src={currentSong.image}
          alt="Album cover"
          className="w-14 h-14 rounded-md object-cover"
        />

        <div className="min-w-0">
          <p className="text-sm text-white truncate">
            {/* Song Title */}
            {currentSong.name}
          </p>
          <p className="text-xs text-neutral-400 truncate">
            {/* Artist Name */}
            {artist?.name}
          </p>
        </div>
      </div>

      {/* Center: Controls */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <ControlButton label="Shuffle">
            <Shuffle size={18} />
          </ControlButton>

          <ControlButton label="Previous">
            <SkipBack size={18} />
          </ControlButton>

          <PlayButton handleClick={handleSelection} isPlaying={isPlaying} />

          <ControlButton label="Next">
            <SkipForward size={18} />
          </ControlButton>

          <ControlButton label="Repeat">
            <Repeat size={18} />
          </ControlButton>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-xs text-neutral-400">0:00</span>

          <div className="flex-1 h-1 bg-neutral-700 rounded-full">
            <div className="h-1 w-1/3 bg-white rounded-full" />
          </div>

          <span className="text-xs text-neutral-400">{currentSong.duration}</span>
        </div>
      </div>

      {/* Right: Volume */}
      <div className="flex items-center justify-end gap-2">
        <Volume2 size={18} className="text-neutral-300" />

        <div className="w-24 h-1 bg-neutral-700 rounded-full">
          <div className="h-1 w-2/3 bg-white rounded-full" />
        </div>
      </div>
    </footer>
  );
}
