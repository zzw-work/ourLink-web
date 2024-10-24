import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Workbenches from "../pages/Workbenches";
import Message from "../pages/Message";
import Login from "../pages/Login";
import Layout from "../Layout";
import RouterAuth from "./RouterAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterAuth children={<Layout></Layout>}></RouterAuth>,
    children: [
      {
        path: "/Workbenches",
        element: <Workbenches></Workbenches>,
      },
      {
        path: "/Message",
        element: <Message></Message>,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login></Login>,
  },
]);

export default router;
