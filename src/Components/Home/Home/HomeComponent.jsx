import React from "react";
import HomeDropDown from "../HomeDropDown/HomeDropDown";
import HomeCard from "../HomeCard/HomeCard";
const HomeComponent = () => {
  return (
    <div className="bg-[#F2F2F2] border-[#E8E8E8] md:px-[64px]">
      <HomeDropDown></HomeDropDown>
      <div>
        <HomeCard></HomeCard>
      </div>
    </div>
  );
};

export default HomeComponent;
