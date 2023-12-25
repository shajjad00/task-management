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
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <ToDo></ToDo>
          </PrivateRoute>
        ),
      },
      {
        path: "add",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Route;
