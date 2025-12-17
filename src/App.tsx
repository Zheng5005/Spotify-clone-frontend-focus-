import { Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import InnerLayout from "./layouts/InnerLayout"
import SongPage from "./pages/SongPage"
import ArtistPage from "./pages/ArtistPage"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<InnerLayout />}>
          <Route index element={<Home />}/>
          <Route path="/artist" element={<ArtistPage />}/>
          <Route path="/song" element={<SongPage />}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
