import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!); // 如果你使用 TypeScript，请使用 createRoot(container!)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
