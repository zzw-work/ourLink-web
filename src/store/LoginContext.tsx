import React, { createContext, useReducer } from "react";

// 定义一个新的 Context 对象
export const LoginContext = createContext();

// 创建一个 Provider 组件
export const LoginProvider = ({ children }) => {
  const [isLogin, dispatch] = useReducer(themeReducer, initialState);

  return (
    <LoginContext.Provider value={{ isLogin, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

// 定义一个 Reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case "success":
      return true;
    case "failed":
      return false;
    default:
      throw new Error();
  }
};

const initialState = false;
