import { useState } from "react";
import CareerHighLights from "./CareerHighLights";
import PlayerPersonalInfo from "./PlayerPersonalInfo";
import PlayerTaps from "./PlayerTaps";
import playerImg from "../../assets/Players/player.png";

const PlayerInfo = () => {
  const [tab, setTab] = useState("tab1");
  return (
    <>
      <section className="border-t-[1px] container  border-[#333333] md:grid md:grid-cols-4 gap-[22px]">
        <div className="bg-[#242424] h-[570px] rounded-[6px] mt-[24px]">
          <div className="p-[28px]">
            <img
              className="max-w-[272px] mx-auo max-h-[272px] h-full w-full rounded-full overflow-hidden"
              src={playerImg}
              alt=""
            />
          </div>
          <PlayerPersonalInfo />
        </div>
        <div className="col-span-3">
          <div className="flex md:flex-row flex-col justify-between items-center  border-x-[1px] border-b-[1px] border-[#333333] p-[24px]">
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
          <div className="border-x-[1px] border-b-[1px] border-[#333333] bebas-Neue flex md:flex-row flex-col items-center">
            <div className="px-[30px] py-[18px] flex gap-[6px] items-center ">
              <img className="w-[28px] h-[28px]" src="/ball.png" alt="ball" />
              <h3 className="text-[48px] leading-[60px] text-[#F2F2F2]">6</h3>
              <p className="text-[20px] text-[#ABABAB] leading-[20px]">
                Recorded Events <br /> Played
              </p>
            </div>
            <hr className=" w-[30%] h-[1px] md:w-[1px] md:h-[60px] bg-[#4A4A4A] " />
            <div className="px-[30px] py-[18px] flex gap-[6px] items-center  ">
              <img className="w-[28px] h-[28px]" src="/cup.png" alt="cup" />
              <h3 className="text-[48px] leading-[60px] text-[#F2F2F2]">45</h3>
              <p className="text-[20px] text-[#ABABAB] leading-[20px]">
                Total FotogritPins <br /> Earned
              </p>
            </div>
          </div>
          <CareerHighLights />
          {/* Recent in Game Fotogrit Pins  */}

          <div className="p-[24px]  bg-[#222222] border-[1px] border-[#333333]">
            <h2 className="uppercase text-[24px] leading-[32px] text-white font-bold">
              Recent in Game Fotogrit Pins
            </h2>
            <div className="mt-[24px]  sm:gap-[18px] sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 ">
              <img
                className="w-[200px] mx-auto mt-[18px] sm:w-full "
                src="/Logo (3).png"
                alt="icon"
              />
              <img
                className="w-[200px] mx-auto mt-[18px] sm:w-full "
                src="/Logo (4).png"
                alt="icon"
              />
              <img
                className="w-[200px] mx-auto mt-[18px] sm:w-full "
                src="/Logo (5).png"
                alt="icon"
              />
              <img
                className="w-[200px] mx-auto mt-[18px] sm:w-full "
                src="/Logo (6).png"
                alt="icon"
              />
              <img
                className="w-[200px] mx-auto mt-[18px] sm:w-full "
                src="/Logo (7).png"
                alt="icon"
              />
              <img
                className="w-[200px] mx-auto mt-[18px] sm:w-full "
                src="/Logo (8).png"
                alt="icon"
              />
              <img
                className="w-[200px] mx-auto mt-[18px] sm:w-full "
                src="/Logo (9).png"
                alt="icon"
              />
              <img
                className="w-[200px] mx-auto mt-[18px] sm:w-full "
                src="/Logo (10).png"
                alt="icon"
              />
            </div>
          </div>
        </div>
      </section>
      <PlayerTaps setTab={setTab} tab={tab} />
    </>
  );
};

export default PlayerInfo;
