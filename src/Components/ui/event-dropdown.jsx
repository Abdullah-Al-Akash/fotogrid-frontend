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

export default function EventDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(isOpen);
  };
  const navigate = useNavigate();
  const route = useLocation();
  const redirect = (path) => {
    navigate(path);
  };
  useEffect(() => {
    if (
      route.pathname.split("/")[1] === "events" ||
      route.pathname.split("/")[1] == "event-details"
    ) {
      return;
    } else {
      setSelectedOption("");
    }
  }, [route]);
  console.log(route.pathname.split("/")[1]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex outline-none item-center justify-between bebas-Neue font-normal text-2xl leading-8	uppercase"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? selectedOption : "Event"}
          <span className={`mt-[2px] ms-[5px]`}>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[120px] bg-white">
        <DropdownMenuItem key="1">
          <button
            onClick={() => {
              handleOptionClick("Event list");
              redirect("/events");
            }}
            className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
            role="menuitem"
          >
            Event list
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem key="2">
          <button
            // to="/event-details"
            onClick={() => {
              handleOptionClick("Event Details");
              redirect("/event-details");
            }}
            className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
            role="menuitem"
          >
            Event Details
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
