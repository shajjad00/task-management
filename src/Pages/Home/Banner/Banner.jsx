import { Link } from "react-router-dom";
import image from "../../../assets/img/task1.jpeg";

const Banner = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto mt-2">
      <img
        className="w-full object-cover rounded-md"
        src={image}
      />
      <div className="absolute inset-0 bg-gray-900 opacity-60 rounded-md"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-white text-3xl font-bold text-center max-w-xl">
          Efficiency is doing things right; effectiveness is doing the right
          things
        </h2>
        <Link to="dashboard">
          <button className=" text-lg bg-red-400 mt-2 px-10 py-2 text-white font-medium rounded-md">
            Let’s Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
