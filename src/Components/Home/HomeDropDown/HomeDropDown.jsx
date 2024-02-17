import BasketDropDown from "./BasketDropDown";
import DateDropDown from "./DateDropDown";
import TournamentDropdown from "./TournamentDropdown";
import AgeDropDown from "./AgeDropDown";
import { IoSearchOutline } from "react-icons/io5";
import LocationDropDown from "./LocationDropDown";

const HomeDropDown = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-0 md:justify-between md:items-center px-[8px] my-[16px] flex-wrap">
      <div className="flex-1 md:flex md:flex-row flex-wrap flex-col gap-[16px]">
        <BasketDropDown />
        <DateDropDown />
        <TournamentDropdown></TournamentDropdown>
        <AgeDropDown></AgeDropDown>
        <LocationDropDown />
      </div>
      <div className="border flex items-center bg-white py-[8px] px-[16px] rounded-[4px]">
        <IoSearchOutline className="mt-[2px] me-[8px]" />
        <input type="text" placeholder="Search here" className="outline-none" />
      </div>
    </div>
  );
};

export default HomeDropDown;
