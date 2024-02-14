import GenderDropDown from "../GenderDropDown/GenderDropDown";
import ParticipatingTeamsDropDown from "../ParticipatingTeamsDropDown/ParticipatingTeamsDropDown";
import PlayersCard from "../PlayersCard/PlayersCard";
import ClubSlider from "../Slider/ClubSlider";

const ClubAndPlayers = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="my-[15px]">
        <div className="flex flex-col md:flex-row items-start justify-between md:justify-start md:items-center gap-[24px] py-[8px]">
          <div className="flex items-center gap-[24px]">
            <h3 className="uppercase bebas-Neue text-[24px]">
              Participating Teams{" "}
            </h3>
            <ParticipatingTeamsDropDown />
          </div>
          <div className="flex items-center gap-[24px]">
            <h3 className="uppercase bebas-Neue text-[24px]">Gender </h3>
            <GenderDropDown />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <div>
          <ClubSlider />
        </div>
        <div>
          <PlayersCard />
        </div>
      </div>
    </div>
  );
};

export default ClubAndPlayers;
