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
    <div
      ref={dropdownRef}
      className="relative text-[24px] font-bold bg-[#fff] py-[9px] px-[16px] border rounded-[4px] text-[#636363] border-[#ccc]"
    >
      <div onClick={handleFilterOption} className="cursor-pointer">
        <TbFilter />
      </div>
      <div className="absolute top-[15px] right-[190px] text-[20px] text-[#7D7D7D]]">
        {filterOpen && (
          <div className="cursor-pointer whitespace-nowrap absolute top-[30px] p-[32px] bg-[#fff] z-[9999] left-[50%] -translate-x-[50%] rounded-[8px] border shadow-md">
            <div className="w-[351px]">
              <h3 className="bebas-Neue uppercase text-[#1A1A1A] text-[20px] py-[24px] font-normal leading-[32px]">
                Filters
              </h3>
              <div className="flex items-center mb-4 ">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-[#D5D7D7] bg-gray-100 border-gray-300 rounded focus:ring-[#D5D7D7] dark:focus:ring-[#D5D7D7] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-[16px] font-normal rubik text-[#4A4A4A] dark:text-gray-300"
                >
                  Filter Option #01
                </label>
              </div>
              <div className="flex items-center mb-4 ">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-[#D5D7D7] bg-gray-100 border-gray-300 rounded focus:ring-[#D5D7D7] dark:focus:ring-[#D5D7D7] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-[16px] font-normal rubik text-[#4A4A4A] dark:text-gray-300"
                >
                  Filter Option #01
                </label>
              </div>
              <div className="flex items-center mb-4 ">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-[#D5D7D7] bg-gray-100 border-gray-300 rounded focus:ring-[#D5D7D7] dark:focus:ring-[#D5D7D7] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-[16px] font-normal rubik text-[#4A4A4A] dark:text-gray-300"
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
