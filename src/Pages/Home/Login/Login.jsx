import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import loginAnimation from "../../../assets/animation/login.json";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
  };
  return (
    <div className=" bg-gray-200 mt-8 shadow-lg flex flex-col-reverse md:flex-row justify-center gap-5 items-center max-w-screen-xl mx-auto p-4">
      <div className=" mt-10">
        <form
          onSubmit={handleLogin}
          className="space-y-4 md:space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-3"
              placeholder="Enter Your Email"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-3"
              required=""
            />
          </div>
          <button
            type="submit"
            className="px-10 py-2 bg-red-400 text-white w-full rounded-md"
          >
            Login
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-5">
            Already have an account?{" "}
            <Link
              className="font-medium text-teal-400 hover:underline dark:text-blue-500 mb-5"
              to="/register"
            >
              Sign Up here
            </Link>
          </p>
        </form>
      </div>
      <div className=" max-w-screen-sm">
        <Lottie animationData={loginAnimation}></Lottie>
      </div>
    </div>
  );
};

export default Login;
