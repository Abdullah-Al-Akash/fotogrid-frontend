import React from "react";
import TableWrapper from "../ui/table-wrapper";

const MainScoreTable = () => {
  return (
    <div className="mt-[8px]">
      <TableWrapper>
        <table
          className="table-ui !w-full mx-auto table-auto"
          cellSpacing="0"
          cellPadding="0"
        >
          <thead className="bg-primary">
            <tr>
              <th className="text-[14px] border-l-0 bg-[#F2F2F2]  text-[#7D7D7D] p-[16px] border border-t-0 border-[#E8E8E8]">
                Jersey No
              </th>
              <th className="text-[14px]  text-[#7D7D7D] p-[16px] border border-t-0 border-[#E8E8E8]">
                Name
              </th>
              <th className="text-[14px]  text-[#7D7D7D] p-[16px] border border-t-0 border-[#E8E8E8]">
                Min
              </th>

              <th className="text-[#7D7D7D]   border-[#E8E8E8] border-t-0 text-center border">
                <th className="p-[16px] !z-0 relative flex justify-center items-center border-b">
                  Field Goals
                </th>
                <tr>
                  <th className="p-[16px] !z-0 relative w-full">M/A</th>
                  <th className="border-l !z-0 relative px-[21.9px] w-full">
                    %
                  </th>
                </tr>
              </th>
              <th className="text-[#7D7D7D] border-[#E8E8E8] border-t-0 text-center border">
                <th className="p-[16px] flex !z-0 relative justify-center items-center border-b">
                  Field Goals
                </th>
                <tr>
                  <th className="p-[16px] !z-0 relative w-full">M/A</th>
                  <th className="border-l !z-0 relative  px-[21.9px] w-full">
                    %
                  </th>
                </tr>
              </th>
              <th className="text-[#7D7D7D] border-[#E8E8E8] border-t-0 text-center border">
                <th className="p-[16px] !z-0 relative flex justify-center items-center border-b">
                  Field Goals
                </th>
                <tr>
                  <th className="p-[16px] !z-0 relative w-full">M/A</th>
                  <th className="border-l !z-0 relative px-[21.9px] w-full">
                    %
                  </th>
                </tr>
              </th>
              <th className="text-[#7D7D7D] border-[#E8E8E8] border-t-0 text-center border">
                <th className="p-[16px] flex !z-0 relative justify-center items-center border-b">
                  Field Goals
                </th>
                <tr>
                  <th className="p-[16px] !z-0 relative w-full">M/A</th>
                  <th className="border-l !z-0 relative px-[21.9px] w-full">
                    %
                  </th>
                </tr>
              </th>
              <th className="text-[#7D7D7D]  border-[#E8E8E8] border-t-0 text-center border">
                <th className="p-[16px] !z-0 relative flex justify-center items-center border-b">
                  Field Goals
                </th>
                <tr>
                  <th className="p-[16px] !z-0 relative  w-full">M/A</th>
                  <th className="border-l !z-0 relative  px-[26.12px] w-full">
                    %
                  </th>
                  <th className="border-l !z-0 relative  px-[38px] w-full">
                    %
                  </th>
                </tr>
              </th>

              <th className="text-[14px]  text-[#7D7D7D] p-[16px] border border-[#E8E8E8] border-t-0">
                AST
              </th>
              <th className="text-[14px]  text-[#7D7D7D] p-[16px] border border-[#E8E8E8] border-t-0 border-r-0">
                TO
              </th>
              <th className="text-[14px]  text-[#7D7D7D] p-[16px] border border-[#E8E8E8] border-t-0 border-r-0">
                ST
              </th>
              <th className="text-[14px]  text-[#7D7D7D] p-[16px] border border-[#E8E8E8] border-t-0 border-r-0">
                FOUIS
              </th>
              <th className="text-[14px]  text-[#7D7D7D] p-[16px] border border-[#E8E8E8] border-t-0 border-r-0">
                +/-
              </th>
              <th className="text-[14px]  text-[#7D7D7D] p-[16px] border border-[#E8E8E8] border-t-0 border-r-0">
                EF
              </th>
              <th className="text-[14px]  text-[#7D7D7D] p-[16px] border border-[#E8E8E8] border-t-0 border-r-0">
                EF/MIN
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
              return (
                <React.Fragment key={item}>
                  <tr>
                    <td className="bg-[white]  p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                      1
                    </td>
                    <td className="p-[16px]  text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                      Daffarel
                    </td>
                    <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                      07:35
                    </td>

                    <td className="border">
                      <tr>
                        <td className="p-[16px] !z-0 relative border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                          6/13
                        </td>
                        <td className="p-[16px]  text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                          46,2
                        </td>
                      </tr>
                    </td>
                    <td className="border">
                      <tr>
                        <td className="p-[16px] !z-0 relative border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                          6/13
                        </td>
                        <td className="p-[16px] border-r-0 text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                          46,2
                        </td>
                      </tr>
                    </td>
                    <td className="border">
                      <tr>
                        <td className="p-[16px] !z-0 relative border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                          6/13
                        </td>
                        <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                          46,2
                        </td>
                      </tr>
                    </td>
                    <td className="border">
                      <tr>
                        <td className="p-[16px] border-r !z-0 relative text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                          6/13
                        </td>
                        <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                          46,2
                        </td>
                      </tr>
                    </td>
                    <td className="border">
                      <tr>
                        <td className="p-[16px] !z-0 relative border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                          Name
                        </td>
                        <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                          Score
                        </td>
                        <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                          Win/Lose
                        </td>
                      </tr>
                    </td>
                    <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                      1
                    </td>
                    <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                      1
                    </td>
                    <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                      1
                    </td>
                    <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                      1
                    </td>
                    <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                      1
                    </td>
                    <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                      1
                    </td>
                    <td className="p-[16px] border-l-0 border-r-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                      1
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}

            <tr>
              <td className="bg-[white]  p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                Total
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                Daffarel
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                07:35
              </td>

              <td className="border">
                <tr>
                  <td className="p-[16px] !z-0 relative border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px]  text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] !z-0 relative border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] border-r-0 text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] !z-0 relative border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] !z-0 relative border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] !z-0 relative border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    Name
                  </td>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    Score
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    Win/Lose
                  </td>
                </tr>
              </td>
              <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                1
              </td>
              <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                1
              </td>
              <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                1
              </td>
              <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                1
              </td>
              <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                1
              </td>
              <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                1
              </td>
              <td className="p-[16px] border-l-0 border-r-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                1
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </div>
  );
};

export default MainScoreTable;
