import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateTask = () => {
  const { id } = useParams();
  const { data: singleTask, isLoading } = useQuery({
    queryKey: ["singleTask"],
    queryFn: async () => {
      const data = await axios.get(`http://localhost:5000/task/${id}`);
      return data.data;
    },
  });

  const onSubmit = (data) => {
    axios.patch(`http://localhost:5000/task/${id}`, data).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        toast.success("update successful");
      }
    });
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: singleTask?.title,
      description: singleTask?.description,
      date: singleTask?.date,
    },
  });

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <h2 className=" text-center text-4xl my-5 pb-4 border-b-2 max-w-sm mx-auto border-b-gray-500">
        Update Task
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" border-2 p-2 h-full rounded-md border-gray-300 max-w-2xl mx-auto"
      >
        <div>
          <input
            defaultValue={singleTask?.title}
            className=" block w-[90%] px-2 py-3 focus:outline-none placeholder:text-lg placeholder:font-bold placeholder:text-gray-700 font-semibold text-gray-900 text-lg"
            type="text"
            name="title"
            placeholder="Task Name"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className=" text-red-600">title is required</span>
          )}
        </div>
        <div>
          {" "}
          <textarea
            name="description"
            type="text"
            defaultValue={singleTask?.description}
            className=" w-full outline-none p-2 border-none focus:outline-none"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className=" text-red-700">Description is required</span>
          )}
        </div>
        <div className=" flex gap-5">
          <div>
            <input
              type="date"
              defaultValue={singleTask?.date}
              {...register("date", { required: true })}
              className="w-40 border-gray-500 py-[5px] border-2 rounded-md px-3 placeholder:text-gray-700 text-gray-500 placeholder:text-lg"
            />
            {errors.date && (
              <span className=" text-red-700">date is required</span>
            )}
          </div>
          <div>
            <select
              className="border-gray-500 py-2 w-40 border-2 rounded-md px-3 ml-5"
              defaultValue={singleTask?.priority}
              {...register("priority", { required: true })}
            >
              <option disabled>Priority</option>
              <option value="Low">Low</option>
              <option value="moderate">moderate</option>
              <option value=" high"> high</option>
            </select>
            {errors.priority && (
              <span className=" block text-red-700">Priority is required</span>
            )}
          </div>
        </div>
        <input
          type="submit"
          value="Update"
          className="ml-auto cursor-pointer bg-gray-400 text-gray-900 block mt-5 px-12 py-2 font-medium rounded-md"
        />
      </form>
    </div>
  );
};

export default UpdateTask;
