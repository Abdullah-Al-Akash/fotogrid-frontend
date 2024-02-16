import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  //For Player dropdown:
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [playerSelected, setPlayerSelected] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  //   For Player:
  const toggleDropdownForPlayer = () => {
    setIsPlayerOpen(!isPlayerOpen);
  };

  const handleOptionClickForPlayer = (option) => {
    setPlayerSelected(option);
    setIsPlayerOpen(false);
  };
  const navOptions = (
    <>
      <li>
        <Link
          to="/"
          className="bebas-Neue font-normal text-2xl leading-8	uppercase text-[#A46E40]"
        >
          Home
        </Link>
      </li>
      <li className="">
        <div className="relative text-left montserrat">
          <div>
            <button
              type="button"
              className="flex item-center justify-between bebas-Neue font-normal text-2xl leading-8	uppercase"
              onClick={toggleDropdown}
            >
              {selectedOption ? selectedOption : "Event"}
              <span className={`mt-[2px] ms-[5px]`}>
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
                <Link
                  to="/events"
                  onClick={() => handleOptionClick("Event")}
                  className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                  role="menuitem"
                >
                  Event
                </Link>
                <button
                  onClick={() => handleOptionClick("Event1")}
                  className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                  role="menuitem"
                >
                  Event2
                </button>
                <button
                  onClick={() => handleOptionClick("Event2")}
                  className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                  role="menuitem"
                >
                  Event3
                </button>
              </div>
            </div>
          )}
        </div>
      </li>
      <li className="">
        <div className="relative inline-block text-left montserrat">
          <div>
            <button
              type="button"
              className="flex item-center justify-between bebas-Neue font-normal text-2xl leading-8	uppercase"
              onClick={toggleDropdownForPlayer}
            >
              {playerSelected ? playerSelected : "Players"}
              <span className={`mt-[2px] ms-[5px]`}>
                {isPlayerOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>
          </div>

          {isPlayerOpen && (
            <div
              className="origin-top-right absolute left-0 mt-2 w-24  rounded-[6px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-[999999999]"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1" role="none">
                <Link
                  to="/players"
                  onClick={() => handleOptionClickForPlayer("Players")}
                  className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                  role="menuitem"
                >
                  Player
                </Link>
                <button
                  onClick={() => handleOptionClickForPlayer("Player1")}
                  className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                  role="menuitem"
                >
                  Player1
                </button>
                <button
                  onClick={() => handleOptionClickForPlayer("Player2")}
                  className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                  role="menuitem"
                >
                  Player2
                </button>
              </div>
            </div>
          )}
        </div>
      </li>
    </>
  );
  return (
    <div className="bg-white">
      <div className="container">
        <div className="navbar mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu bg-white menu-sm dropdown-content mt-3 z-[1] p-2  w-52 text-[#A46E40]"
              >
                {navOptions}
              </ul>
            </div>
            <div className="navbar-start hidden !w-full lg:flex">
              <ul className="text-[#A46E40] !flex !items-center !w-full gap-[56px]">
                {navOptions}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
