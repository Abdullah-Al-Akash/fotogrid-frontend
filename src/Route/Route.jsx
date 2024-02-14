import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Events from "../Pages/Events/Events";
import LeaderBoard from "../Pages/LeaderBoard/LeaderBoard";
import Players from "../Pages/Players/Players";

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
        path: "/leader-board",
        element: <LeaderBoard />,
      },
      {
        path: "/players",
        element: <Players></Players>,
      },
    ],
  },
]);
