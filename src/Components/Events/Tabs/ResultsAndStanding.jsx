import AgeGroupDropDown from "../AgeGroupDropDown/AgeGroupDropDown";
import GenderDropDown from "../GenderDropDown/GenderDropDown";

const ResultsAndStanding = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="py-[8px]">
        <div className="flex items-center gap-[24px]">
          <div className="flex items-center gap-[24px]">
            <h3 className="uppercase bebas-Neue text-[24px]">age group </h3>
            <AgeGroupDropDown />
          </div>
          <div className="flex items-center gap-[24px]">
            <h3 className="uppercase bebas-Neue text-[24px]">gander </h3>
            <GenderDropDown />
          </div>
        </div>
      </div>
      <div className="py-[8px] ">score Board</div>
      <div className="py-[8px] ">Table</div>
    </div>
  );
};

export default ResultsAndStanding;
