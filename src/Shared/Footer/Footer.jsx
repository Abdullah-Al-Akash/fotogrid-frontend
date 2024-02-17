import { FaTiktok, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import line from "../../../public/Footer/line.png";
const Footer = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <div className="fotogrit-container py-[32px] px-[62px]">
        <footer className="flex flex-col gap-[20px] md:flex-row justify-between">
          <div className="flex items-center cursor-pointer gap-[12px]">
            <div className="flex gap-[20px] items-center">
              <div className="svg-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="34"
                  viewBox="0 0 28 34"
                  fill="none"
                  className="svg-icon"
                >
                  <path
                    d="M23.1148 18.0546C23.0761 13.8647 26.6335 11.8263 26.7961 11.7314C24.7815 8.86748 21.6588 8.47618 20.5615 8.44498C17.9388 8.17588 15.3948 9.97508 14.0588 9.97508C12.6961 9.97508 10.6388 8.47098 8.42146 8.51518C5.56813 8.55808 2.89879 10.1688 1.43479 12.67C-1.58654 17.7699 0.666794 25.2644 3.56146 29.3867C5.00946 31.4056 6.70146 33.6598 8.91613 33.5805C11.0828 33.4934 11.8921 32.2337 14.5068 32.2337C17.0975 32.2337 17.8575 33.5805 20.1161 33.5298C22.4415 33.4934 23.9055 31.5018 25.3028 29.4647C26.9761 27.1507 27.6481 24.8718 27.6748 24.7548C27.6201 24.7366 23.1588 23.0765 23.1148 18.0546Z"
                    fill="white"
                  />
                  <path
                    d="M18.8481 5.73318C20.0135 4.31228 20.8108 2.37918 20.5895 0.41748C18.9028 0.49028 16.7935 1.55498 15.5788 2.94468C14.5041 4.16928 13.5441 6.17648 13.7921 8.06408C15.6868 8.20188 17.6321 7.13198 18.8481 5.73318Z"
                    fill="white"
                  />
                </svg>
              </div>
              <img src={line} alt="" />
              <div className="svg-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="36"
                  viewBox="0 0 34 36"
                  fill="none"
                >
                  <path
                    d="M1.29314 1.79751C0.90147 2.19726 0.674805 2.81964 0.674805 3.62564V32.3751C0.674805 33.1811 0.90147 33.8035 1.29314 34.2033L1.3898 34.291L17.9131 18.1873V17.807L1.3898 1.70327L1.29314 1.79751Z"
                    fill="white"
                  />
                  <path
                    d="M25.4148 23.5579L19.9131 18.1872V17.807L25.4214 12.4364L25.5448 12.5062L32.0681 16.1251C33.9297 17.1521 33.9297 18.8421 32.0681 19.8756L25.5448 23.488L25.4148 23.5579Z"
                    fill="white"
                  />
                  <path
                    d="M24.5449 24.488L18.9132 18.9972L2.29321 35.2033C2.91155 35.837 3.91988 35.9134 5.06655 35.2797L24.5449 24.488Z"
                    fill="white"
                  />
                  <path
                    d="M24.5449 11.5063L5.06655 0.714697C3.91988 0.0874473 2.91155 0.163821 2.29321 0.79757L18.9132 16.9972L24.5449 11.5063Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-[40px] bebas-Neue font-normal leading-10 text-[#CCC]">
              Download App
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M21.4644 15V16.2C21.4644 17.8802 21.4644 18.7202 21.1374 19.362C20.8498 19.9265 20.3908 20.3854 19.8263 20.673C19.1846 21 18.3445 21 16.6644 21H8.26436C6.5842 21 5.74412 21 5.10238 20.673C4.5379 20.3854 4.07896 19.9265 3.79134 19.362C3.46436 18.7202 3.46436 17.8802 3.46436 16.2V15M17.4644 10L12.4644 15M12.4644 15L7.46436 10M12.4644 15V3"
                stroke="#D0A885"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* <div className="flex md:ms-auto">
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                  fill="#1877F2"
                />
                <path
                  d="M24 16C24 11.6 20.4 8 16 8C11.6 8 8 11.6 8 16C8 20 10.9 23.3 14.7 23.9V18.3H12.7V16H14.7V14.2C14.7 12.2 15.9 11.1 17.7 11.1C18.6 11.1 19.5 11.3 19.5 11.3V13.3H18.5C17.5 13.3 17.2 13.9 17.2 14.5V16H19.4L19 18.3H17.1V24C21.1 23.4 24 20 24 16Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                  fill="#1DA1F2"
                />
                <path
                  d="M24 11C23.4 11.3 22.8 11.4 22.1 11.5C22.8 11.1 23.3 10.5 23.5 9.7C22.9 10.1 22.2 10.3 21.4 10.5C20.8 9.9 19.9 9.5 19 9.5C16.9 9.5 15.3 11.5 15.8 13.5C13.1 13.4 10.7 12.1 9 10.1C8.1 11.6 8.6 13.5 10 14.5C9.5 14.5 9 14.3 8.5 14.1C8.5 15.6 9.6 17 11.1 17.4C10.6 17.5 10.1 17.6 9.6 17.5C10 18.8 11.2 19.8 12.7 19.8C11.5 20.7 9.7 21.2 8 21C9.5 21.9 11.2 22.5 13 22.5C19.1 22.5 22.5 17.4 22.3 12.7C23 12.3 23.6 11.7 24 11Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                  fill="#2867B2"
                />
                <path
                  d="M11.6 24H8.2V13.3H11.6V24ZM9.9 11.8C8.8 11.8 8 11 8 9.9C8 8.8 8.9 8 9.9 8C11 8 11.8 8.8 11.8 9.9C11.8 11 11 11.8 9.9 11.8ZM24 24H20.6V18.2C20.6 16.5 19.9 16 18.9 16C17.9 16 16.9 16.8 16.9 18.3V24H13.5V13.3H16.7V14.8C17 14.1 18.2 13 19.9 13C21.8 13 23.8 14.1 23.8 17.4V24H24Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                  fill="#FF0000"
                />
                <path
                  d="M23.6 12.1C23.4 11.4 22.9 10.9 22.2 10.7C21 10.4 15.9 10.4 15.9 10.4C15.9 10.4 10.9 10.4 9.60001 10.7C8.90001 10.9 8.4 11.4 8.2 12.1C8 13.4 8 16 8 16C8 16 8 18.6 8.3 19.9C8.5 20.6 9 21.1 9.7 21.3C10.9 21.6 16 21.6 16 21.6C16 21.6 21 21.6 22.3 21.3C23 21.1 23.5 20.6 23.7 19.9C24 18.6 24 16 24 16C24 16 24 13.4 23.6 12.1ZM14.4 18.4V13.6L18.6 16L14.4 18.4Z"
                  fill="white"
                />
              </svg>
            </div>
          </div> */}
          <div className="flex items-center gap-[20px]">
            <div className="text-black cursor-pointer bg-[#fff] text-[20px] p-[10px] rounded-full">
              <FaTiktok />
            </div>
            <div className="bg-pink-500 cursor-pointer text-[20px] p-[10px] text-white rounded-2xl">
              <AiFillInstagram />
            </div>
            <div className="text-white cursor-pointer bg-red-700 text-[20px] p-[10px] rounded-full">
              <FaYoutube />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
