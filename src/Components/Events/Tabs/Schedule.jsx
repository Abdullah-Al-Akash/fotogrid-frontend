import { IoSearchOutline } from "react-icons/io5";
import AgeGroupDropDown from "../AgeGroupDropDown/AgeGroupDropDown";
import GenderDropDown from "../GenderDropDown/GenderDropDown";

const Schedule = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="">
        <div className="flex flex-col md:flex-row gap-[15px] md:gap-0 md:justify-between md:items-center">
          <div className="flex gap-[16px]">
            <AgeGroupDropDown />
            <GenderDropDown />
          </div>
          <div className="border flex items-center py-[8px] px-[16px] rounded-[4px]">
            <IoSearchOutline className="mt-[2px] me-[8px]" />
            <input
              type="text"
              placeholder="Search here"
              className="outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
