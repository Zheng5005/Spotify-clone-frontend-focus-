import { Link } from "react-router";
import { PlayButtonGreen } from "../Player/PlayBtn";

interface CardProps {
  name: string;
  image: string;
  type?: string;
  id?: string;
}

export function Card({ name, image, id }: CardProps) {
  return (
    <>
      <Link className="flex items-center gap-3 p-2 rounded-md hover:bg-neutral-800 cursor-pointer" to={`/artist/${id}`} >
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />

        <span className="text-sm text-neutral-200 truncate">
          {name}
        </span>
      </Link>
    </>
  )
}

export function BigCard({ name, image, type, id }: CardProps) {
  return (
    <div
      className="group relative p-4 rounded-sm cursor-pointer
                 hover:bg-neutral-800 transition"
    >
      {/* Image wrapper */}
      <div className="relative">
        <Link to={type == "Album" ? `/album/${id}` : `/song/${id}`}>
          <img
            src={image}
           alt={name}
            className="w-32 h-32 sm:w-36 sm:h-36
                     rounded-sm object-cover mx-auto"
          />
        </Link>

        {/* Play button (hover only) */}
        <div
          className="absolute bottom-2 right-2
                     opacity-0 translate-y-2
                     group-hover:opacity-100
                     group-hover:translate-y-0
                     transition-all duration-200"
        >
          <PlayButtonGreen />
        </div>
      </div>

      {/* Text */}
      <Link to={type == "Album" ? `/album/${id}` : `/song/${id}`} className="mt-4 text-center">
        <h6 className="text-base font-semibold text-white truncate text-clip text-wrap">
          {name}
        </h6>
        <p className="text-sm text-neutral-400">{type}</p>
      </Link>
    </div>
  );
}
