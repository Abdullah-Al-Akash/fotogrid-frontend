import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Events from "../Pages/Events/Events";
import Players from "../Pages/Players/Players";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/players",
        element: <Players></Players>,
      },
    ],
  },
]);
