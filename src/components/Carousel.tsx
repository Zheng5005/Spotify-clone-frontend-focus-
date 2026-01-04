import { Link } from "react-router";
import type { Artist } from "../data/artist";
import type { Song } from "../data/songs";
import type { Album } from "../data/albums";
import Circle from "./Cards/Circle";
import { BigCard } from "./Cards/Card";

interface CarouselProps {
  title: string;
  type: string;
  route?: string;
  array: Artist[] | Song[] | Album[];
}

export default function Carousel({ title, array, type, route }: CarouselProps) {
  return (
    <section className="mt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        {
          route && 
          <Link to={route} className="text-sm text-green-400 hover:underline">
            See All
          </Link>
        }
      </div>

      {/* Carousel */}
      <div
        className="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth
                   snap-x snap-mandatory pb-4"
      >
        {
          type == "artist" ? (
            array.map((obj) => (
              <div
              key={obj.id}
              className="snap-start shrink-0"
              >
              <Circle name={obj.name} image={obj.image} id={obj.id} />
              </div>
            ))
          ) : (
            array.map((obj) => (
              <div
              key={obj.id}
              className="snap-start shrink-0"
              >
              <BigCard name={obj.name} image={obj.image} type={type} id={obj.id} />
              </div>
            ))
          )
        }
      </div>
    </section>
  );
}

