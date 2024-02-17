import { eventDetailsCakraSaktiCup } from "../../constants/player.constants";
import Dropdown from "../ui/dropdown";

const EventsTopDropDown = () => {
  return (
    <div className="relative inline-block text-left mt-[16px] montserrat">
      <Dropdown
        options={eventDetailsCakraSaktiCup}
        label="Cakra Sakti Cup 2023"
      />
    </div>
  );
};

export default EventsTopDropDown;
