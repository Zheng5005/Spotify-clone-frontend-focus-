import { useParams } from "react-router"
import { songs } from "../data/songs"
import Carousel from "../components/Carousel"
import { artists } from "../data/artist"
import Header from "../components/Header"
import Table from "../components/Table"

export default function OneAlbumPage() {
  const { id: songId } = useParams()
  const song = songs.find((s) => s.id === songId)

  if (!song) return <p className="text-white text-center mt-10">Album not found.</p>

  // Filter artist info
  const artist = artists.find((ar) => ar.id === song?.artistID)

  // Random slice for carousel (change 10 if you want more/less)
  const randomSongs = [...songs].sort(() => Math.random() - 0.5).slice(0, 10)

  return (
    <div className="text-white px-8 py-6 flex flex-col gap-10">
      
      {/* HEADER — ALBUM INFO */}
      <Header image={song.image} name={song.name} id={artist?.id} type="song" artistName={artist?.name} />

      {/* SONG LIST */}
      <Table  song={song}/>

      {/* RANDOM SONGS CAROUSEL */}
      <Carousel title="More Like This" array={randomSongs} type="Single" route="/song" />
    </div>
  )
}
