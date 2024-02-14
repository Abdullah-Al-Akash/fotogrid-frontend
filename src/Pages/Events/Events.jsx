/* eslint-disable no-unused-vars */
import { useState } from "react";
import CakraSaktiCup from "../../Components/Events/CakraSaktiCup";
import EventTabs from "../../Components/Events/EventTabs";
import EventsTopDropDown from "../../Components/Events/EventsTopDropDown";

const Events = () => {
  const [tab, setTab] = useState("tab1");
  return (
    <div className="container my-2">
      <EventsTopDropDown />
      <CakraSaktiCup tab={tab} />
      <EventTabs setTab={setTab} tab={tab} />
    </div>
  );
};

export default Events;
