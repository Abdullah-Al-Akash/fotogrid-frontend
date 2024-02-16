import HomeDropDown from "../HomeDropDown/HomeDropDown";
import HomeCard from "../HomeCard/HomeCard";
const HomeComponent = () => {
  return (
    <div className="bg-[#F2F2F2] border-[#E8E8E8]">
      <div className="fotogrit-container">
        <HomeDropDown></HomeDropDown>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[24px] pb-[24px]">
          <HomeCard></HomeCard>
          <HomeCard></HomeCard>
          <HomeCard></HomeCard>
          <HomeCard></HomeCard>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
