import AgeGroupDropDown from "../AgeGroupDropDown/AgeGroupDropDown";
import GenderDropDown from "../GenderDropDown/GenderDropDown";
import ResultTable from "../ResultTable";

const ResultsAndStanding = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="my-[8px]">
        <div className="flex flex-col md:flex-row items-start justify-between md:justify-start md:items-center gap-[24px]">
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
      <div className="my-[8px] bg-[#F2F2F2] rounded-[6px]">
        <div className="py-[16px] px-[16px]">
          <div className="flex flex-col md:flex-row items-center md:gap-[64px] text-center md:text-start">
            <div>
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px]">
                Top Rebound
              </p>
              <h2 className="bebas-Neue text-[20px]">Jason L</h2>
            </div>
            <div className="divider divider-horizontal hidden md:flex"></div>
            <div className="divider flex md:hidden"></div>
            <div>
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px]">
                Top Score
              </p>
              <h2 className="bebas-Neue text-[20px]">Juan</h2>
            </div>
            <div className="divider divider-horizontal hidden md:flex"></div>
            <div className="divider flex md:hidden"></div>
            <div>
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px]">
                MVP Final
              </p>
              <h2 className="bebas-Neue text-[20px]">Louis</h2>
            </div>
            <div className="divider divider-horizontal hidden md:flex"></div>
            <div className="divider flex md:hidden"></div>
            <div>
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px]">
                Top Block
              </p>
              <h2 className="bebas-Neue text-[20px]">Louis</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[8px] ">
        <h2 className="bebas-Neue uppercase text-[24px] mb-[8px] pb-[9px]">
          Standings
        </h2>
        <ResultTable />
      </div>
    </div>
  );
};

export default ResultsAndStanding;
