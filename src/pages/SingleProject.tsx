import { GoDotFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { personalProjects } from "../utils/helpData";
import { motion } from "framer-motion";

const SingleProject = (props: any) => {
  const { actions, setActions } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center px-2">
        <h3 className="font-semibold text-3xl text-justify uppercase">
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
      <figure>
        <motion.img
          src={personalProjects[actions?.singleProject].thumbnail}
          alt="Shoes"
          className="w-full h-[500px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </figure>
      {/* <iframe
              width="100%"
              height="500px"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="thubnai"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe> */}

      <div className="flex flex-col gap-4">
        <motion.span
          className="font-medium text-xl"
          initial={{ opacity: 1, x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Introduction
        </motion.span>
        <motion.p
          className="text-xl text-justify"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {personalProjects[actions?.singleProject].introduction}
        </motion.p>
        <motion.span
          className="font-medium text-xl"
          initial={{ opacity: 1, x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          TechStack
        </motion.span>
        <motion.ul
          className="flex flex-col gap-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
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
        </motion.ul>
        <motion.span
          className="font-medium text-xl"
          initial={{ opacity: 1, x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          How It Works
        </motion.span>
        <ul className="flex flex-col gap-2">
          {personalProjects[actions?.singleProject].working?.map(
            (list: string, index: number) => {
              return (
                <motion.li
                  className="flex gap-2 text-justify text-xl"
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <GoDotFill className="size-6 sm:size-4 md:size-2 mt-1 sm:mt-3" />
                  {list}
                </motion.li>
              );
            }
          )}
        </ul>
        <div className="carousel carousel-center rounded-box w-full space-x-4 p-4">
          {personalProjects[actions?.singleProject].imagurls?.map(
            (url: string) => {
              return (
                <motion.div
                  className="carousel-item h-[300px]"
                  key={url}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <img src={url} className="rounded-box" />
                </motion.div>
              );
            }
          )}
        </div>
        <motion.span
          className="font-medium text-xl"
          initial={{ opacity: 1, x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Links
        </motion.span>
        <motion.ul
          className="flex flex-col gap-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {personalProjects[actions?.singleProject].links?.map(
            (list: string, index: number) => {
              return (
                <li className="flex gap-2 text-justify text-xl" key={index}>
                  <GoDotFill className="size-4 sm:size-4 md:size-2 mt-1 sm:mt-3" />
                  <p>{list.split("-")[0]}</p>
                  <span>-</span>
                  <a
                    href={list.split("-")[1]}
                    className="hover:text-blue-600 hover:underline"
                  >
                    {list.split("-")[1]}
                  </a>
                </li>
              );
            }
          )}
        </motion.ul>
        <br />
      </div>
    </div>
  );
};
export default SingleProject;
