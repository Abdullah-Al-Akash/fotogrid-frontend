import LeaderBoard from "./LeaderBoard";
import PlayerTopbar from "./PlayerTopbar";

const PlayersComponents = () => {
  return (
    <main className="min-h-screen bg-primary montserrat">
      <PlayerTopbar />
      <LeaderBoard />
    </main>
  );
};

export default PlayersComponents;
