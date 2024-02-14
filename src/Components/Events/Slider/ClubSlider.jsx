/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import club1 from "../../../../public/Images/events-club/detroit.png";
import club2 from "../../../../public/Images/events-club/boston.png";
import club3 from "../../../../public/Images/events-club/Houston.png";
import club4 from "../../../../public/Images/events-club/hornets.png";
import club5 from "../../../../public/Images/events-club/knicks.png";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const ClubSlider = () => {
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);

  // slider items
  const clubs = [
    { image: club1, name: "detroit" },
    { image: club2, name: "boston" },
    { image: club3, name: "Houston" },
    { image: club4, name: "hornets" },
    { image: club5, name: "knicks" },
  ];

  const handleNextButton = () => {
    setActiveSliderIndex((prev) =>
      prev === clubs.length - 1 ? 0 : prev + 1
    );
  };

  const handlePreviousButton = () => {
    setActiveSliderIndex((prev) =>
      prev === 0 ? clubs.length - 1 : prev - 1
    );
  };

  return (
    <div className="md:mx-[24px] relative">
      <div className="flex justify-between items-center md:px-[32px] lg:px-[72px]">
        <button
          className="hidden md:block transform text-xl border p-[8px] rounded-[4px] text-[#7D7D7D]"
          onClick={handlePreviousButton}
        >
          <MdOutlineArrowBackIosNew />
        </button>
        {/* large screen slider */}
        <div className="hidden lg:flex gap-[16px] justify-center items-center w-full">
          {clubs?.slice(0, 5).map((club, i) => {
            let adjustedIndex = (activeSliderIndex + i) % clubs.length;
            return (
              <div
                key={i}
                className={`p-[16px] object-cover transition-all duration-500 ease-in-out transform flex flex-col gap-[16px] ${
                  i === 2 ? "opacity-100 scale-125" : "opacity-50 scale-100"
                }`}
                style={{ left: `${i * (100 / clubs.length)}%` }}
              >
                <img
                  src={clubs[adjustedIndex].image}
                  alt={clubs[adjustedIndex].name}
                  className={`w-[150px] h-[150px] p-[16px] rounded-full object-contain border ${
                    i === 2 ? "border-[#A46E40] border-2" : ""
                  }`}
                />
                <h2
                  className={`text-center uppercase montserrat font-medium ${
                    i === 2 ? "text-[#A46E40]" : ""
                  }`}
                >
                  {clubs[adjustedIndex].name}
                </h2>
              </div>
            );
          })}
        </div>
        {/* medium screen slider */}
        <div className="hidden md:flex lg:hidden gap-[16px] justify-center items-center w-full">
          {clubs?.slice(0, 3)?.map((club, i) => {
            let adjustedIndex = (activeSliderIndex + i) % clubs.length;
            return (
              <div
                key={i}
                className={`p-[16px] object-cover transition-all duration-500 ease-in-out transform flex flex-col gap-[16px] ${
                  i === 1 ? "opacity-100 scale-125" : "opacity-50 scale-100"
                }`}
                style={{ left: `${i * (100 / clubs.length)}%` }}
              >
                <img
                  src={clubs[adjustedIndex].image}
                  alt={clubs[adjustedIndex].name}
                  className={`w-[150px] h-[150px] p-[16px] rounded-full object-contain border ${
                    i === 1 ? "border-[#A46E40] border-2" : ""
                  }`}
                />
                <h2
                  className={`text-center uppercase montserrat font-medium ${
                    i === 1 ? "text-[#A46E40]" : ""
                  }`}
                >
                  {clubs[adjustedIndex].name}
                </h2>
              </div>
            );
          })}
        </div>
        {/* small screen slider */}
        <div className="flex md:hidden gap-[16px] justify-center items-center w-full">
          {clubs?.slice(0, 1)?.map((club, i) => {
            let adjustedIndex = (activeSliderIndex + i) % clubs.length;
            return (
              <div
                key={i}
                className={`p-[16px] object-cover transition-all duration-500 ease-in-out transform flex flex-col gap-[16px] opacity-100 scale-125`}
                style={{ left: `${i * (100 / clubs.length)}%` }}
              >
                <img
                  src={clubs[adjustedIndex].image}
                  alt={clubs[adjustedIndex].name}
                  className={`w-[150px] h-[150px] p-[16px] rounded-full object-contain border-[#A46E40] border-2`}
                />
                <h2
                  className={`text-center uppercase montserrat font-medium text-[#A46E40] `}
                >
                  {clubs[adjustedIndex].name}
                </h2>
              </div>
            );
          })}
        </div>
        <button
          className="hidden md:block transform text-xl border p-[8px] rounded-[4px] text-[#7D7D7D]"
          onClick={handleNextButton}
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
      <div className="md:hidden mt-3 flex justify-center items-center gap-5">
        <button
          className="transform text-xl border p-[8px] rounded-[4px] text-[#7D7D7D]"
          onClick={handlePreviousButton}
        >
          <MdOutlineArrowBackIosNew />
        </button>
        <button
          className="transform text-xl border p-[8px] rounded-[4px] text-[#7D7D7D]"
          onClick={handleNextButton}
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default ClubSlider;
