import logo from "../../assets/Logo.png";

const Topvar = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <div className="container">
        <div className="flex items-center justify-between rubik  h-[100px] gap-[8px] px-[8px]">
          <div className="">
            <img className="w-[72px] h-[85.5px]" src={logo} alt="" />
          </div>
          <div className="px-[48px] w-full hidden md:block">
            <h3 className="tracking-widest text-[#D9C2AB]">
              Making memories of those giving their best
            </h3>
          </div>
          <div className="flex">
            <button className="btn text-[#7D7D7D] border-[#A46E40] bg-[#1A1A1A] px-[28px] py-[12px] uppercase">
              Sign Up
            </button>
            <div className="ps-2">
              <button className="btn px-[36px] py-[12px] bg-[#A46E40] border-[#A46E40] text-[#FFF] uppercase">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topvar;
