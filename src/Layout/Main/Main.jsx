import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="max-w-[1512px] xl:mx-auto  mx-3">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
