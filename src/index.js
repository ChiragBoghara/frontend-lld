import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Accordian from "./pages/accordian/accordian";
import NestedComments from "./pages/nested-comments/NestedComments";
import { ImageSlider } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accordian />,
      },
      {
        path: "/nested-comments",
        element: <NestedComments />,
      },
      {
        path:"/image-slider",
        element: <ImageSlider/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
