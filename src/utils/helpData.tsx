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
    thumbnail:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    description:
      "A CURD operation with a product store using React, Redux, and Tailwind CSS.",
    badge: [
      <div className="badge badge-secondary rounded-4xl text-sm">NEW</div>,
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
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    ],
    links: [
      "Github Link - https://github.com",
      "Live Link - https://github.com",
    ],
  },
};
