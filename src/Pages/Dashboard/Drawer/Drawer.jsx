import { Drawer } from "@material-tailwind/react";
import { FiMenu } from "react-icons/fi";

const MyDrawer = ({ elements, openDrawer, closeDrawer, open }) => {
  return (
    <>
      <div
        className="text-xl cursor-pointer text-white ml-6"
        onClick={openDrawer}
      >
        <FiMenu />
      </div>
      <Drawer
        open={open}
        onClose={closeDrawer}
      >
        <div className="flex justify-center gap-5 mt-2 flex-col items-center">
          {elements}
        </div>
      </Drawer>
    </>
  );
};

export default MyDrawer;
