import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Topvar from "../../Shared/Topvar/Topvar";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
  // max-w-[1512px] xl:mx-auto  mx-3
  return (
    <div className="">
      <Topvar></Topvar>
      <Navbar></Navbar>
      <div className="md:min-h-[calc(100vh-172px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
