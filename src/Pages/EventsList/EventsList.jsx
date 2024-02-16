import BasketBallDropDown from "../../Components/EventList/BasketBallDropDown";
import EventListAgeGroupDropDown from "../../Components/EventList/EventListAgeGroupDropDown";
import EventListCard from "../../Components/EventList/EventListCard";
import EventListLocationDropDown from "../../Components/EventList/EventListLocationDropDown";
import MonthDropDown from "../../Components/EventList/MonthDropDown";

const EventsList = () => {
  return (
    <div className="container mb-[12px]">
      <div className="mt-[16px] mb-[24px]">
        <div className="flex items-center gap-[24px]">
          <BasketBallDropDown />
          <MonthDropDown />
          <EventListAgeGroupDropDown />
          <EventListLocationDropDown />
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <EventListCard />
        <EventListCard />
        <EventListCard />
        <EventListCard />
        <EventListCard />
        <EventListCard />
        <EventListCard />
      </div>
    </div>
  );
};

export default EventsList;
