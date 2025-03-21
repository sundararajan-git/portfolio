import { BsFillGridFill } from "react-icons/bs";
import { MdFileDownload, MdWorkHistory } from "react-icons/md";
import { RiPoliceBadgeFill, RiUser4Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import html from "../assets/html.svg";
import jquery from "../assets/Jquery.svg";
import css from "../assets/css.svg";
import express from "../assets/express.svg";
import js from "../assets/js.svg";
import jwt from "../assets/jwt.svg";
import mongoDB from "../assets/mongoDB.svg";
import mongose from "../assets/mongose.svg";
import nodeJs from "../assets/nodeJs.svg";
import reactJs from "../assets/react.svg";
import reactNative from "../assets/reactNative.svg";
import redux from "../assets/redux.svg";
import tailwindCss from "../assets/tailwindCss.svg";
import typeScript from "../assets/typeScript.svg";

const About = () => {
  const iconsList1 = [
    html,
    css,
    jquery,
    js,
    typeScript,
    reactJs,
    redux,
    reactNative,
    tailwindCss,
    mongose,
    mongoDB,
    jwt,
    express,
    nodeJs,
  ];
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
          <div className="overflow-hidden whitespace-nowrap w-full ">
            <motion.div
              className="flex space-x-4 text-2xl font-bold sm:gap-8"
              animate={{ x: ["100%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {iconsList1?.map((i) => {
                return <img src={i} className="size-15 sm:size-20" />;
              })}
            </motion.div>
          </div>
        </div>
      </div>
      <br />
      <div className="flex flex-col gap-4">
        <span className="bg-base-100 font-medium flex items-center gap-3 rounded text-lg w-fit px-2 py-1">
          <RiPoliceBadgeFill /> Achievements
        </span>
        <span className="text-2xl font-medium mt-4 fade-up">Fun Fcats</span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:p-4">
          <div className="stat bg-base-100 rounded-xl border-none">
            <div className="stat-figure text-black">
              <BsFillGridFill size={25} />
            </div>
            <div className="stat-title text-lg">Projects</div>
            <div className="stat-value text-5xl">12</div>
            {/* <div className="stat-desc text-lg">Last Year</div> */}
          </div>

          <div className="stat bg-base-100 rounded-xl">
            <div className="stat-figure text-black">
              <BsFillGridFill size={25} />
            </div>
            <div className="stat-title text-lg">Personal Projects</div>
            <div className="stat-value text-5xl">10</div>
            {/* <div className="stat-desc text-lg">↗ Last Year</div> */}
          </div>

          <div className="stat bg-base-100 rounded-xl">
            <div className="stat-figure text-black">
              <BsFillGridFill size={25} />
            </div>
            <div className="stat-title text-lg">Npm Package</div>
            <div className="stat-value text-5xl">1</div>
            {/* <div className="stat-desc text-lg">Source ↘︎</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
