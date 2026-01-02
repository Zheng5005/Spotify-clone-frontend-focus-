import { Link, useParams } from "react-router"
import { albums } from "../data/albums"
import { songs } from "../data/songs"
import Carousel from "../components/Carousel"
import { artists } from "../data/artist"
import { PlayButtonBig, PlayButtonGreen } from "../components/Player/PlayBtn"

export default function OneAlbumPage() {
  const { id: albumId } = useParams()
  const album = albums.find((a) => a.id === albumId)

  if (!album) return <p className="text-white text-center mt-10">Album not found.</p>

  // Filter songs that belong to this album
  const albumSongs = songs.filter((s) => album.songs.includes(s.id) ? s : null)

  // Filter artist info
  const artist = artists.find((ar) => ar.id === album?.artistID)

  // Random slice for carousel (change 10 if you want more/less)
  const randomSongs = [...songs].sort(() => Math.random() - 0.5).slice(0, 10)

  return (
    <div className="text-white px-8 py-6 flex flex-col gap-10">
      
      {/* HEADER — ALBUM INFO */}
      <section className="flex gap-8 items-end">
        <img 
          src={album.image} 
          alt={album.name} 
          className="w-56 h-56 object-cover rounded-lg shadow-lg"
        />

        <div className="flex flex-col gap-2">
          <p className="uppercase text-sm text-gray-300 font-medium">Album</p>
          <h1 className="text-5xl font-bold">{album.name}</h1>

          {/* Replace with real artist component later */}
          <p className="text-gray-400 mt-2">
            <Link to={`/artist/${artist?.id}`} className="underline cursor-pointer hover:text-white">
              {artist && artist.name}
            </Link>{" "}
            • {albumSongs.length} songs
          </p>

          <PlayButtonBig />
        </div>
      </section>

      {/* SONG LIST */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold mb-4">Songs</h2>

        <div className="w-full">
          {/* Header Row */}
          <div className="grid grid-cols-[40px_1fr_100px] text-gray-400 text-sm pb-2 border-b border-gray-700">
            <span>#</span>
            <span>Title</span>
            <span>Duration</span>
          </div>

          {/* Song rows */}
          {albumSongs.map((song, index) => (
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
        </div>
      </section>

      {/* RANDOM SONGS CAROUSEL */}
      <section>
        <Carousel title="More Like This" array={randomSongs} type="Single" route="/song" />
      </section>
    </div>
  )
}

