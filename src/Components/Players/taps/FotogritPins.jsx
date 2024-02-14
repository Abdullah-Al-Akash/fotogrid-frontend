const FotogritPins = () => {
  return (
    <div>
      <h2 className="uppercase text-[32px] leading-[42px] bebas-Neue text-[#1A1A1A]">
        You Have 12 Fotogrit Pins
      </h2>

      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[16px] mt-[16px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => {
          return (
            <article
              key={item}
              className="bg-white my-[18px] sm:my-auto p-[24px] rounded-[6px]"
            >
              <img
                className="w-full"
                src="../../../../public/Logo (3).png"
                alt="player image"
              />
              <div className="text-center">
                <h3 className="text-[14px] mt-[24px] leading-[24px] text-[#7D7D7D]">
                  Event Group TitIe
                </h3>
                <h2 className="bebas-Neue mt-[12px] uppercase text-[#1A1A1A] font-bold">
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
