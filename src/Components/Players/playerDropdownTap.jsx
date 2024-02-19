import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// eslint-disable-next-line no-unused-vars, react/prop-types
const PlayerDropdownTap = ({ tab, setTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  //
  return (
    <div>
      <div className="relative flex flex-col w-full sm:inline-block text-left montserrat">
        <div className="flex flex-col w-full sm:block">
          <button
            type="button"
            className="rounded-[6px] border-gray-300 shadow-md py-[10px] my-[8px] px-[16px] bg-white text-sm text-gray-700 hover:bg-gray-50  flex item-center justify-between text-[16px] font-semibold"
            onClick={toggleDropdown}
          >
            {selectedOption ? selectedOption : "Stats"}
            <span className={`mt-[2px] ms-[26px]`}>
              {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute left-0 mt-2 w-56  rounded-[6px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-[9999999999]"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              <button
                onClick={() => (handleOptionClick("Stats"), setTab("tab1"))}
                className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                role="menuitem"
              >
                Stats
              </button>
              <button
                onClick={() => (handleOptionClick("Media"), setTab("tab2"))}
                className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                role="menuitem"
              >
                Media
              </button>
              <button
                onClick={() => (
                  handleOptionClick("Fotogrit Pins"), setTab("tab3")
                )}
                className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                role="menuitem"
              >
                Fotogrit Pins
              </button>
              <button
                onClick={() => (
                  handleOptionClick("Social Media"), setTab("tab4")
                )}
                className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                role="menuitem"
              >
                Social Media
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerDropdownTap;
