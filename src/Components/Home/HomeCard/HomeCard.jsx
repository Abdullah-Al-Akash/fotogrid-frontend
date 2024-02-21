import "./HomeCard.css";
import cardImg from "../../../assets/Home/card.png";
import logo1 from "../../../assets/Home/logo1.png";
import logo2 from "../../../assets/Home/logo2.png";
import { SlControlPlay } from "react-icons/sl";
import { Link } from "react-router-dom";
import cardLogo from "../../../../public/cardlogo.png";

const HomeCard = () => {
  return (
    <div className="w-full p-[16px] rounded-2xl bg-[#FFF]">
      <div className="lg:flex items-center justify-between">
        <div className="">
          <h1 className="headline leading-[20px] md:leading-[40px] text-[25px] md:text-[32px]">
            DD Kejuaraan Provinsi DKI 2023
          </h1>
        </div>
        <div className="flex items-center gap-[12px] md:text-[20px]">
          <h3 className="sub-heading border-r-2 pe-2">12 January 2024 </h3>
          <h3 className="sub-heading border-r-2 pe-2"> KU 10 </h3>
          <h3 className="sub-heading">Girl</h3>
        </div>
      </div>
      <div className="">
        <div className="relative w-full">
          <div className="py-[5px]">
            <img
              className="w-full md:h-[346px] rounded-sm"
              src={cardImg}
              alt=""
            />
          </div>
          <div
            style={{
              borderRadius: "4px",
              border: "1px solid rgb(118, 68, 60)",
              background: "rgba(45, 42, 40, 0.20)",
              backdropFilter: "blur(1px)",
            }}
            className="shadow-md md:w-[160px] w-[120px] px-[12px] py-[8px] bg-transparent absolute top-[12px] left-[8px] bebas-Neue"
          >
            <div className="">
              <h3 className="text-[#F2F2F2] bebas-Neue uppercase font-normal text-[16px] md:text-[24px]">
                avery FreeMan
              </h3>
              <hr className="h-[4px] text-[#F8E1D5]" />
              <div className="flex justify-between items-center">
                <img className="w-[24px] h-[24px]" src={cardLogo} alt="" />
                <h3 className="text-[#E8E8E8] uppercase w-[104px] text-[10px] md:text-[14px]">
                  Warriors Academy
                </h3>
              </div>
              <div className="flex justify-between md:text-[16px] text-[14px]">
                <h6 className="uppercase text-[#E1C5AE]">POINTS</h6>
                <h6 className="uppercase text-white ">14</h6>
              </div>
              <div className="flex justify-between md:text-[16px] text-[14px]">
                <h6 className="uppercase text-[#E1C5AE]">Steals</h6>
                <h6 className="uppercase text-white">54</h6>
              </div>
              <div className="flex justify-between md:text-[16px] text-[14px]">
                <h6 className="uppercase text-[#E1C5AE]">Rebounds</h6>
                <h6 className="uppercase text-white">64</h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mid-content w-full flex justify-between px-[50px] items-center lg:hidden">
            <div className="flex flex-row items-center">
              <h3 className="score text-[36px]">
                104
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24"
                viewBox="0 0 12 24"
                fill="none"
                className=""
              >
                <path
                  d="M2.5 11.9999L8.5 17.0386L8.5 6.96125L2.5 11.9999Z"
                  fill="#A46E40"
                />
              </svg>
            </div>
            <p className="final text-[16px]">Final</p>
            <h3 className="score md:mt-[10px] lg:mt-[0px] !text-[36px]">
              104
            </h3>
          </div>
          <div className="flex justify-between lg:justify-center items-center lg:px-[24px]">
            <div className="p-2 w-[155px] order-1">
              <div className="md:h-[100px] md:w-[100px] flex items-center mx-auto">
                <img
                  className="md:w-[80px] mx-auto rounded-full border-2"
                  src={logo1}
                  alt=""
                />
              </div>
              <h3 className="text-center team-name mt-1  whitespace-nowrap">
                Los Angeles Lakers
              </h3>
            </div>
            <div className="w-full lg:flex justify-between items-center hidden px-2  order-2">
              <div className="flex flex-row items-center">
                <h3 className="score text-[20px] md:text-[36px] lg:text-[48px]">
                  104
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="24"
                  viewBox="0 0 12 24"
                  fill="none"
                  className="rotate-90 lg:rotate-0"
                >
                  <path
                    d="M2.5 11.9999L8.5 17.0386L8.5 6.96125L2.5 11.9999Z"
                    fill="#A46E40"
                  />
                </svg>
              </div>
              <p className="final text-[10px] md:text-[16px] ">Final</p>
              <h3 className="score md:mt-[10px] lg:mt-[0px] text-[20px] md:text-[36px] lg:text-[48px]">
                104
              </h3>
            </div>
            <div className="p-2 w-[155px]  order-3">
              <div className="md:h-[100px] md:w-[100px] mx-auto flex items-center">
                <img
                  className="w-[80px] rounded-full border-2 mx-auto"
                  src={logo2}
                  alt=""
                />
              </div>
              <h3 className="text-center team-name mt-1  whitespace-nowrap">
                Newyork Knicks
              </h3>
            </div>
          </div>
        </div>
        {/* */}
        <div className="flex flex-col flex-wrap lg:flex-row justify-between items-center gap-[16px] lg:gap-[0]">
          <button className="lg:w-[147px] w-full py-[10px] px-[36px] btn-outline border-[#A46E40] text-[#A46E40] hover:text-white btn uppercase hover:bg-[#A46E40] hover:border-[#A46E40] bebas-Neue font-normal leading-5 text-xl my-[12px]">
            Media
          </button>
          <button className="lg:w-[234px] w-full py-[10px] px-[36px] btn-outline border-[#A46E40] text-[#A46E40] hover:text-white btn uppercase hover:bg-[#A46E40] hover:border-[#A46E40] bebas-Neue font-normal leading-5 text-xl md:my-[12px]">
            <SlControlPlay />
            Watch
          </button>
          <Link
            to="/score"
            className="lg:w-[235px] w-full py-[10px] px-[36px] btn-outline border-[#A46E40] text-[#A46E40] hover:text-white btn uppercase hover:bg-[#A46E40] hover:border-[#A46E40] bebas-Neue font-normal leading-5 text-xl md:my-[12px]"
          >
            <button>Box Score</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
