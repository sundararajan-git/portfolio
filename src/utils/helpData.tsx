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
    route: "experience",
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

export const projectTree = {
  product_store: {
    name: "Product Store - MERN Stack Application",
    videoUrl: "https://www.youtube.com/embed/2r5h9e1b4xk",
    introduction:
      "Product Store is a full-stack e-commerce application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This platform allows users to browse products, add them to a cart, and complete their purchases seamlessly.",
    techStack: [
      "Frontend: React.js, Redux (State Management), Tailwind CSS",
      "Backend: Node.js, Express.js, MongoDB",
      "Authentication: JWT (JSON Web Token)",
      "Database Management: Mongoose",
      "File Uploads: Multer",
      "Deployment: Render.com (backend) and github (frontend)",
    ],
    working: [
      "User Authentication – Secure login and registration using JWT authentication.",
      "Product Listing – Products are fetched from MongoDB and displayed in an interactive UI.",
      "Cart Management – Users can add/remove items in their cart using Redux state management.",
      "Checkout Process – Order placement and backend processing for orders.",
      "Admin Dashboard – Admins can manage products and orders.",
    ],
    screeShots: [
      "imaqge1",
      "imaqge2",
      "imaqge3",
      "imaqge4",
      "imaqge5",
      "imaqge6",
    ],
    links: [
      "Github Link -  https://github.com",
      "Live Link -  https://github.com",
    ],
  },
};
