import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {CustomJumbotron} from "@/components/custom/CustomJumbotron.tsx";
import {HeroStats} from "@/heroes/components/HeroStats.tsx";
import {HeroGrid} from "@/heroes/components/HeroGrid.tsx";
import {useState} from "react";
import {CustomPagination} from "@/components/custom/CustomPagination.tsx";
import CustomBreadcrumb from "@/components/custom/CustomBreadcrumb.tsx";

export const HomePage = () => {

  const [activeTab, setActiveTab] = useState<
    'all' |
    'favorites' |
    'heroes' |
    'villains'
  >('all');

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
      <Tabs value={activeTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            onClick={() => setActiveTab('all')}
            value="all">All Characters (16)</TabsTrigger>
          <TabsTrigger
            onClick={() => setActiveTab('favorites')}
            value="favorites"
            className="flex items-center gap-2">
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setActiveTab('heroes')}
            value="heroes">Heroes (12)</TabsTrigger>
          <TabsTrigger
            onClick={() => setActiveTab('villains')}
            value="villains">Villains (2)</TabsTrigger>
        </TabsList>
        <TabsContent value={'all'}>
          {/*<h1>Todos los personajes</h1>*/}
          <HeroGrid/>
        </TabsContent>
        <TabsContent value={'favorites'}>
          {/*<h1>Todos los favoritos</h1>*/}
          <HeroGrid/>
        </TabsContent>
        <TabsContent value={'heroes'}>
          {/*<h1>Todos los heroes</h1>*/}
          <HeroGrid/>
        </TabsContent>
        <TabsContent value={'villains'}>
          {/*<h1>Todos los villanos</h1>*/}
          <HeroGrid/>
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <CustomPagination totalPages={8}/>

    </>
  )
}
