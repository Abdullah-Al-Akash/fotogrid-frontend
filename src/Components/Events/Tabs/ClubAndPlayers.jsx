import GenderDropDown from "../GenderDropDown/GenderDropDown";
import ParticipatingTeamsDropDown from "../ParticipatingTeamsDropDown/ParticipatingTeamsDropDown";
import PlayersCard from "../PlayersCard/PlayersCard";
import ClubSlider from "../Slider/ClubSlider";

const ClubAndPlayers = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="mx-[15px]">
        <div className="flex flex-col md:flex-row items-start justify-between md:justify-start md:items-center gap-[24px] py-[8px]">
          <div className="flex items-center gap-[24px]">
            <ParticipatingTeamsDropDown />
            <GenderDropDown />
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
