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
    <div className="bg-white hidden sm:block">
      <div className="fotogrit-container py-[20px] px-[64px]">
        <div className="navbar-start !w-full sm:flex">
          <ul className="text-[#A46E40] !flex !items-center !w-full gap-[56px]">
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
