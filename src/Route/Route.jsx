/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import React from "react"; // Add this line to import React

import Main from "../Layout/Main/Main";
import LeaderBoard from "../Pages/LeaderBoard/LeaderBoard";
import Players from "../Pages/Players/Players";
import Home from "../Pages/Home/Home";
import ScoreDetailPage from "../Pages/ScoreDetailPage/ScoreDetailPage";
import EventsList from "../Pages/EventsList/EventsList";
import Events from "../Pages/Events/Events";

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
        element: <EventsList></EventsList>,
      },
      {
        path: "event-details",
        element: <Events />,
      },
      {
        path: "/leader-board",
        element: <LeaderBoard />,
      },
      {
        path: "/players",
        element: <Players></Players>,
      },
      {
        path: "/score",
        element: <ScoreDetailPage></ScoreDetailPage>,
      },
    ],
  },
]);
