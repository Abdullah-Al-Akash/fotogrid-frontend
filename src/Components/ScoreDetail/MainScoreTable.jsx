import TableWrapper from "../ui/table-wrapper";

const MainScoreTable = () => {
  return (
    <div>
      <TableWrapper>
        <table
          border={1}
          className="table-auto  table-ui w-full"
          cellPadding="0"
          cellSpacing={0}
          
        >
          <tr>
            <td
              className="text-[14px] bg-white border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center whitespace-nowrap"
              rowSpan={2}
              colSpan={3}
            >
              Jersey No
            </td>
            <td
              className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center"
              rowSpan={2}
              colSpan={3}
            >
              Name
            </td>
            <td
              className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center"
              rowSpan={2}
              colSpan={2}
            >
              Min
            </td>
            <td
              className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center whitespace-nowrap"
              colSpan={2}
            >
              Field Goals
            </td>
            <td
              className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center whitespace-nowrap"
              colSpan={2}
            >
              2 Points
            </td>
            <td
              className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center whitespace-nowrap"
              colSpan={2}
            >
              3 Points
            </td>
            <td
              className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center whitespace-nowrap"
              colSpan={2}
            >
              Free Throws
            </td>
            <td
              className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center"
              colSpan={3}
            >
              Rebounds
            </td>
            <td
              className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center"
              rowSpan={2}
            >
              AST
            </td>
            <td
              className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center"
              rowSpan={2}
            >
              TO
            </td>
            <td
              className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center"
              rowSpan={2}
            >
              ST
            </td>
            <td
              className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center"
              rowSpan={2}
            >
              FOUIS
            </td>
            <td
              className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center"
              rowSpan={2}
            >
              +/-
            </td>
            <td
              className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center"
              rowSpan={2}
            >
              EF
            </td>
            <td
              className="text-[14px] border-b-[1px]  text-[#7D7D7D] p-[16px] text-center"
              rowSpan={2}
            >
              EF/MIN
            </td>
          </tr>
          <tr>
            <td className="text-[14px] relative !z-[-1] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center">
              M/A
            </td>
            <td className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center">
              %
            </td>
            <td className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center">
              M/A
            </td>
            <td className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center">
              %
            </td>
            <td className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center">
              M/A
            </td>
            <td className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center">
              %
            </td>
            <td className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center">
              M/A
            </td>
            <td className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center">
              %
            </td>
            <td className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center">
              OR
            </td>
            <td className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center">
              DR
            </td>
            <td className="text-[14px] border-b-[1px] border-r-[1px] text-[#7D7D7D] p-[16px] text-center">
              TOT
            </td>
          </tr>
          {/* table body start here  */}

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => {
            return (
              <tr
                key={item}
                className={`${item % 2 !== 0 ? "bg-[#f9f7f4]" : ""}`}
              >
                <td
                  className={`px-[16px] border-r-[1px] ${
                    item % 2 !== 0 ? "bg-[#f9f7f4]" : "bg-white"
                  }  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-b-[1px]`}
                  colSpan={3}
                >
                  {item}
                </td>
                <td
                  className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]"
                  colSpan={3}
                >
                  Daffarel
                </td>
                <td
                  className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]"
                  colSpan={2}
                >
                  07:35
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  6/13
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  46,2
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  6/13
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  46,2
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  6/13
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  46,2
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  6/13
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  46,2
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  4
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  5
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  9
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  2
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  2
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  2
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  2
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  2
                </td>
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  2
                </td>
                <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]">
                  2
                </td>
              </tr>
            );
          })}
          {/* empty table data  */}
          <tr>
            <td
              className="px-[16px] bg-white  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px] "
              colSpan={3}
            ></td>
            <td
              className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px] opacity-0"
              colSpan={3}
            >
              1
            </td>
            <td
              className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"
              colSpan={2}
            ></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px] border-r-[1px]"></td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]  border-b-[1px]"></td>
          </tr>

          {/* table footer */}
          <tr>
            <td
              className={`px-[16px] border-r-[1px]
              bg-white  py-[6px] text-[#1A1A1A] text-[14px]`}
              colSpan={3}
            >
              Total
            </td>
            <td
              className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]"
              colSpan={3}
            >
              Daffarel
            </td>
            <td
              className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]"
              colSpan={2}
            >
              07:35
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              6/13
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              46,2
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              6/13
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              46,2
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              6/13
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              46,2
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              6/13
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              46,2
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              4
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              5
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              9
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              5
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              5
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              5
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              5
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              5
            </td>
            <td className="px-[16px] border-r-[1px] py-[6px] text-[#1A1A1A] text-[14px]">
              5
            </td>
            <td className="px-[16px]  py-[6px] text-[#1A1A1A] text-[14px]">
              5
            </td>
          </tr>
        </table>
      </TableWrapper>
    </div>
  );
};

export default MainScoreTable;
