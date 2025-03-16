import { Outlet } from "react-router-dom";
import SideBar from "../comps/SideBar";
import DockBar from "../comps/DockBar";
import ThemeSwitch from "../comps/ThemeSwitch";
import { createContext, useState } from "react";
import LgSideBar from "../comps/LgSideBar";

export const ThemeContext = createContext<any>(null);

const Provider = () => {
  const [theme, setTheme] = useState<string>("dark");
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div
        data-theme={theme}
        className="h-screen flex flex-col-reverse sm:flex-row overflow-hidden p-3 sm:p-1"
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

        <div className="flex flex-col h-full overflow-hidden w-full justify-between gap-4 sm:gap-2">
          <ThemeSwitch />
          <Outlet />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
export default Provider;
