import { MdContacts } from "react-icons/md";
import { RiHome6Fill, RiUser4Fill } from "react-icons/ri";
import { SiHeadlessui } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
import { PiGearFill } from "react-icons/pi";
import { ReactNode, useEffect, useState } from "react";

const tabs = [
  {
    name: "Home",
    route: "home",
    icon: <RiHome6Fill size={18} />,
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
    route: "exprience",
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
    icon: <MdContacts size={18} />,
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
    <div className="dock dock-md gap-2">
      {navTabs?.map((t) => {
        return (
          <button
            className={`${
              t.active ? "text-primary" : ""
            } gap-1 hover:text-black`}
            onClick={() => navigate(t?.route)}
          >
            {t?.icon}
            <span className="text-xs">{t?.route}</span>
          </button>
        );
      })}
    </div>
  );
};
export default DockBar;
