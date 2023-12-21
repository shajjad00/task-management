import { Outlet } from "react-router-dom";
import Header from "../Pages/Home/Header/Header";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default MainLayout;
