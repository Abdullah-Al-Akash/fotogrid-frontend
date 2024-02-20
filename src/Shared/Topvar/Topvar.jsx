import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { GrFormClose } from "react-icons/gr";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import EventDropdown from "../../Components/ui/event-dropdown";
import PlayerDropdown from "../../Components/ui/players-dropdown";
const Topvar = () => {
  const [NavIsOpen, setNavIsOpen] = useState(false);
  const NavToggleDrawer = () => {
    setNavIsOpen((prevState) => !prevState);
  };
  const drawerMenu = (
    <>
      <li>
        <Link
          to="/"
          onClick={() => NavToggleDrawer()}
          className="bebas-Neue font-normal text-2xl leading-8	uppercase text-[#A46E40]"
        >
          Home
        </Link>
      </li>
      <li className="">
        <EventDropdown NavToggleDrawer={NavToggleDrawer} />
      </li>
      <li className="">
        <PlayerDropdown NavToggleDrawer={NavToggleDrawer} />
      </li>
      {/* <li className="">
        <LocationDropdown />
      </li> */}
    </>
  );
  return (
    <div className="bg-[#1A1A1A]">
      <div className="px-[10px]">
        <div className="top-bar-content-group flex items-center justify-between rubik  h-[100px] md:px-[8px]">
          <div className="flex items-center gap-[10px] md:gap-[48px] order-1 ">
            <div className="w-[72px] h-[85.5px]">
              <Link to="/">
                <img
                  className="w-full h-full object-contain"
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
            <div className="w-full block">
              <h3 className="text-[16px] md:text-[24px] text-[#D9C2AB]">
                Making memories of those giving their best
              </h3>
            </div>
          </div>
          <div className="z-[999999999999999999] sm:hidden block order-3 sm:order-2 text-[#A46E40]">
            <button
              onClick={NavToggleDrawer}
              className="text-[24px] text-white"
            >
              <GiHamburgerMenu />
            </button>
            <Drawer
              open={NavIsOpen}
              onClose={NavToggleDrawer}
              direction="left"
              size={window.innerWidth >= 768 ? "100%" : "100%"}
              className="bla bla bla relative"
            >
              <div className="!h-full px-[60px]">
                <button
                  className="absolute md:top-10 md:right-10 top-5 right-5  text-4xl"
                  onClick={NavToggleDrawer}
                >
                  <GrFormClose />
                </button>
                <div className="list-none pt-[60px] flex flex-col gap-3 pb-[16px]">
                  {drawerMenu}
                </div>
                <hr />
                <div className="pt-[16px] flex gap-[16px]">
                  <button className="rounded-[8px] top-bar-button px-[36px] py-[12px] bg-[#A46E40] border-[#A46E40] text-[#FFF] uppercase cursor-pointer bebas-Neue">
                    Login
                  </button>
                  <button className="top-bar-button rounded-[8px] text-[#7D7D7D] border-[#A46E40] border px-[28px] py-[12px] uppercase cursor-pointer bebas-Neue">
                    Sign Up
                  </button>
                </div>
              </div>
            </Drawer>
          </div>
          <div className="top-button-group hidden sm:flex items-center justify-center gap-[8px] order-2 sm:order-3">
            <button className="btn top-bar-button text-[#7D7D7D] border-[#A46E40] bg-[#1A1A1A] px-[28px] py-[12px] uppercase">
              Sign Up
            </button>
            <button className="btn top-bar-button px-[36px] py-[12px] bg-[#A46E40] border-[#A46E40] text-[#FFF] uppercase">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topvar;
