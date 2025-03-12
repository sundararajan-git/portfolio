import { Outlet } from "react-router-dom";
import SideBar from "../comps/SideBar";
import DockBar from "../comps/DockBar";

const Provider = () => {
  return (
    <div
      data-theme="light"
      className="bg-white h-screen flex flex-col-reverse sm:flex-row"
    >
      <div className="hidden sm:block">
        <SideBar />
      </div>
      <div className="block sm:hidden">
        <DockBar />
      </div>
      <Outlet />
    </div>
  );
};
export default Provider;
