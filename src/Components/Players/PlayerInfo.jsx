import { useState } from "react";
import CareerHighLights from "./CareerHighLights";
import PlayerPersonalInfo from "./PlayerPersonalInfo";
import PlayerTaps from "./PlayerTaps";
import playerImg from "../../assets/Players/player.png";
import img1 from "../../assets/Players/img1.png";
import img2 from "../../assets/Players/img2.png";
import img3 from "../../assets/Players/img3.png";
import img4 from "../../assets/Players/img4.png";
import img5 from "../../assets/Players/img5.png";
import youtube from "../../assets/Players/youtube.png";
const PlayerInfo = () => {
  const [tab, setTab] = useState("tab1");
  const media = [
    {
      image: img1,
      youtube: youtube,
    },
    {
      image: img2,
      youtube: youtube,
    },
    {
      image: img3,
      youtube: youtube,
    },
    {
      image: img4,
      youtube: false,
    },
    {
      image: img5,
      youtube: false,
    },
  ];
  return (
    <>
      <main className="fotogrit-container">
        <section className="border-t-[1px] border-r-[1px]  !px-0  border-[#333333] md:grid md:grid-cols-4 gap-[22px] fotogrit-container">
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
            <div className="flex md:flex-row flex-col justify-between items-center  border-l-[1px] border-b-[1px] border-[#333333] p-[24px]">
              <h2 className="uppercase text-[48px] leading-[60px] bebas-Neue text-[#F2F2F2]">
                Avery FreeMan
              </h2>

              {/* <div className="bg-[#636363] rounded-[6px] text-white montserrat font-bold text-[24px] leading-[32px] py-[8px] px-[18px]">
                <span>KU</span>
                <span className="ml-[9px]">12</span>
                <span className="ml-[7px]">/</span>
                <span className="ml-[4px]">8</span>
                <sup className="ml-[4px]">th</sup>
              </div> */}
            </div>
            <div className="border-l-[1px] border-b-[1px] border-[#333333] bebas-Neue flex md:flex-row flex-col justify-evenly items-center">
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
                <h3 className="text-[48px] leading-[60px] text-[#F2F2F2]">
                  45
                </h3>
                <p className="text-[20px] text-[#ABABAB] leading-[20px]">
                  Total FotogritPins <br /> Earned
                </p>
              </div>
            </div>
            <CareerHighLights />
            {/* Recent in Game Fotogrit Pins  */}
            <div className="p-[24px] border-t-[1px] border-b-[1px] border-l-[1px] border-0 border-[#333333]">
              <h2 className="uppercase text-[24px] leading-[32px] text-white bebas-Neue">
                Media Highlight
              </h2>
              <div className="flex md:flex-row gap-[24px] items-center mt-[6px]">
                {media?.map((card, i) => {
                  const { image, youtube } = card || {};
                  return (
                    <div key={i} className="relative">
                      <div className="">
                        <img
                          src={image}
                          className="w-[120px] h-full rounded-[6px]"
                          alt=""
                        />
                      </div>
                      <div className="w-[32px] h-[32px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                        <img src={youtube} alt="" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-[24px]  bg-[#222222] border-t-[1px] border-b-[1px] border-l-[1px] border-0 border-[#333333]">
              <h2 className="uppercase text-[24px] leading-[32px] text-white bebas-Neue">
                Recent in Game Fotogrit Pins
              </h2>
              <div className="  sm:gap-[18px] sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 ">
                <img
                  className="w-[200px] border-[3px] border-[#636363] rounded-full mx-auto mt-[18px] sm:w-full "
                  src="/pins/Logo1.png"
                  alt="icon"
                />
                <img
                  className="w-[200px] border-[3px] border-[#636363] rounded-full mx-auto mt-[18px] sm:w-full "
                  src="/pins/Logo2.png"
                  alt="icon"
                />
                <img
                  className="w-[200px] border-[3px] border-[#636363] rounded-full mx-auto mt-[18px] sm:w-full "
                  src="/pins/Logo3.png"
                  alt="icon"
                />
                <img
                  className="w-[200px] border-[3px] border-[#636363] rounded-full mx-auto mt-[18px] sm:w-full "
                  src="/pins/Logo4.png"
                  alt="icon"
                />
                <img
                  className="w-[200px] border-[3px] border-[#636363] rounded-full mx-auto mt-[18px] sm:w-full "
                  src="/pins/Logo5.png"
                  alt="icon"
                />
                <img
                  className="w-[200px] border-[3px] border-[#636363] rounded-full mx-auto mt-[18px] sm:w-full "
                  src="/pins/Logo6.png"
                  alt="icon"
                />
                <img
                  className="w-[200px] border-[3px] border-[#636363] rounded-full mx-auto mt-[18px] sm:w-full "
                  src="/pins/Logo7.png"
                  alt="icon"
                />
                <img
                  className="w-[200px] border-[3px] border-[#636363] rounded-full mx-auto mt-[18px] sm:w-full "
                  src="/pins/Logo8.png"
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <PlayerTaps setTab={setTab} tab={tab} />
    </>
  );
};

export default PlayerInfo;
