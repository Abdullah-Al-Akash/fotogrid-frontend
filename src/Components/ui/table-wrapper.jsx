/* eslint-disable react/prop-types */
const TableWrapper = ({ children, minWidth }) => {
  return (
    <section className="overflow-x-auto">
      <div className={` ${minWidth ? minWidth : "min-w-[1000px]"}`}>
        {children}
      </div>
    </section>
  );
};

export default TableWrapper;
