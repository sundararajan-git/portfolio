import { Outlet } from "react-router-dom";
import SideBar from "../comps/SideBar";
import DockBar from "../comps/DockBar";
import ThemeSwitch from "../comps/ThemeSwitch";
import { createContext, useEffect, useState } from "react";

export const ProContext = createContext<any>(null);

const Provider = () => {
  const [theme, setTheme] = useState<string | null>(null);
  useEffect(() => {
    if (!theme) {
      setTheme("dark");
    }
  }, []);
  console.log("it's rendering .. ❤️❤️" + theme);
  return (
    <ProContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div
        data-theme={theme}
        className="bg-white h-screen flex flex-col-reverse sm:flex-row overflow-hidden p-3 sm:p-1"
      >
        <div className="hidden sm:block lg:min-w-[23%]">
          <SideBar />
        </div>
        <div className="block sm:hidden w-full">
          <DockBar />
        </div>
        <div className="flex flex-col h-full overflow-auto w-full justify-between gap-4 sm:gap-2">
          <ThemeSwitch />
          <Outlet />
        </div>
      </div>
    </ProContext.Provider>
  );
};
export default Provider;
