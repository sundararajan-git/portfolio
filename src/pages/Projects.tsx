import { useState } from "react";
import { SiWheniwork } from "react-icons/si";
import { personalProjects, workProjects } from "../utils/helpData";
import { LuSquareUser } from "react-icons/lu";
import { FiFilter } from "react-icons/fi";
import { motion } from "framer-motion";
import SfhlProjects from "./SfhlProjects";
import SingleProject from "./SingleProject";

const Projects = () => {
  const [actions, setActions] = useState<any>({
    singleProject: false,
    personalTab: true,
    workTab: false,
  });
  return (
    <div className="w-full h-full sm:px-2 overflow-auto flex flex-col gap-4 ">
      {actions?.singleProject ? (
        <SingleProject actions={actions} setActions={setActions} />
      ) : (
        <div className="flex flex-col gap-4 sm:mt-[2%]">
          <div className="w-full flex items-center justify-between">
            <span className="text-2xl font-bold uppercase px-2">Projects</span>
            {actions?.personalTab && (
              <div className="dropdown dropdown-bottom dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="cursor-pointer py-1 px-2 h-fit w-fit m-1 font-[500] text-lg"
                >
                  <FiFilter size={20} />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content bg-base-100 rounded-sm z-1 w-[200px] p-2 shadow-sm
                  font-[600]
                  "
                >
                  <li className="hover:bg-base-200 p-2 cursor-pointer">
                    <a>MERN</a>
                  </li>
                  <li className="hover:bg-base-200 p-2 cursor-pointer">
                    <a>Next Js</a>
                  </li>
                  <li className="hover:bg-base-200 p-2 cursor-pointer">
                    <a>React JS</a>
                  </li>
                  <li className="hover:bg-base-200 p-2 cursor-pointer">
                    <a>Npm</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span
                className={`font-semibold flex items-center gap-3 rounded-xl text-md w-fit px-2 py-1 hover:bg-base-200 cursor-pointer ${
                  actions?.personalTab
                    ? "bg-green-50 dark:bg-transparent text-green-600"
                    : ""
                }`}
                onClick={() => {
                  setActions((prev: any) => {
                    return { ...prev, personalTab: true, workTab: false };
                  });
                }}
              >
                <LuSquareUser /> Personal
              </span>
              <span
                className={`font-semibold flex items-center gap-3 rounded-xl text-md w-fit px-2 py-1 hover:bg-base-200 cursor-pointer
                ${
                  actions?.workTab
                    ? "bg-green-50 dark:bg-transparent text-green-600"
                    : ""
                }
                `}
                onClick={() => {
                  setActions((prev: any) => {
                    return { ...prev, personalTab: false, workTab: true };
                  });
                }}
              >
                <SiWheniwork /> Work
              </span>
            </div>
          </div>

          {actions?.personalTab ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Object.entries(personalProjects).map(([key, value]: any) => {
                return (
                  <motion.div
                    className="card w-full cursor-pointer"
                    key={value?.title}
                    onClick={() => {
                      setActions((prev: any) => {
                        return { ...prev, singleProject: key };
                      });
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <figure>
                      <img
                        src={value?.thumbnail}
                        alt="thumbnail"
                        className="h-[250px] md:h-[200px] w-full rounded-xl object-fill"
                      />
                    </figure>
                    <div className="card-body bg-base px-0">
                      <h2 className="card-title text-2xl  uppercase">
                        {value?.title}

                        {value?.badge?.map((n: any) => {
                          return n;
                        })}
                      </h2>
                      <p className="text-lg ">{value?.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <SfhlProjects workProjects={workProjects} />
          )}
        </div>
      )}
    </div>
  );
};
export default Projects;
