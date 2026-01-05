import { Link } from "react-router";
import { PlayButtonBig } from "./Player/PlayBtn";

interface HeaderProps {
  image: string;
  name: string;
  type: string;
  id: string | undefined;
  length?: number;
  artistName?: string;
}

function Header({ name, image, type, id, length, artistName }: HeaderProps){
  return (
    <section className="flex gap-8 items-end">
      <img 
        src={image} 
        alt={name} 
        className="w-56 h-56 object-cover rounded-lg shadow-lg"
      />

      <div className="flex flex-col gap-2">
        <p className="uppercase text-sm text-gray-300 font-medium">{type == "album" ? "Album" : "Single"}</p>
        <h1 className="text-5xl font-bold">{name}</h1>

        {/* Replace with real artist component later */}
        <p className="text-gray-400 mt-2">
          <Link to={`/artist/${id}`} className="underline cursor-pointer hover:text-white">
            {artistName}
          </Link>{" "}
            • {type == "album" ? `${length} songs` : "Single"}
        </p>

        <PlayButtonBig />
      </div>
    </section>
  )
}

export default Header
