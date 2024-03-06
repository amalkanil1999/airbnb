import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
  const user_data = localStorage.getItem("user_data")
  return (
    user_data ? <Outlet />  :   <Navigate to="/login" />
  )
}

export default PrivateRoutes;
