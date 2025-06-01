import { HiDeviceMobile } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import CodeMock from "../comps/CodeMock";
import { useNavigate } from "react-router-dom";
import { socialLinks } from "../utils/helpData";
import { motion } from "framer-motion";

const Home = () => {
  const naviagte = useNavigate();
  return (
    <div className="w-full h-full flex flex-col sm:flex-col items-end gap-0 sm:gap-6 overflow-x-hidden overflow-y-auto sm:mt-0">
      <div className="hidden sm:flex flex-col sm:flex-row sm:items-center justify-between w-full text-sm sm:text-sm md:text-lg gap-2 sm:gap-4 sm:py-2 sm:p-4">
        <motion.p
          className="flex items-center gap-1 sm:gap-2 self-end  text-lg sm:text-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <HiDeviceMobile className="size-6" />
          <span className="font-medium">+91 8148133743</span>
        </motion.p>
        <motion.p
          className="flex items-center gap-1 sm:gap-2 self-end  text-lg sm:text-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <IoIosMail className="size-6" />
          <span className="font-medium">sundararajanselvarasu@gamil.com</span>
        </motion.p>
      </div>
      <div className="hero h-[100vh] sm:h-full p-0">
        <div className="sm:hero-content  flex flex-col-reverse lg:flex-row-reverse items-start gap-4 sm:w-full h-full  p-0 m-0">
          <CodeMock />
          <div className="w-full h-fit md:h-full flex flex-col gap-6 sm:gap-1 sm:pt-[2%]">
            <motion.h1
              className="text-xl sm:text-4xl font-bold cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              animate={{ opacity: 1, scale: 1 }}
            >
              I'm MERN Stack Devloper
            </motion.h1>
            <motion.p
              className="sm:py-6 text-justify text-lg md:text-xl font-[500]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              I am Sundararajan , MERN Stack developer from India , Tamil nadu.
              I have rich experience in web app and building and customization,
              also I am good at Next js , React Native , Python.
            </motion.p>

            <div className="flex items-center gap-2">
              <motion.button
                className="btn btn-primary text-md sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                Hire Me !
              </motion.button>
              <motion.button
                className="btn  items-center shadow-none bg-transparent ms-4 text-md sm:text-lg"
                onClick={() => naviagte("/projects")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                Projects
                <MdOutlineArrowCircleRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="flex sm:hidden flex-col items-center gap-1 w-full mt-6">
        <div className="flex items-center gap-4 w-full justify-center pt-3">
          {socialLinks?.map((link, index) => {
            return (
              <button
                className="btn btn-sm btn-link px-2.5 py-4 hover:btn-primary hover:bg-primary"
                key={index}
                onClick={() => {
                  window.open(link?.link, "_blank");
                }}
              >
                {link?.icon}
              </button>
            );
          })}
        </div>
        <div className="p-2 text-sm">
          <p className="text-gray-500 text-lg">@2025 Sundar</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
