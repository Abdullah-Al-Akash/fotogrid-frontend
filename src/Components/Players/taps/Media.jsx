import Dropdown from "../../ui/dropdown";
import { defaultOptions } from "../../../constants/player.constants";
import { FiSearch } from "react-icons/fi";
const Media = () => {
  return (
    <div>
      <h2 className="uppercase text-[24px] md:text-[36px] bebas-Neue font-bold leading-[44px] text-[#1A1A1A]">
        Avery Freeman Media Highlights
      </h2>
      <div className="flex  bebas-Neue lg:flex-row flex-col justify-between items-center">
        <div className="flex flex-col md:flex-row items-center bebas-Neue gap-[24px]">
          <div className="flex items-center gap-[24px]">
            <h3 className="text-[24px] leading-[32px]">Age Group</h3>
            <Dropdown options={defaultOptions} label="KU 10" />
          </div>
          <div className="flex items-center gap-[24px]">
            <h3 className="text-[24px] leading-[32px]">Event Group</h3>
            <Dropdown options={defaultOptions} label="Male" />
          </div>
          <div className="flex items-center gap-[24px]">
            <h3 className="text-[24px] leading-[32px]">Month</h3>
            <Dropdown options={defaultOptions} label="January" />
          </div>
        </div>
        <div className="h-[46px] mt-[18px] lg:mt-auto relative border-[#CCCCCC] overflow-hidden border-[1px] rounded-[6px] bg-white w-[90%] md:w-[70%] lg:max-w-[300px]">
          <FiSearch className=" text-[#636363] text-[18px] font-bold left-[17px] absolute top-1/2 -translate-y-1/2" />
          <input
            className="w-full h-full placeholder:text-[#636363] px-[48px] border-none outline-none"
            placeholder="Search here"
          />
        </div>
      </div>
      <div>
        <h3 className="text-[24px] leading-[32px] bebas-Neue mt-[38px]">
          Kejuaraan Provinsi DkI 2023
        </h3>
        <div className="sm:grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-[16px] mt-[16px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => {
            return (
              <article key={item} className="relative my-[18px] md:m-auto">
                {/* card  */}
                <div className="flex items-center gap-[8px] absolute top-[8px] right-[8px]">
                  <button className="px-[12px] py-[8px] rounded-[6px] bg-[#eea74f] text-white text-[12px] leading-[20px] uppercase">
                    January
                  </button>
                  <button className="px-[12px] py-[8px] rounded-[6px] bg-[#eea74f] text-white text-[12px] leading-[20px] uppercase">
                    Age Group
                  </button>
                </div>
                <img
                  className="w-full"
                  src="../../../../public/img.png"
                  alt="player image"
                />
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Media;
