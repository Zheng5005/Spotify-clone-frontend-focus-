import { BigCard } from "../components/Cards/Card"
import { songs } from "../data/songs"

function SongPage() {
  return (
    <>
      {/* Songs List */}
      <section className="flex-1 overflow-y-auto">
        <h2 className="text-xs uppercase tracking-wide text-neutral-400 mb-2">
          Songs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4 text-white">
          {songs.map((song) => (
            <BigCard
              key={song.id}
              name={song.name}
              image={song.image}
              type="Single"
              id={song.id}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default SongPage
