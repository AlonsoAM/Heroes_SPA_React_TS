import {CustomJumbotron} from "@/components/custom/CustomJumbotron.tsx";
import {HeroStats} from "@/heroes/components/HeroStats.tsx";

const SearchPage = () => {
  return (
    <>
      {/*Header*/}
      <CustomJumbotron
        title={'Busqueda de Superheroes'}
        description={'Descubre, explora y administra tus superheroes y villanos favoritos'}
      />
      {/* Stats Dashboard */}
      <HeroStats/>
    </>
  )
}

export default SearchPage
