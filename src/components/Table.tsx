import type { Song } from "../data/songs"
import { PlayButtonGreen } from "./Player/PlayBtn"

interface TableProps {
  song?: Song,
  albumSongs?: Song[],
  showHeaders?: boolean,
}

function Table({song, albumSongs, showHeaders = true}: TableProps) {
  return (
    <section className="mt-4">
      <div className="w-full">
        {/* Header Row */}
        {showHeaders &&
          <div className="grid grid-cols-[40px_1fr_100px] text-gray-400 text-sm pb-2 border-b border-gray-700">
            <span>#</span>
            <span>Title</span>
            <span>Duration</span>
          </div>
        }

        {/* Show a list of songs */}
        {albumSongs && albumSongs.map((song, index) => (
          <div
            key={song.id}
            className="group grid grid-cols-[40px_1fr_100px] py-3 border-b border-gray-800 
                        hover:bg-white/10 cursor-pointer transition items-center"
          >
            {/* Index is hidden on hover */}
            <span className="group-hover:hidden">
              {index + 1}
            </span>

            {/* Index is hidden on hover */}
            <span className="hidden group-hover:flex">
              <PlayButtonGreen size={12}/>
            </span>

            <span>{song.name}</span>
            <span>{song.duration}</span>
          </div>
        ))}

        {/* Only shows a single song */}
        {song &&
        <div
          key={song.id}
          className="group grid grid-cols-[40px_1fr_100px] py-3 border-b border-gray-800 
                     hover:bg-white/10 cursor-pointer transition items-center"
        >
          {/* Index is hidden on hover */}
          <span className="group-hover:hidden">
            1
          </span>

          {/* Index is hidden on hover */}
          <span className="hidden group-hover:flex">
            <PlayButtonGreen size={12}/>
          </span>

          <span>{song.name}</span>
          <span>{song.duration}</span>
        </div>
        }
      </div>
    </section>
  )
}

export default Table
