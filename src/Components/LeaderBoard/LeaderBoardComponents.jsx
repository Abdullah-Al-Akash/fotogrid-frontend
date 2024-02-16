import LeaderBoard from "./LeaderBoardTable";
import LeaderBoardTopbar from "./LeaderBoardTopbar";

const LeaderBoardComponents = () => {
  return (
    <main className="min-h-screen bg-primary montserrat mt-[24px] fotogrit-container">
      <LeaderBoardTopbar />
      <LeaderBoard />
    </main>
  );
};

export default LeaderBoardComponents;
