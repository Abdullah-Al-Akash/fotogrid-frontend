import { LuInfo } from "react-icons/lu";

import logo1 from "../../../../public/fotogrit-pins/logo1.png";
import logo2 from "../../../../public/fotogrit-pins/logo2.png";
import logo3 from "../../../../public/fotogrit-pins/logo3.png";
import logo4 from "../../../../public/fotogrit-pins/logo4.png";
import logo5 from "../../../../public/fotogrit-pins/logo5.png";
import logo6 from "../../../../public/fotogrit-pins/logo6.png";
import logo7 from "../../../../public/fotogrit-pins/logo7.png";
import logo8 from "../../../../public/fotogrit-pins/logo8.png";
import logo9 from "../../../../public/fotogrit-pins/logo9.png";
import logo10 from "../../../../public/fotogrit-pins/logo10.png";
import logo11 from "../../../../public/fotogrit-pins/logo11.png";
import { useEffect, useRef, useState } from "react";

const FotogritPins = () => {
  const [open, setOpen] = useState("");
  const tooltipRef = useRef(null);

  const fotogritPins = [
    {
      _id: "1",
      image: logo1,
      label: "4x",
    },
    { _id: "2", image: logo2, label: "8x" },
    {
      _id: "3",
      image: logo3,
      label: "12x",
    },
    {
      _id: "4",
      image: logo4,
      label: "4x",
    },
    {
      _id: "5",
      image: logo5,
      label: "4x",
    },
    {
      _id: "6",
      image: logo6,
      label: "4x",
    },
    {
      _id: "7",
      image: logo7,
      label: "4x",
    },
    {
      _id: "8",
      image: logo8,
      label: "4x",
    },
    {
      _id: "9",
      image: logo9,
      label: "4x",
    },
    {
      _id: "10",
      image: logo10,
      label: "4x",
    },
    {
      _id: "11",
      image: logo11,
      label: "4x",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setOpen("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleTooltipToggle = (id) => {
    setOpen(open === id ? null : id);
  };
  return (
    <div>
      <h2 className="uppercase text-[32px] leading-[42px] bebas-Neue text-[#1A1A1A] py-[24px]">
        You Have 12 Fotogrit Pins
      </h2>

      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[16px]">
        {fotogritPins.map((item) => {
          const { image, label, _id } = item;
          return (
            <article
              key={item}
              className="bg-white my-[18px] sm:my-auto p-[24px] rounded-[6px] relative"
            >
              <div>
                <img
                  className="w-[160px] border-[3px] border-[#CCCCCC] rounded-full mx-auto mt-[18px]  "
                  src={image}
                  alt="icon"
                />
              </div>
              <div className="absolute top-[15px] right-[15px] text-[20px] text-[#7D7D7D]">
                <div className="relative cursor-pointer">
                  <h2 onClick={() => handleTooltipToggle(_id)}>
                    <LuInfo />
                  </h2>
                  {open === _id && (
                    <h2
                      ref={tooltipRef}
                      className="text-[14px] whitespace-nowrap absolute top-[30px] py-[6px] px-[12px] bg-[#fff] z-[9999] left-[50%] -translate-x-[50%] leading-[24px] rounded-[8px]"
                    >
                      Score 50 points in one single game
                    </h2>
                  )}
                </div>
              </div>

              <h2 className="text-center pt-[16px] montserrat font-bold text-[20px] leading-[28px]">
                {label}
              </h2>
              {/* <div>
                <h3 className="text-[14px] mt-[24px] leading-[24px] text-[#7D7D7D]">
                  Event Group TitIe
                </h3>
                <h2 className="bebas-Neue mt-[12px] uppercase text-[#1A1A1A] bebas-Neue">
                  Fotogrit Pins Name Name
                </h2>
                <p className="text-[#4A4A4A] mt-[16px] text-[16px] leading-[28px]">
                  2023
                </p>
              </div> */}
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default FotogritPins;
