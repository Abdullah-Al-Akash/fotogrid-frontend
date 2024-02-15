import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const ParticipatingTeamsDropDown = () => {
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
          className="rounded-[6px] border-gray-300 shadow-sm py-[8px] px-[16px] bg-[#F2F2F2] text-sm text-gray-700 hover:bg-gray-50 flex item-center justify-between text-[16px] font-medium"
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption : "Select Team"}
          <span className={`mt-[2px] ms-[26px]`}>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute left-0 mt-2 w-24  rounded-[6px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-[999999999]"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <button
              onClick={() => handleOptionClick("KU 1")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              role="menuitem"
            >
              KU 1
            </button>
            <button
              onClick={() => handleOptionClick("KU 2")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              role="menuitem"
            >
              KU 2
            </button>
            <button
              onClick={() => handleOptionClick("KU 3")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              role="menuitem"
            >
              KU 3
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParticipatingTeamsDropDown;