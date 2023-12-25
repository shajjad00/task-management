import { Link, Outlet } from "react-router-dom";
import MyDrawer from "../Drawer/Drawer";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { BsListTask } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const elements = (
    <>
      <Link
        onClick={closeDrawer}
        to="add"
      >
        <button className="px-10 mt-7 text-left py-1 transition-all duration-200 hover:bg-[#f1b7b2]  w-fit mx-auto flex justify-start items-center gap-2">
          <CiCirclePlus className=" text-lg font-bold" />
          Add Task
        </button>
      </Link>
      <Link
        onClick={closeDrawer}
        to="todo"
      >
        <button className="px-10 text-left py-1 transition-all duration-200 hover:bg-[#f1b7b2]  flex justify-start w-fit mx-auto items-center gap-2">
          <BsListTask className=" text-lg font-bold" />
          All Task
        </button>
      </Link>

      <Link to="/">
        <button className="px-10 border-t-2 border-gray-800 w-fit mx-auto text-left py-1 transition-all duration-200 pt-5 hover:text-lg  flex justify-start items-center gap-2 mt-6">
          <FaHome className="hover:text-3xl  text-lg font-bold" />
          Home
        </button>
      </Link>
    </>
  );
  return (
    <>
      <div className="w-full bg-red-200 py-2 lg:hidden">
        <MyDrawer
          elements={elements}
          open={open}
          closeDrawer={closeDrawer}
          openDrawer={openDrawer}
        ></MyDrawer>
      </div>
      <div className=" grid grid-cols-12 ">
        <div className=" hidden lg:block col-span-2 h-screen bg-[#f4e6e4]">
          <div className="">{elements}</div>
        </div>
        <div className=" ml-8 col-span-10">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
