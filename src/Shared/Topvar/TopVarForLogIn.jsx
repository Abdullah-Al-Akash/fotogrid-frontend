import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import coin from "../../../public/LoggedInUser/Coin_500x500 1.png";
import people from "../../../public/LoggedInUser/people.png";

const TopVarForLogIn = () => {
  return (
    <div>
      <div className="bg-[#1A1A1A]">
        <div className="fotogrit-container">
          <div className="top-bar-content-group flex items-center justify-between rubik  h-[100px] px-[8px]">
            <div className="flex items-center gap-[48px]">
              <div className="w-[72px] h-[85.5px]">
                <Link to="/">
                  <img
                    className="w-full h-full object-contain"
                    src={logo}
                    alt=""
                  />
                </Link>
              </div>
              <div className="w-full hidden sm:block">
                <h3 className="tracking-widest text-[#D9C2AB]">
                  Making memories of those giving their best
                </h3>
              </div>
            </div>
            <div className="top-button-group grid grid-cols-3 gap-[8px]">
              <div className="flex justify-center gap-[4px]  border-r border-[#333]">
                <div>
                  <img className="w-[24px] h-[24px]" src={coin} alt="" />
                </div>
                <div>
                  <h3 className="bebas-Neue text-[20px] font-normal leading-[20px] text-[#CCC]">
                    3000
                  </h3>
                  <p className="text-[#E1C5AE] montserrat text-[14px] font-medium uppercase">
                    Top Up
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-[4px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M2 2.5H3.30616C3.55218 2.5 3.67519 2.5 3.77418 2.54524C3.86142 2.58511 3.93535 2.64922 3.98715 2.72995C4.04593 2.82154 4.06333 2.94332 4.09812 3.18686L4.57143 6.5M4.57143 6.5L5.62332 14.2314C5.75681 15.2125 5.82355 15.7031 6.0581 16.0723C6.26478 16.3977 6.56108 16.6564 6.91135 16.8174C7.30886 17 7.80394 17 8.79411 17H17.352C18.2945 17 18.7658 17 19.151 16.8304C19.4905 16.6809 19.7818 16.4398 19.9923 16.1342C20.2309 15.7876 20.3191 15.3247 20.4955 14.3988L21.8191 7.44969C21.8812 7.12381 21.9122 6.96087 21.8672 6.8335C21.8278 6.72177 21.7499 6.62768 21.6475 6.56802C21.5308 6.5 21.365 6.5 21.0332 6.5H4.57143ZM10 21.5C10 22.0523 9.55228 22.5 9 22.5C8.44772 22.5 8 22.0523 8 21.5C8 20.9477 8.44772 20.5 9 20.5C9.55228 20.5 10 20.9477 10 21.5ZM18 21.5C18 22.0523 17.5523 22.5 17 22.5C16.4477 22.5 16 22.0523 16 21.5C16 20.9477 16.4477 20.5 17 20.5C17.5523 20.5 18 20.9477 18 21.5Z"
                      stroke="#7D7D7D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="bebas-Neue text-[20px] font-normal leading-[20px] text-[#CCC]">
                    YOur Cart (2)
                  </h3>
                  <p className="text-[#E1C5AE] montserrat text-[14px] font-medium uppercase">
                    CheckOut Now
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-[4px] items-center border border-gray-600 p-[5px] rounded-full">
                <div>
                  <img
                    className="w-[40px] h-[40px] rounded-full"
                    src={people}
                    alt=""
                  />
                </div>
                <div className="flex gap-[4px]">
                  <h3 className="montserrat text-[16px] text-[#ABABAB] font-normal leading-4">
                    Account Type
                  </h3>
                  <h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="#ABABAB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopVarForLogIn;
