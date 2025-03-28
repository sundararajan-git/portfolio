import { ReactNode } from "react";
import { BsGithub } from "react-icons/bs";
import { FaMediumM } from "react-icons/fa";
import { FaCodepen, FaYoutube } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { PiGearFill } from "react-icons/pi";
import { RiUser4Fill } from "react-icons/ri";
import { TbLayoutGridFilled } from "react-icons/tb";
import { TiHome } from "react-icons/ti";

export type tabShape = {
  name: string;
  route: string;
  icon: ReactNode;
  active: boolean;
};

export const tabs = [
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
    icon: <TbLayoutGridFilled size={18} />,
    active: false,
  },
  {
    name: "Contact",
    route: "contact",
    icon: <MdPermContactCalendar size={18} />,
    active: false,
  },
];

export const socialLinks = [
  {
    name: "github",
    link: "https://github.com/sundararajan-git",
    icon: <BsGithub size={15} />,
  },
  {
    name: "codepen",
    link: "https://codepen.io/sundararajan-git",
    icon: <FaCodepen size={15} />,
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/@BitCode64",
    icon: <FaYoutube size={15} />,
  },
  {
    name: "medium",
    link: "https://medium.com/@sundararajanselvarasu",
    icon: <FaMediumM size={13} />,
  },
];
