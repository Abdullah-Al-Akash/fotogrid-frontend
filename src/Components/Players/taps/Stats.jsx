/* eslint-disable react/no-unescaped-entities */
import { FiSearch } from "react-icons/fi";
import {
  CakraSaktiCup,
  JakartaOption,
  genderOptions,
  Month,
} from "../../../constants/player.constants";
import Dropdown from "../../ui/dropdown";
import TableWrapper from "../../ui/table-wrapper";

const Stats = () => {
  return (
    <div>
      <div className="flex py-[24px]  bebas-Neue lg:flex-row flex-col justify-between items-center ">
        <div className="flex flex-col md:flex-row items-center bebas-Neue gap-[24px] py-[8px]">
          <Dropdown options={CakraSaktiCup} label="Cakra Sakti Cup 2023" />
          <Dropdown options={JakartaOption} label="Jakarta" />
          <Dropdown options={genderOptions} label="Male" />
          <Dropdown options={Month} label="January" />
        </div>
        <div className="h-[46px] mt-[18px] lg:mt-auto relative border-[#CCCCCC] overflow-hidden border-[1px] rounded-[6px] bg-white w-[90%] md:w-[70%] lg:max-w-[300px]">
          <FiSearch className=" text-[#636363] text-[18px] bebas-Neue left-[17px] absolute top-1/2 -translate-y-1/2" />
          <input
            className="w-full h-full placeholder:text-[#636363] px-[48px] border-none outline-none"
            placeholder="Search here"
          />
        </div>
      </div>
      <section className="bg-white p-[24px] rounded ">
        <div className="flex justify-between items-center">
          <h2 className="uppercase bebas-Neue text-[#1A1A1A] leading-[32px] text-[24px]">
            List of Games Played
          </h2>
          <button className="bg-[#E8E8E8] text-[#8A8A8A] rounded-[6px] uppercase bebas-Neue text-[20px] leading-[20px] px-[35px] py-[12px]">
            Share
          </button>
        </div>
        <div className="mt-[8px]">
          <TableWrapper>
            <table className="rounded-[2px] w-full mx-auto table-ui table">
              <thead className="bg-primary ">
                <tr>
                  <th className="border-r-[1px]  text-[14px] md:w-[317px] bg-[#F2F2F2]  text-[#7D7D7D] p-[24px] border-t-0 border-l-0 border border-[#E8E8E8]">
                    <button className="flex items-center justify-center gap-[10px] text-center w-full">
                      <span>Event</span>{" "}
                      <img src="/Arrow.png" alt="drop down" />
                    </button>
                  </th>
                  <th className="text-[14px] md:w-[227px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8] border-t-0">
                    <button className="flex items-center justify-center gap-[10px] text-center w-full">
                      <span>Team</span> <img src="/Arrow.png" alt="drop down" />
                    </button>
                  </th>
                  <th className="text-[14px] md:w-[174px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8] border-t-0">
                    <button className="flex items-center justify-center gap-[10px] text-center w-full">
                      <span>Opponent Team</span>{" "}
                      <img src="/Arrow.png" alt="drop down" />
                    </button>
                  </th>
                  <th className="text-[14px] md:w-[103px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8] border-t-0">
                    <button className="flex items-center justify-center gap-[10px] text-center w-full">
                      <span className="whitespace-normal">
                        Points per game(PPG)
                      </span>{" "}
                      <img src="/Arrow.png" alt="drop down" />
                    </button>
                  </th>
                  <th className="text-[14px]  md:w-[103px] text-[#7D7D7D] p-[24px] border border-[#E8E8E8] border-t-0">
                    <button className="flex items-center justify-center gap-[10px] text-center w-full">
                      <span className="whitespace-normal">
                        Rebounds per game (RPG)
                      </span>{" "}
                      <img src="/Arrow.png" alt="drop down" />
                    </button>
                  </th>
                  <th className="text-[14px] md:w-[103px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8] border-t-0">
                    <button className="flex items-center justify-center gap-[10px] text-center w-full">
                      <span className="whitespace-normal">
                        Block per game (BPG)
                      </span>{" "}
                      <img src="/Arrow.png" alt="drop down" />
                    </button>
                  </th>
                  <th className="text-[14px] md:w-[103px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8] border-t-0">
                    <button className="flex items-center justify-center gap-[10px] text-center w-full">
                      <span className="whitespace-normal">
                        Assist per game (APG)
                      </span>{" "}
                      <img src="/Arrow.png" alt="drop down" />
                    </button>
                  </th>
                  <th className="text-[14px] md:w-[103px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8] border-t-0">
                    <button className="flex items-center justify-center gap-[10px] text-center w-full">
                      {" "}
                      <span className="whitespace-normal">
                        Steal per game (SPG)
                      </span>{" "}
                      <img src="/Arrow.png" alt="drop down" />
                    </button>
                  </th>
                  <th className="text-[14px] md:w-[103px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8] border-r-0 border-t-0">
                    <button className="flex items-center justify-center gap-[10px] text-center w-full">
                      <span>3RT</span> <img src="/Arrow.png" alt="drop down" />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-[17px] border-t-0 bg-white border-l-0 border-b-0 text-center py-[20px] text-[#1A1A1A] leading-[24px] text-[14px] border-r-[1px] border border-[#E8E8E8] whitespace-nowrap">
                    LIL |Li'l Warriors Cup 2020 KU-8
                  </td>
                  <td className="px-[17px] text-center py-[20px] border-b-0 text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                    AirOne
                  </td>
                  <td className="px-[17px] text-center py-[20px] border-b-0 text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                    Warriors
                  </td>
                  <td className="px-[17px] text-center py-[20px] border-b-0 text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                    0
                  </td>
                  <td className="px-[17px] text-center py-[20px] border-b-0 text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                    100
                  </td>
                  <td className="px-[17px] text-center py-[20px] border-b-0 text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                    50
                  </td>
                  <td className="px-[17px] text-center py-[20px] border-b-0 text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                    50
                  </td>
                  <td className="px-[17px] text-center py-[20px] border-b-0 text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                    50
                  </td>
                  <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] border-r-0 border-b-0">
                    50
                  </td>
                </tr>
                <tr>
                  <td className="px-[17px] border-t-0 bg-white border-l-0 border-b-0 text-center py-[20px] text-[#1A1A1A] leading-[24px] text-[14px] border-r-[1px] border border-[#E8E8E8]">
                    LIL |Li'l Warriors Cup 2020 KU-8
                  </td>
                  <td className="px-[17px] text-center py-[20px] border-b-0 text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                    AirOne
                  </td>
                  <td className="px-[17px] text-center py-[20px] border-b-0 text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                    Warriors
                  </td>
                  <td className="px-[17px] text-center py-[20px] border-b-0 text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                    0
                  </td>
                  <td className="px-[17px] text-center py-[20px] border-b-0 text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                    100
                  </td>
                  <td className="px-[17px] text-center py-[20px] border-b-0 text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                    50
                  </td>
                  <td className="px-[17px] text-center py-[20px] border-b-0 text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                    50
                  </td>
                  <td className="px-[17px] text-center py-[20px] border-b-0 text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                    50
                  </td>
                  <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] border-r-0 border-b-0">
                    50
                  </td>
                </tr>
              </tbody>
            </table>
          </TableWrapper>
        </div>
      </section>
    </div>
  );
};

export default Stats;
