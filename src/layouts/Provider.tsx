import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "../comps/SideBar";
import DockBar from "../comps/DockBar";
import ThemeSwitch from "../comps/ThemeSwitch";
import { createContext, useEffect, useState } from "react";
import LgSideBar from "../comps/LgSideBar";

export const ThemeContext = createContext<any>(null);

const Provider = () => {
  const [theme, setTheme] = useState<string>("light");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const cleanPath = location.pathname.replace(/([^:]\/)\/+/g, "$1");
    console.log(cleanPath);
    if (location.pathname !== cleanPath) {
      navigate(cleanPath, { replace: true }); // Replace URL without adding to history
    }
  }, [location, navigate]);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div
        data-theme={theme}
        className="h-[100vh] flex flex-col-reverse justify-between sm:flex-row overflow-hidden p-3 sm:p-1"
      >
        <div className="block sm:hidden w-full">
          <DockBar />
        </div>

        <div className="hidden sm:block lg:hidden w-fit">
          <SideBar />
        </div>

        <div className="hidden lg:block lg:min-w-[23%]">
          <LgSideBar />
        </div>

        <div className="flex flex-col h-[90%] sm:h-full overflow-hidden w-full justify-between items-start gap-4 sm:gap-2">
          <ThemeSwitch />
          <Outlet />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
export default Provider;
