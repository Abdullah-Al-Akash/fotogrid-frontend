/* eslint-disable react/prop-types */
const TableWrapper = ({ children }) => {
  return (
    <section className="overflow-x-auto">
      <div className="w-[1000px]">{children}</div>
    </section>
  );
};

export default TableWrapper;
