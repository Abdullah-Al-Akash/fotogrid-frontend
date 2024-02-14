/* eslint-disable react/prop-types */

import ClubAndPlayers from "./Tabs/ClubAndPlayers";
import DropDownTab from "./Tabs/DropDownTab";
import EventInfoAndNews from "./Tabs/EventInfoAndNews";
import HallOfDonors from "./Tabs/HallOfDonors";
import ResultsAndStanding from "./Tabs/ResultsAndStanding";
import Schedule from "./Tabs/Schedule";

/* eslint-disable no-unused-vars */
const EventTabs = ({ tab, setTab }) => {
  return (
    <div className="mt-[16px]">
      <div className="bg-white rounded-[8px] pb-[84px]">
        <div className="border-b">
          <div className="bg-[#FBFBFB]  rounded-t-[8px]">
            <div className="md:flex hidden items-start gap-[16px] px-[24px] text-[20px] text-[#7D7D7D] rubik ">
              <p
                onClick={() => setTab("tab1")}
                className={`py-[12px] px-[20px] cursor-pointer duration-200   ${
                  tab === "tab1"  ?
                  "text-[#A46E40] border-b border-[#A46E40] font-medium" : "border-b border-transparent font-medium"
                }`}
              >
                Results & Standing
              </p>
              <p
                onClick={() => setTab("tab2")}
                className={`py-[12px] px-[20px] cursor-pointer duration-200  ${
                  tab === "tab2"  ?
                  "text-[#A46E40] border-b border-[#A46E40] font-medium" : "border-b border-transparent font-medium"
                }`}
              >
                Event Info & News
              </p>
              <p
                onClick={() => setTab("tab3")}
                className={`py-[12px] px-[20px] cursor-pointer duration-200  ${
                  tab === "tab3" ?
                  "text-[#A46E40] border-b border-[#A46E40] font-medium" : "border-b border-transparent font-medium"
                }`}
              >
                Club & Players
              </p>
              <p
                onClick={() => setTab("tab4")}
                className={`py-[12px] px-[20px] cursor-pointer duration-200 ${
                  tab === "tab4" ?
                  "text-[#A46E40] border-b border-[#A46E40] font-medium" : "border-b border-transparent font-medium"
                }`}
              >
                Schedule
              </p>
              <p
                onClick={() => setTab("tab5")}
                className={`py-[12px] px-[20px] cursor-pointer duration-200 ${
                  tab === "tab5" ?
                  "text-[#A46E40] border-b border-[#A46E40] font-medium" : "border-b border-transparent font-medium"
                }`}
              >
                Hall of Donors
              </p>
            </div>
            <div className="md:hidden ms-3 ">
              <DropDownTab tab={tab} setTab={setTab} />
            </div>
          </div>
        </div>
        <div className="mt-[15px] bg-white rounded-[8px] px-[24px]">
          {tab === "tab1" ? (
            <ResultsAndStanding />
          ) : tab === "tab2" ? (
            <EventInfoAndNews />
          ) : tab === "tab3" ? (
            <ClubAndPlayers />
          ) : tab === "tab4" ? (
            <Schedule />
          ) : (
            <HallOfDonors />
          )}
        </div>
      </div>
    </div>
  );
};

export default EventTabs;
