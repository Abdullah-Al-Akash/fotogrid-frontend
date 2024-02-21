import { CakraSaktiCup, Month, defaultOptions } from "../../constants/player.constants";
import DarkDropdown from "../ui/dark-dropdown";

import TableWrapper from "../ui/table-wrapper";

const CareerHighLights = () => {
  return (
    <div className="sm:border-l-[1px] border-[#333333] px-[0px] sm:px-[30px] p-[30px]">
      <h2 className="uppercase mb-[18px] text-[#F2F2F2] bebas-Neue text-[24px] leading-[32px]">
        Career highlights
      </h2>
      <TableWrapper
        minWidth="984px"
        borderStyle="border-[#333333] border rounded-[6px]"
      >
        <table className="!w-full">
          <thead className="bg-[#242424] rounded-[6px] overflow-hidden">
            <tr>
              <th className="uppercase border-r-[1px] border-b-[1px]  border-[#333333] text-center p-[16px] text-[20px] leading-[20px] text-[#D0A885] w-[168.5px]">
                Points
              </th>
              <th className="uppercase border-r-[1px] border-b-[1px]  border-[#333333] text-center p-[16px] text-[20px] leading-[20px] text-[#D0A885] w-[168.5px]">
                Rebounds
              </th>
              <th className="uppercase border-r-[1px] border-b-[1px]  border-[#333333] text-center p-[16px] text-[20px] leading-[20px] text-[#D0A885] w-[168.5px]">
                Assists
              </th>
              <th className="uppercase border-r-[1px] border-b-[1px]  border-[#333333] text-center p-[16px] text-[20px] leading-[20px] text-[#D0A885] w-[168.5px]">
                Blocks
              </th>
              <th className="uppercase border-r-[1px] border-b-[1px]  border-[#333333] text-center p-[16px] text-[20px] leading-[20px] text-[#D0A885] w-[168.5px]">
                Steals
              </th>
              <th
                className="uppercase  border-b-[1px]  border-[#333333] text-center
               p-[16px] text-[20px] leading-[20px] text-[#D0A885]"
              >
                3PT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-[12px] text-[20px] leading-[20px] text-[#D5BFA9]  px-[16px] border-r-[1px] border-[#333333] bebas-Neue">
                24
              </td>
              <td className="py-[12px] text-[20px] leading-[20px] text-[#D5BFA9]  px-[16px] border-r-[1px] border-[#333333] bebas-Neue">
                12
              </td>
              <td className="py-[12px] text-[20px] leading-[20px] text-[#D5BFA9]  px-[16px] border-r-[1px] border-[#333333] bebas-Neue">
                7
              </td>
              <td className="py-[12px] text-[20px] leading-[20px] text-[#D5BFA9]  px-[16px] border-r-[1px] border-[#333333] bebas-Neue">
                1
              </td>
              <td className="py-[12px] text-[20px] leading-[20px] text-[#D5BFA9]  px-[16px] border-r-[1px] border-[#333333] bebas-Neue">
                8
              </td>
              <td className="py-[12px] text-[20px] leading-[20px] text-[#D5BFA9]  px-[68px] border-[#333333]">
                2
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
      <div className="mt-[32px] mb-[16px] flex sm:flex-row flex-col flex-wrap gap-[16px] sm:items-center w-full">
        <DarkDropdown options={defaultOptions} label="KU 12 Girl" />
        <DarkDropdown options={CakraSaktiCup} label="Cakra Sakti Cup 2023" />
        <DarkDropdown options={Month} label="January" />
      </div>
      <TableWrapper
        minWidth="984px"
        borderStyle="border-[#333333] border rounded-[6px]"
      >
        <table className="!w-full">
          <thead className="bg-[#242424] rounded-[6px] overflow-hidden">
            <tr>
              <th className="uppercase border-r-[1px] border-b-[1px]  border-[#333333] text-center p-[16px] text-[20px] leading-[20px] text-[#D0A885] w-[168.5px]">
                PPG
              </th>
              <th className="uppercase border-r-[1px] border-b-[1px]  border-[#333333] text-center p-[16px] text-[20px] leading-[20px] text-[#D0A885] w-[168.5px]">
                RPG
              </th>
              <th className="uppercase border-r-[1px] border-b-[1px]  border-[#333333] text-center p-[16px] text-[20px] leading-[20px] text-[#D0A885] w-[168.5px]">
                APG
              </th>
              <th className="uppercase border-r-[1px] border-b-[1px]  border-[#333333] text-center p-[16px] text-[20px] leading-[20px] text-[#D0A885] w-[168.5px]">
                BPG
              </th>
              <th className="uppercase border-r-[1px] border-b-[1px]  border-[#333333] text-center p-[16px] text-[20px] leading-[20px] text-[#D0A885] w-[168.5px]">
                SPG
              </th>
              <th
                className="uppercase  border-b-[1px]  border-[#333333] text-center
               p-[16px] text-[20px] leading-[20px] text-[#D0A885]"
              >
                3PT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-[12px] text-[20px] leading-[20px] text-[#D5BFA9]  px-[16px] border-r-[1px] border-[#333333] bebas-Neue">
                24
              </td>
              <td className="py-[12px] text-[20px] leading-[20px] text-[#D5BFA9]  px-[16px] border-r-[1px] border-[#333333] bebas-Neue">
                12
              </td>
              <td className="py-[12px] text-[20px] leading-[20px] text-[#D5BFA9]  px-[16px] border-r-[1px] border-[#333333] bebas-Neue">
                7
              </td>
              <td className="py-[12px] text-[20px] leading-[20px] text-[#D5BFA9]  px-[16px] border-r-[1px] border-[#333333] bebas-Neue">
                1
              </td>
              <td className="py-[12px] text-[20px] leading-[20px] text-[#D5BFA9]  px-[16px] border-r-[1px] border-[#333333] bebas-Neue">
                8
              </td>
              <td className="py-[12px] text-[20px] leading-[20px] text-[#D5BFA9]  px-[68px] border-[#333333]">
                2
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </div>
  );
};

export default CareerHighLights;
