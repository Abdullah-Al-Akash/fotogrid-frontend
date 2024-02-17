import EventListCard from "../../Components/EventList/EventListCard";
import Dropdown from "../../Components/ui/dropdown";
import {
  eventsListGameOptions,
  eventsListJakartaOption,
  eventsListKu12Girl,
  eventsListMonth,
} from "../../constants/player.constants";

const EventsList = () => {
  return (
    <div className="fotogrit-container mb-[12px]">
      <div className="mt-[16px] mb-[24px]">
        <div className="flex items-center gap-[24px]">
          <Dropdown options={eventsListGameOptions} label="Basketball" />
          <Dropdown options={eventsListMonth} label="January 2024" />
          <Dropdown options={eventsListKu12Girl} label="KU 12 Girl" />
          <Dropdown options={eventsListJakartaOption} label="Jakarta" />
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
