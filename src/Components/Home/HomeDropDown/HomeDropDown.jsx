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

const HomeDropDown = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-0 md:justify-between items-start px-[8px] my-[16px]">
      <div className="flex md:flex md:flex-row flex-wrap flex-col w-full gap-[16px]">
        <Dropdown options={HomeGameOptions} label="Basketball" />
        <Dropdown options={HomeMonth} label="January 2024" />
        <Dropdown
          options={HomeKejuaraanProvinseDKI2023}
          label="kejuaraan Provinse DKI 2023"
        />
        <Dropdown options={HomeKu10MixGirl} label="KU 10 Mix" />
        <Dropdown options={HomeJakartaOption} label="Jakarta" />
      </div>
      <div className="flex items-center gap-[8px] mt-[16px] sm:mt-[3px]">
        <div className="border w-[203px] flex items-center bg-white py-[8px] px-[16px] rounded-[4px]">
          <IoSearchOutline className="mt-[2px] me-[8px]" />
          <input
            type="text"
            placeholder="Search here"
            className="outline-none bg-transparent"
            size="15"
          />
        </div>
        <Filter></Filter>
      </div>
    </div>
  );
};

export default HomeDropDown;
