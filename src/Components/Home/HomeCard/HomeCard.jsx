import React from "react";
import "./HomeCard.css";
import cardImg from "../../../assets/Home/card.png";

const HomeCard = () => {
  return (
    <div className="md:w-[680px] p-[16px] rounded-2xl bg-[#FFF]">
      <div className="md:flex items-center">
        <div className="md:w-[430px]">
          <h1 className="headline">Kejuaraan Provinsi DKI 2023</h1>
        </div>
        <div className="flex">
          <h3 className="sub-heading border-r-2 pe-2">12 January 2024  </h3>
          <h3 className="sub-heading border-r-2 pe-2">  KU 10 </h3>
          <h3 className="sub-heading ps-2">Girl</h3>
        </div>
      </div>
      <div className="py-[5px]">
        <img
          className="md:w-[648px] md:h-[346px] rounded-sm"
          src={cardImg}
          alt=""
        />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HomeCard;
