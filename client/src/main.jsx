import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";

const router = createBrowserRouter([
  {
    Path: "/",
    element: <App />,
    Children: [
      {

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
