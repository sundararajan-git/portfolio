import { BsFillGridFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { MdFileDownload, MdWorkHistory } from "react-icons/md";
import { RiPoliceBadgeFill, RiUser4Fill } from "react-icons/ri";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full h-full p-2 overflow-auto flex flex-col gap-4">
      <div className="flex flex-col gap-4 mt-[2%]">
        <span className="bg-base-100 font-medium flex items-center gap-3 rounded text-sm w-fit px-2 py-1">
          <RiUser4Fill /> Who am I ?
        </span>
        <span className="text-xl font-medium mt-4">About Me</span>
        <div className="flex flex-row gap-2 justify-between">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
            className="rounded-2xl w-1/4 h-fit mt-4"
          />
          <div className="flex flex-col items-start gap-4 w-3/4 p-4 ">
            <div className="p-4 bg-base-100 rounded-lg">
              <p className="text-xl font-medium">Bio</p>
              <p className="py-3 text-gray-700 text-md">
                I am Riono Doe, web developer from USA, California. I have rich
                experience in web site design and building and customization,
                also I am good at WordPress. I love to talk with you about our
                unique. smile
              </p>
            </div>
            <div className="p-4 bg-base-100 rounded-lg w-full flex flex-col gap-2 text-md">
              <li className="flex items-center justify-between">
                <span>Age</span>
                <span>25</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Residence </span>
                <span>INDIA</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Email</span>
                <span>sundrarajanselvarasu@gmail.com</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Phone</span>
                <span>+91 8148133743</span>
              </li>
            </div>
            <div className="flex items-center mt-2 w-full">
              <button className="btn bg-primary">
                Download CV
                <MdFileDownload size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="bg-base-100 font-medium flex items-center gap-3 rounded text-sm w-fit px-2 py-1">
          <MdWorkHistory /> What can I do?
        </span>
        <span className="text-xl font-medium mt-4">Skils</span>
        <div className="flex flex-col gap-2 p-2">
          <div className="overflow-hidden whitespace-nowrap w-full ">
            <motion.div
              className="flex space-x-4 text-2xl font-bold"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {Array.from({ length: 20 }).map((i) => {
                return (
                  <div className="flex flex-col gap-2 items-center hover:bg-base-200 p-2 rounded-lg cursor-pointer relative">
                    <FaReact size={70} className="text-sky-600" />
                    {/* <p className="absolute top-[40%] right-[25%]">60%</p> */}
                  </div>
                );
              })}
            </motion.div>
          </div>
          <div className=" flex flex-row gap-4 w-full overflow-auto hide-overflow">
            {Array.from({ length: 20 }).map((i) => {
              return (
                <div className="flex flex-col gap-2 items-center" key={i}>
                  <FaReact size={70} className="text-sky-600" />
                  {/* <p>React</p> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <div className="flex flex-col gap-4">
        <span className="bg-base-100 font-medium flex items-center gap-3 rounded text-sm w-fit px-2 py-1">
          <RiPoliceBadgeFill /> Achievements
        </span>
        <span className="text-xl font-medium mt-4">Fun Facts</span>
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-4 p-4">
          <div className="stat bg-base-100 rounded-xl border-none">
            <div className="stat-figure text-black">
              <BsFillGridFill size={25} />
            </div>
            <div className="stat-title">Projects</div>
            <div className="stat-value">12</div>
            <div className="stat-desc">Last Year</div>
          </div>

          <div className="stat bg-base-100 rounded-xl">
            <div className="stat-figure text-black">
              <BsFillGridFill size={25} />
            </div>
            <div className="stat-title">Personal Projects</div>
            <div className="stat-value">10</div>
            <div className="stat-desc">↗ Last Year</div>
          </div>

          <div className="stat bg-base-100 rounded-xl">
            <div className="stat-figure text-black">
              <BsFillGridFill size={25} />
            </div>
            <div className="stat-title">Npm Package</div>
            <div className="stat-value">1</div>
            <div className="stat-desc">Source ↘︎</div>
          </div>
        </div>
        <br />
      </div>
    </section>
  );
};
export default About;
