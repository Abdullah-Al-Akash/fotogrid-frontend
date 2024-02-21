/* eslint-disable react/prop-types */

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./drop-down";

export default function Dropdown({ options, label, white }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full sm:w-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={`h-[48px] rounded-[6px]  border-[#E8E8E8] border shadow-sm py-[8px] px-[16px] ${
              white === true ? "bg-[#fff]" : "bg-[#F2F2F2]"
            } text-sm text-gray-700  flex items-center justify-between text-[16px] font-bold outline-none montserrat w-full sm:w-auto`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption ? selectedOption : label}
            <span className={`mt-[2px] ms-[26px]`}>
              {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[120px] bg-white">
          <DropdownMenuGroup>
            {Array.isArray(options) &&
              options?.map((item, key) => {
                return (
                  <DropdownMenuItem
                    key={key}
                    onClick={() => handleOptionClick(item.value)}
                    className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 cursor-pointer"
                    role="menuitem"
                  >
                    {item.label}
                  </DropdownMenuItem>
                );
              })}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
