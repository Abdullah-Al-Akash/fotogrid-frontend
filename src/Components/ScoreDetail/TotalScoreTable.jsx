import TableWrapper from "../ui/table-wrapper";
import MainScoreTable from "./MainScoreTable";

const TotalScoreTable = () => {
  return (
    <div className="mt-[8px]">
      <h3 className="text-[32px]  py-[16px] leading-5 font-normal bebas-Neue">
        Total Score
      </h3>
      <TableWrapper>
        <table className="rounded-[6px] w-full mx-auto montserrat">
          <thead className="">
            <tr>
              <th className="text-[14px]  text-[#1A1A1A] p-[16px] border border-t-0 border-l-0 border-[#E8E8E8]"></th>
              <th className="text-[14px]  text-[#1A1A1A] p-[16px] border border-t-0  border-[#E8E8E8]">
                Q1
              </th>
              <th className="text-[14px]  text-[#1A1A1A] p-[16px] border border-t-0  border-[#E8E8E8]">
                Q2
              </th>
              <th className="text-[14px]  text-[#1A1A1A] p-[16px] border border-t-0  border-[#E8E8E8]">
                Q3
              </th>
              <th className="text-[14px] bg-primary  text-[#1A1A1A] border-t-0 border-r-0 p-[16px] border border-[#E8E8E8]">
                Final
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-[24px]  text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] border-l-0">
                Roar
              </td>
              <td className="px-[24px]   text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                12
              </td>
              <td className="px-[24px]  text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                24
              </td>
              <td className="px-[24px]  text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                44
              </td>
              <td className="px-[24px]  text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] bg-primary border-r-0">
                65
              </td>
            </tr>
            <tr>
              <td className="px-[24px] border-l-0 border-b-0 text-center py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] ">
                Warriors
              </td>
              <td className="px-[24px]  text-center border-b-0 py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                12
              </td>
              <td className="px-[24px]  text-center border-b-0 py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                34
              </td>
              <td className="px-[24px]  text-center border-b-0 py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                42
              </td>
              <td className="px-[24px]  text-center border-b-0 border-r-0 py-[12px] text-[#1A1A1A] leading-[24px] text-[14px] border bg-primary border-[#E8E8E8]">
                60
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
      <h3 className="text-[32px]  py-[16px] mt-[8px] leading-5 font-normal bebas-Neue">
        Team Name
      </h3>
      <MainScoreTable></MainScoreTable>
    </div>
  );
};

export default TotalScoreTable;
