import { motion } from "framer-motion";
import { HiDeviceMobile } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import CodeMock from "../comps/CodeMock";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const naviagte = useNavigate();
  return (
    <motion.div className="w-full h-full flex flex-col items-end gap-4 overflow-x-hidden overflow-y-auto py-4 fade-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full text-xs sm:text-sm md:text-lg gap-4 py-2 sm:p-4">
        <p className="flex items-center gap-1 sm:gap-2 self-end fade-up text-lg sm:text-lg">
          <HiDeviceMobile className="size-6" />
          <span>+91 8148133743</span>
        </p>
        <p className="flex items-center gap-1 sm:gap-2 self-end fade-up text-lg sm:text-lg">
          <IoIosMail className="size-6" />
          <span>sundararajanselvarasu@gamil.com</span>
        </p>
      </div>
      <div className="hero h-full p-0">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse items-start gap-2 sm:w-full h-fit sm:h-full p-0 m-0 sm:p-6">
          <CodeMock />
          <div className="w-full pt-[5%]">
            <h1 className="text-xl sm:text-4xl font-bold">
              I'm MERN Stack Devloper
            </h1>
            <p className="py-6 text-pretty text-lg md:text-2xl fade-up">
              I am Sundararajan , MERN Stack developer from India , Tamil nadu.
              I have rich experience in web app and building and customization,
              also I am good at Next js , React Native , Python.
            </p>
            <button className="btn btn-primary text-md sm:text-lg">
              Hire Me !
            </button>
            <button
              className="btn  items-center shadow-none bg-transparent ms-4 text-md sm:text-lg"
              onClick={() => naviagte("/projects")}
            >
              Projects
              <MdOutlineArrowCircleRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Home;
