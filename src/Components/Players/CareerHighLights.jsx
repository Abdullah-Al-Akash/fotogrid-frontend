import { defaultOptions } from "../../constants/player.constants";
import DarkDropdown from "../ui/dark-dropdown";

import TableWrapper from "../ui/table-wrapper";

const CareerHighLights = () => {
  return (
    <div className="border-x-[1px] border-[#333333] p-[30px]">
      <h2 className="uppercase mb-[18px] text-[#F2F2F2] bebas-Neue text-[24px] leading-[32px] font-bold">
        Career highlights
      </h2>
      <TableWrapper>
        <table className="min-w-[1050px] !w-full border-[#333333] border-[1px] !rounded-[6px]">
          <thead className="bg-[#242424] rounded-[6px] overflow-hidden">
            <tr>
              <th className="uppercase border-[1px] border-[#333333] text-center py-[18px] text-[20px] leading-[20px] text-[#D0A885] ">
                Points
              </th>
              <th className="uppercase border-[1px] border-[#333333] text-center py-[18px] text-[20px] leading-[20px] text-[#D0A885] ">
                Rebounds
              </th>
              <th className="uppercase border-[1px] border-[#333333] text-center py-[18px] text-[20px] leading-[20px] text-[#D0A885] ">
                Assists
              </th>
              <th className="uppercase border-[1px] border-[#333333] text-center py-[18px] text-[20px] leading-[20px] text-[#D0A885] ">
                Blocks
              </th>
              <th className="uppercase border-[1px] border-[#333333] text-center py-[18px] text-[20px] leading-[20px] text-[#D0A885] ">
                Steals
              </th>
              <th className="uppercase border-[1px] border-[#333333] text-center py-[18px] text-[20px] leading-[20px] text-[#D0A885] ">
                3PT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-[14px] text-[20px] leading-[20px] text-[#D5BFA9] font-bold px-[18px] border-[1px] border-[#333333]">
                24
              </td>
              <td className="py-[14px] text-[20px] leading-[20px] text-[#D5BFA9] font-bold px-[18px] border-[1px] border-[#333333]">
                12
              </td>
              <td className="py-[14px] text-[20px] leading-[20px] text-[#D5BFA9] font-bold px-[18px] border-[1px] border-[#333333]">
                7
              </td>
              <td className="py-[14px] text-[20px] leading-[20px] text-[#D5BFA9] font-bold px-[18px] border-[1px] border-[#333333]">
                1
              </td>
              <td className="py-[14px] text-[20px] leading-[20px] text-[#D5BFA9] font-bold px-[18px] border-[1px] border-[#333333]">
                8
              </td>
              <td className="py-[14px] text-[20px] leading-[20px] text-[#D5BFA9] font-bold px-[18px] border-[1px] border-[#333333]">
                2
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
      <div className="mt-[32px] mb-[16px] flex flex-wrap gap-[16px] items-center">
        <DarkDropdown options={defaultOptions} label="Age Group" />
        <DarkDropdown options={defaultOptions} label="Event Group" />
        <DarkDropdown options={defaultOptions} label="Months" />
      </div>
      <TableWrapper>
        <table className="min-w-[1050px] !w-full border-[#333333] border-[1px] !rounded-[6px]">
          <thead className="bg-[#242424] rounded-[6px] overflow-hidden">
            <tr>
              <th className="uppercase border-[1px] border-[#333333] text-center py-[18px] text-[20px] leading-[20px] text-[#D0A885] ">
                PPG
              </th>
              <th className="uppercase border-[1px] border-[#333333] text-center py-[18px] text-[20px] leading-[20px] text-[#D0A885] ">
                RPG
              </th>
              <th className="uppercase border-[1px] border-[#333333] text-center py-[18px] text-[20px] leading-[20px] text-[#D0A885] ">
                APG
              </th>
              <th className="uppercase border-[1px] border-[#333333] text-center py-[18px] text-[20px] leading-[20px] text-[#D0A885] ">
                BPG
              </th>
              <th className="uppercase border-[1px] border-[#333333] text-center py-[18px] text-[20px] leading-[20px] text-[#D0A885] ">
                SPG
              </th>
              <th className="uppercase border-[1px] border-[#333333] text-center py-[18px] text-[20px] leading-[20px] text-[#D0A885] ">
                3PT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-[14px] text-[20px] leading-[20px] text-[#D5BFA9] font-bold px-[18px] border-[1px] border-[#333333]">
                13.9
              </td>
              <td className="py-[14px] text-[20px] leading-[20px] text-[#D5BFA9] font-bold px-[18px] border-[1px] border-[#333333]">
                6.2
              </td>
              <td className="py-[14px] text-[20px] leading-[20px] text-[#D5BFA9] font-bold px-[18px] border-[1px] border-[#333333]">
                2,9
              </td>
              <td className="py-[14px] text-[20px] leading-[20px] text-[#D5BFA9] font-bold px-[18px] border-[1px] border-[#333333]">
                0.4
              </td>
              <td className="py-[14px] text-[20px] leading-[20px] text-[#D5BFA9] font-bold px-[18px] border-[1px] border-[#333333]">
                2.9
              </td>
              <td className="py-[14px] text-[20px] leading-[20px] text-[#D5BFA9] font-bold px-[18px] border-[1px] border-[#333333]">
                0.3
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </div>
  );
};

export default CareerHighLights;
