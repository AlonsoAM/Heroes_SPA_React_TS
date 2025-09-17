import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@radix-ui/react-navigation-menu"
import { Link, useLocation } from "react-router"
import { cn } from "@/lib/utils.ts"
import { Home, Search } from "lucide-react"

const CustomMenu = () => {
  const { pathname } = useLocation()

  const isActive = (path: string) => pathname === path

  const menuItems = [
    {
      path: '/',
      label: 'Inicio',
      icon: Home
    },
    {
      path: '/search',
      label: 'Buscar Superhéroes',
      icon: Search
    }
  ]

  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <NavigationMenu className="py-4">
          <NavigationMenuList className="flex space-x-8">
            {menuItems.map((item) => {
              const IconComponent = item.icon
              const active = isActive(item.path)
              
              return (
                <NavigationMenuItem key={item.path}>
                  <NavigationMenuLink asChild>
                    <Link 
                      to={item.path}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        "hover:bg-gray-50",
                        active 
                          ? "text-primary bg-primary/5 border border-primary/20" 
                          : "text-gray-600 hover:text-gray-900"
                      )}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

export default CustomMenu
