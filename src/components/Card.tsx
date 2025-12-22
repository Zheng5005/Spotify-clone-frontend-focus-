interface CardProps {
  name: string;
  image: string;
}

function Card({ name, image }: CardProps) {
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

export default Card
