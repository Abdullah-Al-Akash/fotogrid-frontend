import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
const SocialMedia = () => {
  return (
    <div className="bebas-Neue py-[64px]">
      <h2 className="uppercase text-[32px] leading-[40px] bebas-Neue  text-center">
        Avery Freeman Social Media
      </h2>
      <div className="md:flex grid grid-cols-2 text-center gap-[12px] justify-center items-center mt-[32px]">
        <div>
          <button className="bg-[#3B5998] px-[20px] py-[10px] rounded-[6px] text-white flex items-center gap-[8px] text-[20px] leading-[20px]">
            <IoLogoFacebook />
            <span>Facebook</span>
          </button>
        </div>
        <div>
          <button className="bg-[#C32AA3] px-[20px] py-[10px] rounded-[6px] text-white flex items-center gap-[8px] text-[20px] leading-[20px]">
            <FaInstagram />
            <span>Instagram</span>
          </button>
        </div>
        <div className="w-full md:w-auto">
          <button className="bg-[#010101] px-[20px] py-[10px] rounded-[6px] text-white flex items-center gap-[8px] text-[20px] leading-[20px]">
            <FaTiktok />
            <span>TikTok</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
