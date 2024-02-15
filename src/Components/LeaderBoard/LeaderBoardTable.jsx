import TableWrapper from "../ui/table-wrapper";

const LeaderBoard = () => {
  return (
    <section className="bg-white p-[24px] rounded mt-[24px]">
      <h2 className="uppercase font-bold bebas-Neue text-[#1A1A1A] leading-[32px] text-[24px]">
        Leaderboard
      </h2>
      <TableWrapper>
        <table className="!w-full rounded-[2px] mt-[8px]  mx-auto">
          <thead className="bg-primary ">
            <tr>
              <th className="text-[14px] text-[#7D7D7D] p-[17px]  border border-[#E8E8E8]">
                Profile Picture
              </th>
              <th className="text-[14px] text-[#7D7D7D] p-[17px] border border-[#E8E8E8]">
                Name
              </th>
              <th className="text-[14px] text-[#7D7D7D] p-[17px] border border-[#E8E8E8]">
                Age
              </th>
              <th className="text-[14px] text-[#7D7D7D] p-[17px] border border-[#E8E8E8]">
                Points per Game (PPG)
              </th>
              <th className="text-[14px] text-[#7D7D7D] p-[17px] border border-[#E8E8E8]">
                Rebounds per Game (RPG)
              </th>
              <th className="text-[14px] text-[#7D7D7D] p-[17px] border border-[#E8E8E8]">
                Assist per Game (APG)
              </th>
              <th className="text-[14px] text-[#7D7D7D] p-[17px] border border-[#E8E8E8]">
                Steals per Game (SPG)
              </th>
              <th className="text-[14px] text-[#7D7D7D] p-[17px] border border-[#E8E8E8]">
                Turnovers per Game (TPG)
              </th>
              <th className="text-[14px] text-[#7D7D7D] p-[17px] border border-[#E8E8E8]">
                Blocks per Game (BPG)
              </th>
              <th className="text-[14px] text-[#7D7D7D] p-[17px] border border-[#E8E8E8]">
                Fouls per Game (FPG)
              </th>
              <th className="text-[14px] text-[#7D7D7D] p-[17px] border border-[#E8E8E8]">
                Field Goal Percentage
              </th>
              <th className="text-[14px] text-[#7D7D7D] p-[17px] border border-[#E8E8E8]">
                3 Point Percentage
              </th>
              <th className="text-[14px] text-[#7D7D7D] p-[17px] border border-[#E8E8E8]">
                Free Throw Percentage
              </th>
              <th className="text-[14px] text-[#7D7D7D] p-[17px] border border-[#E8E8E8]">
                Efficiencies per Game
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#E8E8E8]">
                <img
                  className="h-[44px] w-[44px] rounded-full mx-auto my-[5px]"
                  src="../../../public/user.png"
                />
              </td>
              <td className="px-[17px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                Ben
              </td>
              <td className="px-[17px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                11
              </td>
              <td className="px-[17px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                14.06
              </td>
              <td className="px-[17px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                4.3
              </td>
              <td className="px-[17px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                2.9
              </td>
              <td className="px-[17px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                11
              </td>
              <td className="px-[17px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                2.92
              </td>
              <td className="px-[17px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                0.13
              </td>
              <td className="px-[17px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                1.26
              </td>
              <td className="px-[17px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                50.87%
              </td>
              <td className="px-[17px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                0%
              </td>
              <td className="px-[17px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                49.81%
              </td>
              <td className="px-[17px] text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                13.89
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </section>
  );
};

export default LeaderBoard;
