/* eslint-disable react/no-unescaped-entities */
import { FiSearch } from "react-icons/fi";
import { defaultOptions } from "../../../constants/player.constants";
import Dropdown from "../../ui/dropdown";
import TableWrapper from "../../ui/table-wrapper";

const Stats = () => {
  return (
    <div>
      <div className="flex  bebas-Neue lg:flex-row flex-col justify-between items-center">
        <div className="flex flex-col md:flex-row items-center bebas-Neue gap-[24px]">
          <div className="flex items-center gap-[24px]">
            <h3 className="text-[24px] leading-[32px]">Age Group</h3>
            <Dropdown options={defaultOptions} label="KU 10" />
          </div>
          <div className="flex items-center gap-[24px]">
            <h3 className="text-[24px] leading-[32px]">Event Group</h3>
            <Dropdown options={defaultOptions} label="Male" />
          </div>
          <div className="flex items-center gap-[24px]">
            <h3 className="text-[24px] leading-[32px]">Month</h3>
            <Dropdown options={defaultOptions} label="January" />
          </div>
        </div>
        <div className="h-[46px] mt-[18px] lg:mt-auto relative border-[#CCCCCC] overflow-hidden border-[1px] rounded-[6px] bg-white w-[90%] md:w-[70%] lg:max-w-[300px]">
          <FiSearch className=" text-[#636363] text-[18px] font-bold left-[17px] absolute top-1/2 -translate-y-1/2" />
          <input
            className="w-full h-full placeholder:text-[#636363] px-[48px] border-none outline-none"
            placeholder="Search here"
          />
        </div>
      </div>
      <section className="bg-white p-[24px] rounded mt-[24px]">
        <div className="flex justify-between items-center">
          <h2 className="uppercase font-bold bebas-Neue text-[#1A1A1A] leading-[32px] text-[24px]">
            List of Games Played
          </h2>
          <button className="bg-[#E8E8E8] text-[#8A8A8A] rounded-[6px] uppercase bebas-Neue font-bold text-[20px] leading-[20px] px-[35px] py-[12px]">
            Share
          </button>
        </div>
        <TableWrapper>
          <table className="rounded-[2px] mt-[8px] min-w-[1416px] w-full mx-auto">
            <thead className="bg-primary ">
              <tr>
                <th className="text-[14px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8]">
                  Event
                </th>
                <th className="text-[14px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8]">
                  Team
                </th>
                <th className="text-[14px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8]">
                  Opponent Team
                </th>
                <th className="text-[14px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8]">
                  PPG
                </th>
                <th className="text-[14px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8]">
                  RPG
                </th>
                <th className="text-[14px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8]">
                  BPG
                </th>
                <th className="text-[14px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8]">
                  APG
                </th>
                <th className="text-[14px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8]">
                  SPG
                </th>
                <th className="text-[14px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8]">
                  3RT
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-[17px]  text-center py-[20px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  LIL |Li'l Warriors Cup 2020 KU-8
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  AirOne
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  Warriors
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  0
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  100
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  50
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  50
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  50
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  50
                </td>
              </tr>
            </tbody>
          </table>
        </TableWrapper>
      </section>
    </div>
  );
};

export default Stats;
