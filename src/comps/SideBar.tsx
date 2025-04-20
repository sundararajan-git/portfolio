import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { socialLinks, tabs, tabShape } from "../utils/helpData";
import { FaBars } from "react-icons/fa";
// import user from "../../public/user.png";
import user from "../assets/avatar.jpg";

const SideBar = () => {
  const location = useLocation();
  const [navTabs, setNavTabs] = useState<tabShape[]>(tabs);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
    setIsDrawerOpen(false);
  }, [location.pathname]);
  return (
    <div className="drawer w-full">
      <input
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        readOnly
      />
      <div className="drawer-content p-2 w-full">
        <label className="drawer-button" onClick={() => setIsDrawerOpen(true)}>
          <FaBars className="size-5 cursor-pointer" />
        </label>
      </div>

      <div className="drawer-side z-50 bg-base-100">
        <label
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => setIsDrawerOpen(false)}
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
      </div>
    </div>
  );
};
export default SideBar;
