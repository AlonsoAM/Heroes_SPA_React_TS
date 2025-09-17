import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContext {
  // state
  favorites: Hero[];
  favoriteCount: number;

  // methods
  toggleFavorite: (hero: Hero) => void;
  isFavorite: (hero: Hero) => boolean;
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

const getFavoritesFromLocalStorage = (): Hero[] => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(
    getFavoritesFromLocalStorage()
  );
  const toggleFavorite = (hero: Hero) => {
    const heroExist = favorites.find((h: Hero) => h.id === hero.id);
    if (heroExist) {
      setFavorites(favorites.filter((h: Hero) => h.id !== hero.id));
      return;
    } else {
      setFavorites([...favorites, hero]);
    }
  };

  const isFavorite = (hero: Hero) =>
    favorites.some((h: Hero) => h.id === hero.id);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteHeroContext
      value={{
        favorites: favorites,
        favoriteCount: favorites.length,
        toggleFavorite: toggleFavorite,
        isFavorite: isFavorite,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
