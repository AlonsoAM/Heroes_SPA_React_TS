import {heroApi} from "@/heroes/api/hero.api.ts";
import type {HeroesResponse} from "@/heroes/types/get-heroes-response.ts";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (): Promise<HeroesResponse> => {
  const {data} = await heroApi.get<HeroesResponse>(`/`);

  const heroes = data.heroes.map(hero => {
    return {
      ...hero,
      image: `${BASE_URL}/images/${hero.image}`
    }
  })

  return {
    ...data,
    heroes: heroes,
  }
}