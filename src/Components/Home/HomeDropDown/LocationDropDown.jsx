import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const LocationDropDown = () => {
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
          className="rounded-[6px] text-[#1A1A1A] border-gray-300 shadow-sm py-[10px] my-[8px] px-[16px] bg-white text-sm  hover:bg-gray-50  flex item-center justify-between text-[16px] montserrat font-bold"
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption : "Jakarta"}
          <span className={`mt-[3px] ms-[20px]`}>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute left-0 mt-2 w-56  rounded-[6px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1 z-10" role="none">
            <button
              onClick={() => handleOptionClick("Jakarta")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              role="menuitem"
            >
              Jakarta
            </button>
            <button
              onClick={() => handleOptionClick("Jakarta 1")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              role="menuitem"
            >
              Jakarta 1
            </button>
            <button
              onClick={() => handleOptionClick("Jakarta 2")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              role="menuitem"
            >
              Jakarta 2
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationDropDown;