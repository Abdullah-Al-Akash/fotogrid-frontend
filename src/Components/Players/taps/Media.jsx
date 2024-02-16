import Dropdown from "../../ui/dropdown";
import { defaultOptions } from "../../../constants/player.constants";
import { FiSearch } from "react-icons/fi";
const Media = () => {
  const players = [
    { color: "#EEA74F", color2: "#C29637" },
    { color: "#EEA74F", color2: "#419066" },
    { color: "#EEA74F", color2: "#419066" },
    { color: "#EEA74F", color2: "#C29637" },
    { color: "#EEA74F", color2: "#C29637" },
    { color: "#EEA74F", color2: "#C29637" },
    { color: "#EEA74F", color2: "#C29637" },
    { color: "#EEA74F", color2: "#EEA74F" },
    { color: "#EEA74F", color2: "#C29637" },
    { color: "#EEA74F", color2: "#C29637" },
    { color: "#EEA74F", color2: "#419066" },
    { color: "#EEA74F", color2: "#419066" },
    { color: "#EEA74F", color2: "#C29637" },
    { color: "#EEA74F", color2: "#C29637" },
    { color: "#EEA74F", color2: "#C29637" },
  ];

  return (
    <div>
      <div className="py-[24px]">
        <h2 className="uppercase text-[24px] md:text-[36px] bebas-Neue bebas-Neue leading-[44px] text-[#1A1A1A]">
          Avery Freeman Media Highlights
        </h2>
        <div className="flex  bebas-Neue lg:flex-row flex-col justify-between items-center">
          <div className="flex flex-col md:flex-row items-center bebas-Neue gap-[24px] py-[8px] mt-[8px]">
            <Dropdown options={defaultOptions} label="KU 10" />
            <Dropdown options={defaultOptions} label="Male" />
            <Dropdown options={defaultOptions} label="January" />
          </div>
          <div className="h-[46px]  lg:mt-auto relative border-[#CCCCCC] overflow-hidden border-[1px] rounded-[6px] bg-white w-[90%] md:w-[70%] lg:max-w-[300px]">
            <FiSearch className=" text-[#636363] text-[18px]  left-[17px] absolute top-1/2 -translate-y-1/2" />
            <input
              className="w-full h-full placeholder:text-[#636363] px-[48px] border-none outline-none"
              placeholder="Search here"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[24px] leading-[32px] bebas-Neue ">
          Kejuaraan Provinsi DkI 2023
        </h3>
        <div className="sm:grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-[16px] mt-[16px]">
          {players.map((item, key) => {
            return (
              <article key={key} className="relative  w-full">
                {/* card  */}
                <div className="flex items-center gap-[8px] absolute top-[8px] right-[8px]">
                  <button
                    style={{ background: `${item.color}` }}
                    className={`px-[12px] py-[8px] rounded-[6px]  text-white text-[12px] leading-[20px] uppercase`}
                  >
                    January
                  </button>
                  <button
                    style={{ background: `${item.color2}` }}
                    className={`px-[12px] py-[8px] rounded-[6px]  text-white text-[12px] leading-[20px] uppercase`}
                  >
                    Age Group
                  </button>
                </div>
                <img className="w-full" src="/img.png" alt="player image" />
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Media;
