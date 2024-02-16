/* eslint-disable react/no-unescaped-entities */
import { IoSearchOutline } from "react-icons/io5";
import AgeGroupDropDown from "../AgeGroupDropDown/AgeGroupDropDown";
import GenderDropDown from "../GenderDropDown/GenderDropDown";
import TableWrapper from "../../ui/table-wrapper";
import ScheduleDateDropDown from "../ScheduleDateDropDown/ScheduleDateDropDown";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Schedule = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col md:flex-row gap-[15px] md:gap-0 md:justify-between md:items-center">
        <div className="flex gap-[16px]">
          <AgeGroupDropDown />
          <GenderDropDown />
          <ScheduleDateDropDown />
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
          <table className="w-full mx-auto" cellSpacing="0" cellPadding="0">
            <thead className="bg-primary">
              <tr>
                <th className="text-[#7D7D7D] text-[14px] border-l-0 p-[16px]  h-full  border-t-0 border-[#E8E8E8] ">
                  <span className="flex justify-center items-center gap-[4px]">
                    <span className="inline-block">Date / Time</span>
                    <span className="inline-block">
                      <IoIosArrowUp />
                      <IoIosArrowDown />
                    </span>
                  </span>
                </th>
                <th className="text-[14px]  text-[#7D7D7D] p-[16px] border border-t-0 border-[#E8E8E8]">
                  <span className="flex justify-center items-center gap-[4px]">
                    <span className="inline-block">Location</span>
                    <span className="inline-block">
                      <IoIosArrowUp />
                      <IoIosArrowDown />
                    </span>
                  </span>
                </th>
                <th className="text-[14px]  text-[#7D7D7D] p-[16px] border border-t-0 border-[#E8E8E8]">
                  <span className="flex justify-center items-center gap-[4px]">
                    <span className="inline-block">Event Categories</span>
                    <span className="inline-block">
                      <IoIosArrowUp />
                      <IoIosArrowDown />
                    </span>
                  </span>
                </th>

                <th className="text-[14px] text-[#7D7D7D] border-[#E8E8E8] border-t-0 text-center border">
                  <th className="p-[16px] flex justify-center items-center border-b">
                    <span className="flex justify-center items-center gap-[4px]">
                      <span className="inline-block">Club A</span>
                      <span className="inline-block">
                        <IoIosArrowUp />
                        <IoIosArrowDown />
                      </span>
                    </span>
                  </th>
                  <tr>
                    <th className="p-[16px] w-full">
                      <span className="flex justify-center items-center gap-[4px]">
                        <span className="inline-block">Name</span>
                        <span className="inline-block">
                          <IoIosArrowUp />
                          <IoIosArrowDown />
                        </span>
                      </span>
                    </th>
                    <th className="border-l py-[16px] px-[16.12px] w-full">
                      <span className="flex justify-center items-center gap-[4px]">
                        <span className="inline-block">Score</span>
                        <span className="inline-block">
                          <IoIosArrowUp />
                          <IoIosArrowDown />
                        </span>
                      </span>
                    </th>
                    <th className="border-l py-[16px] px-[14.8px] w-full">
                      <span className="flex justify-center items-center gap-[4px]">
                        <span className="inline-block">Win/Lose</span>
                        <span className="inline-block">
                          <IoIosArrowUp />
                          <IoIosArrowDown />
                        </span>
                      </span>
                    </th>
                  </tr>
                </th>

                <th className="text-[14px] text-[#7D7D7D] border-[#E8E8E8] text-center border border-t-0">
                  <th className="p-[16px] flex justify-center items-center border-b">
                    <span className="flex justify-center items-center gap-[4px]">
                      <span className="inline-block">Club B</span>
                      <span className="inline-block">
                        <IoIosArrowUp />
                        <IoIosArrowDown />
                      </span>
                    </span>
                  </th>
                  <tr>
                    <th className="p-[16px] w-full">
                      <span className="flex justify-center items-center gap-[4px]">
                        <span className="inline-block">Name</span>
                        <span className="inline-block">
                          <IoIosArrowUp />
                          <IoIosArrowDown />
                        </span>
                      </span>
                    </th>
                    <th className="border-l py-[16px] px-[16px] w-full">
                      <span className="flex justify-center items-center gap-[4px]">
                        <span className="inline-block">Score</span>
                        <span className="inline-block">
                          <IoIosArrowUp />
                          <IoIosArrowDown />
                        </span>
                      </span>
                    </th>
                    <th className="border-l py-[16px] px-[14.8px] w-full">
                      <span className="flex justify-center items-center gap-[4px]">
                        <span className="inline-block">Win/Lose</span>
                        <span className="inline-block">
                          <IoIosArrowUp />
                          <IoIosArrowDown />
                        </span>
                      </span>
                    </th>
                  </tr>
                </th>

                <th className="text-[14px]  text-[#7D7D7D] p-[16px] border border-[#E8E8E8] border-t-0">
                  <span className="flex justify-center items-center gap-[4px]">
                    <span className="inline-block">Hall of Fame</span>
                    <span className="inline-block">
                      <IoIosArrowUp />
                      <IoIosArrowDown />
                    </span>
                  </span>
                </th>
                <th className="text-[14px]  text-[#7D7D7D] p-[16px] border border-[#E8E8E8] border-t-0 border-r-0">
                  <span className="flex justify-center items-center gap-[4px]">
                    <span className="inline-block">Link to Event Detail</span>
                    <span className="inline-block">
                      <IoIosArrowUp />
                      <IoIosArrowDown />
                    </span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-[17px] border-l-0  text-center py-[20px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  29 May 2023 15:00
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  GOR Lokasi
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  Final
                </td>

                <td className="border">
                  <tr>
                    <td className="px-[17px] border-r text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                      Name
                    </td>
                    <td className="px-[17px] border-r text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                      Score
                    </td>
                    <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                      Win/Lose
                    </td>
                  </tr>
                </td>
                <td className="border">
                  <tr>
                    <td className="px-[17px] border-r text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                      Name
                    </td>
                    <td className="px-[17px] border-r text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                      Score
                    </td>
                    <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                      Win/Lose
                    </td>
                  </tr>
                </td>

                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  50
                </td>
                <td className="px-[17px] text-center py-[20px]  border-r-0 text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                  50
                </td>
              </tr>
              <tr>
                <td className="px-[17px] border-l-0  text-center py-[20px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] border-b-0">
                  29 May 2023 15:00
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] border-b-0">
                  GOR Lokasi
                </td>
                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] border-b-0">
                  Final
                </td>

                <td className="border border-b-0">
                  <tr>
                    <td className="px-[17px] border-r text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                      Name
                    </td>
                    <td className="px-[17px] border-r text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                      Score
                    </td>
                    <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                      Win/Lose
                    </td>
                  </tr>
                </td>
                <td className="border border-b-0">
                  <tr>
                    <td className="px-[17px] border-r text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                      Name
                    </td>
                    <td className="px-[17px] border-r text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                      Score
                    </td>
                    <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                      Win/Lose
                    </td>
                  </tr>
                </td>

                <td className="px-[17px] text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] border-b-0">
                  50
                </td>
                <td className="px-[17px]  border-r-0 text-center py-[20px]  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] border-b-0">
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
