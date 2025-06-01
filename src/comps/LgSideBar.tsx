import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { socialLinks, tabs, tabShape } from "../utils/helpData";
// import user from "../../public/user.png";
import user from "../assets/avatar.jpg";

const LgSideBar = () => {
  const location = useLocation();
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
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: "0.6", ease: "easeInOut" }}
      className="w-full h-full bg-base-100"
    >
      <div className="flex flex-col gap-4 items-center justify-between h-full py-4">
        <div className="flex flex-col items-center">
          <div className="avatar p-1">
            <div className="w-16  rounded-full">
              <img src={user} />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full items-center">
            <p className="text-xl font-semibold">Sundar S</p>
            <p className="text-lg font-medium">Mern Stack Devloper</p>
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
            {socialLinks?.map((link, index) => {
              return (
                <button
                  className="btn btn-sm btn-link px-2.5 py-4 hover:btn-primary hover:bg-primary"
                  key={index}
                  onClick={() => {
                    window.open(link?.link, "_blank");
                  }}
                >
                  {link?.icon}
                </button>
              );
            })}
          </div>
          <div className="p-2 text-sm">
            <p className="text-gray-500 text-lg">@2025 Sundar</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default LgSideBar;
