import React from "react";
import Login from "./Components/Login";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Login />
      <Outlet />
    </>
  );
}

export default App;
