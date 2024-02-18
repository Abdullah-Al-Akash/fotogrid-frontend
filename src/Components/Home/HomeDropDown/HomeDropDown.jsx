import { IoSearchOutline } from "react-icons/io5";
import Dropdown from "../../ui/dropdown";
import {
  HomeGameOptions,
  HomeJakartaOption,
  HomeKejuaraanProvinseDKI2023,
  HomeKu10MixGirl,
  HomeMonth,
} from "../../../constants/player.constants";

const HomeDropDown = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-0 md:justify-between md:items-center px-[8px] my-[16px] flex-wrap">
      <div className="flex md:flex md:flex-row flex-wrap flex-col gap-[16px]">
        <Dropdown options={HomeGameOptions} label="Basketball" />
        <Dropdown options={HomeMonth} label="January 2024" />
        <Dropdown
          options={HomeKejuaraanProvinseDKI2023}
          label="kejuaraan Provinse DKI 2023"
        />
        <Dropdown options={HomeKu10MixGirl} label="KU 10 Mix" />
        <Dropdown options={HomeJakartaOption} label="Jakarta" />
      </div>
      <div className="border flex items-center bg-white py-[8px] px-[16px] rounded-[4px] mt-[16px] lg:mt-[0px]">
        <IoSearchOutline className="mt-[2px] me-[8px]" />
        <input type="text" placeholder="Search here" className="outline-none" />
      </div>
    </div>
  );
};

export default HomeDropDown;
