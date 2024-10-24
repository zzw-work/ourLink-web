import React from "react";
import { useNavigate } from "react-router";
import { setToken } from "../../utils/token";

const Login = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/Workbenches");
    setToken(1);
  };
  return (
    <div
      onClick={() => {
        onLogin();
      }}
    >
      登陆
    </div>
  );
};

export default Login;
