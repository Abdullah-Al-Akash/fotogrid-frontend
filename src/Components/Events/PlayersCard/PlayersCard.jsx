import player1 from "../../../../public/Images/events-players/player-1.png";
// import player2 from "../../../../public/Images/events-players/player-2.png";
import player3 from "../../../../public/Images/events-players/player-3.png";
// import player4 from "../../../../public/Images/events-players/player-4.png";
import jersey from "../../../../public/Images/events-players/Jersey.png";
import line from "../../../../public/Images/events-players/Line.png";
import defaultImage from "../../../../public/Images/events-players/default.png";

const PlayersCard = () => {
  const players = [
    {
      _id: "player-one",
      image: player1,
      playerName: "Ben Gutama",
      playJerseyNumber: 15,
      playerAge: 9,
      BloodGroup: "KU 10",
      playerPosition: {
        isCaptain: true,
        isShootingGuard: true,
        center: false,
        pointGuard: false,
      },
      itsYou: false,
    },
    {
      _id: "player-two",
      image: "",
      playerName: "",
      playJerseyNumber: 32,
      playerAge: "--",
      BloodGroup: "KU--",
      playerPosition: {
        isCaptain: false,
        isShootingGuard: false,
        center: false,
        pointGuard: false,
      },
      itsYou: true,
    },
    {
      _id: "player-three",
      image: player3,
      playerName: "Selim Adbul",
      playJerseyNumber: 45,
      playerAge: 9,
      BloodGroup: "KU 10",
      playerPosition: {
        isCaptain: false,
        isShootingGuard: false,
        center: false,
        pointGuard: true,
      },
      itsYou: false,
    },
    {
      _id: "player-four",
      image: "",
      playerName: "",
      playJerseyNumber: 47,
      playerAge: "",
      BloodGroup: "",
      playerPosition: {
        isCaptain: false,
        isShootingGuard: false,
        center: false,
        pointGuard: false,
      },
      itsYou: true,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[24px] py-8">
      {players?.map((player) => {
        const {
          _id,
          image,
          playerName,
          playJerseyNumber,
          playerAge,
          BloodGroup,
          playerPosition: { isCaptain, isShootingGuard, center, pointGuard },
          itsYou,
        } = player || {};

        return (
          <div
            key={_id}
            className="sm:h-[460px] sm:w-[316px] mx-auto bg-[#E5D5C9] rounded-t-[6px]"
          >
            <div className="relative sm:h-[60%]">
              <div className="pt-[10px] md:pt-[24px] px-[10px] md:px-[24px]">
                <img
                  className="sm:h-[242px] sm:w-[242px] mx-auto object-contain"
                  src={image || defaultImage}
                  alt=""
                />
              </div>
              {itsYou ? (
                <p className="absolute top-[6px] right-[50%] whitespace-nowrap opacity-[77%] px-[16px] py-[4px] rounded-[100px] bg-[#A46E40] translate-x-[50%] montserrat font-medium text-[12px] text-[#FFFFFF]">
                  This is me. Please link to my ID
                </p>
              ) : (
                ""
              )}
            </div>
            <div
              style={{ clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 100%)" }}
              className="sm:h-[40%] bg-[#1A1A1A] rounded-b-[6px]"
            >
              <div className="pb-[24px] px-[24px] text-white pt-[45px] flex flex-col justify-between items-start">
                <div className="flex items-center h-full">
                  <div className="relative">
                    <img src={jersey} alt="" />
                    <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[24px] bebas-Neue">
                      {playJerseyNumber}
                    </p>
                  </div>
                  <img className="sm:mx-[15px] mx-[8px]" src={line} alt="" />
                  <div>
                    <h2 className="montserrat sm:text-[20px]">{playerName}</h2>
                    {
                      <div className="montserrat  sm:text-[20px] text-[#7D7D7D]">
                        {playerAge && (
                          <p>
                            Age {playerAge}
                            {playerAge > 0 && ","} {BloodGroup}
                          </p>
                        )}
                      </div>
                    }
                  </div>
                </div>
                <div className="mt-[16px] flex flex-col sm:flex-row gap-[10px] items-start sm:items-center">
                  {isCaptain === true && (
                    <button
                      className={`px-[16px] py-[8px] rounded-full montserrat bg-[#419066]`}
                    >
                      Captain
                    </button>
                  )}
                  {isShootingGuard === true && (
                    <button
                      className={`px-[16px] py-[8px] rounded-full montserrat bg-[#DB5F66]`}
                    >
                      Shooting Guard
                    </button>
                  )}
                  {center === true && (
                    <button
                      className={`px-[16px] py-[8px] rounded-full montserrat bg-[#D1AE61]`}
                    >
                      Center
                    </button>
                  )}
                  {pointGuard === true && (
                    <button
                      className={`px-[16px] py-[8px] rounded-full montserrat bg-[#EEA74F]`}
                    >
                      Point Guard
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlayersCard;
