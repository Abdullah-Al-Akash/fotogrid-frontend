import PlayerInfo from "./PlayerInfo";
import PlayersTopBar from "./PlayersTopBar";

const PlayersComponents = () => {
  return (
    <main className="min-h-screen bg-[#1E1E1E] montserrat ">
      <PlayersTopBar />
      <PlayerInfo />
    </main>
  );
};

export default PlayersComponents;
