/* eslint-disable react/no-unescaped-entities */
import { IoSearchOutline } from "react-icons/io5";
import AgeGroupDropDown from "../AgeGroupDropDown/AgeGroupDropDown";
import GenderDropDown from "../GenderDropDown/GenderDropDown";
import TableWrapper from "../../ui/table-wrapper";

const Schedule = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col md:flex-row gap-[15px] md:gap-0 md:justify-between md:items-center">
        <div className="flex gap-[16px]">
          <AgeGroupDropDown />
          <GenderDropDown />
        </div>
        <div className="border flex items-center py-[8px] px-[16px] rounded-[4px]">
          <IoSearchOutline className="mt-[2px] me-[8px]" />
          <input
            type="text"
            placeholder="Search here"
            className="outline-none"
          />
        </div>
      </div>
      <div className="py-[8px]">
        <h2 className="text-[24px] bebas-Neue">Schedule & results</h2>
        <TableWrapper>
          <table className="rounded-[6px] mt-[8px] min-w-[1416px] w-full mx-auto">
            <thead className="bg-primary">
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
                  LIL | Li'l Warriors Cup 2020 KU-8
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
      </div>
    </div>
  );
};

export default Schedule;
