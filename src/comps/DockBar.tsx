import { MdPermContactCalendar } from "react-icons/md";
import { RiUser4Fill } from "react-icons/ri";
import { SiHeadlessui } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
import { PiGearFill } from "react-icons/pi";
import { ReactNode, useEffect, useState } from "react";
import { TiHome } from "react-icons/ti";

const tabs = [
  {
    name: "Home",
    route: "home",
    icon: <TiHome size={18} />,
    active: true,
  },
  {
    name: "About",
    route: "about",
    icon: <RiUser4Fill size={18} />,
    active: false,
  },
  {
    name: "Experience",
    route: "experience",
    icon: <PiGearFill size={18} />,
    active: false,
  },
  {
    name: "Projects",
    route: "projects",
    icon: <SiHeadlessui size={18} />,
    active: false,
  },
  {
    name: "Contact",
    route: "contact",
    icon: <MdPermContactCalendar size={18} />,
    active: false,
  },
];

type tabShape = {
  name: string;
  route: string;
  icon: ReactNode;
  active: boolean;
};

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
        } else {
          return { ...i, active: false };
        }
      });
      return clone;
    });
  }, [location.pathname]);
  return (
    <div className="dock dock-xs bg-red-6001 h-fit">
      {navTabs?.map((t) => {
        return (
          <div className="flex flex-col gap-1">
            <button
              className={`${
                t.active ? "bg-accent text-base-100 rounded-lg" : ""
              } gap-1 text-md px-2 py-2 cursor-pointer`}
              onClick={() => navigate(t?.route)}
            >
              {t?.icon}
            </button>
            <span className="text-xs">{t?.name}</span>
          </div>
        );
      })}
    </div>
  );
};
export default DockBar;
