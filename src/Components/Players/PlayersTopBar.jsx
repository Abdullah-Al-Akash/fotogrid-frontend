import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const PlayersTopBar = () => {
  return (
    <section className="flex items-center justify-between py-[28px] px-[8px]">
      <Link
        className="text-[#7D7D7D] flex items-center gap-[10px] text-[20px] leading-[28px]"
        to="#"
      >
        <IoIosArrowBack /> <span>Back</span>
      </Link>
      <div className="h-[46px] relative border-[#4A4A4A] overflow-hidden border-[1px] rounded-[6px] bg-[#242424] w-full max-w-[500px]">
        <FiSearch className=" text-[#636363] text-[18px] font-bold left-[17px] absolute top-1/2 -translate-y-1/2" />
        <input
          className="w-full text-[#7D7D7D] bg-transparent h-full placeholder:text-[#7D7D7D] px-[48px] border-none outline-none"
          placeholder="Search Individual Player"
        />
      </div>
    </section>
  );
};

export default PlayersTopBar;
