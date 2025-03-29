import { HiDeviceMobile } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import CodeMock from "../comps/CodeMock";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const naviagte = useNavigate();
  return (
    <div className="w-full h-full flex flex-col sm:flex-col items-end gap-0 sm:gap-6 overflow-x-hidden overflow-y-auto fade-up">
      <div className="hidden sm:flex flex-col sm:flex-row sm:items-center justify-between w-full text-sm sm:text-sm md:text-lg gap-2 sm:gap-4 sm:py-2 sm:p-4">
        <p className="flex items-center gap-1 sm:gap-2 self-end fade-up text-lg sm:text-lg">
          <HiDeviceMobile className="size-6" />
          <span>+91 8148133743</span>
        </p>
        <p className="flex items-center gap-1 sm:gap-2 self-end fade-up text-lg sm:text-lg">
          <IoIosMail className="size-6" />
          <span>sundararajanselvarasu@gamil.com</span>
        </p>
      </div>
      <div className="hero h-[100vh] sm:h-full p-0">
        <div className="sm:hero-content1  flex flex-col-reverse lg:flex-row-reverse items-start gap-4 sm:w-full h-full  p-0 m-0 sm:p-6 sm:pt-[5%]">
          <CodeMock />
          <div className="w-full h-fit md:h-full flex flex-col gap-6 sm:gap-1 sm:pt-[2%]">
            <h1 className="text-xl sm:text-4xl font-bold">
              I'm MERN Stack Devloper
            </h1>
            <p className="sm:py-6 text-justify text-lg md:text-xl fade-up">
              I am Sundararajan , MERN Stack developer from India , Tamil nadu.
              I have rich experience in web app and building and customization,
              also I am good at Next js , React Native , Python.
            </p>

            <div className="flex items-center gap-2">
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
      </div>
      <br />
    </div>
  );
};
export default Home;
