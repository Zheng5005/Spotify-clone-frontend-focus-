import { useParams } from "react-router"
import { albums } from "../data/albums"
import { songs } from "../data/songs"
import Carousel from "../components/Carousel"
import { artists } from "../data/artist"
import Header from "../components/Header"
import Table from "../components/Table"

export default function OneAlbumPage() {
  const { id: albumId } = useParams()
  const album = albums.find((a) => a.id === albumId)

  if (!album) return <p className="text-white text-center mt-10">Album not found.</p>

  // Filter songs that belong to this album
  const albumSongs = songs.filter((s) => album.songs.includes(s.id) ? s : null)

  // Filter artist info
  const artist = artists.find((ar) => ar.id === album.artistID)

  // Random slice for carousel (change 10 if you want more/less)
  const randomSongs = [...songs].sort(() => Math.random() - 0.5).slice(0, 10)

  return (
    <div className="text-white px-8 py-6 flex flex-col gap-10">
      
      {/* HEADER — ALBUM INFO */}
      <Header image={album.image} name={album.name} id={artist?.id} length={albumSongs.length} type="album" artistName={artist?.name} />

      {/* SONG LIST */}
      <Table  albumSongs={albumSongs}/>

      {/* RANDOM SONGS CAROUSEL */}
      <Carousel title="More Like This" array={randomSongs} type="Single" route="/song" />
    </div>
  )
}

