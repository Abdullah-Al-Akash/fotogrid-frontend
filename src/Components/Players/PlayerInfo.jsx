import PlayerPersonalInfo from "./PlayerPersonalInfo";

const PlayerInfo = () => {
  return (
    <section className="border-t-[1px]  border-[#333333] md:grid md:grid-cols-4 gap-[22px]">
      <div className="bg-[#242424] rounded-[6px] mt-[24px]">
        <div className="p-[28px]">
          <img
            className="max-w-[272px] max-h-[272px] h-full w-full rounded-full overflow-hidden"
            src="../../../public/player.png"
            alt=""
          />
        </div>
        <PlayerPersonalInfo />
      </div>
      <div className="col-span-3"></div>
    </section>
  );
};

export default PlayerInfo;
