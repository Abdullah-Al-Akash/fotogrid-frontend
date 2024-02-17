/* eslint-disable react/prop-types */

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left montserrat">
      <div>
        <button
          type="button"
          className="h-[48px] rounded-[6px]   border-gray-300 shadow-sm py-[8px] px-[16px] bg-white text-sm text-gray-700  flex items-center justify-between text-[16px] font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? selectedOption : label}
          <span className={`mt-[2px] ms-[26px]`}>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute left-0 mt-2 w-48  rounded-[6px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-[999999999]"
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
                    className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
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

export default Dropdown;
