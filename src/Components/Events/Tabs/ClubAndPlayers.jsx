import {
  ClubPlayersGender,
  ClubPlayersKU10,
} from "../../../constants/player.constants";
import Dropdown from "../../ui/dropdown";
import PlayersCard from "../PlayersCard/PlayersCard";
import ClubSlider from "../Slider/ClubSlider";

const ClubAndPlayers = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="mx-[15px]">
        <div className="flex flex-col md:flex-row items-start justify-between md:justify-start md:items-center gap-[24px] py-[8px]">
          <div className="flex items-center gap-[24px]">
            <Dropdown options={ClubPlayersKU10} label="KU 10" />
            <Dropdown options={ClubPlayersGender} label="Male" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <div>
          <ClubSlider />
        </div>
        <PlayersCard />
      </div>
    </div>
  );
};

export default ClubAndPlayers;
