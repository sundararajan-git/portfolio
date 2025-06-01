import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { tabs, tabShape } from "../utils/helpData";

const DockBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [navTabs, setNavTabs] = useState<tabShape[]>(tabs);

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setNavTabs((prev) => {
      const clone = prev.map((i) => {
        if (i.route === path) {
          return { ...i, active: true };
        } else if (i.route === "home" && path === "") {
          return { ...i, active: true };
        } else {
          return { ...i, active: false };
        }
      });
      return clone;
    });
  }, [location.pathname]);
  return (
    <div className="dock dock-xs h-fit">
      {navTabs?.map((t, index) => {
        return (
          <div
            className="flex flex-col gap-1"
            key={index}
            onClick={() => navigate(t?.route)}
          >
            <button
              className={`${
                t.active ? "bg-accent text-base-100 rounded-lg" : ""
              } gap-1 text-md px-2 py-2 cursor-pointer`}
            >
              {t?.icon}
            </button>
            <span className="text-sm">{t?.name}</span>
          </div>
        );
      })}
    </div>
  );
};
export default DockBar;
