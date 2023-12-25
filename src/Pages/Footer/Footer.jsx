import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-[#dc8c86] text-white">
      <div className="px-6 py-8">
        <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
          Master Your Tasks with Our Intuitive Platform
        </h2>
        <Link
          to="dashboard/todo"
          className="mt-8 px-12 py-5 font-medium leading-tight inline-block bg-white text-xl text-[#dc8c86] rounded-full shadow-xl border border-transparent hover:bg-sky-700 focus:outline-none"
          href="#"
        >
          Let&apos;s Explore
        </Link>
        <div className="mt-10">
          <nav className="mb-4">
            <Link
              to="/"
              className="text-white text-lg hover:text-gray-300 mx-2"
            >
              Home
            </Link>
            <Link
              to="about"
              className="text-white text-lg hover:text-gray-300 mx-2"
            >
              About
            </Link>
            <Link
              to="contact"
              className="text-white text-lg hover:text-gray-300 mx-2"
            >
              Contact
            </Link>
          </nav>
          <div className="flex justify-center">
            <a
              target="blank"
              href="https://twitter.com/shajjad99"
              className="text-white text-3xl hover:text-gray-300 mx-2"
            >
              <FaTwitter />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/shajjad-hossan-5699a5250/"
              className="text-white text-3xl hover:text-gray-300 mx-2"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              href="#"
              className="text-white text-3xl hover:text-gray-300 mx-2"
            >
              <FaInstagram></FaInstagram>
            </a>
          </div>
          <p className="mt-7 text-base">© 2023 TaskSync Hub, LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
