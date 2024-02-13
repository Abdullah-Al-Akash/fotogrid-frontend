import cakraImage from "../../../public/Images/Cup.png";
import { CiShare2 } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const CakraSaktiCup = () => {
  return (
    <div className="mt-[32px]  bg-white rounded-[6px]">
      <div className="flex justify-between items-center px-[24px] py-[16px]">
        <div className="flex items-center justify-start gap-[17px]">
          <div className="w-[64px] h-[64px]">
            <img src={cakraImage} alt="" className="w-full" />
          </div>
          <h2 className="bebas-Neue text-[32px]">Cakra Sakti Cup 2023</h2>
        </div>
        <div className="flex items-center gap-[16px]">
          <p className="text-[24px] border-2 p-[13px] rounded-full">
            <CiShare2 />
          </p>
          <p className="text-[24px] border-2 p-[13px] rounded-full">
            <FaWhatsapp />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CakraSaktiCup;
