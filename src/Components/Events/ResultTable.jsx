import resultTableImage from "../../../public/Images/Ellipse 1.png";
import trophy from "../../../public/Images/trophy-01.png";
const ResultTable = () => {
  return (
    <div className="overflow-x-auto border-t !rounded-[6px]">
      <table className="table !font-medium ">
        {/* head */}
        <thead>
          <tr className="bg-base-200 !text-[16px] !montserrat">
            <th className="border-r border-s border-b">Club</th>
            <th className="border-r border-b">Total Plays</th>
            <th className="border-r border-b">Total Wins</th>
            <th className="border-r border-b">Total Lose</th>
            <th className="border-r border-b">Points For</th>
            <th className="border-r border-b">Points Against</th>
            <th className="border-r border-b">Points Differences</th>
            <th className="border-r border-b">Final Standings</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th className="flex items-center gap-[8px] border-r border-s border-b">
              <img src={resultTableImage} className="w-[28] h-[28]" alt="" />
              <h1>Victoria</h1>
            </th>
            <td className="border-r border-b">10</td>
            <td className="border-r border-b">10</td>
            <td className="border-r border-b">0</td>
            <td className="border-r border-b">100</td>
            <td className="border-r border-b">50</td>
            <td className="border-r border-b">50</td>
            <td className="flex items-center gap-[8px] border-r">
              <img src={trophy} className="w-[20px] h-[20px]" alt="" />
              <p className="text-[16px]">Winner</p>
            </td>
          </tr>
          {/* row 1 */}
          <tr>
            <th className="flex items-center gap-[8px]  border-r border-s border-b">
              <img src={resultTableImage} className="w-[28] h-[28]" alt="" />
              <h1>Victoria</h1>
            </th>
            <td className="border-r border-b">10</td>
            <td className="border-r border-b">10</td>
            <td className="border-r border-b">0</td>
            <td className="border-r border-b">100</td>
            <td className="border-r border-b">50</td>
            <td className="border-r border-b">50</td>
            <td className="flex items-center gap-[8px]  border-b border-r">
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
