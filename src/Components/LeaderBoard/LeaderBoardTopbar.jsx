import {
  gameOptions,
  genderOptions,
  boyAndGirl,
  PointGuardOption,
  KejurprovDKIOption,
} from "../../constants/player.constants";
import Filter from "../Players/Filter";
import Dropdown from "../ui/dropdown";
import { FiSearch } from "react-icons/fi";

const PlayerTopbar = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-start gap-[16px] w-full">
      <div className="flex flex-col sm:flex-row gap-5 flex-wrap w-full">
        <Dropdown options={gameOptions} label="Basketball" />
        <Dropdown options={boyAndGirl} label="KU 12 Girl" />
        <Dropdown options={genderOptions} label="Male" />
        <Dropdown options={PointGuardOption} label="Point Guard" />
        <Dropdown options={KejurprovDKIOption} label="KejurprovDKI 2023" />
      </div>
      <div className="flex items-center gap-[8px] w-full md:w-auto">
        <div className="h-[46px] relative border-[#CCCCCC] overflow-hidden border-[1px] rounded-[6px] bg-white sm:w-[60%] lg:w-[235px] w-[calc(100%-58px)] ">
          <FiSearch className=" text-[#636363] text-[18px] left-[17px] absolute top-1/2 -translate-y-1/2" />
          <input
            className="w-full h-full placeholder:text-[#636363] px-[48px] border-none outline-none"
            placeholder="Search here"
          />
        </div>
        <Filter></Filter>
      </div>
    </section>
  );
};

export default PlayerTopbar;
