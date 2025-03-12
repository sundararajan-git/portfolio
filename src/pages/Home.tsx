import { motion } from "framer-motion";
import { HiDeviceMobile } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { MdArrowRight } from "react-icons/md";
import CodeMock from "../comps/CodeMock";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const naviagte = useNavigate();
  return (
    <motion.div className="w-full h-full flex flex-col items-end gap-4 pt-[6%] px-2">
      <div className="flex items-center justify-between w-1/2">
        <p className="flex items-center gap-2">
          <HiDeviceMobile size={22} />
          <span>+91 8148133743</span>
        </p>
        <p className="flex items-center gap-2">
          <IoIosMail size={22} />
          <span>sundararajanselvarasu@gamil.com</span>
        </p>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="mockup-code bg-black text-white w-full h-[60vh] p-2 overflow-auto ">
            <CodeMock />
          </div>
          <div className="w-full">
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
            <h1 className="text-4xl font-bold">I'm Sundarararjan S</h1>
            <p className="py-6">
              I am Riono Doe, web developer from USA, California. I have rich
              experience in web site design and building and customization, also
              I am good at WordPress.
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
