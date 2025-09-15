import {HeroGridCard} from "@/heroes/components/HeroGridCard.tsx";
import type {Hero} from "@/heroes/types/hero.interface.ts";


interface HeroGridProps {
  heroes: Hero[]
}

export const HeroGrid = (
  {heroes}: HeroGridProps
) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {
          heroes.map((hero) => (
            <HeroGridCard key={hero.id} hero={hero}/>
          ))
        }
      </div>
    </>
  )
}
