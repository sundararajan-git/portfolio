import { BsGithub, BsLayoutSidebarInset } from "react-icons/bs";
import { FaCodepen, FaMediumM, FaYoutube } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { RiUser4Fill } from "react-icons/ri";
import { SiHeadlessui } from "react-icons/si";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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
    icon: <MdPermContactCalendar size={18} />,
    active: false,
  },
];

const socialLinks = [
  {
    name: "github",
    link: "",
    icon: <BsGithub size={15} />,
  },
  {
    name: "codepen",
    link: "",
    icon: <FaCodepen size={15} />,
  },
  {
    name: "youtube",
    link: "",
    icon: <FaYoutube size={15} />,
  },
  {
    name: "medium",
    link: "",
    icon: <FaMediumM size={13} />,
  },
];

type tabShape = {
  name: string;
  route: string;
  icon: ReactNode;
  active: boolean;
};

const SideBar = () => {
  const location = useLocation();
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
    <div className="drawer w-full z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-2 w-full">
        <label htmlFor="my-drawer" className="drawer-button">
          <BsLayoutSidebarInset className="size-6 cursor-pointer" />
        </label>
      </div>
      <div className="drawer-side bg-base-100">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: "0.6", ease: "easeInOut" }}
          className="w-[40%] h-full bg-base-100"
        >
          <div className="flex flex-col gap-4 items-center justify-between h-full py-4">
            <div className="flex flex-col items-center">
              <div className="avatar p-1">
                <div className="w-16  rounded-full">
                  <img src="https://avatars.githubusercontent.com/u/121149600?s=400&u=246c66002edff83cb1defc693566c5185b262fb6&v=4" />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full items-center">
                <p className="text-xl font-semibold">Sundar S</p>
                <p className="text-lg">Mern Stack Devloper</p>
              </div>
            </div>

            <ul className="menu">
              {navTabs?.map((tab, index) => {
                return (
                  <motion.li
                    whileHover={{
                      x: 5,
                    }}
                    key={index}
                  >
                    <NavLink
                      to={tab?.route}
                      className={`${tab?.active ? "menu-active" : ""} text-lg `}
                    >
                      {tab?.icon}
                      {tab?.name}
                    </NavLink>
                  </motion.li>
                );
              })}
            </ul>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-4 w-full justify-center pt-3">
                {socialLinks?.map((link) => {
                  return (
                    <button className="btn btn-sm btn-link px-2.5 py-4 hover:btn-primary hover:bg-primary">
                      {link?.icon}
                    </button>
                  );
                })}
              </div>
              <div className="p-2 text-xs">
                <p className="text-gray-500 text-lg">@2025 Sundar</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default SideBar;
