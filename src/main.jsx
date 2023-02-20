import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "../src/routes/routes";
import { RouterProvider } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
