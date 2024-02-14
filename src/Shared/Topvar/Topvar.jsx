import React from "react";
import logo from "../../assets/Logo.png";

const Topvar = () => {
  return (
    <div class="flex items-center rubik bg-[#1A1A1A] h-[100px] px-[64px]">
      <div class="">
        <img class="w-[72px] h-[85.5px]" src={logo} alt="" />
      </div>
      <div class="px-[48px] w-full">
        <h3 class="tracking-widest text-[#D9C2AB]">
          Making memories of those giving their best
        </h3>
      </div>
      <div class="flex">
        <button class="btn text-[#7D7D7D] border-[#A46E40] bg-[#1A1A1A] px-[28px] py-[12px] uppercase">
          Sign Up
        </button>
        <div className="ps-2">
          <button className="btn px-[36px] py-[12px] bg-[#A46E40] border-[#A46E40] text-[#FFF] uppercase">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topvar;
