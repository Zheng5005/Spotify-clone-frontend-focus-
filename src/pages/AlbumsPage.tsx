import { BigCard } from "../components/Cards/Card"
import { albums } from "../data/albums"

function AlbumPage() {
  return (
    <>
      {/* Album List */}
      <section className="flex-1 overflow-y-auto">
        <h2 className="text-xs uppercase tracking-wide text-neutral-400 mb-2">
          Albums
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4 text-white">
          {albums.map((album) => (
            <BigCard
              key={album.id}
              name={album.name}
              image={album.image}
              type="Album"
              id={album.id}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default AlbumPage
