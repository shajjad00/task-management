import { FiPlus } from "react-icons/fi";
import { useForm } from "react-hook-form";

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
import axios from "axios";
import toast from "react-hot-toast";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const onSubmit = (data) => {
    if (data.description.length < 3) {
      toast.error("Please Write Proper Description");
      return;
    }
    const taskData = { ...data, type: "todo" };
    axios.post("http://localhost:5000/task", taskData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("task added successful");
        reset();
      }
    });
  };

  return (
    <>
      <Accordion
        className=""
        open={open === 1}
        animate={CUSTOM_ANIMATION}
      >
        <AccordionHeader
          className=" w-fit no-underline mx-auto"
          onClick={() => handleOpen(1)}
        >
          <FiPlus className="mr-2 transition-all duration-300 ease-in-out hover:rounded-full hover:text-white hover:bg-red-400" />
          Add Task
        </AccordionHeader>
        <AccordionBody>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" border-2 p-2 h-full rounded-md border-gray-300 max-w-2xl mx-auto"
          >
            <div>
              <input
                className=" block w-[90%] px-2 py-3 focus:outline-none placeholder:text-lg placeholder:font-bold placeholder:text-gray-700 font-semibold text-gray-900 text-lg"
                type="text"
                name="title"
                placeholder="Task Name"
                {...register("title", { required: true })}
              />
              {errors.title && <span>Title is required</span>}
            </div>
            <div>
              {" "}
              <textarea
                name="description"
                type="text"
                className=" w-full outline-none p-2 border-none focus:outline-none"
                placeholder="Description"
                {...register("description", { required: true })}
              />
              {errors.description && <span>Description is required</span>}
            </div>
            <div className=" flex flex-col md:flex-row gap-5">
              <div>
                <input
                  type="date"
                  {...register("date", { required: true })}
                  className="w-40 border-gray-500 py-[5px] border-2 rounded-md px-3 placeholder:text-gray-700 text-gray-500 placeholder:text-lg"
                />
                {errors.date && <span>Date is required</span>}
              </div>
              <div>
                <select
                  className="border-gray-500 py-2 w-40 border-2 rounded-md px-3 md:ml-5"
                  defaultValue={"priority"}
                  {...register("priority", { required: true })}
                >
                  <option disabled>Priority</option>
                  <option value="Low">Low</option>
                  <option value="moderate">moderate</option>
                  <option value=" high"> high</option>
                </select>
                {errors.priority && (
                  <span className=" block">Priority is required</span>
                )}
              </div>
              <div>
                <button
                  onClick={() => handleOpen(0)}
                  className=" bg-red-300 text-white md:ml-6 px-12 py-2 font-medium rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
            <input
              type="submit"
              value="Add Task"
              className="ml-auto cursor-pointer bg-gray-400 text-gray-900 block mt-5 px-12 py-2 font-medium rounded-md"
            />
          </form>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default AddTask;
