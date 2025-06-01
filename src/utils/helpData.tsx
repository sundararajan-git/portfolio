import { ReactNode } from "react";
import { BsGithub } from "react-icons/bs";
import { FaMediumM } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { PiGearFill } from "react-icons/pi";
import { RiUser4Fill } from "react-icons/ri";
import { TbLayoutGridFilled } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import product_store_app from "/product_store/app.png";
import product_store_iamge1 from "/product_store/image1.png";
import product_store_iamge2 from "/product_store/image2.png";
import product_store_iamge3 from "/product_store/image3.png";
import product_store_iamge4 from "/product_store/image4.png";
import product_store_iamge5 from "/product_store/image5.png";
import product_store_iamge6 from "/product_store/image6.png";
import product_store_iamge7 from "/product_store/image7.png";
import product_store_iamge8 from "/product_store/image8.png";
import product_store_iamge9 from "/product_store/image9.png";
import product_store_iamge10 from "/product_store/image10.png";
import product_store_iamge11 from "/product_store/image11.png";
import product_store_iamge12 from "/product_store/image12.png";
import product_store_iamge13 from "/product_store/image13.png";
import product_store_iamge14 from "/product_store/image14.png";
import { SiLeetcode } from "react-icons/si";

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
    name: "leetcode",
    link: "https://leetcode.com/u/sundararajan-git/",
    icon: <SiLeetcode size={13} />,
  },
  {
    name: "medium",
    link: "https://medium.com/@sundararajanselvarasu",
    icon: <FaMediumM size={13} />,
  },
  // {
  //   name: "youtube",
  //   link: "https://www.youtube.com/@BitCode64",
  //   icon: <FaYoutube size={15} />,
  // },
];

export const workProjects = [
  {
    title: "CRM (Customer Relationship Management)",
    description:
      "An in-development module dedicated to enhancing customer relationship management processes for the CRM department, aimed at streamlining client interactions and improving customer service delivery.",
  },
  {
    title: "HRMS (Human Resource Management System)",
    description:
      "An HR request system used by department managers to initiate hiring requests. It automates workflows requiring HOD approvals and streamlines communication with the HR department.",
  },
  {
    title: "MRS (Material Requisition System)",
    description:
      "A cross-departmental tool used by Engineering, Purchase, Stores, Accounts, and Board of Directors. It manages material requisitions, facilitates approval workflows, and streamlines purchase order generation within the constraints of project budgets.",
  },
  {
    title: "SITE CONTRACTS",
    description:
      "A contract management system used by the Engineering department to issue and manage work orders with vendors, ensuring contractual obligations are met efficiently.",
  },
  {
    title: "MOM (Minutes of Meeting)",
    description:
      "A collaborative platform for recording, sharing, and tracking action points discussed during departmental and team meetings. It helps ensure follow-ups and completion of assigned tasks across the organization.",
  },
  {
    title: "CHECKLIST MODULE",
    description:
      "A productivity tool that enables employees to create, manage, and share work-specific checklists under categorized titles, promoting better task organization and accountability.",
  },
  {
    title: "MASTER CHECKLIST",
    description:
      "This module supports the Engineering department and the Board of Directors by providing a centralized platform to oversee and manage pre-construction activities, ensuring readiness before project execution.",
  },
  {
    title: "WORK SCHEDULE",
    description:
      "A specialized tool within our web platform designed for the Engineering department and the Board of Directors. It facilitates the scheduling, monitoring, and management of construction activities at various project sites.",
  },
  // {
  //   title: "TASK MODULE",
  //   description:
  //     "A core module within our internal web application, used company-wide to delegate tasks to subordinates efficiently. It streamlines work scheduling, tracks employee productivity, and identifies delays in task execution.",
  // },
  // {
  //   title: "TICKET SYSTEM",
  //   description:
  //     "An internal ticketing system integrated into our web app, enabling employees from any department to raise and manage tickets across the organization. This system was developed to minimize reliance on external email platforms like Gmail for internal communications.",
  // },
];

export const personalProjects: any = {
  product_store: {
    title: "Product Store",
    thumbnail: product_store_app,
    description:
      "A CURD operation with a product store using React, Redux, and Tailwind CSS.",
    badge: [
      <div className="badge bg-green-50 dark:bg-transparent text-green-600 rounded-4xl text-sm">
        MERN
      </div>,
    ],
    youtubeVideoUrl: "https://www.youtube.com/embed/2r5h9e1b4xk",
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
    imagurls: [
      product_store_iamge1,
      product_store_iamge2,
      product_store_iamge3,
      product_store_iamge4,
      product_store_iamge5,
      product_store_iamge6,
      product_store_iamge7,
      product_store_iamge8,
      product_store_iamge9,
      product_store_iamge10,
      product_store_iamge11,
      product_store_iamge12,
      product_store_iamge13,
      product_store_iamge14,
    ],
    links: [
      "Github Link - https://github.com/sundararajan-git/product_store",
      "Live Link - https://sundararajan-git.github.io/product_store/",
    ],
  },
};
