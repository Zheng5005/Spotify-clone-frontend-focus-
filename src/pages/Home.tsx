import Carousel from "../components/Carousel"
import { albums } from "../data/albums"
import { artists } from "../data/artist"
import { songs } from "../data/songs"

function Home() {
  const firstTen = songs.slice(0, 10);
  return (
    <main className="p-6">
      <Carousel title="Trendy songs" array={firstTen} type="Single" route="/song" />
      <Carousel title="Trendy artists" array={artists} type="artist" route="/artist" />
      <Carousel title="Trendy singles and albums" array={albums} type="Album" route="/albums" />
    </main>
  )
}

export default Home
              //to={``}
