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

              <th className="text-[#7D7D7D] border-[#E8E8E8] border-t-0 text-center border">
                <th className="p-[16px] flex justify-center items-center border-b">
                  Field Goals
                </th>
                <tr>
                  <th className="p-[16px] w-full">M/A</th>
                  <th className="border-l  px-[21.9px] w-full">%</th>
                </tr>
              </th>
              <th className="text-[#7D7D7D] border-[#E8E8E8] border-t-0 text-center border">
                <th className="p-[16px] flex justify-center items-center border-b">
                  Field Goals
                </th>
                <tr>
                  <th className="p-[16px] w-full">M/A</th>
                  <th className="border-l  px-[21.9px] w-full">%</th>
                </tr>
              </th>
              <th className="text-[#7D7D7D] border-[#E8E8E8] border-t-0 text-center border">
                <th className="p-[16px] flex justify-center items-center border-b">
                  Field Goals
                </th>
                <tr>
                  <th className="p-[16px] w-full">M/A</th>
                  <th className="border-l px-[21.9px] w-full">%</th>
                </tr>
              </th>
              <th className="text-[#7D7D7D] border-[#E8E8E8] border-t-0 text-center border">
                <th className="p-[16px] flex justify-center items-center border-b">
                  Field Goals
                </th>
                <tr>
                  <th className="p-[16px] w-full">M/A</th>
                  <th className="border-l px-[21.9px] w-full">%</th>
                </tr>
              </th>
              <th className="text-[#7D7D7D] border-[#E8E8E8] border-t-0 text-center border">
                <th className="p-[16px] flex justify-center items-center border-b">
                  Field Goals
                </th>
                <tr>
                  <th className="p-[16px]  w-full">M/A</th>
                  <th className="border-l  px-[26.12px] w-full">%</th>
                  <th className="border-l  px-[38px] w-full">%</th>
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
            <tr>
              <td className="bg-[white] p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
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
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px]  text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] border-r-0 text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
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
            <tr>
              <td className="bg-[white] p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                1
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                Daffarel
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                07:35
              </td>

              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px]  text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] border-r-0 text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
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
            <tr>
              <td className="bg-[white] p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                1
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                Daffarel
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                07:35
              </td>

              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px]  text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] border-r-0 text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
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
            <tr>
              <td className="bg-[white] p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                1
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                Daffarel
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                07:35
              </td>

              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px]  text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] border-r-0 text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
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
            <tr>
              <td className="bg-[white] p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                1
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                Daffarel
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                07:35
              </td>

              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px]  text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] border-r-0 text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
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
            <tr>
              <td className="bg-[white] p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                1
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                Daffarel
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                07:35
              </td>

              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px]  text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] border-r-0 text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
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
            <tr>
              <td className="bg-[white] p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                1
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                Daffarel
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                07:35
              </td>

              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px]  text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] border-r-0 text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
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
            <tr>
              <td className="bg-[white] p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                1
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                Daffarel
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
                07:35
              </td>

              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px]  text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] border-r-0 text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
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
            <tr>
              <td className="bg-[white] p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] opacity-0">
                1
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] opacity-0">
                Daffarel
              </td>
              <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] opacity-0">
                07:35
              </td>

              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full opacity-0">
                    6/13
                  </td>
                  <td className="p-[16px]  text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full opacity-0">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full opacity-0">
                    6/13
                  </td>
                  <td className="p-[16px] border-r-0 text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full opacity-0">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full opacity-0">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full opacity-0">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full opacity-0">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full opacity-0">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full opacity-0">
                    Name
                  </td>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full opacity-0">
                    Score
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full opacity-0">
                    Win/Lose
                  </td>
                </tr>
              </td>
              <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] opacity-0">
                1
              </td>
              <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] opacity-0">
                1
              </td>
              <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] opacity-0">
                1
              </td>
              <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] opacity-0">
                1
              </td>
              <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] opacity-0">
                1
              </td>
              <td className="p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] opacity-0">
                1
              </td>
              <td className="p-[16px] border-l-0 border-r-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8] opacity-0">
                1
              </td>
            </tr>
            <tr>
              <td className="bg-[white] p-[16px] border-l-0  text-center text-[#1A1A1A] leading-[24px] text-[14px] border border-[#E8E8E8]">
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
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px]  text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] border-r-0 text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
                    6/13
                  </td>
                  <td className="p-[16px] text-center  text-[#1A1A1A] leading-[24px] text-[14px]  border-[#E8E8E8] border-r-0 w-full">
                    46,2
                  </td>
                </tr>
              </td>
              <td className="border">
                <tr>
                  <td className="p-[16px] border-r text-center  text-[#1A1A1A] leading-[24px] text-[14px]   border-[#E8E8E8] w-full">
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
