import { Link } from "react-router-dom";
import image from "../../../assets/img/task management.png";

const Banner = () => {
  return (
    <div className="relative lg:h-[600px] max-w-screen-2xl mx-auto mt-2">
      <img
        className="w-full lg:h-[600px] object-cover rounded-md"
        src={image}
      />
      <div className="absolute inset-0 bg-gray-900 opacity-30 rounded-md"></div>
      <div className="absolute inset-0 flex flex-col justify-center ml-4 md:ml-10 lg:ml-20 capitalize">
        <h2 className="text-white text-3xl  font-bold  max-w-xl ">
          Start Organizing Your Tasks Now.
        </h2>
        <Link to="dashboard/todo">
          <button className="mt-4 text-lg border-2 border-white hover:text-xl hover:scale-105 duration-300 transition-all px-10 py-2 text-white font-medium rounded-md">
            Let’s Start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
