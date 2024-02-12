import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars, react/prop-types
const DropDownTab = ({ tab, setTab }) => {
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
    <div>
      <div className="relative inline-block text-left mt-[16px] montserrat">
        <div>
          <button
            type="button"
            className="rounded-[6px] border-gray-300 shadow-sm py-[10px] my-[8px] px-[16px] bg-white text-sm text-gray-700 hover:bg-gray-50  flex item-center justify-between text-[16px]"
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
            className="origin-top-right absolute left-0 mt-2 w-56  rounded-[6px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              <button
                onClick={() => (
                  handleOptionClick("Results & Standing"), setTab("tab1")
                )}
                className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                role="menuitem"
              >
                Results & Standing
              </button>
              <button
                onClick={() => (
                  handleOptionClick("Event Info & News"), setTab("tab2")
                )}
                className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                role="menuitem"
              >
                Event Info & News
              </button>
              <button
                onClick={() => (
                  handleOptionClick("Club & Players"), setTab("tab3")
                )}
                className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                role="menuitem"
              >
                Club & Players
              </button>
              <button
                onClick={() => (handleOptionClick("Schedule"), setTab("tab4"))}
                className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                role="menuitem"
              >
                Schedule
              </button>
              <button
                onClick={() => (
                  handleOptionClick("Hall of Donors"), setTab("tab5")
                )}
                className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                role="menuitem"
              >
                Hall of Donors
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDownTab;
