/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./drop-down";
import { useLocation, useNavigate } from "react-router-dom";

export default function PlayerDropdown({ NavToggleDrawer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(isOpen);
  };
  const navigate = useNavigate();
  const redirect = (path) => {
    navigate(path);
  };
  const route = useLocation();
  useEffect(() => {
    if (
      route.pathname.split("/")[1] === "leader-board" ||
      route.pathname.split("/")[1] == "players"
    ) {
      return;
    } else {
      setSelectedOption("");
    }
  }, [route]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex outline-none item-center justify-between bebas-Neue font-normal text-2xl leading-8	uppercase"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? selectedOption : "Players"}
          <span className={`mt-[2px] ms-[5px]`}>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[120px] bg-white  z-[99999999999999999999]">
        {/* <DropdownMenuItem>
          <button
            // to="/event-details"
            onClick={() => {
              handleOptionClick("Player");
              redirect("#");
            }}
            className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
            role="menuitem"
          >
            Player
          </button>
        </DropdownMenuItem> */}
        <DropdownMenuItem>
          <button
            // to="/event-details"
            onClick={() => {
              handleOptionClick("Leader board");
              redirect("/leader-board");
              NavToggleDrawer();
            }}
            className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
            role="menuitem"
          >
            Leader board
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button
            // to="/event-details"
            onClick={() => {
              handleOptionClick("Individual Players");
              redirect("/players");
              NavToggleDrawer();
            }}
            className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
            role="menuitem"
          >
            Individual Players
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
