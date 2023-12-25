import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import ToDo from "../Pages/Dashboard/ToDo/ToDo";
import OnGoing from "../Pages/Dashboard/OnGoing/OnGoing";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import UpdateTask from "../Pages/Dashboard/UpdateTask/UpdateTask";

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
        path: "ongoing",
        element: <OnGoing></OnGoing>,
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
