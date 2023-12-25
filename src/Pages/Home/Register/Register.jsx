import Lottie from "lottie-react";
import registerAnimation from "../../../../src/assets/animation/register.json";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, profileUpdate } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.img.value;

    //auth related

    if (password.length < 6) {
      return toast.error("password Should contain at least 6 character");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "password Should contain at least 1 uppercase character"
      );
    }
    if (!/[@$!%*#?&^_-]/.test(password)) {
      return toast.error(
        "password Should contain at least 1 Special character"
      );
    }

    createUser(email, password)
      .then((res) => {
        if (res.user) {
          profileUpdate(name, image)
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              console.log(errorCode);
            });
          navigate("/");
          toast.success("Registration Successful");
        }
        console.log(res.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode);
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
      <div className=" flex flex-col-reverse md:flex-row justify-center gap-5 items-center max-w-screen-xl mx-auto p-4">
        <div className=" mt-10">
          <form
            onSubmit={handleRegister}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <label className=" text-lg text-gray-600">Your Name</label>
              <input
                required=""
                type="text"
                name="name"
                placeholder="Your Name..."
                className=" w-full border-2 my-2 p-2 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
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
            <div>
              <label className=" text-lg text-gray-600">Your Image</label>
              <input
                name="img"
                placeholder="url..."
                className=" w-full my-2 border-2 p-2 rounded-md"
                type="url"
              />
            </div>
            <button
              type="submit"
              className="px-10 py-2 bg-red-300 text-white w-full rounded-md"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-5">
              Already have an account?{" "}
              <Link
                className="font-medium text-teal-400 hover:underline dark:text-blue-500 mb-5"
                to="/login"
              >
                Sign in here
              </Link>
            </p>
          </form>
        </div>
        <div>
          <Lottie animationData={registerAnimation}></Lottie>
        </div>
      </div>
    </>
  );
};

export default Register;
