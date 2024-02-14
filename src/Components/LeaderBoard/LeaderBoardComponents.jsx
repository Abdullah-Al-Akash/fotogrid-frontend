import LeaderBoard from "./LeaderBoardTable";
import LeaderBoardTopbar from "./LeaderBoardTopbar";

const LeaderBoardComponents = () => {
  return (
    <main className="min-h-screen bg-primary montserrat">
      <LeaderBoardTopbar />
      <LeaderBoard />
    </main>
  );
};

export default LeaderBoardComponents;
