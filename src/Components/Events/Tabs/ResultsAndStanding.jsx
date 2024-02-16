import GenderDropDown from "../GenderDropDown/GenderDropDown";
import KUDropDown from "../KUDropDown/KUDropDown";
import ResultTable from "../ResultTable";

const ResultsAndStanding = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="my-[8px]">
        <div className="flex flex-col md:flex-row items-start justify-between md:justify-start md:items-center gap-[24px]">
          <div className="flex items-center gap-[24px]">
            <KUDropDown />
            <GenderDropDown />
          </div>
        </div>
      </div>
      <div className="my-[8px] bg-[#F2F2F2] rounded-[6px]">
        <div className="py-[16px] px-[24px]">
          <div className="flex items-start justify-start gap-[48px]">
            <div className="">
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px] whitespace-nowrap">
                Top Rebound
              </p>
              <h2 className="bebas-Neue text-[20px]">Jason L</h2>
            </div>
            <div className="divider divider-horizontal hidden md:flex !m-0"></div>
            <div className="divider flex md:hidden !m-0"></div>
            <div className="">
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px] whitespace-nowrap">
                Top Score
              </p>
              <h2 className="bebas-Neue text-[20px]">Juan</h2>
            </div>
            <div className="divider divider-horizontal hidden md:flex !m-0"></div>
            <div className="divider flex md:hidden !m-0"></div>
            <div className="">
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px] whitespace-nowrap">
                MVP Final
              </p>
              <h2 className="bebas-Neue text-[20px]">Louis</h2>
            </div>
            <div className="divider divider-horizontal hidden md:flex !m-0"></div>
            <div className="divider flex md:hidden !m-0"></div>
            <div className="">
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px] whitespace-nowrap">
                Top Block
              </p>
              <h2 className="bebas-Neue text-[20px]">Louis</h2>
            </div>
            <div className="divider divider-horizontal hidden md:flex !m-0"></div>
            <div className="divider flex md:hidden !m-0"></div>
            <div className="">
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px] whitespace-nowrap">
                Top Assists
              </p>
              <h2 className="bebas-Neue text-[20px]">Edwin</h2>
            </div>
            <div className="divider divider-horizontal hidden md:flex !m-0"></div>
            <div className="divider flex md:hidden !m-0"></div>
            <div className="">
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px] whitespace-nowrap">
                Top Steal
              </p>
              <h2 className="bebas-Neue text-[20px]">Joel</h2>
            </div>
            <div className="divider divider-horizontal hidden md:flex !m-0"></div>
            <div className="divider flex md:hidden !m-0"></div>
            <div className="">
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px] whitespace-nowrap">
                Overall MVP
              </p>
              <h2 className="bebas-Neue text-[20px]">Kay</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[8px]">
        <h2 className="bebas-Neue uppercase text-[24px] mb-[8px] pb-[9px]">
          Standings
        </h2>
        <ResultTable />
      </div>
    </div>
  );
};

export default ResultsAndStanding;
