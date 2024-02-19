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
    <div
      className="flex flex-col md:flex-row md:gap-0 md:justify-between items-start px-[8px] my-[16px] gap-[15px] 

    "
    >
      <div className="flex md:flex md:flex-row flex-wrap flex-col w-full gap-[16px]">
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
    </div>
  );
};

export default HomeDropDown;
