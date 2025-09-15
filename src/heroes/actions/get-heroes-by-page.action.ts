import {heroApi} from "@/heroes/api/hero.api.ts";

export const getHeroesByPage = async () => {
  const {data} = await heroApi.get(`/`);
  return data;
}