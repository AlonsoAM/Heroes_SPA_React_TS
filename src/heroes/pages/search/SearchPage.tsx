import {CustomJumbotron} from "@/components/custom/CustomJumbotron.tsx";
import {HeroStats} from "@/heroes/components/HeroStats.tsx";
import {SeacrhControls} from "@/heroes/pages/search/ui/SeacrhControls.tsx";
import CustomBreadcrumb from "@/components/custom/CustomBreadcrumb.tsx";

const SearchPage = () => {
  return (
    <>
      {/*Header*/}
      <CustomJumbotron
        title={'Busqueda de Superheroes'}
        description={'Descubre, explora y administra tus superheroes y villanos favoritos'}
      />

      <CustomBreadcrumb
        currentPage='Buscador de héroes'
      />

      {/* Stats Dashboard */}
      <HeroStats/>

      {/* Filter and Search Controls */}
      <SeacrhControls/>
    </>
  )
}

export default SearchPage
