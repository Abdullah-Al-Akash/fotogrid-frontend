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
                  Date / Time
                </th>
                <th className="text-[14px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8]">
                  Location
                </th>
                <th className="text-[14px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8]">
                  Event Categories
                </th>

                <th className="text-[14px] text-[#7D7D7D] border-[#E8E8E8]  border">
                  <tr className="p-[16px] flex justify-center items-center border-b">
                    Club A
                  </tr>
                  <tr>
                    <th className="p-[16px] text-center w-full">Name</th>
                    <th className="border-l p-[15.5px] w-full">Score</th>
                    <th className="border-l p-[15px] w-full">Win/Lose</th>
                  </tr>
                </th>
                <th className="text-[14px] text-[#7D7D7D] border-[#E8E8E8] border">
                  <tr className="p-[16px] flex justify-center items-center border-b">
                    Club B
                  </tr>
                  <tr>
                    <th className="p-[16px] text-center w-full">Name</th>
                    <th className="border-l p-[15.5px] w-full">Score</th>
                    <th className="border-l p-[15px] w-full">Win/Lose</th>
                  </tr>
                </th>
                <th className="text-[14px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8]">
                  Hall of Fame
                </th>
                <th className="text-[14px]  text-[#7D7D7D] p-[24px] border border-[#E8E8E8]">
                  Link to Event Detail
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-[17px]  text-center py-[20px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  29 May 2023 15:00
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  GOR Lokasi
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  Final
                </td>

                <td className="border-b border-r">
                  <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full border-r">
                    Name
                  </td>
                  <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full border-r">
                    Score
                  </td>
                  <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    Win/Lose
                  </td>
                </td>

                <td className="border-b">
                  <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full border-r">
                    Name
                  </td>
                  <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full border-r">
                    Score
                  </td>
                  <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    Win/Lose
                  </td>
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  50
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  50
                </td>
              </tr>
              <tr>
                <td className="px-[17px]  text-center py-[20px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  29 May 2023 15:00
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  GOR Lokasi
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  Final
                </td>

                <td className="border-b border-r">
                  <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full border-r">
                    Name
                  </td>
                  <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full border-r">
                    Score
                  </td>
                  <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    Win/Lose
                  </td>
                </td>

                <td className="border-b">
                  <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full border-r">
                    Name
                  </td>
                  <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full border-r">
                    Score
                  </td>
                  <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    Win/Lose
                  </td>
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
