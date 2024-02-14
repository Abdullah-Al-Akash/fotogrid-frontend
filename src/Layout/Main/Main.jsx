import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Topvar from "../../Shared/Topvar/Topvar";

const Main = () => {
  return (
    <div className="max-w-[1512px] xl:mx-auto  mx-3">
      <Topvar></Topvar>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
