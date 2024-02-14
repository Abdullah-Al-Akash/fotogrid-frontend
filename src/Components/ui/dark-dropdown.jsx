/* eslint-disable react/prop-types */

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DarkDropdown = ({ options, label }) => {
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
    <div className="relative inline-block text-left montserrat ">
      <div>
        <button
          type="button"
          className="h-[48px] rounded-[6px]  ring-[1px] ring-[#4A4A4A]   shadow-sm py-[8px] px-[16px] bg-transparent text-sm text-white  flex items-center justify-between text-[16px] font-medium"
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption : label}
          <span className={`mt-[2px] ms-[26px]`}>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute left-0 mt-2 w-24  rounded-[6px] shadow-lg bg-[#1E1E1E] ring-1 ring-black ring-opacity-5 focus:outline-none z-[999999999]"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {Array.isArray(options) &&
              options?.map((item, key) => {
                return (
                  <button
                    key={key}
                    onClick={() => handleOptionClick(item.value)}
                    className="block px-4 py-2 text-sm text-white w-full text-left hover:text-[#1E1E1E] hover:bg-gray-100"
                    role="menuitem"
                  >
                    {item.label}
                  </button>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DarkDropdown;
