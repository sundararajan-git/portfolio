import { motion } from "framer-motion";
import { HiDeviceMobile } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { MdArrowRight } from "react-icons/md";
import CodeMock from "../comps/CodeMock";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const naviagte = useNavigate();
  return (
    <motion.div className="w-full h-full flex flex-col items-end gap-4 overflow-x-hidden overflow-y-auto">
      <div className="flex flex-col sm:flex-row justify-end sm:items-center sm:justify-between w-full text-xs sm:text-sm gap-4 p-2 sm:p-4">
        <p className="flex items-center gap-2 self-end">
          <HiDeviceMobile className="size-4" />
          <span>+91 8148133743</span>
        </p>
        <p className="flex items-center gap-2 self-end">
          <IoIosMail className="size-4" />
          <span>sundararajanselvarasu@gamil.com</span>
        </p>
      </div>
      <div className="hero h-full">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse sm:w-full p-0 sm:p-6">
          <CodeMock />
          <div className="w-full self-start">
            <p className="py-3 flex items-center gap-2">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                "🖐️"
              </motion.div>
              <span>HELLO !</span>
            </p>
            <h1 className="text-lg sm:text-4xl font-bold">
              I'm Sundarararjan S
            </h1>
            <p className="py-6">
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
