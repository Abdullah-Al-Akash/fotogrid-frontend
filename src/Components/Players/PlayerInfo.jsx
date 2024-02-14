import CareerHighLights from "./CareerHighLights";
import PlayerPersonalInfo from "./PlayerPersonalInfo";

const PlayerInfo = () => {
  return (
    <section className="border-t-[1px]  border-[#333333] md:grid md:grid-cols-4 gap-[22px]">
      <div className="bg-[#242424] rounded-[6px] mt-[24px]">
        <div className="p-[28px]">
          <img
            className="max-w-[272px] max-h-[272px] h-full w-full rounded-full overflow-hidden"
            src="../../../public/player.png"
            alt=""
          />
        </div>
        <PlayerPersonalInfo />
      </div>
      <div className="col-span-3">
        <div className="flex justify-between items-center  border-x-[1px] border-b-[1px] border-[#333333] p-[24px]">
          <h2 className="uppercase text-[48px] leading-[60px] bebas-Neue text-[#F2F2F2]">
            Avery FreeMan
          </h2>
          <div className="flex items-center gap-[37px] ">
            <p className="bebas-Neue text-[20px] font-bold text-[#ABABAB]">
              Age Group
            </p>
            <div className="bg-[#636363] rounded-[6px] text-white montserrat font-bold text-[24px] leading-[32px] py-[8px] px-[18px]">
              <span>KU</span>
              <span className="ml-[9px]">12</span>
              <span className="ml-[7px]">/</span>
              <span className="ml-[4px]">8</span>
              <sup className="ml-[4px]">th</sup>
            </div>
          </div>
        </div>
        <div className="border-x-[1px] border-b-[1px] border-[#333333] bebas-Neue flex items-center">
          <div className="px-[30px] py-[18px] flex gap-[6px] items-center ">
            <img
              className="w-[28px] h-[28px]"
              src="../../../public/ball.png"
              alt="ball"
            />
            <h3 className="text-[48px] leading-[60px] text-[#F2F2F2]">6</h3>
            <p className="text-[20px] text-[#ABABAB] leading-[20px]">
              Recorded Events <br /> Played
            </p>
          </div>
          <hr className=" w-[1px] h-[60px] bg-[#4A4A4A] " />
          <div className="px-[30px] py-[18px] flex gap-[6px] items-center  ">
            <img
              className="w-[28px] h-[28px]"
              src="../../../public/cup.png"
              alt="cup"
            />
            <h3 className="text-[48px] leading-[60px] text-[#F2F2F2]">45</h3>
            <p className="text-[20px] text-[#ABABAB] leading-[20px]">
              Total FotogritPins <br /> Earned
            </p>
          </div>
        </div>
        <CareerHighLights />
      </div>
    </section>
  );
};

export default PlayerInfo;
