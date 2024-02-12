import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

const EventsTopDropDown = () => {
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
    <div className="relative inline-block text-left mt-[16px]">
      <div>
        <button
          type="button"
          className="rounded-md border-gray-300 shadow-sm px-[16px] py-[18px] bg-white text-sm font-medium text-gray-700 hover:bg-gray-50  flex item-center justify-between"
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption : "Select an option"}
          <span className={`mt-[2px] ms-[26px]`}>
            {isOpen ? <FaArrowUp /> : <FaArrowDown />}
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <button
              onClick={() => handleOptionClick("Cakra Sakti Cup 2023")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              role="menuitem"
            >
              Cakra Sakti Cup 2023
            </button>
            <button
              onClick={() => handleOptionClick("Option 2")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              role="menuitem"
            >
              Option 2
            </button>
            <button
              onClick={() => handleOptionClick("Option 3")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              role="menuitem"
            >
              Option 3
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsTopDropDown;
