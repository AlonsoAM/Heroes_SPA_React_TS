import {createBrowserRouter} from "react-router";
import {HomePage} from "@/heroes/pages/home/HomePage.tsx";
import {HeroPage} from "@/heroes/pages/hero/HeroPage.tsx";
import {SearchPage} from "@/heroes/pages/search/SearchPage.tsx";
import {AdminPage} from "@/admin/pages/AdminPage.tsx";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/heroes/1",
    element: <HeroPage/>
  },
  {
    path: "/search",
    element: <SearchPage/>
  },
  {
    path: "/admin",
    element: <AdminPage/>
  },
  {
    path: "*",
    element: <HomePage/>
  },

])