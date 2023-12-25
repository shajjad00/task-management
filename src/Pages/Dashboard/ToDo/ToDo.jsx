import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../../../helpers/StrictModeDroppable";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ToDo = () => {
  const { data } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const data = await axios.get("http://localhost:5000/task");
      return data.data;
    },
  });
  const [task, updateTask] = useState(data || []);
  const [ongoingTask, setOngoingTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  useEffect(() => {
    updateTask(data);
  }, [data]);

  useEffect(() => {
    const onGoingTask = task?.filter((item) => item.type === "ongoing");
    setOngoingTask(onGoingTask);
    const completedTask = task?.filter((item) => item.type === "completed");
    setCompletedTask(completedTask);
  }, [task]);

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
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="container grid gap-5 mt-4 grid-cols-2">
        <Droppable droppableId="activeTask">
          {(provided) => (
            <section
              className=" bg-orange-500 p-2"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <h2>Active Tasks</h2>
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
                        className=" max-w-lg mx-auto mt-2 p-2 bg-blue-gray-200 text-gray-700"
                      >
                        <h2 className="text-gray-600 text-lg font-semibold">
                          {title}
                        </h2>
                        <p className=" text-gray-900 capitalize">
                          {description}
                        </p>
                        <div className=" flex justify-between items-center">
                          <p className=" text-deep-purple-400">{date}</p>
                          <Link to={`/dashboard/update/${_id}`}>
                            <CiEdit className="text-2xl cursor-pointer hover:bg-gray-300" />
                          </Link>
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
              className=" bg-light-green-500 p-2"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <h2>Completed Task</h2>
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
                        className=" max-w-lg mx-auto mt-2 p-2 bg-blue-gray-200 text-gray-700"
                      >
                        <h2 className="text-gray-600 text-lg font-semibold">
                          {title}
                        </h2>
                        <p className=" text-gray-900 capitalize">
                          {description}
                        </p>
                        <div className=" flex justify-between items-center">
                          <p className=" text-deep-purple-400">{date}</p>
                          <Link to={`/dashboard/update/${_id}`}>
                            <CiEdit className="text-2xl cursor-pointer hover:bg-gray-300" />
                          </Link>
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
