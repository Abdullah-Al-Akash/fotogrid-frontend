/* eslint-disable react/prop-types */

import PlayerDropdownTap from "./playerDropdownTap";
import FotogritPins from "./taps/FotogritPins";
import Media from "./taps/Media";
import SocialMedia from "./taps/SocialMedia";
import Stats from "./taps/Stats";

/* eslint-disable no-unused-vars */
const PlayerTaps = ({ tab, setTab }) => {
  return (
    <div className="mt-[16px]">
      <div className="bg-[#F2F2F2]  pb-[84px] w-full">
        <div className="">
          <div className="border-b">
            <div className="bg-[#FBFBFB]  rounded-t-[8px]">
              <div className="md:flex container hidden items-start gap-[16px] px-[24px] text-[20px] text-[#7D7D7D] rubik ">
                <p
                  onClick={() => setTab("tab1")}
                  className={`py-[12px] px-[20px] cursor-pointer duration-200   ${
                    tab === "tab1"
                      ? "text-[#A46E40] border-b border-[#A46E40] font-medium"
                      : "border-b border-transparent font-medium"
                  }`}
                >
                  Stats
                </p>
                <p
                  onClick={() => setTab("tab2")}
                  className={`py-[12px] px-[20px] cursor-pointer duration-200  ${
                    tab === "tab2"
                      ? "text-[#A46E40] border-b border-[#A46E40] font-medium"
                      : "border-b border-transparent font-medium"
                  }`}
                >
                  Media
                </p>
                <p
                  onClick={() => setTab("tab3")}
                  className={`py-[12px] px-[20px] cursor-pointer duration-200  ${
                    tab === "tab3"
                      ? "text-[#A46E40] border-b border-[#A46E40] font-medium"
                      : "border-b border-transparent font-medium"
                  }`}
                >
                  Fotogrit Pins
                </p>
                <p
                  onClick={() => setTab("tab4")}
                  className={`py-[12px] px-[20px] cursor-pointer duration-200 ${
                    tab === "tab4"
                      ? "text-[#A46E40] border-b border-[#A46E40] font-medium"
                      : "border-b border-transparent font-medium"
                  }`}
                >
                  Social Media
                </p>
              </div>
              <div className="md:hidden ms-3 ">
                <PlayerDropdownTap tab={tab} setTab={setTab} />
              </div>
            </div>
          </div>
          <div className="mt-[15px]  rounded-[8px] px-[24px] container">
            {tab === "tab1" ? (
              <Stats />
            ) : tab === "tab2" ? (
              <Media />
            ) : tab === "tab3" ? (
              <FotogritPins />
            ) : tab === "tab4" ? (
              <SocialMedia />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerTaps;
