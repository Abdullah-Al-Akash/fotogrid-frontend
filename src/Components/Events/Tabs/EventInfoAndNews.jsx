const EventInfoAndNews = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-[16px] text-[#4A4A4A]">
        <div className="mt-[8px]">
          <h2 className="uppercase bebas-Neue text-[24px] ">Event Info</h2>
          <div className="mt-[16px]">
            <div className="flex flex-col gap-[8px] montserrat text-[20px] font-medium ">
              <li className="">18 February 2023 - 19 March 2023</li>
              <li className="">Total prize: Rp 10.000.000</li>
              <li className="">Location: GOR Lokasari, GOR Bulungan</li>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <h2 className="bebas-Neue uppercase text-[24px] ">Latest news</h2>
          <div className="text-[20px] font-medium montserrat">
            <li className="">
              Location moved from GOR Losari to GOR Padjajaran
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfoAndNews;
