import { Outlet } from "react-router";
import TopBar from "../components/TopBar/TopBar";
import Player from "../components/Player/Player";
import SideBar from "../components/SideBar/SideBar";

function MainLayout() {
return (
    <div className="h-screen grid grid-rows-[1fr_auto]">
      <div className="grid grid-cols-[240px_1fr] overflow-hidden bg-black border-black">
        <SideBar />

        <main className="flex flex-col overflow-y-auto">
          <TopBar />
          <div className="flex-1 p-6">
            <Outlet />
          </div>
        </main>
      </div>

      <Player />
    </div>
  );}

export default MainLayout
