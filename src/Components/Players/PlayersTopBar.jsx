import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const PlayersTopBar = () => {
  const navigate = useNavigate();
  return (
    <section className="flex container md:flex-row flex-col md:items-center md:justify-between py-[28px] px-[8px]">
      <Link
        onClick={() => navigate(-1)}
        className="text-[#7D7D7D]  flex items-center gap-[10px] text-[20px] leading-[28px]"
        to="#"
      >
        <IoIosArrowBack /> <span>Back</span>
      </Link>
      <div className="h-[46px] mt-[18px] md:mt-auto relative border-[#4A4A4A] overflow-hidden border-[1px] rounded-[6px] bg-[#242424] w-full md:w-[50%]   lg:max-w-[500px]">
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
