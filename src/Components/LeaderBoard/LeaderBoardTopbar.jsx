import {
  gameOptions,
  genderOptions,
  boyAndGirl,
  PointGuardOption,
  KejurprovDKIOption,
} from "../../constants/player.constants";
import Dropdown from "../ui/dropdown";
import { FiSearch } from "react-icons/fi";

const PlayerTopbar = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center">
      <div className="flex gap-5 flex-wrap">
        <Dropdown options={gameOptions} label="Basketball" />
        <Dropdown options={boyAndGirl} label="KU 12 Girl" />
        <Dropdown options={genderOptions} label="Male" />
        <Dropdown options={PointGuardOption} label="Point Guard" />
        <Dropdown options={KejurprovDKIOption} label="KejurprovDKI 2023" />
      </div>
      <div className="h-[46px] relative border-[#CCCCCC] overflow-hidden mt-[18px] lg:mt-auto border-[1px] rounded-[6px] bg-white w-full sm:w-[60%] lg:w-[235px]">
        <FiSearch className=" text-[#636363] text-[18px] left-[17px] absolute top-1/2 -translate-y-1/2" />
        <input
          className="w-full h-full placeholder:text-[#636363] px-[48px] border-none outline-none"
          placeholder="Search here"
        />
      </div>
    </section>
  );
};

export default PlayerTopbar;
