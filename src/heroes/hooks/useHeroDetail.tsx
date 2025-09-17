import {useQuery} from "@tanstack/react-query";
import {getHeroAction} from "@/heroes/actions/get-hero.action.tsx";

export const useHeroDetail = (
  idSlug: string
) => {
  return useQuery({
    queryKey: ['hero-detail', idSlug],
    queryFn: () => getHeroAction(idSlug),
    retry: false,
  })
}
