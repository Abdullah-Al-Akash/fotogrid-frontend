import HeadingOfScore from "./HeadingOfScore";
import Legends from "./Legends";
import TotalScoreTable from "./TotalScoreTable";
import WarriorsTable from "./WarriorsTable";

const ScoreDetail = () => {
  return (
    <div className="md:mx-[8px] mx-[0] my-[16px] bg-white md:p-[24px] p-[10px]">
      <HeadingOfScore></HeadingOfScore>
      <TotalScoreTable></TotalScoreTable>
      <WarriorsTable></WarriorsTable>
      <Legends></Legends>
    </div>
  );
};

export default ScoreDetail;
