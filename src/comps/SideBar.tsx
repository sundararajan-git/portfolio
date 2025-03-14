import { BsGithub } from "react-icons/bs";
import { FaCodepen, FaMediumM, FaYoutube } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { RiHome6Fill, RiUser4Fill } from "react-icons/ri";
import { SiHeadlessui } from "react-icons/si";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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
    // <div className="drawer justify-center w-full">
    //   <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content py-4 w-full">
    //     <label htmlFor="my-drawer" className="drawer-button">
    //       <BsLayoutSidebarInset className="size-6 cursor-pointer" />
    //     </label>
    //   </div>
    //   <div className="drawer-side">
    //     <label
    //       htmlFor="my-drawer"
    //       aria-label="close sidebar"
    //       className="drawer-overlay"
    //     ></label>
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: "0.6", ease: "easeInOut" }}
      className="w-full h-full bg-white z-50"
    >
      <div className="flex flex-col gap-4 items-center justify-around h-full py-4">
        <div className="flex flex-col items-center">
          <div className="avatar avatar-online p-2">
            <div className="w-18  rounded-full">
              <img src="https://avatars.githubusercontent.com/u/121149600?s=400&u=246c66002edff83cb1defc693566c5185b262fb6&v=4" />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full items-center">
            <p className="text-md font-semibold">Sundar S</p>
            <p className="text-xs">Mern Satack Devloper</p>
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
                  className={`${tab?.active ? "menu-active" : ""} `}
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
                <button className="btn btn-sm px-2.5 py-4 hover:btn-primary">
                  {link?.icon}
                </button>
              );
            })}
          </div>
          <div className="p-2 text-xs">
            <p className="text-gray-500">@2025 Sundar</p>
          </div>
        </div>
      </div>
    </motion.div>
    //   </div>
    // </div>
  );
};
export default SideBar;

{
  /* <motion.div
initial={{ x: -100 }}
animate={{ x: 0 }}
transition={{ duration: "0.6", ease: "easeInOut" }}
className="w-full h-full"
>
<div className="flex flex-col gap-4 items-center justify-around h-full py-4">
  <div className="flex flex-col items-center">
    <div className="avatar avatar-online p-2">
      <div className="w-18  rounded-full">
        <img src="https://avatars.githubusercontent.com/u/121149600?s=400&u=246c66002edff83cb1defc693566c5185b262fb6&v=4" />
      </div>
    </div>
    <div className="flex flex-col gap-2 w-full items-center">
      <p className="text-md font-semibold">Sundar S</p>
      <p className="text-xs">Mern Satack Devloper</p>
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
            className={`${tab?.active ? "menu-active" : ""} `}
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
          <button className="btn btn-sm px-2.5 py-4 hover:btn-primary">
            {link?.icon}
          </button>
        );
      })}
    </div>
    <div className="p-2 text-xs">
      <p className="text-gray-500">@2025 Sundar</p>
    </div>
  </div>
</div>
</motion.div> */
}
