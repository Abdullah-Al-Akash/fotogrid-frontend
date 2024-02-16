import EventListCard from "../../Components/EventList/EventListCard";

const EventsList = () => {
  return (
    <div className="container mt-[32px] mb-[12px]">
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
