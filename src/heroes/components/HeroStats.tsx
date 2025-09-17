import { Heart, Trophy, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge.tsx";
import { HeroStatCard } from "@/heroes/components/HeroStatCard.tsx";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary.tsx";
import { use, useMemo } from "react";
import { FavoriteHeroContext } from "../context/FavoriteHeroContext";

export const HeroStats = () => {
  const { data: summary } = useHeroSummary();
  const { favoriteCount } = use(FavoriteHeroContext);
  const favoritePercentage = useMemo(() => {
    if (!summary || summary.totalHeroes === 0) return 0;
    return ((favoriteCount / summary.totalHeroes) * 100).toFixed(1);
  }, [favoriteCount, summary]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <HeroStatCard
          title={"Total de Personajes"}
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
          <div className="flex gap-1 mt-2">
            <Badge variant="secondary" className="text-xs">
              {summary?.heroCount} Heroes
            </Badge>
            <Badge variant="destructive" className="text-xs">
              {summary?.villainCount} Villanos
            </Badge>
          </div>
        </HeroStatCard>

        <HeroStatCard
          title={"Favoritos"}
          icon={<Heart className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-2xl font-bold text-red-600">{favoriteCount}</div>
          <p className="text-xs text-muted-foreground">
            {favoritePercentage}% del total
          </p>
        </HeroStatCard>

        <HeroStatCard
          title={"Fuerte"}
          icon={<Zap className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-lg font-bold">
            {summary?.strongestHero.alias}
          </div>
          <p className="text-xs text-muted-foreground">
            Fuerza: {summary?.strongestHero.strength}/10
          </p>
        </HeroStatCard>

        <HeroStatCard
          title={"Inteligente"}
          icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-lg font-bold">{summary?.smartestHero.alias}</div>
          <p className="text-xs text-muted-foreground">
            Inteligencia: {summary?.smartestHero.intelligence}/10
          </p>
        </HeroStatCard>
      </div>
    </>
  );
};
