import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {CustomJumbotron} from "@/components/custom/CustomJumbotron.tsx";
import {HeroStats} from "@/heroes/components/HeroStats.tsx";
import {HeroGrid} from "@/heroes/components/HeroGrid.tsx";
import {useMemo} from "react";
import {CustomPagination} from "@/components/custom/CustomPagination.tsx";
import CustomBreadcrumb from "@/components/custom/CustomBreadcrumb.tsx";
import {useSearchParams} from "react-router";
import {useHeroSummary} from "@/heroes/hooks/useHeroSummary.tsx";
import {usePaginatedHero} from "@/heroes/hooks/usePaginatedHero.tsx";


export const HomePage = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const activeTabParam = searchParams.get('tab') ?? 'all'
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '6'
  const category = searchParams.get('category') ?? 'all'

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains']
    if (validTabs.includes(activeTabParam)) {
      return activeTabParam
    }
    return 'all'
  }, [activeTabParam])

  const {data: heroesResponse} = usePaginatedHero(+page, +limit, category)
  const {data: summary} = useHeroSummary()

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title={'Universo de Superheroes'}
        description={'Descubre, explora y administra tus superheroes y villanos favoritos'}
      />

      <CustomBreadcrumb currentPage={'Super Héroes'}/>

      {/* Stats Dashboard */}
      <HeroStats/>

      {/* Tabs */}
      <Tabs value={selectedTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            onClick={() => setSearchParams(
              prev => {
                prev.set('tab', 'all')
                prev.set('category', 'all')
                prev.set('page', '1')
                return prev.toString()
              }
            )}
            value="all">All Characters ({summary?.totalHeroes})</TabsTrigger>
          <TabsTrigger
            onClick={() => setSearchParams(
              prev => {
                prev.set('tab', 'favorites')
                return prev.toString()
              }
            )}
            value="favorites"
            className="flex items-center gap-2">
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setSearchParams(
              prev => {
                prev.set('tab', 'heroes')
                prev.set('category', 'hero')
                prev.set('page', '1')
                return prev.toString()
              }
            )}
            value="heroes">Heroes ({summary?.heroCount})</TabsTrigger>
          <TabsTrigger
            onClick={() => setSearchParams(
              prev => {
                prev.set('tab', 'villains')
                prev.set('category', 'villain')
                prev.set('page', '1')
                return prev.toString()
              }
            )}
            value="villains">Villains ({summary?.villainCount})</TabsTrigger>
        </TabsList>
        <TabsContent value={'all'}>
          {/*<h1>Todos los personajes</h1>*/}
          <HeroGrid heroes={heroesResponse?.heroes ?? []}/>
        </TabsContent>
        <TabsContent value={'favorites'}>
          {/*<h1>Todos los favoritos</h1>*/}
          <HeroGrid heroes={heroesResponse?.heroes ?? []}/>
        </TabsContent>
        <TabsContent value={'heroes'}>
          {/*<h1>Todos los heroes</h1>*/}
          <HeroGrid heroes={heroesResponse?.heroes ?? []}/>
        </TabsContent>
        <TabsContent value={'villains'}>
          {/*<h1>Todos los villanos</h1>*/}
          <HeroGrid heroes={heroesResponse?.heroes ?? []}/>
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <CustomPagination totalPages={heroesResponse?.pages ?? 1}/>

    </>
  )
}
