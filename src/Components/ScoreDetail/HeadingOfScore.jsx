import "./HeadingOfScore.css";
import { CiShare2 } from "react-icons/ci";
import { FiPrinter } from "react-icons/fi";
import TeamLogo from "../../assets/ScoreTable/logo.png";
import Dropdown from "../ui/dropdown";
import {
  HomeQ3,
  ScoreRoarVsWarriosKU12PA,
} from "../../constants/player.constants";

const HeadingOfScore = () => {
  return (
    <div>
      <div className="sm:hidden flex flex-col gap-[12px] my-[16px]">
        <Dropdown
          white={true}
          options={ScoreRoarVsWarriosKU12PA}
          label="Roar vs Warrios KU 12 PA"
        />
        <Dropdown white={true} options={HomeQ3} label="Q3" />
      </div>
      <div className="md:flex items-center justify-between">
        <div className="flex sm:block justify-start items-center gap-[6px]">
          <div className="flex sm:hidden items-center gap-[8px]">
            <img
              className="w-[20px] h-[20px]"
              src={TeamLogo}
              alt=""
            />
            <img
              className="w-[20px] h-[20px]"
              src={TeamLogo}
              alt=""
            />
          </div>
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
        <div className="col-span-1 hidden sm:flex md:justify-start justify-between">
          <img
            className="w-[56px] h-[56px] mx-[12px] my-[12px]"
            src={TeamLogo}
            alt=""
          />
          <img
            className="w-[56px] h-[56px] mx-[12px] my-[12px]"
            src={TeamLogo}
            alt=""
          />
        </div>
        <div className="col-span-3">
          <div>
            <h3 className="match-number">EC2738</h3>
          </div>
          <div className="flex flex-col md:flex-row py-[12px] px-[24px]">
            <h3 className="md:ms-auto mx-auto match-detail">Filari Court</h3>
            <h3 className="md:mx-auto mx-auto match-detail">Sat, 2 Dec 2023</h3>
            <h3 className="md:me-auto mx-auto match-detail">08:00 - 10:00</h3>
          </div>
        </div>
      </div>
      {/*  */}
      <hr />
      <div className="p-[16px]">
        <h3 className="match-subheading text-center p-[16px] text-[20px] md:text-[24px]">
          Kejuaraan Provinsi Bola Basket DKI Jakarta 2023
        </h3>
        <div className="flex justify-between items-center md:p-[16px] gap-[8px]">
          <img className="w-[80px] h-[80px]" src={TeamLogo} alt="" />
          <h3 className="match-headline md:text-[36px] text-[18px] text-center md:text-start">
            Roar vs Warriors - KU 12
          </h3>
          <img className="w-[80px] h-[80px]" src={TeamLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeadingOfScore;
