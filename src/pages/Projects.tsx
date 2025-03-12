import { SiWheniwork } from "react-icons/si";

const Projects = () => {
  return (
    <div className="w-full h-full p-2 overflow-auto flex flex-col gap-4">
      <div className="flex flex-col gap-4 mt-[2%]">
        <span className="bg-base-100 font-medium flex items-center gap-3 rounded text-sm w-fit px-2 py-1">
          <SiWheniwork /> Recent Projects
        </span>
        <span className="text-xl font-medium mt-4">Portfolio</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {Array.from({ length: 6 }).map((i) => {
            return (
              <div className="card bg-base-100 w-full" key={i}>
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="h-[200px] rounded-lg"
                  />
                </figure>
                <div className="card-body bg-white">
                  <h2 className="card-title">
                    Card Title
                    <div className="badge badge-secondary rounded-4xl text-xs">
                      NEW
                    </div>
                  </h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <br />
      </div>
    </div>
  );
};
export default Projects;
