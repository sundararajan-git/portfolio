import { FaBook } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Exprienece = () => {
  return (
    <div className="w-full h-full p-2 overflow-auto flex flex-col gap-4 fade-up ">
      <div className="flex flex-col gap-4 mt-[2%]">
        <span className="bg-base-100 font-medium flex items-center gap-3 rounded text-sm w-fit sm:px-2 py-1">
          <FaBook /> Education & Experience
        </span>
        <span className="text-xl font-medium mt-4">Resume</span>
        <div className="grid grid-cols-1 gap-4 sm:p-4">
          {exprience.map((d, index: number) => {
            return (
              <div
                className="bg-base-100 p-2 sm:p-6 rounded-lg flex flex-col gap-4"
                key={index}
              >
                <div className="flex items-start sm:items-center w-full justify-between gap-2 text-nowrap">
                  <span className="font-medium">{d?.name}</span>
                  <div className="flex flex-col items-end sm:flex-row gap-2">
                    <span className="badge badge-outline badge-info rounded text-black text-xs sm:text-sm font-medium">
                      {d?.year}
                    </span>
                    <span className="hidden sm:flex badge bg-black text-white rounded text-xs">
                      {d?.organization}
                    </span>
                  </div>
                </div>

                <ul className="flex flex-col gap-2">
                  {d?.list?.map((list: string, jndex: number) => {
                    return (
                      <li
                        className="flex items-start sm:items-center gap-2 text-pretty"
                        key={index + jndex}
                      >
                        <GoDotFill className="size-6 sm:size-4 md:size-2" />
                        {list}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <br />
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
