import {
  defaultOptions,
  gameOptions,
  genderOptions,
} from "../../constants/player.constants";
import Dropdown from "../ui/dropdown";
import { FiSearch } from "react-icons/fi";

const PlayerTopbar = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex gap-5 flex-wrap">
        <Dropdown options={gameOptions} label="Select Game" />
        <Dropdown options={defaultOptions} label="Age Group 10" />
        <Dropdown options={genderOptions} label="Select Gender" />
        <Dropdown options={defaultOptions} label="Point Guard" />
        <Dropdown options={defaultOptions} label="KejurprovDKI 2023" />
      </div>
      <div className="h-[46px] relative border-[#CCCCCC] overflow-hidden border-[1px] rounded-[6px] bg-white w-[235px]">
        <FiSearch className=" text-[#636363] text-[18px] font-bold left-[17px] absolute top-1/2 -translate-y-1/2" />
        <input
          className="w-full h-full placeholder:text-[#636363] px-[48px] border-none outline-none"
          placeholder="Search here"
        />
      </div>
    </section>
  );
};

export default PlayerTopbar;
