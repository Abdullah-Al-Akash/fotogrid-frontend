import { eventDetailsCakraSaktiCup } from "../../constants/player.constants";
import Dropdown from "../ui/dropdown";

const EventsTopDropDown = () => {
  return (
    <div className="relative text-left mt-[16px] montserrat flex flex-col sm:block w-full">
      <Dropdown
        white={true}
        options={eventDetailsCakraSaktiCup}
        label="Cakra Sakti Cup 2023"
      />
    </div>
  );
};

export default EventsTopDropDown;
