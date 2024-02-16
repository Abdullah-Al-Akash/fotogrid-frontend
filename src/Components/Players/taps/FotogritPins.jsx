const FotogritPins = () => {
  return (
    <div>
      <h2 className="uppercase text-[32px] leading-[42px] bebas-Neue text-[#1A1A1A] py-[24px]">
        You Have 12 Fotogrit Pins
      </h2>

      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[16px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => {
          return (
            <article
              key={item}
              className="bg-white my-[18px] sm:my-auto p-[24px] rounded-[6px]"
            >
              <div>
                <img
                  className="w-[160px] border-[3px] border-[#CCCCCC] rounded-full mx-auto mt-[18px]  "
                  src={`/fotogrit-pins/logo${item}.png`}
                  alt="icon"
                />
              </div>

              <div className="text-center">
                <h3 className="text-[14px] mt-[24px] leading-[24px] text-[#7D7D7D]">
                  Event Group TitIe
                </h3>
                <h2 className="bebas-Neue mt-[12px] uppercase text-[#1A1A1A] bebas-Neue">
                  Fotogrit Pins Name Name
                </h2>
                <p className="text-[#4A4A4A] mt-[16px] text-[16px] leading-[28px]">
                  2023
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default FotogritPins;
