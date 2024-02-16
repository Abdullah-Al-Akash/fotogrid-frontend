import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MonthDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="relative inline-block text-left montserrat">
      <div>
        <button
          type="button"
          className="rounded-[6px] text-[#1A1A1A] border-gray-300 shadow-sm py-[10px]  px-[16px] bg-white text-sm  hover:bg-gray-50  flex item-center justify-between text-[16px] montserrat"
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption : "Selected Month"}
          <span className={`mt-[3px] ms-[20px]`}>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute left-0 mt-2 w-36 rounded-[6px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <button
              onClick={() => handleOptionClick("January 2024")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              role="menuitem"
            >
              January 2024
            </button>
            <button
              onClick={() => handleOptionClick("January 2023")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              role="menuitem"
            >
              January 2023
            </button>
            <button
              onClick={() => handleOptionClick("January 2022")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              role="menuitem"
            >
              January 2022
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthDropDown;