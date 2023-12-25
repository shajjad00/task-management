import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import loginAnimation from "../../../assets/animation/login.json";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        if (res.user) {
          toast.success("login successful");
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };
  return (
    <div className="bg-gray-200 rounded-md mt-8 shadow-lg flex flex-col-reverse md:flex-row justify-center gap-5 max-w-screen-xl mx-auto p-4">
      <div className=" mt-10">
        <form
          onSubmit={handleLogin}
          className="space-y-4 md:space-y-6 mt-10"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-xl font-medium mb-2 text-gray-700 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-700 sm:text-sm rounded-lg w-full p-3"
              placeholder="Enter Your Email"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-xl font-medium text-gray-700 dark:text-white"
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
            className="px-10 py-2 bg-red-300 text-white w-full rounded-md"
          >
            Login
          </button>
          <p className="text-sm font-light text-gray-500  mb-5">
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
