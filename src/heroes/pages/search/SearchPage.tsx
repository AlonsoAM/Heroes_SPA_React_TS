import { CustomJumbotron } from "@/components/custom/CustomJumbotron.tsx";
import { HeroStats } from "@/heroes/components/HeroStats.tsx";
import { SearchControls } from "@/heroes/pages/search/ui/SeacrhControls.tsx";
import CustomBreadcrumb from "@/components/custom/CustomBreadcrumb.tsx";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action";
import { HeroGrid } from "@/heroes/components/HeroGrid";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") || "";
  const team = searchParams.get("team") || "";
  const category = searchParams.get("category") || "";
  const universe = searchParams.get("universe") || "";
  const status = searchParams.get("status") || "";
  const strength = Number(searchParams.get("strength") || 0);

  const { data: heroes = [] } = useQuery({
    queryKey: ["search", { name, team, category, universe, status, strength }],
    queryFn: () =>
      searchHeroesAction({ name, team, category, universe, status, strength }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <>
      {/*Header*/}
      <CustomJumbotron
        title={"Busqueda de Superheroes"}
        description={
          "Descubre, explora y administra tus superheroes y villanos favoritos"
        }
      />

      <CustomBreadcrumb currentPage="Buscador de héroes" />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and Search Controls */}
      <SearchControls />

      {/* Results List */}
      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
