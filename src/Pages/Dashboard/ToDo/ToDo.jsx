import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../../../helpers/StrictModeDroppable";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

const ToDo = () => {
  const { data, refetch } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const data = await axios.get("http://localhost:5000/task");
      return data.data;
    },
  });

  const [task, updateTask] = useState(data || []);
  const [ongoingTask, setOngoingTask] = useState([]);
  const [todoTask, setTodoTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  useEffect(() => {
    updateTask(data);
  }, [data]);

  useEffect(() => {
    const todoTask = task?.filter((item) => item.type === "todo");
    setTodoTask(todoTask);
    const onGoingTask = task?.filter((item) => item.type === "ongoing");
    setOngoingTask(onGoingTask);
    const completedTask = task?.filter((item) => item.type === "completed");
    setCompletedTask(completedTask);
  }, [task]);

  const handleDeleteTask = (id) => {
    axios.delete(`http://localhost:5000/task/${id}`).then((res) => {
      console.log(res.data);
      if (res.data?.deletedCount > 0) {
        toast.success("Task deleted successfully");
        refetch();
      }
    });
  };

  const handleOnDragEnd = (result) => {
    const { destination, source, type } = result;
    console.log(result);
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "activeTask") {
      const reOrderedTask = [...task];
      const sourceIndex = source.index;

      const destinationIndex = destination.index;

      const [removedTask] = reOrderedTask.splice(sourceIndex, 1);
      reOrderedTask.splice(destinationIndex, 0, removedTask);
      return updateTask(reOrderedTask);
    }
  };
  const handleStatusChange = (status, id) => {
    console.log(status, id);
    axios
      .patch(`http://localhost:5000/status/${id}`, { status: status })
      .then((res) => {
        console.log(res.data);
        if (res.data?.modifiedCount > 0) {
          toast.success("Task status update successfully");
          refetch();
        }
      });
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="container grid gap-5 mt-4 grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3">
        <Droppable droppableId="activeTask">
          {(provided) => (
            <section
              className="  p-2"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <h2 className=" text-lg rounded-md bg-gray-500 py-2 pl-2 text-center font-medium text-white">
                Todo Tasks
              </h2>
              {todoTask?.map((item, idx) => {
                const { _id, title, description, date } = item;
                console.log(item);
                return (
                  <Draggable
                    key={_id}
                    draggableId={_id.toString()}
                    index={idx}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className=" max-w-lg rounded-md mx-auto mt-2 p-2 bg-gray-200 text-gray-700"
                      >
                        <h2 className="text-gray-800 text-lg font-semibold">
                          Title : {title}
                        </h2>
                        <p className=" text-gray-600 text-sm capitalize">
                          <span className=" underline font-bold">
                            description
                          </span>{" "}
                          : {description}
                        </p>
                        <div className=" flex justify-between items-center">
                          <p className=" text-gray-500">
                            <span className=" underline font-bold">Date</span> :{" "}
                            {date}
                          </p>
                          <div className=" flex gap-2 items-center">
                            <Link to={`/dashboard/update/${_id}`}>
                              <CiEdit className="text-2xl cursor-pointer hover:bg-gray-500" />
                            </Link>
                            <div>
                              <MdDelete
                                onClick={() => handleDeleteTask(_id)}
                                className="text-xl cursor-pointer hover:bg-gray-500"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 flex flex-col justify-center items-center gap-2">
                          <button
                            onClick={() => handleStatusChange("completed", _id)}
                            className=" btn hover:bg-gray-500 btn-xs bg-red-200 text-gray-200"
                          >
                            Mark as Completed
                          </button>
                          <button
                            onClick={() => handleStatusChange("ongoing", _id)}
                            className=" btn hover:bg-red-200 btn-xs bg-gray-600 text-gray-200"
                          >
                            {" "}
                            mark as ongoing
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </section>
          )}
        </Droppable>
        <Droppable
          droppableId="completedTask"
          type="completed"
        >
          {(provided) => (
            <section
              className=" p-2"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <h2 className=" text-lg rounded-md text-white bg-deep-purple-400 py-2 pl-2 text-center font-medium">
                On Going Tasks
              </h2>
              {ongoingTask?.map((item, idx) => {
                const { _id, title, description, date } = item;
                return (
                  <Draggable
                    key={_id}
                    draggableId={_id.toString()}
                    index={idx}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className=" max-w-lg rounded-md mx-auto mt-2 p-2 bg-gray-200 text-gray-700"
                      >
                        <h2 className="text-gray-800 text-lg font-semibold">
                          Title : {title}
                        </h2>
                        <p className=" text-gray-600 text-sm capitalize">
                          <span className=" underline font-bold">
                            description
                          </span>{" "}
                          : {description}
                        </p>
                        <div className=" flex justify-between items-center">
                          <p className=" text-gray-500">
                            <span className=" underline font-bold">Date</span> :{" "}
                            {date}
                          </p>
                          <div className=" flex gap-2 items-center">
                            <Link to={`/dashboard/update/${_id}`}>
                              <CiEdit className="text-2xl cursor-pointer hover:bg-gray-500" />
                            </Link>
                            <div>
                              <MdDelete
                                onClick={() => handleDeleteTask(_id)}
                                className="text-xl cursor-pointer hover:bg-gray-500"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 flex flex-col justify-center items-center gap-2">
                          <button
                            onClick={() => handleStatusChange("completed", _id)}
                            className=" btn hover:bg-gray-500 btn-xs bg-red-200 text-gray-200"
                          >
                            Mark as Completed
                          </button>
                          <button
                            onClick={() => handleStatusChange("ongoing", _id)}
                            className=" btn hover:bg-red-200 btn-xs bg-gray-600 text-gray-200"
                          >
                            {" "}
                            mark as ongoing
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </section>
          )}
        </Droppable>
        <Droppable
          droppableId="completedTask"
          type="completed"
        >
          {(provided) => (
            <section
              className=" p-2"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <h2 className=" text-lg rounded-md text-white bg-green-400 py-2 pl-2 text-center font-medium">
                Completed Tasks
              </h2>
              {completedTask?.map((item, idx) => {
                const { _id, title, description, date } = item;
                return (
                  <Draggable
                    key={_id}
                    draggableId={_id.toString()}
                    index={idx}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className=" max-w-lg rounded-md mx-auto mt-2 p-2 bg-gray-200 text-gray-700"
                      >
                        <h2 className="text-gray-800 text-lg font-semibold">
                          Title : {title}
                        </h2>
                        <p className=" text-gray-600 text-sm capitalize">
                          <span className=" underline font-bold">
                            description
                          </span>{" "}
                          : {description}
                        </p>
                        <div className=" flex justify-between items-center">
                          <p className=" text-gray-500">
                            <span className=" underline font-bold">Date</span> :{" "}
                            {date}
                          </p>
                          <div className=" flex gap-2 items-center">
                            <Link to={`/dashboard/update/${_id}`}>
                              <CiEdit className="text-2xl cursor-pointer hover:bg-gray-500" />
                            </Link>
                            <div>
                              <MdDelete
                                onClick={() => handleDeleteTask(_id)}
                                className="text-xl cursor-pointer hover:bg-gray-500"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 flex flex-col justify-center items-center gap-2">
                          <button
                            onClick={() => handleStatusChange("completed", _id)}
                            className=" btn hover:bg-gray-500 btn-xs bg-red-200 text-gray-200"
                          >
                            Mark as Completed
                          </button>
                          <button
                            onClick={() => handleStatusChange("ongoing", _id)}
                            className=" btn hover:bg-red-200 btn-xs bg-gray-600 text-gray-200"
                          >
                            {" "}
                            mark as ongoing
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </section>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default ToDo;
