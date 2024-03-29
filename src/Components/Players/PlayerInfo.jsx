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
import youtubeImage from "../../assets/Players/youtube.png";
const PlayerInfo = () => {
  const [tab, setTab] = useState("tab1");
  const media = [
    {
      image: img1,
      youtube: true,
    },
    {
      image: img2,
      youtube: true,
    },
    {
      image: img3,
      youtube: true,
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
        <section className="sm:border-t-[1px] sm:border-r-[1px]  !px-0  border-[#333333] md:grid md:grid-cols-4 gap-[22px] fotogrit-container">
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
            <div className="flex md:flex-row flex-col justify-between items-start md:items-center w-full  sm:border-l-[1px] border-b-[1px] border-[#333333] p-[24px] px-[0px] sm:px-[24px]">
              <h2 className="uppercase text-[48px] leading-[60px] bebas-Neue text-[#F2F2F2]">
                Avery FreeMan
              </h2>

              <div className="bg-[#636363] rounded-[6px] text-white montserrat font-bold text-[24px] leading-[32px] py-[8px] px-[18px]">
                <span>KU</span>
                <span className="ml-[9px]">12</span>
              </div>
            </div>
            {/* Updated */}
            <div className="sm:border-l-[1px] border-b-[1px] border-[#333333] bebas-Neue flex flex-row  justify-around items-start sm:items-center">
              <div className="sm:px-[30px] py-[18px] flex gap-[6px] items-center md:w-auto w-[50%] border-r md:border-r-0 border-[#4A4A4A]">
                <img className="w-[28px] h-[28px]" src="/ball.png" alt="ball" />
                <h3 className="text-[48px] leading-[60px]  text-[#F2F2F2]">
                  6
                </h3>
                <p className="text-[14px] sm:text-[20px] text-[#ABABAB] leading-[20px]">
                  Recorded Events <br /> Played
                </p>
              </div>
              <span className="w-[100%] hidden md:block h-[1px] md:w-[1px] md:h-[60px] md:bg-[#4A4A4A]  text-[#4A4AA]" />
              <div className=" sm:ps-[30px] sm:pe-[30px] ps-[10px] py-[18px] flex gap-[6px] items-center w-[50%] m md:w-auto mx-auto sm:mx-0">
                <img className="w-[28px] h-[28px]" src="/cup.png" alt="cup" />
                <h3 className="text-[48px] leading-[60px]  text-[#F2F2F2]">
                  6
                </h3>
                <p className="text-[14px] sm:text-[20px] text-[#ABABAB] leading-[20px]">
                  Total FotogritPins <br /> Earned
                </p>
              </div>
            </div>
            <CareerHighLights />
            {/* Recent in Game Fotogrit Pins  */}
            <div className="sm:p-[24px] sm:border-t-[1px] sm:border-b-[1px] sm:border-l-[1px] border-0 border-[#333333]">
              <h2 className="uppercase text-[24px] leading-[32px] text-white bebas-Neue py-[6px]">
                Media Highlight 21
              </h2>
              <div className="md:flex grid grid-cols-3 md:flex-row  gap-[24px] items-center sm:mt-[6px]  w-full sm:w-auto">
                {media?.map((card, i) => {
                  const { image, youtube } = card || {};
                  return (
                    <div key={i} className="relative w-full sm:w-auto">
                      <div className="w-full sm:w-auto">
                        <img
                          src={image}
                          className="sm:w-[120px] w-full h-full rounded-[6px]"
                          alt=""
                        />
                      </div>
                      {youtube == true ? (
                        <div className="sm:w-[32px]  sm:h-[32px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer">
                          <img
                            className="h-full w-full"
                            src={youtubeImage}
                            alt=""
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-[24px] mt-[15px] sm:mt-[0px] bg-[#222222] sm:border-t-[1px] sm:border-b-[1px] sm:border-l-[1px] border-0 border-[#333333]">
              <h2 className="uppercase text-[24px] leading-[32px] text-white bebas-Neue">
                Fotogrit Pins Highlight
              </h2>
              <div className="gap-[18px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 ">
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
