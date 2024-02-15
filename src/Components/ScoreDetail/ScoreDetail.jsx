import HeadingOfScore from "./HeadingOfScore";
import TotalScoreTable from "./TotalScoreTable";

const ScoreDetail = () => {
  return (
    <div className="mx-[8px] my-[16px] bg-white md:p-[24px] p-[10px]">
      <HeadingOfScore></HeadingOfScore>
      <TotalScoreTable></TotalScoreTable>
    </div>
  );
};

export default ScoreDetail;
