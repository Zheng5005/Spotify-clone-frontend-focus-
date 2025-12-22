import { Home, Search } from "lucide-react"
import { artists } from "../../data/artist"
import SidebarItem from "./SideBarItem"
import Card from "../Card"

function SideBar() {
  return (
    <>
      <aside className="bg-black text-white w-60 p-4 flex flex-col gap-6">

        {/* Navigation */}
        <nav className="space-y-2">
          <SidebarItem icon={<Home size={20} />} label="Home" />
          <SidebarItem icon={<Search size={20} />} label="Search" />
        </nav>

        {/* Artist List */}
        <section className="flex-1 overflow-y-auto">
          <h2 className="text-xs uppercase tracking-wide text-neutral-400 mb-2">
            Your Artists
          </h2>

          <div className="space-y-1">
            {artists.map((artist) => (
              <Card
                key={artist.id}
                name={artist.name}
                image={artist.image}
              />
            ))}
          </div>
        </section>
      </aside>    
    </>
  )
}

export default SideBar
