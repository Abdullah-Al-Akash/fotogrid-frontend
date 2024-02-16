import "./HomeCard.css";
import cardImg from "../../../assets/Home/card.png";
import logo1 from "../../../assets/Home/logo1.png";
import logo2 from "../../../assets/Home/logo2.png";
import { SlControlPlay } from "react-icons/sl";
import { Link } from "react-router-dom";

const HomeCard = () => {
  return (
    <div className="w-full p-[16px] rounded-2xl bg-[#FFF]">
      <div className="md:flex items-center">
        <div className="md:w-[430px]">
          <h1 className="headline">Kejuaraan Provinsi DKI 2023</h1>
        </div>
        <div className="flex">
          <h3 className="sub-heading border-r-2 pe-2">12 January 2024 </h3>
          <h3 className="sub-heading border-r-2 pe-2"> KU 10 </h3>
          <h3 className="sub-heading ps-2">Girl</h3>
        </div>
      </div>
      <div className="py-[5px]">
        <img className="w-full md:h-[346px] rounded-sm" src={cardImg} alt="" />
      </div>
      <div className="flex justify-center items-center px-[24px]">
        <div className="p-2 w-[155px]">
          <img
            className="md:w-[80px] mx-auto rounded-full border-2"
            src={logo1}
            alt=""
          />
          <h3 className="text-center team-name mt-1">Los Angeles Lakers</h3>
        </div>
        <div className="mid-content px-2">
          <div className="flex items-center">
            <h3 className="score">104</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="24"
              viewBox="0 0 12 24"
              fill="none"
            >
              <path
                d="M2.5 11.9999L8.5 17.0386L8.5 6.96125L2.5 11.9999Z"
                fill="#A46E40"
              />
            </svg>
          </div>
          <p className="final">Final</p>
          <h3 className="score">104</h3>
        </div>
        <div className="p-2 w-[155px]">
          <img
            className="w-[80px] rounded-full border-2 mx-auto"
            src={logo2}
            alt=""
          />
          <h3 className="text-center team-name mt-1">Newyork Knicks</h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-[16px] py-[12px]">
        <button className="md:w-[147px] w-full py-[10px] px-[36px] text-white hover:text-[#A46E40] btn uppercase bg-[#A46E40] bebas-Neue font-normal	leading-5 text-xl	">
          Media
        </button>
        <button className="md:w-[234px] w-full py-[10px] px-[36px] btn-outline border-[#A46E40] text-[#A46E40] hover:text-white btn uppercase hover:bg-[#A46E40] hover:border-[#A46E40] bebas-Neue font-normal leading-5 text-xl">
          <SlControlPlay />
          Watch
        </button>
        <Link to="/score">
          <button className="md:w-[235px] w-full py-[10px] px-[36px] btn-outline border-[#A46E40] text-[#A46E40] hover:text-white btn uppercase hover:bg-[#A46E40] hover:border-[#A46E40] bebas-Neue font-normal leading-5 text-xl">
            Box Score
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
