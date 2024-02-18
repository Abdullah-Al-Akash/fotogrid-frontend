import {
  ResultsStandingGender,
  ResultsStandingKU10,
} from "../../../constants/player.constants";
import Dropdown from "../../ui/dropdown";
import ResultTable from "../ResultTable";

const ResultsAndStanding = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="my-[8px]">
        <div className="flex flex-col md:flex-row items-start justify-between md:justify-start md:items-center gap-[24px]">
          <div className="flex flex-wrap items-center gap-[24px]">
            <Dropdown options={ResultsStandingKU10} label="KU 10" />
            <Dropdown options={ResultsStandingGender} label="Male" />
          </div>
        </div>
      </div>
      <div className="my-[8px] bg-[#F2F2F2] rounded-[6px]">
        <div className="py-[16px] px-[24px] text-start">
          <div className="grid grid-cols-1 lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2">
            <div className="lg:border-e sm:pe-[48px] xl:border-e ">
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px] whitespace-nowrap">
                Top Rebound
              </p>
              <h2 className="bebas-Neue text-[20px]">Jason L</h2>
              <div className="">
                <div className="divider divider-horizontal hidden md:flex !m-0"></div>
                <div className="divider flex md:hidden !m-0"></div>
              </div>
            </div>

            <div className="lg:border-s lg:border-e  lg:pe-[48px] lg:ps-[48px]">
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px] whitespace-nowrap">
                Top Score
              </p>
              <h2 className="bebas-Neue text-[20px]">Juan</h2>
              <div className="lg:mx-[48px]">
                <div className="divider divider-horizontal hidden md:flex !m-0"></div>
                <div className="divider flex md:hidden !m-0"></div>
              </div>
            </div>

            <div className="lg:border-s lg:border-e  sm:pe-[48px] lg:ps-[48px]">
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px] whitespace-nowrap">
                MVP Final
              </p>
              <h2 className="bebas-Neue text-[20px]">Louis</h2>
              <div className="lg:mx-[48px]">
                <div className="divider divider-horizontal hidden md:flex !m-0"></div>
                <div className="divider flex md:hidden !m-0"></div>
              </div>
            </div>

            <div className="lg:border-s lg:border-e  lg:pe-[48px] lg:ps-[48px]">
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px] whitespace-nowrap">
                Top Block
              </p>
              <h2 className="bebas-Neue text-[20px]">Louis</h2>
              <div className="lg:mx-[48px]">
                <div className="divider divider-horizontal hidden md:flex !m-0"></div>
                <div className="divider flex md:hidden !m-0"></div>
              </div>
            </div>

            <div className="lg:border-s lg:border-e mt-[5px] lg:mt-[0px] sm:pe-[48px] lg:ps-[48px]">
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px] whitespace-nowrap">
                Top Assists
              </p>
              <h2 className="bebas-Neue text-[20px]">Edwin</h2>
              <div className="lg:mx-[48px]">
                <div className="divider divider-horizontal hidden md:flex !m-0"></div>
                <div className="divider flex md:hidden !m-0"></div>
              </div>
            </div>

            <div className="lg:border-s lg:border-e  mt-[5px] lg:mt-[0px] lg:pe-[48px] lg:ps-[48px]">
              <p className="montserrat text-[#7D7D7D] font-medium text-[16px] whitespace-nowrap">
                Top Steal
              </p>
              <h2 className="bebas-Neue text-[20px]">Joel</h2>
              <div className="lg:mx-[48px]">
                <div className="divider divider-horizontal hidden md:flex !m-0"></div>
                <div className="divider flex md:hidden !m-0"></div>
              </div>
            </div>

            <div className="lg:border-s lg:pe-[48px]  mt-[5px] lg:mt-[0px] lg:ps-[48px]">
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
