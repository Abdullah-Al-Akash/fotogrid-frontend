import { useEffect, useRef, useState } from "react";
import { TbFilter } from "react-icons/tb";
import "./Filter.css";

const Filter = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleFilterOption = () => {
    setFilterOpen(!filterOpen);
  };
  const applyFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <div
        onClick={handleFilterOption}
        className="cursor-pointer text-[24px] font-bold bg-[#fff] py-[9px] px-[16px] border rounded-[4px] text-[#636363] border-[#ccc]"
      >
        <TbFilter />
      </div>
      <div className="absolute top-[50px] right-[0px] text-[20px] z-[9999999999999999999999999999999999]">
        {filterOpen && (
          <div className="whitespace-nowrap  bg-[rgb(255,255,255)]  rounded-[8px] border shadow-md ">
            <div className="md:w-[383px] w-[263px] p-[32px] border">
              <h3 className="bebas-Neue uppercase text-[#1A1A1A] text-[20px] pb-[10px] md:py-[24px] font-normal leading-[32px]">
                Filters
              </h3>
              <div className="flex items-center mb-4 ">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-[#D5D7D7] border-gray-300 rounded  focus:ring-0 cursor-pointer"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-[16px] font-normal rubik text-[#4a4a4a]"
                >
                  Filter Option #01
                </label>
              </div>
              <div className="flex items-center mb-4 ">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-[#D5D7D7] border-gray-300 rounded  focus:ring-0 cursor-pointer"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-[16px] font-normal rubik text-[#4a4a4a]"
                >
                  Filter Option #01
                </label>
              </div>
              <div className="flex items-center mb-4 ">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-[#D5D7D7] border-gray-300 rounded  focus:ring-0 cursor-pointer"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-[16px] font-normal rubik text-[#4A4A4A]"
                >
                  Filter Option #01
                </label>
              </div>
              <button
                onClick={applyFilter}
                className="btn text-[20px] px-[36px] font-normal bebas-Neue py-[10px] bg-[#A46E40] border-[#A46E40] text-[#FFF] uppercase hover:text-[#A46E40] hover:bg-[#f2f2f2] hover:border-[#A46E40]"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
