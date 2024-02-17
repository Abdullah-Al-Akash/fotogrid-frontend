/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import cakraImage from "../../../public/Images/Cup.png";
import { CiShare2 } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const CakraSaktiCup = ({ tab }) => {
  return (
    <div className="mt-[32px]  bg-white rounded-[6px]">
      <div className="flex flex-col md:flex-row justify-between gap-[15px] md:gap-0 md:items-center px-[24px] py-[16px]">
        <div className="flex items-center justify-start gap-[17px]">
          <div className="w-[64px] h-[64px]">
            <img src={cakraImage} alt="" className="w-full" />
          </div>
          <h2 className="bebas-Neue text-[32px]">Cakra Sakti Cup 2023</h2>
        </div>
        <div className="flex items-center gap-[16px] ms-[0px]">
          {/* {(tab === "tab4" || tab === "tab5") && (
            <button className="uppercase px-[36px] py-[10px] rounded-[4px] bg-[#A46E40] text-[#fff] order-3 md:order-1">
              Register
            </button>
          )} */}
          <p className="text-[24px] border-2 p-[13px] rounded-full order-2">
            <CiShare2 />
          </p>
          <p className="text-[24px] border-2 p-[13px] rounded-full order-1 md:order-3">
            <FaWhatsapp />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CakraSaktiCup;
