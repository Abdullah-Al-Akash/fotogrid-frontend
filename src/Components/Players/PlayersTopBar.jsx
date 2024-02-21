import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import playerImage from "../../assets/Players/Player-Image.png";
import line from "../../assets/Players/line.png";
const PlayersTopBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const players = [
    {
      _id: "1",
      image: playerImage,
      playerName: "Esther Howard",
      ClubName: "Clueb Name",
      jerseyNo: "Jersey No 12",
      shooting: "Shooting Guard",
    },
    {
      _id: "2",
      image: playerImage,
      playerName: "Abtahi Hasan",
      ClubName: "Clueb Name",
      jerseyNo: "Jersey No 12",
      shooting: "Shooting Guard",
    },
    {
      _id: "3",
      image: playerImage,
      playerName: "Ashiqur Rahman Biplop",
      ClubName: "Clueb Name",
      jerseyNo: "Jersey No 12",
      shooting: "Shooting Guard",
    },
    {
      _id: "4",
      image: playerImage,
      playerName: "Abdullah AL AKash",
      ClubName: "Clueb Name",
      jerseyNo: "Jersey No 12",
      shooting: "Shooting Guard",
    },
    {
      _id: "5",
      image: playerImage,
      playerName: "Ahashan Habib Utsho",
      ClubName: "Clueb Name",
      jerseyNo: "Jersey No 12",
      shooting: "Shooting Guard",
    },
    {
      _id: "6",
      image: playerImage,
      playerName: "Proibin Bisous",
      ClubName: "Clueb Name",
      jerseyNo: "Jersey No 12",
      shooting: "Shooting Guard",
    },
  ];
  // Function to handle search logic
  const handleSearch = () => {
    // Perform search logic based on searchQuery
    // Update searchResults state with matching players
    // For example:
    const filteredResults = players.filter((player) =>
      player.playerName.toLowerCase().includes(searchQuery?.toLowerCase())
    );
    if (filteredResults) {
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
    console.log(filteredResults);
  };

  return (
    <section className="flex fotogrit-container md:flex-row flex-col md:items-center md:justify-between py-[28px] px-[8px] relative">
      <Link
        onClick={() => navigate(-1)}
        className="text-[#7D7D7D]  flex items-center gap-[10px] text-[20px] leading-[28px]"
        to="#"
      >
        <IoIosArrowBack /> <span>Back</span>
      </Link>
      <div className="w-full md:w-[50%] lg:max-w-[497px]">
        <div className="h-[46px] mt-[18px] md:mt-auto relative border-[#4A4A4A] overflow-hidden border-[1px] rounded-[6px] bg-[#242424] ">
          <FiSearch className=" text-[#636363] text-[18px] left-[17px] absolute top-1/2 -translate-y-1/2" />
          <input
            className="w-full text-[#7D7D7D] bg-transparent h-full placeholder:text-[#7D7D7D] px-[48px] border-none outline-none"
            placeholder="Search Individual Player"
            value={searchQuery}
            onBlur={() => setSearchResults([])}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={handleSearch}
            onFocus={() => {
              setSearchResults(players);
            }}
          />
        </div>
        {/* Display search results */}
        {searchResults.length > 0 && (
          <ul className="search-result absolute top-[125px] md:top-[80px] right-[25px] lg:w-[492px] md:w-[392px] md:!h-[744px] h-[500px] z-[9999] overflow-y-auto w-[calc(100%-50px)]">
            <div className="bg-white p-[24px] flex flex-col gap-[8px] w-full rounded-[8px]">
              <h2 className="mb-[24px] bebas-Neue leading-[32px] text-[24px]">
                Player Found 23
              </h2>
              {searchResults.map((player) => {
                const { _id, image, playerName, jerseyNo, ClubName, shooting } =
                  player || {};
                return (
                  <div
                    key={_id}
                    className="flex items-center justify-start gap-[13px] w-full hover:bg-gray-300 p-[8px] rounded-[8px] cursor-pointer"
                  >
                    <div className="w-[100px] h-[100px] rounded-full">
                      <img
                        src={image}
                        className="h-full w-full rounded-full object-contain"
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className="bebas-Neue leading-[20px] text-[#1A1A1A] text-[20px]">
                        {playerName}
                      </h2>
                      <div className="flex justify-start sm:justify-center md:justify-start lg:justify-center items-start sm:items-center whitespace-nowrap text-[14px] gap-0 sm:gap-[7px] flex-col sm:flex-row md:flex-col lg:flex-row md:items-start lg:items-center">
                        <p>{ClubName}</p>
                        <img
                          className="hidden sm:inline md:hidden lg:inline"
                          src={line}
                          alt=""
                        />
                        <p>{jerseyNo}</p>
                        <img
                          className="hidden sm:inline md:hidden lg:inline"
                          src={line}
                          alt=""
                        />
                        <p>{shooting}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ul>
        )}
      </div>
    </section>
  );
};

export default PlayersTopBar;
