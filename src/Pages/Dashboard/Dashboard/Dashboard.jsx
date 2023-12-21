import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-12">
      <div className=" col-span-3 h-screen bg-red-300">
        <div className=" flex justify-center gap-5 mt-2 flex-col items-center">
          <Link to="add">
            <button className="px-10 py-2 bg-gray-300 w-48">Add Task</button>
          </Link>
          <Link to="todo">
            <button className="px-10 py-2 bg-gray-300 w-48">ToDo Task</button>
          </Link>
          <Link to="ongoing">
            <button className="px-10 py-2 bg-gray-300 w-48">
              On Going Task
            </button>
          </Link>
          <Link to="/">
            <button className="px-10 py-2 bg-gray-300 w-48">Home</button>
          </Link>
        </div>
      </div>
      <div className=" ml-8 col-span-9">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
