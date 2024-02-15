import React from "react";
import "./HeadingOfScore.css";
import { CiShare2 } from "react-icons/ci";
import { FiPrinter } from "react-icons/fi";
import TeamLogo from "../../assets/ScoreTable/logo.png";

const HeadingOfScore = () => {
  return (
    <div>
      <div className="md:flex items-center justify-between">
        <div>
          <h1 className="md:text-[48px] text-[24px] font-normal bebas-Neue leading-5">
            Fotogrit Simplified Box Score
          </h1>
        </div>
        <div className="flex gap-[8px] md:my-[0] my-[16px]">
          <button className=" bg-[#e8e8e8] uppercase sharePrintBtn">
            <CiShare2 />
            Share
          </button>
          <button className=" bg-[#e8e8e8] uppercase sharePrintBtn">
            <FiPrinter />
            Print in Pdf
          </button>
        </div>
      </div>
      {/* Match Summary */}
      <div className="md:grid grid-cols-4 my-[16px]">
        <div className="col-span-1 flex md:justify-start justify-center">
          <img
            className="w-[80px] h-[80px] mx-[12px] my-[12px]"
            src={TeamLogo}
            alt=""
          />
          <img
            className="w-[80px] h-[80px] mx-[12px] my-[12px]"
            src={TeamLogo}
            alt=""
          />
        </div>
        <div className="col-span-3">
          <div>
            <h3 className="match-number">EC2738</h3>
          </div>
          <div className="flex justify-between py-[12px] px-[24px]">
            <h3 className="ms-auto match-detail">Filari Court</h3>
            <h3 className="mx-auto match-detail">Sat, 2 Dec 2023</h3>
            <h3 className="me-auto match-detail">08:00 - 10:00</h3>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="p-[16px]">
        <h3 className="match-subheading text-center p-[16px]">
          Kejuaraan Provinsi Bola Basket DKI Jakarta 2023
        </h3>
        <div className="flex justify-between items-center md:p-[16px]">
          <img className="w-[56px] h-[56px] " src={TeamLogo} alt="" />
          <h3 className="match-headline">Roar vs Warriors - KU 12</h3>
          <img className="w-[56px] h-[56px]" src={TeamLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeadingOfScore;
