import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Avatar,
  MenuItem,
} from "@material-tailwind/react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const { user, loading, userLogOut } = useAuth();

  console.log(user);

  const handleLogout = () => {
    userLogOut()
      .then(() => {
        toast.success("signout successful");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      return window.innerWidth >= 760 && setOpenNav(false);
    });
  }, []);

  //menu items

  const profileMenuItems = [
    {
      label: "My Profile",
    },
    {
      label: user?.displayName,
    },
    {
      label: user?.email,
    },
  ];

  if (loading) {
    return <p>loading...</p>;
  }

  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return user?.email ? (
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom-end"
      >
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              className="border border-gray-900 p-0.5"
              src={"https://i.ibb.co/CHNCZWr/666201.png" || user?.photoUrl}
            />
          </Button>
        </MenuHandler>

        <MenuList className="p-1">
          {profileMenuItems.map(({ label }) => {
            return (
              <>
                <MenuItem
                  key={label}
                  onClick={closeMenu}
                  className={`flex items-center gap-2 rounded`}
                >
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={"inherit"}
                  >
                    {label}
                  </Typography>
                </MenuItem>
              </>
            );
          })}
          <Button
            onClick={handleLogout}
            as="span"
            variant="small"
            className="font-normal"
            color="green"
            fullWidth
          >
            Sign Out
          </Button>
        </MenuList>
      </Menu>
    ) : (
      <Link to="/login">
        <button className="bg-[#dc8c86] duration-200 transition-all hover:scale-90 py-2 min-w-[150px] text-white p-[1px]">
          Login
        </button>
      </Link>
    );
  }

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="teal"
        className="p-1 font-normal"
      >
        <Link
          to="/"
          className=""
        >
          {" "}
          <button
            onClick={() => setOpenNav(false)}
            className="bg-[#dc8c86] py-2 min-w-[150px] text-white p-[1px]"
          >
            Home
          </button>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="teal"
        className="p-1 font-normal"
      >
        <Link
          to="dashboard/todo"
          className=""
        >
          {" "}
          <button
            onClick={() => setOpenNav(false)}
            className="bg-[#dc8c86] min-w-[150px] text-white py-2 p-[1px]"
          >
            Dashboard
          </button>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="teal"
        className="p-1 font-normal"
      >
        <Link
          to="/about"
          className=""
        >
          {" "}
          <button
            onClick={() => setOpenNav(false)}
            className="bg-[#dc8c86] min-w-[150px] text-white py-2 p-[1px]"
          >
            About
          </button>
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className=" max-h-[768px]">
      <Navbar
        color="black"
        className=" border-none z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
      >
        <div className="flex items-center justify-between text-teal-300 ">
          <Typography
            as="h2"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="SvgjsSvg3635"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 499.772 499.772"
                width="50"
                height="40"
              >
                <path
                  d="M492.692 223.646 394.345 52.979a53.123 53.123 0 0 0-46.08-26.667H151.572a53.12 53.12 0 0 0-46.08 26.027L7.145 223.006a53.333 53.333 0 0 0 0 53.333l98.347 170.667a53.332 53.332 0 0 0 46.08 26.453h196.693a53.334 53.334 0 0 0 46.08-25.813l98.347-170.667a53.76 53.76 0 0 0 0-53.333z"
                  fill="rgb(201, 123, 118)"
                ></path>
                <text
                  x="150"
                  y="350"
                  fill="white"
                  className=" text-[300px]"
                >
                  T
                </text>
              </svg>
            </Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block ">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="rgb(201, 123, 118)"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="#C97B76"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    fill="rgb(201, 123, 118)"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="rgb(201, 123, 118)"
                  stroke="#C97B76"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    fill="rgb(201, 123, 118)"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
            <ProfileMenu />
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;
