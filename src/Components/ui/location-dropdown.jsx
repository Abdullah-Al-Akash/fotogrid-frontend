/* eslint-disable react/prop-types */

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./drop-down";
import { useNavigate } from "react-router-dom";

export default function LocationDropdown() {
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex outline-none item-center justify-between bebas-Neue font-normal text-2xl leading-8	uppercase"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? selectedOption : "Location"}
          <span className={`mt-[2px] ms-[5px]`}>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[120px] bg-white">
        <DropdownMenuItem>
          <button
            onClick={() => {
              handleOptionClick("Location 1");
              redirect("#");
            }}
            className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
            role="menuitem"
          >
            Location 1
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button
            onClick={() => {
              handleOptionClick("Location 2");
              redirect("#");
            }}
            className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
            role="menuitem"
          >
            Location 2
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
