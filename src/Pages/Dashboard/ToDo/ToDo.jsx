import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CiEdit } from "react-icons/ci";

const ToDo = () => {
  const { data: task } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const data = await axios.get("http://localhost:5000/task");
      return data.data;
    },
  });
  return (
    <div className="">
      {task.map((item) => {
        const { _id, title, description, date } = item;
        return (
          <div
            className=" mt-4 max-w-lg mx-auto"
            key={_id}
          >
            <h2 className="text-gray-600 text-lg font-semibold">{title}</h2>
            <p className=" text-gray-400 capitalize">{description}</p>
            <div className=" flex justify-between items-center">
              <p className=" text-deep-purple-400">{date}</p>
              <CiEdit className="text-2xl cursor-pointer hover:bg-gray-300" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToDo;
