import { PlayButtonGreen } from "../Player/PlayBtn";

interface CardProps {
  name: string;
  image: string;
}

export function Card({ name, image }: CardProps) {
  return (
    <>
      <div className="flex items-center gap-3 p-2 rounded-md hover:bg-neutral-800 cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />

        <span className="text-sm text-neutral-200 truncate">
          {name}
        </span>
      </div>
    </>
  )
}

export function BigCard({ name, image }: CardProps) {
  return (
    <div
      className="group relative p-4 rounded-sm cursor-pointer
                 hover:bg-neutral-800 transition"
    >
      {/* Image wrapper */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 sm:w-36 sm:h-36
                     rounded-full object-cover mx-auto"
        />

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
      <div className="mt-4 text-center">
        <h6 className="text-base font-semibold text-white truncate">
          {name}
        </h6>
        <p className="text-sm text-neutral-400">Single</p>
      </div>
    </div>
  );
}
