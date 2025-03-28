import { BsFillGridFill } from "react-icons/bs";
import { MdFileDownload, MdWorkHistory } from "react-icons/md";
import { RiPoliceBadgeFill, RiUser4Fill } from "react-icons/ri";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
        <span className="bg-base-100 font-medium flex items-center gap-3 rounded text-lg w-fit px-2 py-1">
          <RiUser4Fill /> Who am I ?
        </span>
        <span className="text-2xl font-medium sm:mt-4 fade-up">About Me</span>
        <div className="flex flex-row gap-2">
          <img
            src="https://avatars.githubusercontent.com/u/121149600?s=400&u=246c66002edff83cb1defc693566c5185b262fb6&v=4"
            alt="Movie"
            className="rounded-2xl w-1/4 h-fit mt-4 hidden sm:block"
          />
          <div className="flex flex-col items-start gap-4 w-full sm:p-4">
            <div className="p-4 bg-base-100 rounded-lg">
              <p className="text-2xl font-medium">Bio</p>
              <p className="py-3 text-xl fade-up">
                I am Sundararajan , from Tamil nadu . I am "MERN Stack Developer
                with expertise in building dynamic and scalable web applications
                using MongoDB, Express, React, and Node.js. Passionate about
                clean code, performance optimization, and creating seamless user
                experiences.”
              </p>
            </div>
            <div className="p-4 bg-base-100 rounded-lg w-full flex flex-col gap-2 text-lg">
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
            </div>
            <div className="flex items-center mt-2 w-full">
              <button className="btn btn-accent text-lg">
                Download CV
                <MdFileDownload size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="bg-base-100 font-medium flex items-center gap-3 rounded text-lg w-fit px-2 py-1">
          <MdWorkHistory /> What can I do?
        </span>
        <span className="text-2xl font-medium mt-4 fade-up">Skills</span>
        <div className="flex flex-col gap-2 p-2">
          <SkillBadges />
        </div>
      </div>
      <br />
      <div className="flex flex-col gap-4">
        <span className="bg-base-100 font-medium flex items-center gap-3 rounded text-lg w-fit px-2 py-1">
          <RiPoliceBadgeFill /> Achievements
        </span>
        <span className="text-2xl font-medium mt-4 fade-up">Fun Fcats</span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:p-4">
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
    <div ref={ref} className="stat bg-base-100 rounded-xl">
      <div className="stat-figure mt-2 text-black">
        <Icon size={25} />
      </div>
      <div className="stat-title text-lg">{title}</div>
      {/* Rolling Number Animation */}
      <div className="relative h-16 flex items-start justify-start overflow-hidden">
        {/* Old number moving up */}
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

        {/* New number coming from below */}
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
      <div className="stat-desc text-sm">Last Year</div>
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
  SiMuller,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

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
      { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-yellow-600" /> },
      { name: "Mongoose", icon: <SiMongoose className="text-red-500" /> },
      { name: "Multer", icon: <SiMuller className="text-gray-500" /> },
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
        icon: <VscCode className="text-blue-500" />,
      },
      { name: "GitHub", icon: <SiGithub className="text-black" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    ],
  },
];

const SkillBadges = () => {
  return (
    <div className="sm:p-6 bg-base-100 rounded-lg sm:shadow-md">
      {skills.map((skillCategory, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-medium mb-2">{skillCategory.category}</h3>
          <div className="flex flex-wrap gap-3">
            {skillCategory.items.map((skill, idx) => (
              <div
                key={idx}
                className="badge badge-ghost flex items-center gap-2 p-3 text-lg hover:scale-105 transition-all cursor-pointer rounded-md"
              >
                {skill.icon} {skill.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
