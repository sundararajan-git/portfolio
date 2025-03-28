import { SiWheniwork } from "react-icons/si";

const Projects = () => {
  return (
    <div className="w-full h-full sm:p-2 overflow-auto flex flex-col gap-4 fade-up">
      <div className="flex flex-col gap-4 sm:mt-[2%]">
        <span className="bg-base-100 font-medium flex items-center gap-3 rounded text-lg w-fit px-2 py-1">
          <SiWheniwork /> Latest
        </span>
        <span className="text-2xl font-medium mt-4">Projects</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:p-4">
          {Array.from({ length: 6 }).map((i: any) => {
            return (
              <div className="card w-full" key={i}>
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="h-[200px] rounded-xl"
                  />
                </figure>
                <div className="card-body bg-base px-0 sm:px-4">
                  <h2 className="card-title text-2xl fade-up">
                    Card Title
                    <div className="badge badge-secondary rounded-4xl text-sm">
                      NEW
                    </div>
                  </h2>
                  <p className="text-lg fade-up">
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
