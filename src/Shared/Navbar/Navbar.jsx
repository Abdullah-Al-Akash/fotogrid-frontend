import { Link } from "react-router-dom";
import EventDropdown from "../../Components/ui/event-dropdown";
import PlayerDropdown from "../../Components/ui/players-dropdown";
// import LocationDropdown from "../../Components/ui/location-dropdown";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <Link
          to="/"
          className="bebas-Neue font-normal text-2xl leading-8	uppercase text-[#A46E40]"
        >
          Home
        </Link>
      </li>
      <li className="">
        <EventDropdown />
      </li>
      <li className="">
        <PlayerDropdown />
      </li>
      {/* <li className="">
        <LocationDropdown />
      </li> */}
    </>
  );
  return (
    <div className="bg-white">
      <div className="fotogrit-container py-[20px] px-[64px]">
        <div className="drawer grid sm:hidden z-[999999999999999999]">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              {navOptions}
            </ul>
          </div>
        </div>
        <div className="navbar-start hidden !w-full sm:flex">
          <ul className="text-[#A46E40] !flex !items-center !w-full gap-[56px]">
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
