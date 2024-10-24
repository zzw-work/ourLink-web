import React from "react";
import { Navigate } from "react-router-dom";

import { getToken } from "../utils/token";

export default function RouterAuth({ children }) {
  const cookieValue = getToken();
  if (cookieValue && cookieValue?.split("=")[1] === "true") {
    return <>{children} </>;
  } else {
    return <Navigate to={"/Login"}></Navigate>;
  }
}
