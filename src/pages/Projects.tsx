import { useState } from "react";
import { SiWheniwork } from "react-icons/si";
import { personalProjects, workProjects } from "../utils/helpData";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineFilterList } from "react-icons/md";
import { LuSquareUser } from "react-icons/lu";

const Projects = () => {
  const [actions, setActions] = useState<any>({
    singleProject: false,
    personalTab: true,
    workTab: false,
  });
  return (
    <div className="w-full h-full sm:p-2 overflow-auto flex flex-col gap-4 fade-up">
      {actions?.singleProject ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center px-2">
            <h3 className="font-semibold text-3xl text-justify">
              {personalProjects[actions?.singleProject].title}
            </h3>
            <p
              className="text-red-600 flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setActions((prev: any) => {
                  return { ...prev, singleProject: false };
                });
              }}
            >
              Back
              <IoIosArrowForward size={12} />
            </p>
          </div>
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>

          <div className="flex flex-col gap-4">
            <span className="font-medium text-xl fade-up">Introduction</span>
            <p className="text-xl text-justify">
              {personalProjects[actions?.singleProject].introduction}
            </p>
            <span className="font-medium text-xl fade-up">TechStack</span>
            <ul className="flex flex-col gap-2">
              {personalProjects[actions?.singleProject].techStack?.map(
                (list: string, index: number) => {
                  return (
                    <li className="flex gap-2 text-justify text-xl" key={index}>
                      <GoDotFill className="size-4 sm:size-4 md:size-2 mt-1 sm:mt-3" />
                      {list}
                    </li>
                  );
                }
              )}
            </ul>
            <span className="font-medium text-xl fade-up">How It Works</span>
            <ul className="flex flex-col gap-2">
              {personalProjects[actions?.singleProject].working?.map(
                (list: string, index: number) => {
                  return (
                    <li className="flex gap-2 text-justify text-xl" key={index}>
                      <GoDotFill className="size-6 sm:size-4 md:size-2 mt-1 sm:mt-3" />
                      {list}
                    </li>
                  );
                }
              )}
            </ul>
            <div className="carousel carousel-center rounded-box w-full space-x-4 p-4">
              {personalProjects[actions?.singleProject].imagurls?.map(
                (url: string) => {
                  return (
                    <div className="carousel-item h-[300px]" key={url}>
                      <img src={url} className="rounded-box" />
                    </div>
                  );
                }
              )}
            </div>
            <span className="font-medium text-xl fade-up">Links</span>
            <ul className="flex flex-col gap-2">
              {personalProjects[actions?.singleProject].links?.map(
                (list: string, index: number) => {
                  return (
                    <li className="flex gap-2 text-justify text-xl" key={index}>
                      <GoDotFill className="size-4 sm:size-4 md:size-2 mt-1 sm:mt-3" />
                      {list}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 sm:mt-[2%]">
          <div className="flex items-center gap-4">
            <span
              className={`font-semibold flex items-center gap-3 rounded-xl text-md w-fit px-2 py-1 hover:bg-base-200 cursor-pointer ${
                actions?.personalTab ? "bg-base-200 text-success" : ""
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
                ${actions?.workTab ? "bg-base-200 text-success" : ""}
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
          <div className="flex items-center justify-between sm:px-2">
            <span className="text-2xl font-medium">Projects</span>
            {actions?.personalTab && (
              <div className="dropdown dropdown-bottom dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost py-1 px-2 h-fit w-fit m-1"
                >
                  <MdOutlineFilterList size={20} />
                  {/* Filter */}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content bg-base-100 rounded-sm z-1 w-[200px] p-2 shadow-sm"
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

          {actions?.personalTab ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:p-4">
              {Object.entries(personalProjects).map(([key, value]: any) => {
                return (
                  <div
                    className="card w-full cursor-pointer"
                    key={value?.title}
                    onClick={() => {
                      setActions((prev: any) => {
                        return { ...prev, singleProject: key };
                      });
                    }}
                  >
                    <figure>
                      <img
                        src={value?.thumbnail}
                        alt="Shoes"
                        className="h-[200px] w-full rounded-xl"
                      />
                    </figure>
                    <div className="card-body bg-base px-0 sm:px-4">
                      <h2 className="card-title text-2xl fade-up">
                        {value?.title}

                        {value?.badge?.map((n: any) => {
                          return n;
                        })}
                      </h2>
                      <p className="text-lg fade-up">{value?.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {workProjects?.map((item) => {
                return (
                  <div
                    className="flex flex-col items-start gap-4 justify-between fade-up sm:ps-2"
                    key={item?.title}
                  >
                    <h3 className="font-semibold text-lg text-pretty">
                      {item?.title}
                    </h3>
                    <p className="text-lg sm:text-xl">{item?.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Projects;
