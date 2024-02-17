import { IoSearchOutline } from "react-icons/io5";
import platinum1 from "../../../../public/Images/Platinum-1.png";
import platinum2 from "../../../../public/Images/Platinum-2.png";
import platinum3 from "../../../../public/Images/Platinum-3.png";
import platinum4 from "../../../../public/Images/Platinum-4.png";
import platinum5 from "../../../../public/Images/Platinum-5.png";
import gold1 from "../../../../public/Images/Gold-1.png";
import gold2 from "../../../../public/Images/Gold-2.png";
import gold3 from "../../../../public/Images/Gold-3.png";
import gold4 from "../../../../public/Images/Gold-4.png";
import gold5 from "../../../../public/Images/Gold-5.png";
import Dropdown from "../../ui/dropdown";
import {
  HallOfDonorsGender,
  HallOfDonorsKu12Girl,
} from "../../../constants/player.constants";

const HallOfDonors = () => {
  const platinumArray = [
    {
      image: platinum1,
      name: "Minnesota",
    },
    {
      image: platinum2,
      name: "New orleans",
    },
    {
      image: platinum3,
      name: "Philadelphia",
    },
    {
      image: platinum4,
      name: "part",
    },
    {
      image: platinum5,
      name: "Kings",
    },
  ];
  const goldArray = [
    {
      image: gold1,
      name: "boston",
    },
    {
      image: gold2,
      name: "brooklyn",
    },
    {
      image: gold3,
      name: "houston",
    },
    {
      image: gold4,
      name: "boston",
    },
    {
      image: gold5,
      name: "cav",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="">
        <div className="flex flex-col md:flex-row gap-[15px] md:gap-0 md:justify-between md:items-center">
          <div className="flex gap-[16px]">
            <Dropdown options={HallOfDonorsKu12Girl} label="KU 12 Girl" />
            <Dropdown options={HallOfDonorsGender} label="Male" />
          </div>
          <div className="border flex items-center py-[8px] px-[16px] rounded-[4px]">
            <IoSearchOutline className="mt-[2px] me-[8px]" />
            <input
              type="text"
              placeholder="Search here"
              className="outline-none"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[24px] mt-[16px]">
        <div className="md:col-span-8 col-span-12 border  rounded-[6px]">
          <div className="p-[24px]">
            <h2 className="mb-[8px] text-[24px] bebas-Neue">
              Platinum Sponsors
            </h2>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-[16px]">
              {platinumArray?.map((platinum, i) => {
                const { image, name } = platinum || {};
                return (
                  <div key={i} className="p-[16px] bg-[#E8E8E8] rounded-[6px]">
                    <div
                      style={{
                        boxShadow: "0px 1px 1px 0px rgba(46, 46, 48, 0.44)",
                      }}
                      className="bg-[#fff] rounded-full p-[21px] h-[115px] border-[4px] border-[#CCC] mb-[16px] flex justify-center items-center object-contain"
                    >
                      <img
                        src={image}
                        className="w-[88px] mx-auto object-cover"
                        alt=""
                      />
                    </div>
                    <h2 className=" bebas-Neue text-[20px] text-center">
                      {name}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-[24px]">
            <h2 className="mb-[8px] text-[24px] bebas-Neue">Gold Sponsors</h2>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-[16px]">
              {goldArray?.map((platinum, i) => {
                const { image, name } = platinum || {};
                return (
                  <div key={i} className="p-[16px] bg-[#EDDDC0] rounded-[6px]">
                    <div
                      style={{
                        boxShadow: "0px 1px 1px 0px rgba(46, 46, 48, 0.44)",
                      }}
                      className="bg-[#fff] rounded-full p-[21px] h-[115px] border-[4px] border-[#D1AE61] mb-[16px] flex justify-center items-center "
                    >
                      <img
                        src={image}
                        className="w-[88px] mx-auto object-cover"
                        alt=""
                      />
                    </div>
                    <h2 className=" bebas-Neue text-[20px] text-center">
                      {name}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="md:col-span-4 col-span-12 border p-[24px] rounded-[6px]">
          <h2 className="text-[24px] bebas-Neue">
            Individual Sponsors / Donors
          </h2>
          <div className="mt-[16px]">
            <div className="flex flex-col gap-[8px] montserrat text-[20px] font-medium text-[#4A4A4A]">
              <li className="">James</li>
              <li className="">Salim</li>
              <li className="">Adi</li>
              <li className="">Hutama</li>
              <li className="">Lukius</li>
              <li className="">Jason</li>
              <li className="">Anelka</li>
              <li className="">Aldo</li>
              <li className="">Phoenix</li>
              <li className="">Kay</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallOfDonors;
