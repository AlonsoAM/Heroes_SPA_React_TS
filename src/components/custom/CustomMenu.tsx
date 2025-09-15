import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@radix-ui/react-navigation-menu"
import {Link, useLocation} from "react-router";
import {cn} from "@/lib/utils.ts";


const CustomMenu = () => {

  const {pathname} = useLocation()

  const isActive = (path: string) => pathname === path

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row space-x-4">
        {/*Home*/}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(isActive('/') && 'bg-slate-200 rounded-md p-2')}>
            <Link to="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/*Search*/}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(isActive('/search') && 'bg-slate-200 rounded-md p-2')}>
            <Link to="/search">Buscar Superhéroes</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default CustomMenu
