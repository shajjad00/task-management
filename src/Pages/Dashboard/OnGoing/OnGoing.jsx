import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialColumns = {
  column1: {
    id: "column1",
    items: ["Item 1", "Item 2", "Item 3"],
  },
  column2: {
    id: "column2",
    items: ["Item 4", "Item 5", "Item 6"],
  },
};

const OnGoing = () => {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const column = columns[source.droppableId];
    const newItems = Array.from(column.items);
    newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      items: newItems,
    };

    setColumns((prevColumns) => ({
      ...prevColumns,
      [newColumn.id]: newColumn,
    }));
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {Object.values(columns).map((column) => (
          <div
            key={column.id}
            style={{ margin: 8 }}
          >
            <h3>{column.id}</h3>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    background: "lightgrey",
                    padding: 8,
                    width: 250,
                    minHeight: 400,
                  }}
                >
                  {column.items.map((item, index) => (
                    <Draggable
                      key={item}
                      draggableId={item}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            userSelect: "none",
                            padding: 16,
                            margin: "0 0 8px 0",
                            backgroundColor: "white",
                            ...provided.draggableProps.style,
                          }}
                        >
                          {item}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default OnGoing;
