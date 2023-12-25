import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import ToDo from "../Pages/Dashboard/ToDo/ToDo";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import UpdateTask from "../Pages/Dashboard/UpdateTask/UpdateTask";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "todo",
        element: <ToDo></ToDo>,
      },
      {
        path: "add",
        element: <AddTask></AddTask>,
      },
      {
        path: "update/:id",
        element: <UpdateTask></UpdateTask>,
      },
    ],
  },
]);

export default Route;
