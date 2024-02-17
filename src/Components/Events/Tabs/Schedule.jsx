/* eslint-disable react/no-unescaped-entities */
import { IoSearchOutline } from "react-icons/io5";
import AgeGroupDropDown from "../AgeGroupDropDown/AgeGroupDropDown";
import GenderDropDown from "../GenderDropDown/GenderDropDown";
// import TableWrapper from "../../ui/table-wrapper";
import ScheduleDateDropDown from "../ScheduleDateDropDown/ScheduleDateDropDown";
// import { IoIosArrowUp } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import TableWrapper from "../../ui/table-wrapper";

{
  /* <span className="flex justify-center items-center gap-[4px]">
  <span className="inline-block">Event Name</span>
  <span className="inline-block">
    <IoIosArrowUp />
    <IoIosArrowDown />
  </span>
</span>; */
}

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
          <table className="table-auto table table-ui">
            <tr className="bg-[#f2f2f2] font-medium text-[#7D7D7D]">
              <td rowSpan="2" className="border-b w-[88px] z-40 bg-[#F2F2F2]">
                <button className="flex items-center justify-center gap-[10px] text-center w-full px-[8px] py-[16px]">
                  <span>Event Name</span>{" "}
                  <img src="/Arrow.png" alt="drop down" />
                </button>
              </td>
              <td rowSpan="2" className="border border-t-0">
                <button className="flex items-center justify-center gap-[10px] text-center w-full px-[8px] py-[16px] whitespace-nowrap">
                  <span>Date / Time</span>{" "}
                  <img src="/Arrow.png" alt="drop down" />
                </button>
              </td>
              <td rowSpan="2" className="border border-t-0">
                <button className="flex items-center justify-center gap-[10px] text-center w-full px-[8px] py-[16px]">
                  <span>Location</span> <img src="/Arrow.png" alt="drop down" />
                </button>
              </td>
              <td rowSpan="2" className="border border-t-0">
                <button className="flex items-center justify-center gap-[10px] text-center w-full px-[8px] py-[16px]">
                  <span>Event Categories</span>{" "}
                  <img src="/Arrow.png" alt="drop down" />
                </button>
              </td>
              <td colSpan="3" className="border border-t-0">
                <button className="flex items-center justify-center gap-[10px] text-center w-full px-[8px] py-[16px]">
                  <span>Club B</span> <img src="/Arrow.png" alt="drop down" />
                </button>
              </td>
              <td colSpan="3" className="border-b border-r-0">
                <button className="flex items-center justify-center gap-[10px] text-center w-full px-[8px] py-[16px]">
                  <span>Club A</span> <img src="/Arrow.png" alt="drop down" />
                </button>
              </td>
              <td rowSpan="2" className="border border-t-0 border-r-0">
                <button className="flex items-center justify-center gap-[10px] text-center w-full px-[8px] py-[16px] whitespace-nowrap">
                  <span>Hall of Fame</span>{" "}
                  <img src="/Arrow.png" alt="drop down" />
                </button>
              </td>
            </tr>
            <tr className="bg-[#f2f2f2] font-medium text-[#7D7D7D]">
              <td className="border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px]">
                <button className="flex items-center justify-center gap-[10px] text-center w-full px-[8px] py-[16px]">
                  <span>Name</span> <img src="/Arrow.png" alt="drop down" />
                </button>
              </td>
              <td className="border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px]">
                <button className="flex items-center justify-center gap-[10px] text-center w-full px-[8px] py-[16px]">
                  <span>Score</span> <img src="/Arrow.png" alt="drop down" />
                </button>
              </td>
              <td className="border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px]">
                <button className="flex items-center justify-center gap-[10px] text-center w-full px-[8px] py-[16px]">
                  <span>Win/Lose</span> <img src="/Arrow.png" alt="drop down" />
                </button>
              </td>
              <td className="border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px]">
                <button className="flex items-center justify-center gap-[10px] text-center w-full px-[8px] py-[16px]">
                  <span>Name</span> <img src="/Arrow.png" alt="drop down" />
                </button>
              </td>
              <td className="border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px]">
                <button className="flex items-center justify-center gap-[10px] text-center w-full px-[8px] py-[16px]">
                  <span>Score</span> <img src="/Arrow.png" alt="drop down" />
                </button>
              </td>
              <td className="border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px]">
                <button className="flex items-center justify-center gap-[10px] text-center w-full px-[8px] py-[16px]">
                  <span>Win/Lose</span> <img src="/Arrow.png" alt="drop down" />
                </button>
              </td>
            </tr>
            <tr className="font-medium">
              <td className="bg-white border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px] whitespace-nowrap text-[#A46E40]">
                SlamJam Showdown
              </td>
              <td className="border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px] whitespace-nowrap">
                29 May 2023 15:00
              </td>
              <td className="border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px]">
                GOR Lokasi
              </td>
              <td className="border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px] text-center">
                Final
              </td>
              <td className="border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px] text-center">
                AirOne Club
              </td>
              <td className="border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px] text-center">
                52
              </td>
              <td className="border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px] text-center">
                Lose
              </td>
              <td className="border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px] text-center">
                AirOne Club
              </td>
              <td className="border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px] text-center">
                52{" "}
              </td>
              <td className="border-r border-b py-[12px] px-[16px] text-[14px] leading-[24px] text-center">
                Lose
              </td>
              <td className="border-r-0 py-[12px] px-[16px] text-[14px] leading-[24px] bg-[#f6efe9] text-center border-b">
                <span className="flex justify-center items-center text-[#b48658]">
                  <IoStarSharp className="me-[2px]" />
                  <span className="flex items-center whitespace-nowrap gap-2">
                    <span>MVP:</span>{" "}
                    <span className="text-[#7d7d7d]"> User ID</span>{" "}
                  </span>
                </span>
                001
              </td>
            </tr>
            <tr className="font-medium">
              <td className="bg-white border-r py-[12px] px-[16px] text-[14px] leading-[24px] whitespace-nowrap text-[#A46E40] ">
                SlamJam Showdown
              </td>
              <td className="border-r  py-[12px] px-[16px] text-[14px] leading-[24px] whitespace-nowrap">
                29 May 2023 15:00
              </td>
              <td className="border-r py-[12px] px-[16px] text-[14px] leading-[24px] whitespace-nowrap">
                GOR Lokasi
              </td>
              <td className="border-r py-[12px] px-[16px] text-[14px] leading-[24px] text-center">
                Final
              </td>
              <td className="border-r py-[12px] px-[16px] text-[14px] leading-[24px] text-center">
                AirOne Club
              </td>
              <td className="border-r py-[12px] px-[16px] text-[14px] leading-[24px] text-center">
                52
              </td>
              <td className="border-r py-[12px] px-[16px] text-[14px] leading-[24px] text-center">
                Lose
              </td>
              <td className="border-r py-[12px] px-[16px] text-[14px] leading-[24px] text-center">
                AirOne Club
              </td>
              <td className="border-r py-[12px] px-[16px] text-[14px] leading-[24px] text-center">
                52{" "}
              </td>
              <td className="border-r py-[12px] px-[16px] text-[14px] leading-[24px] text-center">
                Lose
              </td>
              <td className="border-r-0 py-[12px] px-[16px] text-[14px] leading-[24px] bg-[#f6efe9] text-center">
                <span className="flex justify-center items-center text-[#b48658]">
                  <IoStarSharp className="me-[2px]" />
                  <span className="flex items-center whitespace-nowrap gap-2">
                    <span>MVP:</span>{" "}
                    <span className="text-[#7d7d7d]"> User ID</span>{" "}
                  </span>
                </span>
                001
              </td>
            </tr>
          </table>
        </TableWrapper>
      </div>
    </div>
  );
};

export default Schedule;
