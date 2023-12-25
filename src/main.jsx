import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Route/Route.jsx";
import Provider from "./Provider/Provider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const queryClient = new QueryClient();
// import PropTypes from 'prop-types';
// import { FaBeer } from 'react-icons/fa';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <RouterProvider router={Route}></RouterProvider>
        </Provider>
      </QueryClientProvider>
    </DndProvider>
  </React.StrictMode>
);
