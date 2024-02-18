import cakraImage from "../../../public/Images/Cup.png";
import { CiShare2 } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const EventListCard = () => {
  return (
    <div className="bg-white rounded-[6px]">
      <div className="flex flex-col flex-wrap md:flex-row justify-between gap-[6px] md:gap-0 md:items-center px-[24px] py-[16px]">
        <div className="team-list-card-Heading order-1 flex items-center justify-start gap-[17px]">
          <div className="w-[64px] h-[64px]">
            <img src={cakraImage} alt="" className="w-full" />
          </div>
          <h2 className="bebas-Neue text-[32px]">Cakra Sakti Cup 2023</h2>
        </div>
        <h2 className="md:text-[24px] text-[16px] bebas-Neue text-[#7D7D7D] order-2">Tampa (FL)</h2>
        <h2 className="md:text-[24px] text-[16px] bebas-Neue text-[#7D7D7D] order-3">June 16, 2024</h2>
        <Link to="/event-details" className="md:order-4 order-5">
          <button className="uppercase px-[36px] py-[10px] rounded-[4px] bg-[#A46E40] text-[#fff] order-3 md:order-1 text-[20px] bebas-Neue mb-[10px]">
            View Details
          </button>
        </Link>
        <div className="flex items-center gap-[16px] ms-[0px] text-[#7D7D7D] order-4 md:order-5">
          <p className="lg:text-[24px] border-2 p-[8px] lg:p-[13px] rounded-full order-2">
            <CiShare2 />
          </p>
          <p className="lg:text-[24px] border-2 p-[8px] lg:p-[13px] rounded-full order-1 md:order-3">
            <FaWhatsapp />
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventListCard;
