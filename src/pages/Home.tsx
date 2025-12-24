import Carousel from "../components/Carousel"
import { artists } from "../data/artist"
import { songs } from "../data/songs"

function Home() {
  return (
    <main className="p-6">
      <Carousel title="Trendy songs" array={songs} type="songs" route="/song" />
      <Carousel title="Trendy artists" array={artists} type="artist" route="/artist" />
      <Carousel title="Trendy singles and albums" array={songs} type="songs" route="/" />
    </main>
  )
}

export default Home
