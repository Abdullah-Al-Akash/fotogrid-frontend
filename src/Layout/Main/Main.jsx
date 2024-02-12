import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="max-w-[1512px] md:mx-auto mx-2">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
