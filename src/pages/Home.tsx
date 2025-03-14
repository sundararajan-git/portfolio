import { motion } from "framer-motion";
import { HiDeviceMobile } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { MdArrowRight } from "react-icons/md";
import CodeMock from "../comps/CodeMock";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const naviagte = useNavigate();
  return (
    <motion.div className="w-full h-full flex flex-col items-end gap-4 overflow-x-hidden overflow-y-auto py-4 fade-up">
      <div className="flex flex-row sm:items-center justify-between w-full text-xs sm:text-sm md:text-lg gap-4 py-2 sm:p-4">
        <p className="flex items-center gap-1 sm:gap-2 self-end">
          <HiDeviceMobile className="size-4" />
          <span>+91 8148133743</span>
        </p>
        <p className="flex items-center gap-1 sm:gap-2 self-end">
          <IoIosMail className="size-4" />
          <span>sundararajanselvarasu@gamil.com</span>
        </p>
      </div>
      <div className="hero h-full items-start p-0">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse items-start sm:w-full h-fit sm:h-full p-0 m-0 sm:p-6">
          <CodeMock />
          <div className="w-full self-start">
            <h1 className="text-lg sm:text-4xl font-bold">
              I'm MERN Stack Devloper
            </h1>
            <p className="py-6 text-pretty sm:text-sm md:text-lg">
              I am Sundararajan , MERN Stack developer from India , Tamil nadu.
              I have rich experience in web app and building and customization,
              also I am good at Next js , React Native , Python.
            </p>
            <button className="btn btn-primary">Hire Me !</button>
            <button
              className="btn shadow-none bg-transparent  ms-4"
              onClick={() => naviagte("/projects")}
            >
              Projects
              <MdArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Home;
