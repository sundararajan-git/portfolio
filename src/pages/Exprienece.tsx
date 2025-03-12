import { FaBook } from "react-icons/fa";

const Exprienece = () => {
  return (
    <div className="w-full h-full p-2 overflow-auto flex flex-col gap-4">
      <div className="flex flex-col gap-4 mt-[2%]">
        <span className="bg-base-100 font-medium flex items-center gap-3 rounded text-sm w-fit px-2 py-1">
          <FaBook /> Education & Experience
        </span>
        <span className="text-xl font-medium mt-4">Resume</span>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 p-4">
          {Array.from({ length: 6 }).map((i) => {
            return (
              <div className="bg-base-100 p-6 rounded-lg flex flex-col gap-4" key={i}>
                <div className="badge badge-outline badge-info rounded-md">
                  <span className="text-black font-medium">2017 - Primary</span>
                </div>
                <p className="text-pretty">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  similique repudiandae odio accusantium amet, labore, aliquam
                  placeat illo dolor facilis iste tempore incidunt quibusdam,
                  porro eveniet aut ratione neque voluptates?
                </p>
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
