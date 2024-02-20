import { IoSearchOutline } from "react-icons/io5";
import EventListCard from "../../Components/EventList/EventListCard";
import Dropdown from "../../Components/ui/dropdown";
import {
  eventsListGameOptions,
  eventsListJakartaOption,
  eventsListKu12Girl,
  eventsListMonth,
} from "../../constants/player.constants";
import Filter from "../../Components/Players/Filter";

const EventsList = () => {
  return (
    <div className="fotogrit-container mb-[12px]">
      <div className="mt-[16px] mb-[24px]">
        <div className="flex sm:flex-row flex-col  sm:items-center flex-wrap gap-[24px] w-full">
          <Dropdown
            white={true}
            options={eventsListGameOptions}
            label="Basketball"
          />
          <Dropdown
            white={true}
            options={eventsListMonth}
            label="January 2024"
          />
          <Dropdown
            white={true}
            options={eventsListKu12Girl}
            label="KU 12 Girl"
          />
          <Dropdown
            white={true}
            options={eventsListJakartaOption}
            label="Jakarta"
          />
        </div>
      </div>
      <div className="md:hidden flex items-center gap-[8px] py-[10px] w-full md:w-auto ">
        <div className="border w-[calc(100%-58px)]  flex items-center py-[8px] px-[16px] rounded-[4px] bg-white">
          {/*  */}
          <IoSearchOutline className="mt-[2px] me-[8px]" />
          <input
            type="text"
            placeholder="Search here"
            className="outline-none bg-transparent"
          />
        </div>
        <Filter></Filter>
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
