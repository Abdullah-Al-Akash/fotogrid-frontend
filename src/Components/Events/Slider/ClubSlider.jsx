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

  const clubs = [
    { image: club1, name: "detroit" },
    { image: club2, name: "boston" },
    { image: club3, name: "Houston" },
    { image: club4, name: "hornets" },
    { image: club5, name: "knicks" },
  ];

  const handleNextButton = () => {
    setActiveSliderIndex((prevIndex) =>
      prevIndex === clubs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousButton = () => {
    setActiveSliderIndex((prevIndex) =>
      prevIndex === 0 ? clubs.length - 1 : prevIndex - 1
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
        <div className="flex gap-[16px] justify-center items-center w-full">
          {clubs.map((club, index) => {
            let adjustedIndex = (activeSliderIndex + index) % clubs.length;
            return (
              <div
                key={index}
                className={`p-[16px] object-cover transition-all duration-500 ease-in-out transform flex flex-col gap-[16px] ${
                  index === 2 ? "opacity-100 scale-125" : "opacity-50 scale-100"
                }`}
                style={{ left: `${index * (100 / clubs.length)}%` }}
              >
                <img
                  src={clubs[adjustedIndex].image}
                  alt={clubs[adjustedIndex].name}
                  className={`w-[150px] h-[150px] p-[16px] rounded-full object-contain border ${
                    index === 2 ? "border-[#A46E40] border-2" : ""
                  }`}
                />
                <h2
                  className={`text-center uppercase montserrat font-medium ${
                    index === 2 ? "text-[#A46E40]" : ""
                  }`}
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
