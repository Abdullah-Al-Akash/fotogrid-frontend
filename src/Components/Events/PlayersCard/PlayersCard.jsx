import player1 from "../../../../public/Images/events-players/player-1.png";
import player2 from "../../../../public/Images/events-players/player-2.png";
import player3 from "../../../../public/Images/events-players/player-3.png";
import player4 from "../../../../public/Images/events-players/player-4.png";
import jersey from "../../../../public/Images/events-players/Jersey.png";
import line from "../../../../public/Images/events-players/Line.png";

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
    },
    {
      _id: "player-two",
      image: player2,
      playerName: "Robert De Niro",
      playJerseyNumber: 32,
      playerAge: 9,
      BloodGroup: "KU 10",
      playerPosition: {
        isCaptain: false,
        isShootingGuard: false,
        center: true,
        pointGuard: false,
      },
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
    },
    {
      _id: "player-four",
      image: player4,
      playerName: "Ben Gutama",
      playJerseyNumber: 47,
      playerAge: 9,
      BloodGroup: "KU 10",
      playerPosition: {
        isCaptain: false,
        isShootingGuard: true,
        center: false,
        pointGuard: false,
      },
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[24px] xl:px-24 py-8">
      {players?.map((player) => {
        const {
          _id,
          image,
          playerName,
          playJerseyNumber,
          playerAge,
          BloodGroup,
          playerPosition: { isCaptain, isShootingGuard, center, pointGuard },
        } = player || {};

        return (
          <div
            key={_id}
            className="sm:h-[460px] sm:w-[316px] mx-auto bg-[#E5D5C9] "
          >
            <div className="sm:h-[60%] pt-[10px] md:pt-[24px] px-[10px] md:px-[24px]">
              <img
                className="sm:h-[242px] sm:w-[242px] mx-auto object-contain"
                src={image}
                alt=""
              />
            </div>
            <div
              style={{ clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 100%)" }}
              className="sm:h-[40%] bg-[#1A1A1A]"
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
                    <div className="flex items-center montserrat  sm:text-[20px] text-[#7D7D7D]">
                      <p>
                        Age {playerAge}, {BloodGroup}
                      </p>
                    </div>
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
