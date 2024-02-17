import resultTableImage from "../../../public/Images/Ellipse 1.png";
import trophy from "../../../public/Images/trophy-01.png";
const ResultTable = () => {
  return (
    <div className="overflow-x-auto !rounded-[6px] border">
      <table className="table !font-medium table-ui">
        {/* head */}
        <thead>
          <tr className="bg-base-200 !text-[16px] !montserrat text-center">
            <th className="border-r p-[16px] bg-[#F2F2F2]">Club</th>
            <th className="border-r p-[16px]">Total Plays</th>
            <th className="border-r p-[16px]">Total Wins</th>
            <th className="border-r p-[16px]">Total Lose</th>
            <th className="border-r p-[16px]">Points For</th>
            <th className="border-r p-[16px]">Points Against</th>
            <th className="border-r p-[16px]">Points Differences</th>
            <th className="">Final Standings</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="">
            <td className="bg-white flex flex-col lg:flex-row items-center gap-[8px] border-r p-[12px]">
              <img src={resultTableImage} className="w-[28] h-[28]" alt="" />
              <h1>Victoria</h1>
            </td>
            <td className="border-r text-center p-[12px]">10</td>
            <td className="border-r text-center p-[12px]">10</td>
            <td className="border-r text-center p-[12px]">0</td>
            <td className="border-r text-center p-[12px]">100</td>
            <td className="border-r text-center p-[12px]">50</td>
            <td className="border-r text-center p-[12px]">50</td>
            <td className="flex flex-col md:flex-row items-center gap-[8px] p-[12px]">
              <img src={trophy} className="w-[20px] h-[20px]" alt="" />
              <p className="text-[16px]">Winner</p>
            </td>
          </tr>
          {/* row 1 */}
          <tr className="">
            <td className="flex bg-white flex-col lg:flex-row items-center gap-[8px]  border-r">
              <img src={resultTableImage} className="w-[28] h-[28]" alt="" />
              <h1>Victoria</h1>
            </td>
            <td className="border-r text-center p-[12px]">10</td>
            <td className="border-r text-center p-[12px]">10</td>
            <td className="border-r text-center p-[12px]">0</td>
            <td className="border-r text-center p-[12px]">100</td>
            <td className="border-r text-center p-[12px]">50</td>
            <td className="border-r text-center p-[12px]">-50</td>
            <td className="flex flex-col md:flex-row items-center gap-[8px] p-[12px]">
              <img src={trophy} className="w-[20px] h-[20px]" alt="" />
              <p className="text-[16px]">Winner</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
