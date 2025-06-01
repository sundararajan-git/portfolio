import { BsFillGridFill } from "react-icons/bs";
import { MdFileDownload, MdWorkHistory } from "react-icons/md";
import { RiPoliceBadgeFill, RiUser4Fill } from "react-icons/ri";
import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
// import user from "../../public/user.png";
import user from "../assets/avatar.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const smoothCount = useSpring(count, { stiffness: 20, damping: 35 });

  const [displayCount, setDisplayCount] = useState(0);
  const [_, setPrevCount] = useState(0); // Store previous number

  useEffect(() => {
    if (isInView) {
      count.set(10); // Start animation when in view

      const unsubscribe = smoothCount.on("change", (latest) => {
        setPrevCount(displayCount); // Store previous number
        setDisplayCount(Math.round(latest));
      });

      return () => unsubscribe();
    }
  }, [isInView]);

  return (
    <section className="w-full h-full sm:p-2 overflow-scroll flex flex-col gap-4 fade-up">
      <div className="flex flex-col gap-4 mt-[2%]">
        <span className="bg-base-100 font-medium hidden sm:flex items-center gap-3 rounded text-lg w-fit">
          <RiUser4Fill /> Who am I ?
        </span>
        <motion.span
          className="text-2xl font-semibold sm:mt-4"
          initial={{ opacity: 1, x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          About Me
        </motion.span>
        <div className="flex flex-row gap-2">
          <motion.img
            src={user}
            alt="Movie"
            className="rounded-2xl w-1/4 h-fit mt-4 hidden sm:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <div className="flex flex-col items-start gap-4 w-full sm:p-4 ">
            <motion.div
              className="sm:p-4 bg-base-100 rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p className="text-2xl font-medium">BIO</p>
              <p className="py-3 text-xl fade-up text-justify font-[500]">
                I am Sundararajan , from Tamil nadu . I am "MERN Stack Developer
                with expertise in building dynamic and scalable web applications
                using MongoDB, Express, React, and Node.js. Passionate about
                clean code, performance optimization, and creating seamless user
                experiences.”
              </p>
            </motion.div>
            <motion.div
              className="sm:p-4 bg-base-100 rounded-lg w-full flex flex-col gap-2 text-lg font-[500]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <li className="flex items-center justify-between fade-up">
                <span>Age</span>
                <span>25</span>
              </li>
              <li className="flex items-center justify-between fade-up">
                <span>Residence </span>
                <span>INDIA</span>
              </li>
              <li className="flex items-center justify-between fade-up">
                <span>Email</span>
                <span>sundrarajanselvarasu@gmail.com</span>
              </li>
              <li className="flex items-center justify-between fade-up">
                <span>Phone</span>
                <span>+91 8148133743</span>
              </li>
            </motion.div>
            <motion.div
              className="flex items-center mt-2 w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.01 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <button className="btn btn-accent text-lg">
                RESUME
                <MdFileDownload size={20} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="bg-base-100 font-medium hidden sm:flex items-center gap-3 rounded text-lg w-fit">
          <MdWorkHistory /> What can I do?
        </span>
        <motion.span
          className="text-2xl font-semibold mt-4"
          initial={{ opacity: 1, x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Skills
        </motion.span>
        <div className="flex flex-col gap-2 sm:p-0">
          <SkillBadges />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="bg-base-100 font-medium hidden sm:flex items-center gap-3 rounded text-lg w-fit">
          <RiPoliceBadgeFill /> Achievements
        </span>
        <motion.span
          className="text-2xl font-semibold mt-4"
          initial={{ opacity: 1, x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Fun Fcats
        </motion.span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <AnimatedStat icon={BsFillGridFill} title="Projects" endValue={12} />

          <AnimatedStat
            icon={BsFillGridFill}
            title="Personal Projects"
            endValue={10}
          />

          <AnimatedStat
            icon={BsFillGridFill}
            title="Npm Package"
            endValue={1}
          />
        </div>
      </div>
    </section>
  );
};
export default About;

const AnimatedStat = ({
  icon: Icon,
  title,
  endValue,
}: {
  icon: any;
  title: string;
  endValue: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const smoothCount = useSpring(count, {
    stiffness: 20,
    damping: 15,
  });

  const [displayCount, setDisplayCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      count.set(endValue);

      const unsubscribe = smoothCount.on("change", (latest) => {
        setPrevCount(displayCount);
        setDisplayCount(Math.round(latest));
      });

      return () => unsubscribe();
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="stat bg-base-100 rounded-xl p-1 sm:px-4 bg-red1-500"
    >
      <div className="stat-figure mt-2 text-black">
        <Icon size={25} />
      </div>
      <div className="stat-title text-lg font-[500]">{title}</div>
      <div className="relative h-16 flex items-start justify-start overflow-hidden">
        <motion.div
          key={prevCount}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -20, opacity: 0 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute text-5xl font-bold"
        >
          {prevCount}
        </motion.div>

        <motion.div
          key={displayCount}
          initial={{ y: 20, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute text-5xl font-bold"
        >
          {displayCount}
        </motion.div>
      </div>
      <div className="stat-desc text-sm font-[500]">Last Year</div>
    </div>
  );
};

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJquery,
  SiRedux,
  SiTailwindcss,
  SiChakraui,
  SiShadcnui,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiFirebase,
  SiMongoose,
  SiVercel,
  SiGithub,
  SiMui,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoMdCloudUpload } from "react-icons/io";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "jQuery", icon: <SiJquery className="text-blue-400" /> },
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-500" />,
      },
      { name: "Chakra UI", icon: <SiChakraui className="text-green-500" /> },
      { name: "ShadCN", icon: <SiShadcnui className="text-gray-500" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-500" /> },
      { name: "Material UI", icon: <SiMui className="text-blue-600" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      {
        name: "Express.js",
        icon: <SiExpress className="text-primary" />,
      },
      { name: "JWT", icon: <SiJsonwebtokens className="text-yellow-600" /> },
      { name: "Mongoose", icon: <SiMongoose className="text-red-500" /> },
      { name: "Multer", icon: <IoMdCloudUpload className="text-gray-500" /> },
      { name: "Python", icon: <FaPython className="text-blue-400" /> },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "VS Code",
        icon: <VscVscode className="text-blue-500" />,
      },
      {
        name: "GitHub",
        icon: <SiGithub className="text-primary" />,
      },
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      {
        name: "Vercel",
        icon: <SiVercel className="text-primary" />,
      },
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    ],
  },
];

const SkillBadges = () => {
  const controls = useAnimation();
  return (
    <motion.div
      className="p-0 sm:p-6 bg-base-100 rounded-lg sm:shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {skills.map((skillCategory, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-medium mb-4">{skillCategory.category}</h3>
          <div className="flex flex-wrap gap-3">
            {skillCategory.items.map((skill, idx) => (
              <motion.div
                key={idx}
                className="badge badge-ghost flex items-center gap-2 p-3 text-lg hover:scale-105 transition-all cursor-pointer rounded-md font-[500]"
                drag
                onDragEnd={() => {
                  controls.start({ x: 0, y: 0 });
                }}
                animate={controls}
                initial={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {skill.icon} {skill.name}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};
