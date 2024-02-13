import React from "react";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <a className="bebas-Neue font-normal text-2xl leading-8	uppercase">
          Home
        </a>
      </li>
      <li>
        <a>Events</a>
      </li>
      <li>
        <a>Players</a>
      </li>
      <li>
        <a>Service</a>
      </li>
      <li>
        <a>About Fotogrit</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#A46E40]"
            >
              {navOptions}
            </ul>
          </div>
          <div className="navbar-start hidden w-full lg:flex">
            <ul className="menu menu-horizontal text-[#A46E40]">
              {navOptions}
            </ul>
          </div>
        </div>

        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default NavBar;
