import { useContext } from "react";
import { FiMoon } from "react-icons/fi";
import { HiSun } from "react-icons/hi";
import { ThemeContext } from "../layouts/Provider";

const ThemeSwitch = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return (
    <div className="flex justify-between sm:justify-end sm:px-4 sm:py-4 w-full">
      <p className="text-lg font-semibold sm:hidden ">PROTFOLIO</p>
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          className="theme-controller outline-none"
          value="synthwave"
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <HiSun className="swap-off h-5 w-5 fill-current" />
        <FiMoon className="swap-on h-5 w-5 fill-current" />
      </label>
    </div>
  );
};
export default ThemeSwitch;
