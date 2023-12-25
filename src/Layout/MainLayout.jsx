import { Outlet } from "react-router-dom";
import Header from "../Pages/Home/Header/Header";
import { Toaster } from "react-hot-toast";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default MainLayout;
