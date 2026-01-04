import { useParams } from "react-router"
import { albums } from "../data/albums"
import { songs } from "../data/songs"
import { PlayButtonGreen } from "../components/Player/PlayBtn"
import Carousel from "../components/Carousel"
import { artists } from "../data/artist"

export default function OneArtistPage() {
  const { id: artistId } = useParams()

  const artist = artists.find(a => a.id === artistId)
  if (!artist) return <p className="text-white">Artist not found</p>

  const artistSongs = songs.filter(song => song.artistID === artist.id).slice(0, 5)
  const artistAlbums = albums.filter(album => album.artistID === artist.id)

  return (
    <div className="text-white">

      {/* ARTIST HEADER */}
      <section
        className="relative h-80 flex items-end px-8 pb-6"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.2), #121212), url(${artist.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="flex items-end gap-6">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-56 h-56 rounded-full object-cover shadow-2xl"
          />

          <div>
            <p className="text-sm text-gray-300">Verified Artist</p>
            <h1 className="text-6xl font-bold">{artist.name}</h1>
            <p className="text-gray-300 mt-2">3,450,000 followers</p>
          </div>
        </div>
      </section>

      {/* ACTION BAR */}
      <section className="flex items-center gap-6 px-8 py-6">
        <PlayButtonGreen size={48} />
        <button className="border border-gray-500 px-6 py-2 rounded-full hover:border-white">
          Follow
        </button>
        <button className="text-2xl text-gray-400 hover:text-white">•••</button>
      </section>

      {/* POPULAR SONGS */}
      <section className="px-8">
        <h2 className="text-2xl font-bold mb-4">Popular</h2>

        <div className="flex flex-col gap-2">
          {artistSongs.map((song, index) => (
            <div
              key={song.id}
              className="group grid grid-cols-[40px_1fr_80px] items-center p-2 
                         hover:bg-white/10 rounded-md cursor-pointer"
            >
              <span className="group-hover:hidden">{index + 1}</span>
              <span className="hidden group-hover:block">
                <PlayButtonGreen size={12}/>
              </span>

              <span>{song.name}</span>
              <span className="text-gray-400">{song.duration}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ARTIST ALBUMS */}
      <section className="px-8 mt-10">
        <h2 className="text-2xl font-bold mb-4"></h2>
        <Carousel title="Discography" array={artistAlbums} type="Album" />
      </section>

    </div>
  )
}

