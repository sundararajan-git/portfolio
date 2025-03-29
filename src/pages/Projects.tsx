import { useState } from "react";
import { SiWheniwork } from "react-icons/si";
import { projectTree } from "../utils/helpData";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { MdFilterAlt } from "react-icons/md";

const Projects = () => {
  const [actions, setActions] = useState<any>({
    singleProject: false,
  });
  return (
    <div className="w-full h-full sm:p-2 overflow-auto flex flex-col gap-4 fade-up">
      {actions?.singleProject ? (
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center px-2">
            <h3 className="font-semibold text-3xl text-justify">
              {projectTree["product_store"].name}
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
              {projectTree["product_store"].introduction}
            </p>
            <span className="font-medium text-xl fade-up">TechStack</span>
            <ul className="flex flex-col gap-2">
              {projectTree["product_store"].techStack?.map(
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
              {projectTree["product_store"].working?.map(
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
              {projectTree["product_store"].screeShots?.map((i) => {
                return (
                  <div className="carousel-item h-[300px]" key={i}>
                    <img
                      src="https://themewagon.com/wp-content/uploads/2021/07/soft-ui-1-1200x736.png"
                      className="rounded-box"
                    />
                  </div>
                );
              })}
            </div>
            <span className="font-medium text-xl fade-up">Links</span>
            <ul className="flex flex-col gap-2">
              {projectTree["product_store"].links?.map(
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
          <span className="bg-base-100 font-medium flex items-center gap-3 rounded text-lg w-fit px-2 py-1">
            <SiWheniwork /> Latest
          </span>
          <div className="flex justify-between px-2">
            <span className="text-2xl font-medium mt-4">Projects</span>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-primary py-1 h-fit m-1"
              >
                <MdFilterAlt />
                Filter
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
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:p-4">
            {Array.from({ length: 1 }).map((i: any) => {
              return (
                <div
                  className="card w-full cursor-pointer"
                  key={i}
                  onClick={() => {
                    setActions((prev: any) => {
                      return { ...prev, singleProject: true };
                    });
                  }}
                >
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                      className="h-[200px] w-full rounded-xl"
                    />
                  </figure>
                  <div className="card-body bg-base px-0 sm:px-4">
                    <h2 className="card-title text-2xl fade-up">
                      Product Store
                      <div className="badge badge-secondary rounded-4xl text-sm">
                        NEW
                      </div>
                    </h2>
                    <p className="text-lg fade-up">
                      A CURD operation with a product store using React, Redux,
                      and Tailwind CSS.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Projects;
