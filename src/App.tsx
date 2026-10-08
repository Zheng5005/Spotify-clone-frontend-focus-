// =============================================================
// App.tsx — Root component for the Spotify Clone application.
//
// Defines the top-level route tree using React Router.
// All pages are wrapped in MainLayout (player + sidebar) and
// InnerLayout (content scroll area). Individual routes handle
// browsing artists, songs, and albums as well as their detail
// views (e.g. /artist/:id, /song/:id, /album/:id).
//
// See src/layouts/ for the layout components.
// =============================================================
import { Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import InnerLayout from "./layouts/InnerLayout"
import SongPage from "./pages/SongPage"
import ArtistPage from "./pages/ArtistPage"
import AlbumPage from "./pages/AlbumsPage"
import OneAlbumPage from "./pages/OneAlbumPage"
import OneSongPage from "./pages/OneSongPage"
import OneArtistPage from "./pages/OneArtistPage"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<InnerLayout />}>
          <Route index element={<Home />}/>
          <Route path="/artist" element={<ArtistPage />}/>
          <Route path="/artist/:id" element={<OneArtistPage />}/>

          <Route path="/song" element={<SongPage />}/>
          <Route path="/song/:id" element={<OneSongPage />}/>

          <Route path="/albums" element={<AlbumPage />}/>
          <Route path="/album/:id" element={<OneAlbumPage />}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
