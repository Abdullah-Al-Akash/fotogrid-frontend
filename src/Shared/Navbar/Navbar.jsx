// import { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import EventDropdown from "../../Components/ui/event-dropdown";
import PlayerDropdown from "../../Components/ui/players-dropdown";
import LocationDropdown from "../../Components/ui/location-dropdown";

const NavBar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

  //For Player dropdown:
  // const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  // const [playerSelected, setPlayerSelected] = useState(null);
  //For Location dropdown:
  // const [isLocationOpen, setIsLocationOpen] = useState(false);
  // const [locationSelected, setLocationSelected] = useState(null);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleOptionClick = (option) => {
  //   setSelectedOption(option);
  //   setIsOpen(false);
  // };

  // //   For Player:
  // const toggleDropdownForPlayer = () => {
  //   setIsPlayerOpen(!isPlayerOpen);
  // };

  // const handleOptionClickForPlayer = (option) => {
  //   setPlayerSelected(option);
  //   setIsPlayerOpen(false);
  // };
  //   For Location:
  // const toggleDropdownForLocation = () => {
  //   setIsLocationOpen(!isLocationOpen);
  // };

  // const handleOptionClickForLocation = (option) => {
  //   setLocationSelected(option);
  //   setIsLocationOpen(false);
  // };
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
        <EventDropdown />
      </li>
      <li className="">
        <PlayerDropdown />
      </li>
      <li className="">
        <LocationDropdown />
      </li>
    </>
  );
  return (
    <div className="bg-white">
      <div className="fotogrit-container">
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
