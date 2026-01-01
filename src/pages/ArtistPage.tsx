import Circle from "../components/Cards/Circle.tsx"
import { artists } from "../data/artist.ts"

function ArtistPage() {
  return (
    <>
      {/* Artist List */}
      <section className="flex-1 overflow-y-auto">
        <h2 className="text-xs uppercase tracking-wide text-neutral-400 mb-2">
          Artists
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4 text-white">
          {artists.map((artist) => (
            <Circle
              key={artist.id}
              name={artist.name}
              image={artist.image}
              id={artist.id}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default ArtistPage
