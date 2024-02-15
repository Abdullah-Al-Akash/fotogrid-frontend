import React from "react";
import TableWrapper from "../ui/table-wrapper";

const TotalScoreTable = () => {
  return (
    <div>
      <TableWrapper>
        <table className="rounded-[6px] mt-[8px] min-w-[1416px] w-full mx-auto montserrat">
          <thead className="">
            <tr>
              <th className="text-[14px]  text-[#1A1A1A] p-[24px] border border-[#E8E8E8]"></th>
              <th className="text-[14px]  text-[#1A1A1A] p-[24px] border border-[#E8E8E8]">
                Q1
              </th>
              <th className="text-[14px]  text-[#1A1A1A] p-[24px] border border-[#E8E8E8]">
                Q2
              </th>
              <th className="text-[14px]  text-[#1A1A1A] p-[24px] border border-[#E8E8E8]">
                Q3
              </th>
              <th className="text-[14px] bg-primary  text-[#1A1A1A] p-[24px] border border-[#E8E8E8]">
                Final
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-[24px]  text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] font-bold">
                Roar
              </td>
              <td className="px-[24px]  text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                12
              </td>
              <td className="px-[24px]  text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                24
              </td>
              <td className="px-[24px]  text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                44
              </td>
              <td className="px-[24px]  text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] bg-primary">
                65
              </td>
            </tr>
            <tr>
              <td className="px-[24px]  text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] font-bold">
                Warriors
              </td>
              <td className="px-[24px]  text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                12
              </td>
              <td className="px-[24px]  text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                34
              </td>
              <td className="px-[24px]  text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                42
              </td>
              <td className="px-[24px]  text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border bg-primary border-[#E8E8E8]">
                60
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </div>
  );
};

export default TotalScoreTable;
