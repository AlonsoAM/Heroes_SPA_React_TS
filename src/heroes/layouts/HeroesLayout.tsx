import {Outlet} from "react-router"
import {Link} from "react-router"

export const HeroesLayout = () => {
  return (
    <div className={'bg-red-500'}>

      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/heroes/1'}>Hero</Link>
        </li>
        <li>
          <Link to={'/search'}>Busqueda</Link>
        </li>
        <li>
          <Link to={'/admin'}>Admin</Link>
        </li>
      </ul>

      <div className={'mt-10'}>
        <Outlet/>
      </div>

    </div>
  )
}
