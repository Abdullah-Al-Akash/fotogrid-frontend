import { IoSearchOutline } from "react-icons/io5";
import Dropdown from "../../ui/dropdown";
import {
  HomeGameOptions,
  HomeJakartaOption,
  HomeKejuaraanProvinseDKI2023,
  HomeKu10MixGirl,
  HomeMonth,
} from "../../../constants/player.constants";
import Filter from "../../Players/Filter";
import { IoMdClose } from "react-icons/io";

const HomeDropDown = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-0 md:justify-between items-start sm:px-[8px] my-[16px] gap-[15px]">
      <div className="hidden sm:flex flex-row flex-wrap w-full gap-[16px] sm:w-auto">
        <Dropdown white={true} options={HomeGameOptions} label="Basketball" />
        <Dropdown white={true} options={HomeMonth} label="January 2024" />
        <Dropdown
          white={true}
          options={HomeKejuaraanProvinseDKI2023}
          label="kejuaraan Provinse DKI 2023"
        />
        <Dropdown white={true} options={HomeKu10MixGirl} label="KU 10 Mix" />
        <Dropdown white={true} options={HomeJakartaOption} label="Jakarta" />
      </div>
      <div className="w-full md:w-auto flex flex-col gap-[16px]">
        <div className="flex items-center gap-[8px] w-full md:w-auto ">
          <div className="border w-[calc(100%-58px)]  flex items-center py-[8px] px-[16px] rounded-[4px] bg-white">
            {/*  */}
            <IoSearchOutline className="mt-[2px] me-[8px]" />
            <input
              type="text"
              placeholder="Search here"
              className="outline-none bg-transparent"
            />
          </div>
          <Filter></Filter>
        </div>
        <div className="flex items-center gap-[10px]  rubik text-[#7d7d7d]">
          <p className="flex items-center gap-[5px] text-[14px]  px-[12px] py-[8px] bg-[#e3e3e3] rounded-full">
            Jakarta <IoMdClose className="" />
          </p>
          <p className="flex items-center gap-[5px] text-[14px]  px-[12px] py-[8px] bg-[#e3e3e3] rounded-full">
            January 2024
            <IoMdClose className="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDropDown;
