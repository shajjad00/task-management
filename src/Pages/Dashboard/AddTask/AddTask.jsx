import { FiPlus } from "react-icons/fi";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

const AddTask = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <Accordion
        className=""
        open={open === 1}
        animate={CUSTOM_ANIMATION}
      >
        <AccordionHeader
          className=" w-fit no-underline"
          onClick={() => handleOpen(1)}
        >
          <FiPlus className="mr-2 transition-all duration-300 ease-in-out hover:rounded-full hover:text-white hover:bg-red-400" />
          Add Task
        </AccordionHeader>
        <AccordionBody>
          <form className=" border-2 p-2 h-full rounded-md border-gray-300 max-w-2xl mx-auto">
            <input
              className=" block w-[90%] px-2 py-3 focus:outline-none placeholder:text-lg placeholder:font-bold placeholder:text-gray-700 font-semibold text-gray-900 text-lg"
              type="text"
              name="title"
              placeholder="Task Name"
            />
            <textarea
              name="Description"
              type="text"
              className=" w-full outline-none p-2 border-none focus:outline-none"
              placeholder="description"
            />
            <input
              type="date"
              className="w-40 border-gray-500 py-[5px] border-2 rounded-md px-3 placeholder:text-gray-700 text-gray-500 placeholder:text-lg"
            />
            <select
              className="border-gray-500 py-2 w-40 border-2 rounded-md px-3 ml-5"
              defaultValue="priority"
            >
              <option selected>Priority</option>
              <option value="Low">Low</option>
              <option value="moderate">moderate</option>
              <option value=" high"> high</option>
            </select>
            <button
              onClick={() => handleOpen(0)}
              className=" bg-red-300 text-white ml-6 px-12 py-2 font-medium rounded-md"
            >
              Cancel
            </button>
            <input
              type="submit"
              value="Add Task"
              className="ml-auto bg-gray-400 text-gray-900 block mt-5 px-12 py-2 font-medium rounded-md"
            />
          </form>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default AddTask;