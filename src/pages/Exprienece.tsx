import { FaBook } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

const Exprienece = () => {
  return (
    <div className="w-full h-full p-2 overflow-auto flex flex-col gap-4 fade-up ">
      <div className="flex flex-col gap-4">
        <motion.span
          className="bg-base-100 font-medium flex items-center gap-3 rounded text-lg w-fit sm:px-2 py-1"
          initial={{ opacity: 1, x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <FaBook /> Education & Experience
        </motion.span>
        <div className="grid grid-cols-1 gap-6">
          {exprience.map((d, index: number) => {
            return (
              <div
                className="bg-base-100 sm:px-4 sm:py-2 sm:pb-4 rounded-xl flex flex-col gap-4 md:shadow-md"
                key={index}
              >
                <div className="flex flex-col  sm:flex-row items-start sm:items-center w-full justify-between gap-2 text-nowrap">
                  <motion.span
                    className="font-semibold text-xl uppercase"
                    initial={{ opacity: 1, x: -100 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {d?.name}
                  </motion.span>
                  <div className="flex items-center w-full sm:w-fit sm:items-end sm:flex-row gap-4">
                    <span className="rounded text-lg font-medium text-green-600">
                      {d?.year}
                    </span>
                    <span className="flex rounded text-lg font-medium text-red-600">
                      {d?.organization}
                    </span>
                  </div>
                </div>

                <ul className="flex flex-col gap-4">
                  {d?.list?.map((list: string, jndex: number) => {
                    return (
                      <motion.li
                        className="flex gap-2 text-justify text-xl font-[400]"
                        key={index + jndex}
                        initial={{ opacity: 1, y: 20, x: 0 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <GoDotFill className="size-6 sm:size-4 md:size-2 mt-1 sm:mt-3" />
                        {list}
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Exprienece;

const exprience = [
  {
    year: "2023 – Present",
    name: "React Developer",
    organization: "sidharth Housing Ltd",
    list: [
      "Developed dynamic and interactive web applications using React.js with a focus on performance and scalability",
      "Integrated Firebase for authentication (Email, Google, OTP), Firestore database, and real-time data updates.",
      "Designed and implemented secure RESTful APIs using Firebase Cloud Functions.",
      "Managed state efficiently using React Context API, Redux for a smooth user experience",
      "Implemented role-based access control (RBAC) and protected routes with Firebase Authentication.",
      "Optimized Firestore queries for faster data retrieval and reduced Firestore read operations to minimize costs",
      "Deployed applications using Vite for faster builds and optimized performance.",
      "Utilized Firebase Hosting and Cloud Storage for seamless deployment and asset management.",
      "Worked with React Hooks, Tailwind CSS, and third-party libraries to enhance UI/UX",
      "Debugged and improved app performance by monitoring logs in Firebase and using Chrome DevTools.",
    ],
  },
  {
    year: "2022 – 2021",
    name: "Site Electrical Engineer",
    organization: "Nuteral Electrical",
    list: [
      "Supervised and executed electrical installations, ensuring compliance with safety standards and project specifications.",
      "Assisted in designing and implementing electrical systems for residential, commercial projects.",
      "Conducted routine inspections, troubleshooting, and maintenance of electrical equipment.",
      "Collaborated with project managers, contractors, and technicians to ensure timely project completion.",
      "Ensured proper documentation of electrical layouts, reports, and material usage.",
    ],
  },
  {
    year: "2017 - 2021",
    name: "B.E in Electrical Engineering",
    organization: "Anna University",
    list: [
      "Gained strong foundational knowledge in electrical circuits, power systems, and automation.",
      "Worked on academic projects involving electrical system design, energy efficiency, and automation technologies.",
      "Developed skills in AutoCAD, MATLAB, and PLC programming for electrical system analysis.",
    ],
  },
];
