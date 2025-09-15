import {createBrowserRouter, Navigate} from "react-router";
import {HomePage} from "@/heroes/pages/home/HomePage.tsx";
import {HeroPage} from "@/heroes/pages/hero/HeroPage.tsx";
import {SearchPage} from "@/heroes/pages/search/SearchPage.tsx";
import {AdminPage} from "@/admin/pages/AdminPage.tsx";
import {HeroesLayout} from "@/heroes/layouts/HeroesLayout.tsx";
import {AdminLayout} from "@/admin/layouts/AdminLayout.tsx";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "heroes/1",
        element: <HeroPage/>
      },
      {
        path: "search",
        element: <SearchPage/>
      },
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout/>,
    children: [
      {
        index: true,
        element: <AdminPage/>
      },
    ]
  },
  {
    path: "*",
    element: <Navigate to={'/'}/>
  },

])